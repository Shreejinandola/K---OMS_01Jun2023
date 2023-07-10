import React from "react"
import { Field, FormikProvider, useFormik } from "formik"
import { Container, Form, Row, Col, input } from "reactstrap"
import * as Yup from "yup"
import CustomInput from "Custom/CustomInput"
import CustomSelect from "Custom/CustomSelect"

export default function Formikform() {
  const validationSchema = Yup.object().shape({
    FirstName: Yup.string().required("First Name is a required field."),
    LastName: Yup.string().required("Last Name is a required field."),
    // Checkmeout: Yup.string().required("Select a check me out"),
    Pickafruit: Yup.string().required("please choose a fruit"),
    // Gender: Yup.string().reqired("Choose your gender"),
    Remark: Yup.string().required("Enter some text here"),
  })

  const formik = useFormik({
    validationSchema: validationSchema,
    onSubmit: values => handleValidSubmit(values),
    initialValues: {
      Gender: "",
      FirstName: "",
      LastName: "",
      Checkmeout: false,
      Pickafruit: "",
      Remark: "",
    },
  })

  const {
    setValues,
    setFieldValue,
    values: { Gender, Checkmeout },
  } = formik

  const handleValidSubmit = values => {
    if (Gender === "") {
      alert("Please select your gender")
    } else {
      alert(
        "FirstName : " +
          values.FirstName +
          "\n" +
          "LastName : " +
          values.LastName +
          "\n" +
          "Check me out : " +
          values.Checkmeout +
          "\n" +
          "Pick a fruit : " +
          values.Pickafruit +
          "\n" +
          "Gender : " +
          values.Gender +
          "\n" +
          "Remark : " +
          values.Remark
      )
    }
  }

  const FruitOption = [
    { label: "Apple", value: "Apple" },
    { label: "Banana", value: "Banana" },
    { label: "Orange", value: "Orange" },
  ]

  return (
    <div className="page-content">
      <Container>
        <h3 className=" mt-2 pb-2">Formik Form</h3>
        <hr />
        <FormikProvider value={formik}>
          <Form onSubmit={formik.handleSubmit}>
            <Row className="mt-2">
              <Col lg={1}>
                <label className="pt-1 formikformlabel">Frist Name</label>
              </Col>
              <Col lg={3}>
                <Field
                  name="FirstName"
                  type="text"
                  component={CustomInput}
                  placeholder={"Enter First Name"}
                />
              </Col>
            </Row>
            <Row className="mt-2">
              <Col lg={1}>
                <label className="pt-1 formikformlabel">Last Name</label>
              </Col>
              <Col lg={3}>
                <Field
                  name="LastName"
                  type="text"
                  component={CustomInput}
                  placeholder={"Enter Last Name"}
                />
              </Col>
            </Row>
            <Row className="mt-2">
              <Col lg={12}>
                <Field
                  name="Checkmeout"
                  type="checkbox"
                  onClick={() => {
                    if (Checkmeout === false) {
                      setFieldValue("Checkmeout", true)
                    } else {
                      setFieldValue("Checkmeout", false)
                    }
                  }}
                />
                <label className="ms-2 pt-1 formikformlabel">
                  Check me out
                </label>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col lg={1}>
                <label className="pt-1 formikformlabel">Pick a fruit</label>
              </Col>
              <Col lg={3}>
                <Field
                  name="Pickafruit"
                  type="dropdown"
                  component={CustomSelect}
                  options={FruitOption}
                />
              </Col>
            </Row>

            <Row className="mt-2">
              <Col lg={12}>
                <input
                  name="gender"
                  type="radio"
                  // onClick={() => {
                  //   if (Male === "") {
                  //     setFieldValue("Male", "Male")
                  //     setFieldValue("Female", "")
                  //   } else if (!Female === "Female") {
                  //     setFieldValue("Male", "")
                  //     setFieldValue("Female", "")
                  //   }
                  // }}
                  // checked={Male}
                  onClick={() => {
                    if (Gender === "Male") {
                      setFieldValue("Gender", "Female")
                    } else {
                      setFieldValue("Gender", "Male")
                    }
                  }}
                />
                <label className="ms-2 pt-1 formikformlabel">Male</label> <br />
              </Col>
              <Col lg={12}>
                <input
                  name="gender"
                  type="radio"
                  // onClick={() => {
                  //   if (Female === "") {
                  //     setFieldValue("Male", "")
                  //     setFieldValue("Female", "Female")
                  //   } else if (!Male === "Male") {
                  //     setFieldValue("Male", "")
                  //     setFieldValue("Female", "")
                  //   }
                  // }}
                  // checked={Female}
                  onClick={() => {
                    if (Gender === "Female") {
                      setFieldValue("Gender", "Male")
                    } else {
                      setFieldValue("Gender", "Female")
                    }
                  }}
                />
                <label className="ms-2 pt-1 formikformlabel">Female</label>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col lg={12}>
                <label className=" pt-1 formikformlabel">TextArea</label>
              </Col>
              <Col lg={4}>
                <Field
                  name="Remark"
                  placeholder={"Enter Some Text Here...."}
                  type="textarea"
                  component={CustomInput}
                  style={{ paddingBottom: "7%" }}
                />
              </Col>
            </Row>
            <button className="mt-2 btn btn-primary" type="submit">
              Submit
            </button>
          </Form>
        </FormikProvider>
      </Container>
    </div>
  )
}
