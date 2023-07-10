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
  const getData = (page = 1, sizePerPage = 10) => {
    setIsLoading(true)
    get(
      GET_PurchaseOrderList +
        "?page=" +
        page +
        (search ? "&search=" + search : "") +
        (SearchByColumn ? "&column_filter=" + SearchByColumn : "") +
        (Status ? "&status_filter=" + Status : "")
    )
      .then(res => {
        if (res.data.data.length !== 0) {
          setPoListCustomer(
            res.data.data.map((e, index) => {
              return {
                Date: (
                  <>
                    <Input
                      type="checkbox"
                      className="form-check-input"
                      id="Add"
                      checked={false}
                    />
                    &nbsp; {e.purchase_order_date}
                  </>
                ),
                PurchaseOrder: (
                  <>
                    <Link
                      onClick={() => {
                        setHide(2)
                      }}
                    >
                      {e.purchase_order_no}
                    </Link>
                  </>
                ),
                Reference: e.reference_estimate,
                CustomerName: e.contact.display_name,
                Status: (
                  <>
                    <text style={{ color: "grey" }}>{e.po_status}</text>
                  </>
                ),
                Amount: e.total,
                ExpectedDeliveryDate: e.expected_delivery_date,
                Actions: (
                  <>
                    <div className="d-flex">
                      {/* {isDraft ? ( */}
                      <Link
                        className="btn btn-secondary waves-effect waves-light btn btn-secondary"
                        style={{
                          width: "25px",
                          height: "25px",
                          padding: "0px",
                        }}
                        to={`/edit-purchase-order-customer/${e.id}`}
                        onClick={() => {
                          // navigate("/edit-purchase-order-customer/:IdParam")
                        }}
                        title="Edit"
                      >
                        <i
                          className="fas fa-edit"
                          style={{ color: "#17a98c" }}
                        ></i>
                      </Link>
                      {/* ) : (
                          ""
                        )} */}
                      &nbsp;
                      <Button
                        className="btn btn-secondary waves-effect waves-light btn btn-secondary"
                        style={{
                          width: "25px",
                          height: "25px",
                          padding: "0px",
                        }}
                        title="Cancel"
                      >
                        <i
                          class="fas fa-times-circle"
                          style={{
                            color: "red",
                          }}
                        ></i>
                      </Button>
                    </div>
                  </>
                ),
              }
            })
          )
          setTotalSize(res.data.total)
          setIsLoading(false)
        } else {
          poLIstCustomer([])
          setIsLoading(false)
          setTotalSize(0)
        }
      })
      .catch(error => {
        console.log(error)
      })
    setCurruntSizePerPages(sizePerPage)
    setCurruntPage(page)
  }

  useEffect(() => {
    getData()
  }, [])

  const validationSchemaFilter = Yup.object().shape({})

  const formikFilter = useFormik({
    validationSchema: validationSchemaFilter,
    onSubmit: (values, formikHelpers) =>
      handleValidSubmitFilter(values, formikHelpers),
    initialValues: {
      Status: "",
      // Search: "",
      SearchByColumn: "",
    },
    validateOnBlur: false,
  })

  const {
    setValues,
    setFieldValue,
    values: { Status, SearchByColumn },
  } = formikFilter

  const handleValidSubmitFilter = values => {}

  const purchaseOrderOptions = [
    { label: "Purchase Order", value: "Purchase Order" },
    { label: "Vendor Name", value: "Vendor Name" },
  ]

  const statusOption = [
    { label: "ALL", value: "ALL" },
    { label: "DRAFT", value: "DRAFT" },
    { label: "ACCEPTED", value: "ACCEPTED" },
    { label: "ISSUED", value: "ISSUED" },
  ]

  return (
    <>
      <React.Fragment>
        <Spin size="large" spinning={isLoading} tip={"Loading..."}>
          <div className="page-content">
            <MetaTags>
              <title>{"Purchase Orders"} | Katlax OMS</title>
            </MetaTags>

            <Container>
              <Row className="mt-3">
                <Col lg={6}>
                  <div className="mt-2" style={{ fontSize: "large" }}>
                    <b>Purchase Orders</b>
                  </div>
                </Col>
                <Col lg={6} style={{ textAlign: "end" }}>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      navigate("/add-purchase-order-customer")
                    }}
                  >
                    Add Purchase Order
                  </button>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col className="col-12">
                  <FormikProvider value={formikFilter}>
                    <Form onSubmit={formikFilter.handleSubmit}>
                      <Row>
                        <Col lg={12}>
                          <Row>
                            <Col lg={3} sm={6} md={3}>
                              <div class="form-group has-search">
                                <span class="fa fa-search form-control-feedback"></span>
                                <Input
                                  type="text"
                                  name="Search"
                                  className="form-control"
                                  placeholder="Search"
                                  value={search}
                                  onChange={e => {
                                    let selectValue = e.target.value
                                    setSearch(selectValue)
                                    getData()
                                  }}
                                />
                              </div>
                            </Col>
                            <Col lg={2} sm={6} md={2}>
                              <Field
                                name="SearchByColumn"
                                placeholder={"By Column"}
                                onChange={e => {
                                  const selectColumnValue =
                                    e && e.value !== null ? e.value : null
                                  formikFilter.setFieldValue(
                                    "SearchByColumn",
                                    selectColumnValue
                                  )
                                  if (selectColumnValue !== null) {
                                    getData()
                                  }
                                }}
                                component={CustomSelect}
                                options={purchaseOrderOptions}
                              />
                            </Col>
                            <Col lg={2} md={2}>
                              <Field
                                name="Status"
                                placeholder={"Status"}
                                onChange={e => {
                                  const selectStatusValue =
                                    e && e.value !== null ? e.value : null
                                  formikFilter.setFieldValue(
                                    "Status",
                                    selectStatusValue
                                  )
                                  if (selectStatusValue !== null) {
                                    getData(selectStatusValue)
                                  }
                                }}
                                component={CustomSelect}
                                options={statusOption}
                              />
                            </Col>
                            <Col
                              lg={2}
                              className="mt-2"
                              style={{ textAlign: "left" }}
                            >
                              <div
                                onClick={() => {
                                  setSearch("")
                                  formikFilter.setFieldValue("Status", "")
                                  // formikFilter.setFieldValue("Search", "")
                                  formikFilter.setFieldValue(
                                    "SearchByColumn",
                                    ""
                                  )
                                }}
                              >
                                <i
                                  className="mdi mdi-filter-remove"
                                  style={{
                                    fontSize: "20px",
                                    color: "#4a539f",
                                  }}
                                ></i>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Form>
                  </FormikProvider>
                  <Card>
                    <CardBody>
                      <CustomTable
                        keyField="Customer"
                        columns={columns}
                        data={poLIstCustomer}
                        totalSize={totalSize}
                        getData={getData}
                      />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </Spin>
      </React.Fragment>
    </>
  )
}
