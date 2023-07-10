import React, { useState, useEffect } from "react"
import MetaTags from "react-meta-tags"
import {
  Row,
  Col,
  Card,
  CardBody,
  Container,
  BreadcrumbItem,
  Button,
  Modal,
  Form,
} from "reactstrap"
import { Link } from "react-router-dom"
import withRouter from "components/Common/withRouter"
import { withTranslation } from "react-i18next"
import PropTypes from "prop-types"
import CustomTable from "../../Custom/TableWithRemotePagination"
import * as Yup from "yup"
import CustomInput from "Custom/CustomInput"
import { Field, FormikProvider, useFormik } from "formik"
import CustomSelect from "Custom/CustomSelect"
import PhoneInput from "Custom/CustomPhoneInput"

const UserList = props => {
  const [totalSize, setTotalSize] = useState(5)
  const [modal_center, setmodal_center] = useState(false)
  const [country, setCountry] = useState("")

  const validationSchema = Yup.object().shape({
    Email: Yup.string().required("Email is a required field."),
    Role: Yup.string().required("Role is a required field."),
    // FirstName: Yup.string().required("First Name is a required field."),
    // Lastname: Yup.string().required("Last Name is a required field."),
    // WorkPhone: Yup.string().required("Work Phone is a required field."),
    Mobile: Yup.string().required("Mobile No is a required field."),
    // Salutation: Yup.string().required("Salutation is a required field."),
  })

  const formik = useFormik({
    validationSchema: validationSchema,
    onSubmit: (values, formikHelpers) =>
      handleValidSubmit(values, formikHelpers),
    initialValues: {
      Email: "",
      Role: "",
      FirstName: "",
      Lastname: "",
      WorkPhone: "",
      Mobile: "",
      Salutation: "",
      CountryCode: "+91",
    },
    validateOnBlur: false,
  })

  const {
    setValues,
    setFieldValue,
    values: { CountryCode },
  } = formik

  const handleValidSubmit = values => {}

  const SalutationOption = [
    { label: "Mr.", value: 1 },
    { label: "Ms.", value: 2 },
    { label: "Mrs.", value: 3 },
  ]

  const RoleOption = [
    { label: "Super Admin", value: 1 },
    { label: "Accountant", value: 2 },
    { label: "Admin", value: 3 },
    { label: "Team Member", value: 4 },
  ]

  const columns = [
    {
      text: "Name",
      dataField: "Name",
      style: { width: "30%" },
    },
    {
      text: "Email",
      dataField: "Email",
      style: { width: "30%" },
    },
    {
      text: "Role",
      dataField: "Role",
      style: { width: "16%" },
    },
    {
      text: "Status",
      dataField: "Status",
      style: { width: "12%" },
    },
    {
      text: "Actions",
      dataField: "Actions",
      style: { width: "12%" },
    },
  ]

  const rows = [
    {
      Name: "Sample May",
      Email: "deep@domain.com",
      Role: "Super Admin",
      Status: "Active",
      Actions: (
        <>
          <div className="d-flex">
            <Button
              className="btn btn-secondary waves-effect waves-light btn btn-secondary"
              style={{
                width: "25px",
                height: "25px",
                padding: "0px",
              }}
              onClick={() => {
                formik.resetForm()
                setmodal_center(true)
              }}
              title="Edit"
            >
              <i className="fas fa-edit" style={{ color: "#17a98c" }}></i>
            </Button>
            &nbsp;
            <Button
              className="btn btn-secondary waves-effect waves-light btn btn-secondary"
              style={{
                width: "25px",
                height: "25px",
                padding: "0px",
              }}
              title={"Block"}
            >
              <i className="fas fa-ban" style={{ color: "red" }}></i>
            </Button>
          </div>
        </>
      ),
    },
    {
      Name: "Aakash Patel",
      Email: "aakash@domain.com",
      Role: "Accountant",
      Status: "Invited",
      Actions: (
        <>
          <div className="d-flex">
            <Button
              className="btn btn-secondary waves-effect waves-light btn btn-secondary"
              style={{
                width: "25px",
                height: "25px",
                padding: "0px",
              }}
              onClick={() => {
                formik.resetForm()
                setmodal_center(true)
              }}
              title="Edit"
            >
              <i className="fas fa-edit" style={{ color: "#17a98c" }}></i>
            </Button>
            &nbsp;
            <Button
              className="btn btn-secondary waves-effect waves-light btn btn-secondary"
              style={{
                width: "25px",
                height: "25px",
                padding: "0px",
              }}
              title={"Block"}
            >
              <i className="fas fa-ban" style={{ color: "red" }}></i>
            </Button>
          </div>
        </>
      ),
    },
    {
      Name: "Smruti Fastidious",
      Email: "smruti@fastidious.co.in",
      Role: "Admin",
      Status: "Active",
      Actions: (
        <>
          <div className="d-flex">
            <Button
              className="btn btn-secondary waves-effect waves-light btn btn-secondary"
              style={{
                width: "25px",
                height: "25px",
                padding: "0px",
              }}
              onClick={() => {
                formik.resetForm()
                setmodal_center(true)
              }}
              title="Edit"
            >
              <i className="fas fa-edit" style={{ color: "#17a98c" }}></i>
            </Button>
            &nbsp;
            <Button
              className="btn btn-secondary waves-effect waves-light btn btn-secondary"
              style={{
                width: "25px",
                height: "25px",
                padding: "0px",
              }}
              title={"Block"}
            >
              <i className="fas fa-ban" style={{ color: "red" }}></i>
            </Button>
          </div>
        </>
      ),
    },
    {
      Name: "Jyoti Shrivas",
      Email: "jyoti@domain.com",
      Role: "Team Member",
      Status: "Active",
      Actions: (
        <>
          <div className="d-flex">
            <Button
              className="btn btn-secondary waves-effect waves-light btn btn-secondary"
              style={{
                width: "25px",
                height: "25px",
                padding: "0px",
              }}
              onClick={() => {
                formik.resetForm()
                setmodal_center(true)
              }}
              title="Edit"
            >
              <i className="fas fa-edit" style={{ color: "#17a98c" }}></i>
            </Button>
            &nbsp;
            <Button
              className="btn btn-secondary waves-effect waves-light btn btn-secondary"
              style={{
                width: "25px",
                height: "25px",
                padding: "0px",
              }}
              title={"Block"}
            >
              <i className="fas fa-ban" style={{ color: "red" }}></i>
            </Button>
          </div>
        </>
      ),
    },
    {
      Name: "Sipu Sipu",
      Email: "sipu.34@gmail.com",
      Role: "Admin",
      Status: "Active",
      Actions: (
        <>
          <div className="d-flex">
            <Button
              className="btn btn-secondary waves-effect waves-light btn btn-secondary"
              style={{
                width: "25px",
                height: "25px",
                padding: "0px",
              }}
              onClick={() => {
                formik.resetForm()
                setmodal_center(true)
              }}
              title="Edit"
            >
              <i className="fas fa-edit" style={{ color: "#17a98c" }}></i>
            </Button>
            &nbsp;
            <Button
              className="btn btn-secondary waves-effect waves-light btn btn-secondary"
              style={{
                width: "25px",
                height: "25px",
                padding: "0px",
              }}
              title={"Block"}
            >
              <i className="fas fa-ban" style={{ color: "red" }}></i>
            </Button>
          </div>
        </>
      ),
    },
  ]

  const getData = (page = 1, sizePerPage = 10) => {}

  useEffect(() => {
    getData()
  }, [])

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>{"Users"} | Katlax OMS</title>
        </MetaTags>

        <Container fluid>
          <Row className="mt-3">
            <Col lg={6}>
              <div className="mt-2" style={{ fontSize: "large" }}>
                <b>Users</b>
              </div>
            </Col>
            <Col lg={6} style={{ textAlign: "end" }}>
              <button
                className="btn btn-primary"
                onClick={() => {
                  formik.resetForm()
                  setmodal_center(true)
                }}
              >
                Add Users
              </button>
              &nbsp;
              <button className="btn btn-secondary">Export</button>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CustomTable
                    keyField="Users"
                    columns={columns}
                    data={rows}
                    totalSize={totalSize}
                    getData={getData}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Modal isOpen={modal_center} centered={true} size="lg">
        <div className="modal-header mdl_header">
          <h5 className="modal-title mt-0">{"Add User"}</h5>
          <button
            type="button"
            className="btn close mt-2"
            onClick={() => setmodal_center(false)}
          >
            <span>×</span>
          </button>
        </div>
        <div className="modal-body">
          <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit}>
              <Row className="mt-2">
                <Col lg={3}>
                  <div className="fieldNameLabel">
                    User Email <span className="text-danger">*</span>
                  </div>
                </Col>
                <Col lg={5}>
                  <Field
                    type="text"
                    name="Email"
                    placeholder={"Enter Email"}
                    component={CustomInput}
                    maxLength={50}
                  />
                </Col>
              </Row>
              <Row className="mt-2">
                <Col lg={3}>
                  <div className="fieldNameLabel">
                    Role <span className="text-danger">*</span>
                  </div>
                </Col>
                <Col lg={5}>
                  <Field
                    name="Role"
                    placeholder={"Select Role"}
                    component={CustomSelect}
                    options={RoleOption}
                    maxLength={50}
                  />
                </Col>
              </Row>
              <Row className="mt-2">
                <Col lg={3}>
                  <div className="fieldNameLabel">User Name</div>
                </Col>
                <Col lg={3}>
                  <Field
                    name="Salutation"
                    placeholder={"Select Salutation"}
                    component={CustomSelect}
                    options={SalutationOption}
                    maxLength={50}
                  />
                </Col>
                <Col lg={3}>
                  <Field
                    type="text"
                    name="FirstName"
                    placeholder={"Enter First Name"}
                    component={CustomInput}
                  />
                </Col>
                <Col lg={3}>
                  <Field
                    type="text"
                    name="Lastname"
                    placeholder={"Enter Last Name"}
                    component={CustomInput}
                  />
                </Col>
              </Row>
              <Row className="mt-2">
                <Col lg={3}>
                  <div className="fieldNameLabel mt-4">
                    User Contact <span className="text-danger">*</span>
                  </div>
                </Col>

                <Col lg={3}>
                  <Field
                    name="Mobile"
                    label="Mobile No"
                    placeholder={"Enter Mobile No"}
                    country={country}
                    countryCode={CountryCode}
                    component={PhoneInput}
                    onChange={(value, { countryCode, dialCode }) => {
                      setFieldValue("CountryCode", dialCode)
                      setFieldValue(
                        "Mobile",
                        value.substring(dialCode.toString().length)
                      )
                    }}
                    required
                  />
                </Col>
                <Col lg={3}>
                  <Field
                    label="Work Phone"
                    name="WorkPhone"
                    placeholder={"Enter Work Phone"}
                    country={country}
                    countryCode={CountryCode}
                    component={PhoneInput}
                    onChange={(value, { countryCode, dialCode }) => {
                      setFieldValue("CountryCode", dialCode)
                      setFieldValue(
                        "WorkPhone",
                        value.substring(dialCode.toString().length)
                      )
                    }}
                  />
                </Col>
              </Row>
              <hr></hr>
              <Row>
                <Col lg={6}>
                  <button className="btn btn-primary" type="submit">
                    Send
                  </button>
                  &nbsp;&nbsp;
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      setmodal_center(false)
                    }}
                  >
                    Cancel
                  </button>
                </Col>
              </Row>
            </Form>
          </FormikProvider>
        </div>
      </Modal>
    </React.Fragment>
  )
}
UserList.propTypes = {
  t: PropTypes.any,
}
export default withRouter(withTranslation()(UserList))
