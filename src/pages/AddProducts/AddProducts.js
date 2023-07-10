import React, { Fragment } from "react"
import {
  Container,
  Card,
  CardBody,
  Form,
  Row, // price + tax amount = net price
  Col,
  Button,
  Modal,
} from "reactstrap"
import { Field, FieldArray, FormikProvider, useFormik } from "formik"
import { useState, useRef } from "react"
import * as Yup from "yup"
import CustomSelect from "Custom/CustomSelect"
import CustomInput from "Custom/CustomInput"
import { number } from "prop-types"
import "react-image-crop/dist/ReactCrop.css"
import Cropper from "react-easy-crop"

//validations

const validationSchema = Yup.object().shape({
  Category: Yup.string().required("Category is required "),
  SubCategory: Yup.string().required("Sub Category is required "),
  ProductName: Yup.string().required("Product Name is required "),
  Producttype: Yup.string().required("Product type is required "),
  Foodtype: Yup.string().required("Food type is required "),

  //field array validations

  detailsOfPackage: Yup.array().of(
    Yup.object().shape({
      Unit: Yup.string().required("Unit is required "), // these constraints take precedence
      PackagingSize: Yup.string().required("Packaging Size is required "), // these constraints take precedence
      Price: Yup.string()
        .required("Price is required")
        .matches(/^\d+$/, "Price must be a numeric value"),
    })
  ),
})

//field dropdown options

const UnitOption = [
  { label: "KG", value: "1" },
  { label: "GM", value: "2" },
  { label: "LTR", value: "3" },
  { label: "BOX", value: "4" },
  { label: "PCS", value: "5" },
  { label: "ML", value: "6" },
  { label: "KG", value: "7" },
]

const CategoryOption = [
  { label: "Beverages", value: "1", id: 1 },
  { label: "Warm Food", value: "2", id: 2 },
]

let SubCategoryOption = []

const SubCategoryOptionList = [
  { label: "ravi", value: "1", perId: 1 },
  { label: "shreeji", value: "2", perId: 2 },
  { label: "kuldeep", value: "2", perId: 1 },
  { label: "kuldweterteeep", value: "2", perId: 1 },
]
const TaxOption = [
  { label: "Tax(7.00%)", value: "1", TaxPer: "7" },
  { label: "Tax(19.00%)", value: "2", TaxPer: "19" },
  { label: "Tax(5.00%)", value: "3", TaxPer: "5" },
]

const defaultSrc =
  "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg"

