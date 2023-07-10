import React, { useEffect } from "react"
import MetaTags from "react-meta-tags"
import { Row, Col, Card, CardBody, Container, Form, Input } from "reactstrap"
import { Link, useNavigate } from "react-router-dom"
import withRouter from "components/Common/withRouter"
import { withTranslation } from "react-i18next"
import PropTypes from "prop-types"
import CustomInput from "Custom/CustomInput"
import { Field, FormikProvider, useFormik } from "formik"
import * as Yup from "yup"
import CustomSelect from "Custom/CustomSelect"

const AddRoles = props => {
  const navigate = useNavigate()
  const validationSchema = Yup.object().shape({
    RoleName: Yup.string().required("Role Name is a required field."),
  })

  const formik = useFormik({
    validationSchema: validationSchema,
    onSubmit: (values, formikHelpers) =>
      handleValidSubmit(values, formikHelpers),
    initialValues: {
      RoleName: "",
      Description: "",
      RoleType: "",
      ListOfVendorPortal: [],
      ListOfCustomerPortal: [],
      ListOfSettings: [],
      ListOfDocumnets: [],
      ListOfDashboard: [],
      ListOfOrganisationSale: [],
      ListOfOrganisationPurchase: [],
      ListOfOrganisationContacts: [],
    },
    validateOnBlur: false,
  })

  const {
    setFieldValue,
    values: {
      ListOfVendorPortal,
      ListOfCustomerPortal,
      ListOfSettings,
      ListOfDocumnets,
      ListOfDashboard,
      ListOfOrganisationSale,
      ListOfOrganisationPurchase,
      ListOfOrganisationContacts,
    },
  } = formik

  const handleValidSubmit = values => {}

  useEffect(() => {
    setFieldValue("ListOfVendorPortal", [
      {
        Name: "Sales Order",
        FullAccess: true,
        View: true,
        Create: false,
        Edit: false,
        Delete: false,
        Approve: true,
        EditLockedRecorde: false,
      },
      {
        Name: "Package",
        FullAccess: true,
        View: true,
        Create: true,
        Edit: true,
        Delete: true,
        Approve: false,
        EditLockedRecorde: false,
      },
      {
        Name: "Shipments",
        FullAccess: true,
        View: true,
        Create: true,
        Edit: true,
        Delete: true,
        Approve: false,
        EditLockedRecorde: false,
      },
      {
        Name: "Venors Invoice(Bill)",
        FullAccess: true,
        View: true,
        Create: true,
        Edit: true,
        Delete: true,
        Approve: false,
        EditLockedRecorde: false,
      },
      {
        Name: "Package",
        FullAccess: true,
        View: true,
        Create: true,
        Edit: true,
        Delete: true,
        Approve: false,
        EditLockedRecorde: false,
      },
      {
        Name: "Shipments Order",
        FullAccess: true,
        View: true,
        Create: true,
        Edit: false,
        Delete: true,
        Approve: false,
        EditLockedRecorde: false,
      },
      {
        Name: "Credit Notes",
        FullAccess: true,
        View: true,
        Create: true,
        Edit: true,
        Delete: true,
        Approve: false,
        EditLockedRecorde: false,
      },
      {
        Name: "Sales Return",
        FullAccess: true,
        View: true,
        Create: true,
        Edit: true,
        Delete: true,
        Approve: false,
        EditLockedRecorde: false,
      },
      {
        Name: "Sales Returb Receive",
        FullAccess: true,
        View: true,
        Create: true,
        Edit: false,
        Delete: true,
        Approve: false,
        EditLockedRecorde: false,
      },
    ])
    setFieldValue("ListOfCustomerPortal", [
      {
        Name: "Purchase Order",
        FullAccess: true,
        View: true,
        Create: true,
        Edit: true,
        Delete: true,
        Approve: false,
      },
      {
        Name: "Purchase Receive(Shipments)",
        FullAccess: true,
        View: true,
        Create: true,
        Edit: true,
        Delete: true,
        Approve: false,
      },
      {
        Name: "Payment Mode",
        FullAccess: true,
        View: true,
        Create: true,
        Edit: true,
        Delete: true,
        Approve: false,
      },
      {
        Name: "Purchase Receive",
        FullAccess: true,
        View: true,
        Create: true,
        Edit: true,
        Delete: true,
        Approve: false,
      },
      {
        Name: "Vendor Credit",
        FullAccess: true,
        View: true,
        Create: true,
        Edit: true,
        Delete: true,
        Approve: true,
      },
    ])
    setFieldValue("ListOfSettings", [
      {
        Name: "Update Organisation Profile",
        IsChecked: true,
      },
      {
        Name: "Users",
        IsChecked: true,
      },
      {
        Name: "Export Data",
        IsChecked: true,
      },
      {
        Name: "General Preference",
        IsChecked: true,
      },
      {
        Name: "Taxes",
        IsChecked: true,
      },
      {
        Name: "Provide access to protected data",
        IsChecked: true,
      },
      {
        Name: "Payment Terms",
        IsChecked: true,
      },
      {
        Name: "Templates",
        IsChecked: true,
      },
      {
        Name: "Email Templates",
        IsChecked: true,
      },
      {
        Name: "Reporting Tags",
        IsChecked: true,
      },
      {
        Name: "Manage Integration",
        IsChecked: true,
      },
      {
        Name: "Automation",
        IsChecked: true,
      },
      {
        Name: "Incoming Webhook",
        IsChecked: true,
      },
      {
        Name: "Signal",
        IsChecked: true,
      },
    ])
    setFieldValue("ListOfDocumnets", [
      {
        Name: "View Documents",
        IsChecked: true,
      },
      {
        Name: "Upload Documents",
        IsChecked: true,
      },
      {
        Name: "Delete Documents",
        IsChecked: true,
      },
      {
        Name: "Manage Folder",
        IsChecked: true,
      },
    ])
    setFieldValue("ListOfDashboard", [
      {
        Name: "Sales Activity",
        IsChecked: true,
      },
      {
        Name: "Inventory Summary",
        IsChecked: true,
      },
      {
        Name: "Product Details",
        IsChecked: true,
      },
      {
        Name: "Top Selling Items",
        IsChecked: true,
      },
      {
        Name: "Purchase Order",
        IsChecked: true,
      },
      {
        Name: "Sales Order",
        IsChecked: true,
      },
      {
        Name: "Sales Order Summary",
        IsChecked: true,
      },
    ])
    setFieldValue("ListOfOrganisationSale", [
      {
        Name: "Sales Order",
        FullAccess: true,
        View: true,
        Create: false,
        Edit: false,
        Delete: false,
        Approve: true,
        EditLockedRecorde: false,
      },
      {
        Name: "Package",
        FullAccess: true,
        View: true,
        Create: true,
        Edit: true,
        Delete: true,
        Approve: false,
        EditLockedRecorde: false,
      },
      {
        Name: "Shipments",
        FullAccess: true,
        View: true,
        Create: true,
        Edit: true,
        Delete: true,
        Approve: false,
        EditLockedRecorde: false,
      },
      {
        Name: "Venors Invoice(Bill)",
        FullAccess: true,
        View: true,
        Create: true,
        Edit: true,
        Delete: true,
        Approve: false,
        EditLockedRecorde: false,
      },
      {
        Name: "Package",
        FullAccess: true,
        View: true,
        Create: true,
        Edit: true,
        Delete: true,
        Approve: false,
        EditLockedRecorde: false,
      },
      {
        Name: "Shipments Order",
        FullAccess: true,
        View: true,
        Create: true,
        Edit: false,
        Delete: true,
        Approve: false,
        EditLockedRecorde: false,
      },
      {
        Name: "Credit Notes",
        FullAccess: true,
        View: true,
        Create: true,
        Edit: true,
        Delete: true,
        Approve: false,
        EditLockedRecorde: false,
      },
      {
        Name: "Sales Return",
        FullAccess: true,
        View: true,
        Create: true,
        Edit: true,
        Delete: true,
        Approve: false,
        EditLockedRecorde: false,
      },
      {
        Name: "Sales Returb Receive",
        FullAccess: true,
        View: true,
        Create: true,
        Edit: false,
        Delete: true,
        Approve: false,
        EditLockedRecorde: false,
      },
    ])
    setFieldValue("ListOfOrganisationPurchase", [
      {
        Name: "Purchase Order",
        FullAccess: true,
        View: true,
        Create: true,
        Edit: true,
        Delete: true,
        Approve: false,
      },
      {
        Name: "Purchase Receive(Shipments)",
        FullAccess: true,
        View: true,
        Create: true,
        Edit: true,
        Delete: true,
        Approve: false,
      },
      {
        Name: "Payment Mode",
        FullAccess: true,
        View: true,
        Create: true,
        Edit: true,
        Delete: true,
        Approve: false,
      },
      {
        Name: "Purchase Receive",
        FullAccess: true,
        View: true,
        Create: true,
        Edit: true,
        Delete: true,
        Approve: false,
      },
      {
        Name: "Vendor Credit",
        FullAccess: true,
        View: true,
        Create: true,
        Edit: true,
        Delete: true,
        Approve: true,
      },
    ])
    setFieldValue("ListOfOrganisationContacts", [
      {
        Name: "Customers",
        FullAccess: true,
        View: true,
        Create: true,
        Edit: true,
        Delete: true,
        Approve: true,
      },
      {
        Name: "Vendors",
        FullAccess: true,
        View: true,
        Create: true,
        Edit: true,
        Delete: true,
        Approve: true,
      },
    ])
  }, [])

  const RoleOption = [
    { label: "Vendor", value: 1 },
    { label: "Customer", value: 2 },
    { label: "Organization", value: 3 },
    { label: "Vendor & Customer", value: 4 },
  ]

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>{"New Role"} | Katlax OMS</title>
        </MetaTags>

        <Container fluid>
          <Row className="mt-3">
            <Col lg={6}>
              <div className="mt-2" style={{ fontSize: "large" }}>
                <b>New Role</b>
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <Card>
                <CardBody>
                  <FormikProvider value={formik}>
                    <Form onSubmit={formik.handleSubmit}>
                      <Row>
                        <Col lg={2}>
                          <div className="mt-2">
                            {" "}
                            Role Name <span className="text-danger">*</span>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <Field
                            type="text"
                            name="RoleName"
                            placeholder={"Enter Role Name"}
                            component={CustomInput}
                            maxLength={100}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={2}>
                          <div className="mt-2"> Description</div>
                        </Col>
                        <Col lg={4}>
                          <Field
                            type="textarea"
                            name="Description"
                            placeholder={"Max. 500 Character"}
                            component={CustomInput}
                            maxLength={500}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={2}></Col>
                        <Col lg={4}>
                          <Field
                            name="RoleType"
                            placeholder={"Select Role Type"}
                            component={CustomSelect}
                            options={RoleOption}
                          />
                        </Col>
                      </Row>
                      <Row className="mt-3">
                        <Col lg={2}></Col>
                        <Col lg={10}>
                          <div className="table-responsive">
                            <table className="table table-bordered dataTable">
                              <thead className="bg-light">
                                <tr>
                                  <th colSpan={9} style={{ width: "40%" }}>
                                    {"Vendor Portal"}
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td style={{ width: "58%" }}></td>
                                  <td style={{ width: "6%" }}>Full Access</td>
                                  <td style={{ width: "6%" }}>View</td>
                                  <td style={{ width: "6%" }}>Create</td>
                                  <td style={{ width: "6%" }}>Edit</td>
                                  <td style={{ width: "6%" }}>Delete</td>
                                  <td style={{ width: "6%" }}>
                                    Approve/Accept
                                  </td>
                                  <td style={{ width: "6%" }}>
                                    Edit Locked Records
                                  </td>
                                </tr>
                                {ListOfVendorPortal?.map((item, index) => (
                                  <>
                                    <tr>
                                      <td>{item.Name}</td>
                                      <td>
                                        <center>
                                          <Input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="Add"
                                            checked={item.FullAccess}
                                          />
                                        </center>
                                      </td>
                                      <td>
                                        <center>
                                          <Input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="Add"
                                            checked={item.View}
                                          />
                                        </center>
                                      </td>
                                      <td>
                                        <center>
                                          <Input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="Add"
                                            checked={item.Create}
                                          />
                                        </center>
                                      </td>
                                      <td>
                                        <center>
                                          <Input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="Add"
                                            checked={item.Edit}
                                          />
                                        </center>
                                      </td>
                                      <td>
                                        <center>
                                          <Input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="Add"
                                            checked={item.Delete}
                                          />
                                        </center>
                                      </td>
                                      <td>
                                        <center>
                                          <Input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="Add"
                                            checked={item.Approve}
                                          />
                                        </center>
                                      </td>
                                      <td>
                                        <center>
                                          <Input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="Add"
                                            checked={item.EditLockedRecorde}
                                          />
                                        </center>
                                      </td>
                                    </tr>
                                  </>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </Col>
                      </Row>
                      <Row className="mt-3">
                        <Col lg={2}></Col>
                        <Col lg={10}>
                          <div className="table-responsive">
                            <table className="table table-bordered dataTable">
                              <thead className="bg-light">
                                <tr>
                                  <th colSpan={9} style={{ width: "40%" }}>
                                    {"Customer Portal"}
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td style={{ width: "64%" }}></td>
                                  <td style={{ width: "6%" }}>Full Access</td>
                                  <td style={{ width: "6%" }}>View</td>
                                  <td style={{ width: "6%" }}>Create</td>
                                  <td style={{ width: "6%" }}>Edit</td>
                                  <td style={{ width: "6%" }}>Delete</td>
                                  <td style={{ width: "6%" }}>Approve</td>
                                </tr>
                                {ListOfCustomerPortal?.map((item, index) => (
                                  <>
                                    <tr>
                                      <td>{item.Name}</td>
                                      <td>
                                        <center>
                                          <Input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="Add"
                                            checked={item.FullAccess}
                                          />
                                        </center>
                                      </td>
                                      <td>
                                        <center>
                                          <Input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="Add"
                                            checked={item.View}
                                          />
                                        </center>
                                      </td>
                                      <td>
                                        <center>
                                          <Input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="Add"
                                            checked={item.Create}
                                          />
                                        </center>
                                      </td>
                                      <td>
                                        <center>
                                          <Input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="Add"
                                            checked={item.Edit}
                                          />
                                        </center>
                                      </td>

                                      <td>
                                        <center>
                                          <Input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="Add"
                                            checked={item.Delete}
                                          />
                                        </center>
                                      </td>
                                      <td>
                                        <center>
                                          <Input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="Add"
                                            checked={item.Approve}
                                          />
                                        </center>
                                      </td>
                                    </tr>
                                  </>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </Col>
                      </Row>
                      <Row className="mt-3">
                        <Col lg={2}></Col>
                        <Col lg={10}>
                          <div className="table-responsive">
                            <table className="table table-bordered dataTable">
                              <thead className="bg-light">
                                <tr>
                                  <th colSpan={8}>
                                    <Input
                                      type="checkbox"
                                      className="form-check-input"
                                      id="Add"
                                      checked={true}
                                    />{" "}
                                    &nbsp;{"Settings"}
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {ListOfSettings?.map((item, index) => (
                                  <>
                                    <tr>
                                      <td>
                                        {" "}
                                        <Input
                                          type="checkbox"
                                          className="form-check-input"
                                          id="Add"
                                          checked={item.IsChecked}
                                        />{" "}
                                        &nbsp;{item.Name}
                                      </td>
                                    </tr>
                                  </>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </Col>
                      </Row>
                      <Row className="mt-3">
                        <Col lg={2}></Col>
                        <Col lg={10}>
                          <div className="table-responsive">
                            <table className="table table-bordered dataTable">
                              <thead className="bg-light">
                                <tr>
                                  <th colSpan={8}>
                                    <Input
                                      type="checkbox"
                                      className="form-check-input"
                                      id="Add"
                                      checked={true}
                                    />{" "}
                                    &nbsp;{"Documents"}
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {ListOfDocumnets?.map((item, index) => (
                                  <>
                                    <tr>
                                      <td>
                                        {" "}
                                        <Input
                                          type="checkbox"
                                          className="form-check-input"
                                          id="Add"
                                          checked={item.IsChecked}
                                        />{" "}
                                        &nbsp;{item.Name}
                                      </td>
                                    </tr>
                                  </>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </Col>
                      </Row>
                      <Row className="mt-3">
                        <Col lg={2}></Col>
                        <Col lg={10}>
                          <div className="table-responsive">
                            <table className="table table-bordered dataTable">
                              <thead className="bg-light">
                                <tr>
                                  <th colSpan={8}>
                                    <Input
                                      type="checkbox"
                                      className="form-check-input"
                                      id="Add"
                                      checked={true}
                                    />{" "}
                                    &nbsp;{"Dashboard"}
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {ListOfDashboard?.map((item, index) => (
                                  <>
                                    <tr>
                                      <td>
                                        {" "}
                                        <Input
                                          type="checkbox"
                                          className="form-check-input"
                                          id="Add"
                                          checked={item.IsChecked}
                                        />{" "}
                                        &nbsp;{item.Name}
                                      </td>
                                    </tr>
                                  </>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </Col>
                      </Row>
                      <Row className="mt-3">
                        <Col lg={2}></Col>
                        <Col lg={10}>
                          <div className="table-responsive">
                            <table className="table table-bordered dataTable">
                              <thead className="bg-light">
                                <tr>
                                  <th colSpan={9} style={{ width: "40%" }}>
                                    {"Organisation-Sales"}
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td style={{ width: "58%" }}></td>
                                  <td style={{ width: "6%" }}>Full Access</td>
                                  <td style={{ width: "6%" }}>View</td>
                                  <td style={{ width: "6%" }}>Create</td>
                                  <td style={{ width: "6%" }}>Edit</td>
                                  <td style={{ width: "6%" }}>Delete</td>
                                  <td style={{ width: "6%" }}>
                                    Approve/Accept
                                  </td>
                                  <td style={{ width: "6%" }}>
                                    Edit Locked Records
                                  </td>
                                </tr>
                                {ListOfOrganisationSale?.map((item, index) => (
                                  <>
                                    <tr>
                                      <td>{item.Name}</td>
                                      <td>
                                        <center>
                                          <Input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="Add"
                                            checked={item.FullAccess}
                                          />
                                        </center>
                                      </td>
                                      <td>
                                        <center>
                                          <Input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="Add"
                                            checked={item.View}
                                          />
                                        </center>
                                      </td>
                                      <td>
                                        <center>
                                          <Input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="Add"
                                            checked={item.Create}
                                          />
                                        </center>
                                      </td>
                                      <td>
                                        <center>
                                          <Input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="Add"
                                            checked={item.Edit}
                                          />
                                        </center>
                                      </td>
                                      <td>
                                        <center>
                                          <Input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="Add"
                                            checked={item.Delete}
                                          />
                                        </center>
                                      </td>
                                      <td>
                                        <center>
                                          <Input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="Add"
                                            checked={item.Approve}
                                          />
                                        </center>
                                      </td>
                                      <td>
                                        <center>
                                          <Input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="Add"
                                            checked={item.EditLockedRecorde}
                                          />
                                        </center>
                                      </td>
                                    </tr>
                                  </>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </Col>
                      </Row>
                      <Row className="mt-3">
                        <Col lg={2}></Col>
                        <Col lg={10}>
                          <div className="table-responsive">
                            <table className="table table-bordered dataTable">
                              <thead className="bg-light">
                                <tr>
                                  <th colSpan={9} style={{ width: "40%" }}>
                                    {"Organisation-Puchase"}
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td style={{ width: "64%" }}></td>
                                  <td style={{ width: "6%" }}>Full Access</td>
                                  <td style={{ width: "6%" }}>View</td>
                                  <td style={{ width: "6%" }}>Create</td>
                                  <td style={{ width: "6%" }}>Edit</td>
                                  <td style={{ width: "6%" }}>Delete</td>
                                  <td style={{ width: "6%" }}>Approve</td>
                                </tr>
                                {ListOfOrganisationPurchase?.map(
                                  (item, index) => (
                                    <>
                                      <tr>
                                        <td>{item.Name}</td>
                                        <td>
                                          <center>
                                            <Input
                                              type="checkbox"
                                              className="form-check-input"
                                              id="Add"
                                              checked={item.FullAccess}
                                            />
                                          </center>
                                        </td>
                                        <td>
                                          <center>
                                            <Input
                                              type="checkbox"
                                              className="form-check-input"
                                              id="Add"
                                              checked={item.View}
                                            />
                                          </center>
                                        </td>
                                        <td>
                                          <center>
                                            <Input
                                              type="checkbox"
                                              className="form-check-input"
                                              id="Add"
                                              checked={item.Create}
                                            />
                                          </center>
                                        </td>
                                        <td>
                                          <center>
                                            <Input
                                              type="checkbox"
                                              className="form-check-input"
                                              id="Add"
                                              checked={item.Edit}
                                            />
                                          </center>
                                        </td>

                                        <td>
                                          <center>
                                            <Input
                                              type="checkbox"
                                              className="form-check-input"
                                              id="Add"
                                              checked={item.Delete}
                                            />
                                          </center>
                                        </td>
                                        <td>
                                          <center>
                                            <Input
                                              type="checkbox"
                                              className="form-check-input"
                                              id="Add"
                                              checked={item.Approve}
                                            />
                                          </center>
                                        </td>
                                      </tr>
                                    </>
                                  )
                                )}
                              </tbody>
                            </table>
                          </div>
                        </Col>
                      </Row>
                      <Row className="mt-3">
                        <Col lg={2}></Col>
                        <Col lg={10}>
                          <div className="table-responsive">
                            <table className="table table-bordered dataTable">
                              <thead className="bg-light">
                                <tr>
                                  <th colSpan={9} style={{ width: "40%" }}>
                                    {"Organisation-Puchase"}
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td style={{ width: "70%" }}></td>
                                  <td style={{ width: "6%" }}>Full Access</td>
                                  <td style={{ width: "6%" }}>View</td>
                                  <td style={{ width: "6%" }}>Create</td>
                                  <td style={{ width: "6%" }}>Edit</td>
                                  <td style={{ width: "6%" }}>Delete</td>
                                </tr>
                                {ListOfOrganisationContacts?.map(
                                  (item, index) => (
                                    <>
                                      <tr>
                                        <td>{item.Name}</td>
                                        <td>
                                          <center>
                                            <Input
                                              type="checkbox"
                                              className="form-check-input"
                                              id="Add"
                                              checked={item.FullAccess}
                                            />
                                          </center>
                                        </td>
                                        <td>
                                          <center>
                                            <Input
                                              type="checkbox"
                                              className="form-check-input"
                                              id="Add"
                                              checked={item.View}
                                            />
                                          </center>
                                        </td>
                                        <td>
                                          <center>
                                            <Input
                                              type="checkbox"
                                              className="form-check-input"
                                              id="Add"
                                              checked={item.Create}
                                            />
                                          </center>
                                        </td>
                                        <td>
                                          <center>
                                            <Input
                                              type="checkbox"
                                              className="form-check-input"
                                              id="Add"
                                              checked={item.Edit}
                                            />
                                          </center>
                                        </td>

                                        <td>
                                          <center>
                                            <Input
                                              type="checkbox"
                                              className="form-check-input"
                                              id="Add"
                                              checked={item.Delete}
                                            />
                                          </center>
                                        </td>
                                      </tr>
                                    </>
                                  )
                                )}
                                <tr>
                                  <td colSpan={7}>
                                    <Input
                                      type="checkbox"
                                      className="form-check-input"
                                      id="Add"
                                      checked={true}
                                    />{" "}
                                    &nbsp;
                                    {
                                      "Allow Users to add, edit and delete Vendor's bank account details."
                                    }
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </Col>
                      </Row>
                      <hr></hr>
                      <Row className="mt-3">
                        <Col lg={6}>
                          <button className="btn btn-primary" type="submit">
                            Save
                          </button>
                          &nbsp;&nbsp;
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => {
                              navigate("/roles")
                            }}
                          >
                            Cancel
                          </button>
                        </Col>
                      </Row>
                    </Form>
                  </FormikProvider>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}
AddRoles.propTypes = {
  t: PropTypes.any,
}
export default withRouter(withTranslation()(AddRoles))