export default function AddProducts() {
  // radio button food type
  const [isTrueValue, setIsTrueValue] = useState({
    off: false,
    on: false,
  })
  const [peptimeInput, setpeptimeInput] = useState("")

  //image set in label

  // const [file, setFile] = useState()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [image, setImage] = useState()
  const [crop, setCrop] = useState({ x: 0, y: 0, width: 1, height: 1 })
  const [zoom, setZoom] = useState(1)
  const [cropimg, setCropImg] = useState("")
  const cropperRef = useRef(null)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)

  const onChange = e => {
    e.preventDefault()
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onload = () => {
      setImage(reader.result)
      setModalIsOpen(true)
    }
    reader.readAsDataURL(file)
  }

  const initdetailsOfPackage = {
    Unit: "",
    PackagingSize: "",
    Price: number,
    TaxAmount: number,
    NetPrice: number,
  }

  const formik = useFormik({
    validationSchema: validationSchema,
    onSubmit: values => handleValidSubmit(values),
    initialValues: {
      Category: "",
      SubCategory: "",
      ProductName: "",
      Producttype: "",

      Readytosell: "",
      preptimeinput: "",
      tax: "",
      detailsOfPackage: [initdetailsOfPackage],
      UploadProductImage: "",
      ProductDescription: "",
      ProductIngredients: "",
    },
    validateOnBlur: false,
  })

  const {
    setFieldValue,
    values: { detailsOfPackage },
  } = formik

  const handleRadioChange = (event, str) => {
    // debugger
    if (str == "on") {
      setIsTrueValue({
        ["on"]: true,
        ["off"]: false,
      })
    } else {
      setIsTrueValue({
        ["on"]: false,
        ["off"]: true,
      })
      setFieldValue("preptimeinput", "")
    }
    // setIsTrueValue(event.target.value === "true")
    // setpeptimeInput("")
  }

  //validation pakaging details must be number only

  const handleNumericInput = e => {
    const input = e.target.value
    const regex = /^\d*$/
    if (!regex.test(input)) {
      e.target.value = input.replace(/[^0-9]/g, "")
    }
  }

  // texper find

  const findTaxper = value => {
    return (
      TaxOption.find(item => {
        return item.value === value
      })?.TaxPer || 0
    )
  }

  // index set pakagingSize

  const handlePackagingSizeChange = (e, index) => {
    setFieldValue(`detailsOfPackage.[${index}].PackagingSize`, e)
  }

  // set price

  const handleprice = (e, index) => {
    setFieldValue(`detailsOfPackage.[${index}].Price`, e)
    let taxper = findTaxper(formik.values.tax)
    if (Number(e > 0)) {
      handleAmountandNetprice(e, taxper, index)
    } else {
      setFieldValue(`detailsOfPackage[${index}].NetPrice`, 0)
      setFieldValue(`detailsOfPackage[${index}].TaxAmount`, 0)
    }
  }

  // set tax amount

  const handleTaxamount = taxValue => {
    let taxper = findTaxper(taxValue)

    let taxAmount = formik.values.detailsOfPackage

    for (let index = 0; index < taxAmount.length; index++) {
      const element = taxAmount[index]
      if (Number(element.Price) > 0) {
        handleAmountandNetprice(element.Price, taxper, index)
      }
    }
  }

  // tax per set

  const handleTax = e => {
    const selectedValue = e ? e.value : null
    setFieldValue("tax", selectedValue)
    handleTaxamount(selectedValue)
  }

  //tax amount and net price Addition

  const handleAmountandNetprice = (price, taxper, index) => {
    let TaxAmount = (taxper * price) / 100
    let net_price = netprice(price, TaxAmount)
    setFieldValue(`detailsOfPackage.[${index}].TaxAmount`, TaxAmount)
    setFieldValue(`detailsOfPackage[${index}].NetPrice`, net_price)
  }

  //set net price

  const netprice = (price, amount) => {
    return Number(price) + Number(amount)
  }

  //  corp  imnage  function
  const getCroppedImg = (imageSrc, croppedAreaPixels) => {
    return new Promise((resolve, reject) => {
      const image = new Image()
      image.src = imageSrc
      image.onload = () => {
        const canvas = document.createElement("canvas")
        const ctx = canvas.getContext("2d")

        canvas.width = croppedAreaPixels.width
        canvas.height = croppedAreaPixels.height

        ctx.drawImage(
          image,
          croppedAreaPixels.x,
          croppedAreaPixels.y,
          croppedAreaPixels.width,
          croppedAreaPixels.height,
          0,
          0,
          croppedAreaPixels.width,
          croppedAreaPixels.height
        )

        resolve(canvas.toDataURL())
      }

      image.onerror = error => {
        reject(error)
      }
    })
  }

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
    console.log("shreeji", croppedArea, croppedAreaPixels)
  }

  const handleCrop = async () => {
    if (!croppedAreaPixels) return

    try {
      //try = true , catch = false
      const croppedImage = await getCroppedImg(image, croppedAreaPixels)
      // Use the croppedImage URL as needed, e.g., upload or display it
      console.log(croppedImage)
      setCropImg(croppedImage)
      setModalIsOpen(false)
    } catch (e) {
      console.error("Error creating cropped image: ", e)
    }
  }

  const handleZoomIn = () => {
    setZoom(prevZoom => prevZoom + 0.1)
  }

  const handleZoomOut = () => {
    setZoom(prevZoom => prevZoom - 0.1)
  }

  const handleCategory = e => {
    console.log(e)
    SubCategoryOption = []
    if (e) {
      SubCategoryOption = SubCategoryOptionList.filter(item => {
        return item.perId == e.id
      })
      setFieldValue("Category", e.value)
    } else {
      setFieldValue("Category", null)
    }
  }
  return (
    <div className="page-content">
      <Container fluid>
        <div className="mb-3 mt-3">
          <h4 style={{ color: "black" }}>Add Product</h4>
          <p>Dashboard &gt; Product List &gt; Add Product</p>
        </div>

        <FormikProvider value={formik}>
          <Form onSubmit={formik.handleSubmit}>
            <div>
              <Card style={{ borderRadius: 20 }}>
                <CardBody>
                  <Row>
                    <Col lg={12}>
                      <h5 style={{ color: "black" }}>
                        <u>Product Details</u>
                      </h5>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col lg={4}>
                      <div className="Productdetailsitem mb-2">
                        Category <span className="text-danger"> *</span>
                      </div>
                      <Field
                        // as="select"
                        name="Category"
                        options={CategoryOption}
                        placeholder={"Select Category"}
                        component={CustomSelect}
                        onChange={handleCategory}

                        /* <option value="">Select Category</option>
                        <option value="Beverages ">Beverages</option>
                        <option value="Warm Food">Warm Food</option> */
                      />
                      {/* <ErrorMessage
                        name="Category"
                        component="div"
                        className="text-danger"
                      /> */}
                    </Col>
                    <Col lg={4}>
                      <div className="Productdetailsitem mb-2">
                        Sub Category <span className="text-danger"> *</span>
                      </div>
                      <Field
                        name="SubCategory"
                        placeholder={"Select Sub Select Category"}
                        options={SubCategoryOption}
                        component={CustomSelect}
                      >
                        {/* <option>Select Sub Select Category</option>
                        <option disabled value>
                          No option
                        </option> */}
                      </Field>
                      {/* <ErrorMessage
                        name="SubCategory"
                        component="div"
                        className="text-danger"
                      /> */}
                    </Col>
                    <Col lg={4}>
                      <div className="Productdetailsitem mb-2">
                        Enter Product Name{" "}
                        <span className="text-danger"> *</span>
                      </div>
                      <Field
                        name="ProductName"
                        component={CustomInput}
                        maxLength={50}
                        placeholder={"Product Name"}
                      />
                      {/* <ErrorMessage
                        name="ProductName"
                        component="div"
                        className="text-danger"
                      /> */}
                    </Col>
                  </Row>
                  {/* <Row>
                    <Col>
                      <div className="Productdetailsitem mt-4 mb-2">
                        Product Description
                      </div>
                      <textarea
                        name="ProductDescription"
                        className="ProductDesc form-control"
                        rows="2"
                        cols="50"
                        placeholder="Enter Product Description"
                      ></textarea>
                    </Col>
                  </Row> */}
                  <Row className="mt-5">
                    <Col lg={4}>
                      <div className="Productdetailsitem mb-2 ">
                        Product Type <span className="text-danger"> *</span>
                      </div>

                      <div className="form-control pb-0 mt-3">
                        <div className="form-check form-check-inline">
                          <Field
                            className="form-check-input"
                            type="radio"
                            name="Producttype" //must name is same but id , value are different
                            id="Veg"
                            value="Veg"
                          />

                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio1"
                          >
                            Veg
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <Field
                            className="form-check-input"
                            type="radio"
                            name="Producttype"
                            id="Nonveg"
                            value="Nonveg"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio2"
                          >
                            Nonveg
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <Field
                            className="form-check-input"
                            type="radio"
                            name="Producttype"
                            id="Vegan"
                            value="Vegan"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inlineRadio3"
                          >
                            Vegan
                          </label>
                        </div>
                      </div>
                      {/* <ErrorMessage
                        name="Producttype"
                        component="div"
                        className="text-danger"
                      /> */}
                    </Col>
                    <Col lg={4}>
                      <div>
                        <div className="Productdetailsitem mb-1">
                          Food Type <span className="text-danger"> *</span>
                        </div>
                        <div className="form-check form-check-inline mt-4">
                          <Field
                            className="form-check-input"
                            type="radio"
                            checked={isTrueValue.off}
                            onChange={e => {
                              handleRadioChange(e, "off")
                            }}
                            name="Foodtype"
                            id="Readytosell"
                          />

                          <label
                            className="form-check-label "
                            htmlFor="inlineRadio1"
                          >
                            Ready to Sell
                          </label>
                        </div>
                        <div class="form-check form-check-inline">
                          <Field
                            className="form-check-input mt-2"
                            type="radio"
                            checked={isTrueValue.on}
                            onChange={e => {
                              handleRadioChange(e, "on")
                            }}
                            id="preptime"
                            // value={formik.values.ispreptime}
                            // component={RadioButton}
                            // onChange={() => {
                            //   setFieldValue("ispreptime", true)
                            // }}
                          />

                          <Field
                            className="form-check-input"
                            name="preptimeinput"
                            disable={!isTrueValue.on}
                            component={CustomInput}
                            placeholder="prep.time"
                            // component={CustomInput}
                            // dis={!formik.values.ispreptime}
                            onChange={e => {
                              setFieldValue("preptimeinput", e.target.value)
                            }}
                          />
                        </div>

                        {/* <ErrorMessage
                        name="Foodtype"
                        component="div"
                        className="text-danger"
                      /> */}
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="Productdetailsitem mb-1 mt-2">Tax</div>
                      <Field
                        as="select"
                        name="tax"
                        options={TaxOption}
                        component={CustomSelect}
                        onChange={handleTax}
                        placeholder={"Select Tax"}
                      />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>

            <Card style={{ borderRadius: 20 }}>
              <CardBody>
                <FieldArray
                  name="detailsOfPackage"
                  render={item => {
                    return (
                      <Fragment>
                        <div>
                          <h5 style={{ color: "black" }}>
                            <u>Package Details</u>
                          </h5>
                        </div>
                        {detailsOfPackage?.map((Productdetails, index) => (
                          <div key={index}>
                            <Row className="mt-4">
                              <Col lg={2}>
                                <div className="Packagedetailsitem mb-2">
                                  Unit
                                  <span className="text-danger"> *</span>
                                </div>
                                <Field
                                  name={`detailsOfPackage.[${index}].Unit`}
                                  options={UnitOption}
                                  placeholder="Select Unit"
                                  component={CustomSelect}
                                />
                              </Col>
                              <Col lg={2}>
                                <div className="Packagedetailsitem mb-2">
                                  Packaging Size
                                  <span className="text-danger"> *</span>
                                </div>
                                <Field
                                  type="text"
                                  name={`detailsOfPackage.[${index}].PackagingSize`}
                                  onChange={e =>
                                    handlePackagingSizeChange(
                                      e.target.value,
                                      index
                                    )
                                  }
                                  className="form-control"
                                  component={CustomInput}
                                  onInput={handleNumericInput}
                                  inputMode="numeric"
                                  placeholder="Enter Packaging Size"
                                />
                                {/* <ErrorMessage
                                  name="PackagingSize"
                                  component="div"
                                  className="text-danger"
                                /> */}
                              </Col>
                              <Col lg={2}>
                                <div className="Packagedetailsitem mb-2">
                                  Price
                                  <span className="text-danger"> *</span>
                                </div>
                                <Field
                                  name={`detailsOfPackage.[${index}].Price`}
                                  className="form-control"
                                  component={CustomInput}
                                  onChange={e =>
                                    handleprice(e.target.value, index)
                                  }
                                  placeholder="Enter Price"
                                />
                                {/* <ErrorMessage
                                  name="Price"
                                  component="div"
                                  className="text-danger"
                                /> */}
                              </Col>
                              <Col lg={2}>
                                <div className="Packagedetailsitem mb-2">
                                  Tax Ammount
                                </div>
                                <Field
                                  type="text"
                                  // value={taxammount}
                                  name={`detailsOfPackage.[${index}].TaxAmount`}
                                  className="form-control"
                                  component={CustomInput}
                                  onChange={e =>
                                    handleTaxamount(e.target.value, index)
                                  }
                                  // onChange={handleTaxamountChange}
                                  placeholder="0"
                                  style={{
                                    backgroundColor: "rgb(232, 231, 231)",
                                  }}
                                />
                              </Col>
                              <Col lg={2}>
                                <div className="Packagedetailsitem mb-2">
                                  Net Price
                                </div>
                                <Field
                                  type="text"
                                  // onChange={setNetPrice(
                                  //   parseFloat(Price) + parseFloat(TaxAmount)
                                  // )}
                                  id="netprice"
                                  name={`detailsOfPackage.[${index}].NetPrice`}
                                  className="form-control"
                                  component={CustomInput}
                                  placeholder="0"
                                  style={{
                                    backgroundColor: "rgb(232, 231, 231)",
                                  }}
                                />
                              </Col>
                              {index >= 1 ? (
                                <Col lg={2}>
                                  <Button
                                    className="pakagedetailsdeletebtn btn btn-danger"
                                    data-repeater-delete
                                    value="Delete"
                                    onClick={() => item.remove(index)}
                                  >
                                    <i className="ti-trash"></i> Delete
                                  </Button>
                                </Col>
                              ) : (
                                ""
                              )}
                            </Row>
                          </div>
                        ))}
                        <Row className="mt-4">
                          <Col lg={12} style={{ textAlign: "left" }}>
                            <Button
                              className="btn btn-success"
                              onClick={() => item.push(initdetailsOfPackage)}
                            >
                              <i className="fa fa-plus"></i> &nbsp; Add another
                              Pkg Size
                            </Button>
                          </Col>
                        </Row>
                      </Fragment>
                    )
                  }}
                ></FieldArray>
              </CardBody>
            </Card>

            <Card style={{ borderRadius: 20 }}>
              <CardBody>
                <Row>
                  <Col lg={12}>
                    <div>
                      <h5 style={{ color: "black" }}>
                        <u>Product Image</u>
                      </h5>
                    </div>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col lg={4}>
                    <div className="Productimageitem">
                      Upload Product Image{" "}
                      <span style={{ color: "red", fontSize: "smaller" }}>
                        (510 * 320 px)
                      </span>
                    </div>

                    {cropimg == "" && (
                      <label
                        className="mt-2 productimgfile"
                        style={{ width: "140px" }}
                      >
                        <center>
                          <i
                            className="fa fa-plus mt-4 pt-1"
                            style={{
                              fontSize: "38px",
                              color: "black",
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          ></i>
                        </center>
                        <Field
                          name="UploadProductImage"
                          className="form-control form-control-file"
                          type="file"
                          accept="image/*"
                          action="upload"
                          onChange={onChange}
                          style={{ display: "none" }} //choose file any use style or hidden
                        />
                      </label>
                    )}
                    {cropimg && (
                      <div
                        style={{
                          display: "flex",
                        }}
                      >
                        <div>
                          <img
                            style={{ width: 150, borderRadius: 6 }}
                            src={cropimg}
                            alt="cropped"
                          />
                        </div>
                        <i
                          className="fa fa-window-close ms-1"
                          style={{ fontSize: 20 }}
                          onClick={() => {
                            setCropImg("")
                          }}
                        ></i>
                      </div>
                    )}
                  </Col>

                  <Modal
                    isOpen={modalIsOpen}
                    centered={true}
                    size="lg"
                    style={{ width: 560 }}
                  >
                    <div
                      className="modal-content"
                      style={{ width: 540, marginLeft: 10 }}
                      // style={{
                      //   display: "flex",
                      //   flexDirection: "column",
                      //   alignItems: "center",
                      //   justifyContent: "center",
                      //   width: 84,
                      // }}
                    >
                      <div className="cropper-container" size="sm">
                        <Cropper
                          image={image}
                          crop={crop}
                          zoom={zoom}
                          aspect={4 / 3}
                          onZoomChange={setZoom}
                          onCropChange={setCrop}
                          ref={cropperRef}
                          onCropComplete={onCropComplete}
                        />
                      </div>
                    </div>
                    <Row className=" modalimgbtn mb-2 mt-1">
                      <Col>
                        <button
                          onClick={() => {
                            setModalIsOpen(false)
                          }}
                          className="btn btn-success btn-lg d-grid gap-2 ms-5"
                        >
                          Close
                        </button>
                      </Col>
                      <Col className="">
                        <button
                          className="btn btn-success btn-lg ms-5"
                          onClick={handleZoomIn}
                        >
                          <i className="fa fa-search-plus"></i>
                        </button>
                      </Col>
                      <Col className="">
                        <button
                          className="btn btn-success btn-lg "
                          onClick={handleZoomOut}
                        >
                          <i className="fa fa-search-minus"></i>
                        </button>
                      </Col>
                      <Col>
                        <button
                          className="btn btn-success btn-lg d-flex d-grid me-5"
                          style={{ fontSize: 16 }}
                          onClick={handleCrop}
                        >
                          Crop Image
                        </button>
                      </Col>
                    </Row>
                  </Modal>

                  <Col lg={4}>
                    <div className="Productimageitem mb-2">
                      Product Description
                    </div>
                    <textarea
                      name="ProductDescription"
                      className="form-control"
                      rows="5"
                      cols="50"
                      placeholder="Enter Description"
                    ></textarea>

                    {/* <ErrorMessage
                      name="ProductDescription"
                      component="div"
                      className="text-danger"
                    /> */}
                  </Col>
                  <Col lg={4}>
                    <div className="Productimageitem mb-2">
                      Product Ingredients
                    </div>
                    <textarea
                      name="ProductIngredients"
                      className="form-control"
                      rows="5"
                      cols="50"
                      placeholder="Enter Ingredients"
                    ></textarea>
                    {/* <ErrorMessage
                      name="ProductIngredients"
                      component="div"
                      className="text-danger"
                    /> */}
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col lg={4}>
                    <div className="Productimageitem mb-2">
                      Active / Dactive <span className="text-danger"> *</span>
                    </div>
                    <div className=" form-control pb-0">
                      <div className="form-check form-check-inline">
                        <Field
                          className="form-check-input"
                          type="radio"
                          name="activedeactiveRadioOptions"
                          value="Active"
                        />
                        <label className="form-check-label">Active</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <Field
                          className="form-check-input"
                          type="radio"
                          name="activedeactiveRadioOptions"
                          value="Dactive"
                        />
                        <label className="form-check-label">Dactive</label>
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            <Row style={{ marginBottom: "5%" }}>
              <Col lg={12}>
                <div>
                  <button
                    className="btn btn-primary"
                    type="submit"
                    value="Submit"
                  >
                    Submit
                  </button>
                </div>
              </Col>
            </Row>
          </Form>
        </FormikProvider>
      </Container>
    </div>
  )
}
