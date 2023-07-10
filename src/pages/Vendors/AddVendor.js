import React, { Fragment, useEffect, useState } from "react"
import MetaTags from "react-meta-tags"
import {
  Row,
  Col,
  Card,
  CardBody,
  Container,
  Form,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap"
import { Link, useNavigate } from "react-router-dom"
import withRouter from "components/Common/withRouter"
import { withTranslation } from "react-i18next"
import PropTypes from "prop-types"
import CustomInput from "Custom/CustomInput"
import { Field, FieldArray, FormikProvider, useFormik } from "formik"
import * as Yup from "yup"
import CustomSelect from "Custom/CustomSelect"
import CustomPhoneInput from "Custom/CustomPhoneInput"
import classnames from "classnames"
import InputMask from "react-input-mask"
import MaterialInput from "@material-ui/core/Input"
import { reactSelectCustomStyles } from "../../Custom/reactSelectCustomStyles"

const AddVendor = props => {
  const navigate = useNavigate()

  const [country, setCountry] = useState("")
  const [isAccountNumber, setIsAccountNumber] = useState(true)
  const [mode, setMode] = useState(1)

  const initListOfBankAccount = {
    BeneficiaryName: "",
    BankName: "",
    AccountNumber: "",
    ReEnterAccountNumber: "",
    IFSC: "",
    validateReEnterAccountNumber: "",
  }
  const initListOfContactPerson = {
    Salutation: "",
    Firstname: "",
    LastName: "",
    EmailAddress: "",
    WorkPhone: "",
    Mobile: "",
  }

  const validationSchema = Yup.object().shape({
    DisplayName: Yup.string().required(
      "Vendor Display Name is a required field."
    ),
    SourceofSupply: Yup.string().required(
      "Source of Supply is a required field."
    ),
    GSTTreatment: Yup.string().required("GST Treatment is a required field."),
  })

  const formik = useFormik({
    validationSchema: validationSchema,
    onSubmit: (values, formikHelpers) =>
      handleValidSubmit(values, formikHelpers),
    initialValues: {
      Salutation: "",
      FirstName: "",
      Lastname: "",
      CompanyName: "",
      DisplayName: "",
      VendorEmail: "",
      Mobile: "",
      WorkPhone: "",
      Skype: "",
      Designation: "",
      Department: "",
      Website: "",
      Remark: "",
      CountryCode: "+91",
      ListOfBankAccount: [initListOfBankAccount],
      ListOfContactPerson: [initListOfContactPerson],
      BillingAddressAttention: "",
      BillingAddressCountry: "",
      BillingAddressAddressLine1: "",
      BillingAddressAddressLine2: "",
      BillingAddressAddressLine3: "",
      BillingAddressCity: "",
      BillingAddressState: "",
      BillingAddressZipCode: "",
      BillingAddressMobile: "",
      BillingAddressFax: "",
      ShippingAddressAttention: "",
      ShippingAddressCountry: "",
      ShippingAddressAddressLine1: "",
      ShippingAddressAddressLine2: "",
      ShippingAddressAddressLine3: "",
      ShippingAddressCity: "",
      ShippingAddressState: "",
      ShippingAddressZipCode: "",
      ShippingAddressMobile: "",
      ShippingAddressFax: "",
      GSTTreatment: "",
      GSTN: "",
      PAN: "",
      SourceofSupply: "",
      Currency: "",
      PaymentTerm: "",
      TDS: "",
      TIN: "",
      ServiceTaxNo: "",
      TaxNo: "",
      MSMENo: "",
      OpeningBalance: "",
      CreditLimit: "",
      SkypeNameNumber: "",
      Facebook: "",
      Twitter: "",
      DisplayNameOption: [],
    },
    validateOnBlur: false,
  })

  const {
    setFieldValue,
    values: {
      FirstName,
      Lastname,
      CompanyName,
      GSTN,
      CountryCode,
      DisplayNameOption,
      ListOfBankAccount,
      ListOfContactPerson,
      BillingAddressAttention,
      BillingAddressCountry,
      BillingAddressAddressLine1,
      BillingAddressAddressLine2,
      BillingAddressAddressLine3,
      BillingAddressCity,
      BillingAddressState,
      BillingAddressZipCode,
      BillingAddressMobile,
      BillingAddressFax,
      Facebook,
      Twitter,
    },
  } = formik

  const handleValidSubmit = values => {
    if (
      ListOfBankAccount.filter(
        x =>
          x.AccountNumber == "" || x.ReEnterAccountNumber == "" || x.IFSC == ""
      ).length > 0
    ) {
      console.log("Fill the details of Bank Account.")
      return
    }
  }

  useEffect(() => {
    setFieldValue(
      "DisplayNameOption",
      FirstName != "" && Lastname != "" && CompanyName != ""
        ? [
            {
              label: FirstName + " " + Lastname,
              value: FirstName + " " + Lastname,
            },
            {
              label: Lastname + " " + FirstName,
              value: Lastname + " " + FirstName,
            },
            { label: CompanyName, value: CompanyName },
          ]
        : FirstName === "" && Lastname != "" && CompanyName != ""
        ? [
            {
              label: Lastname + " " + FirstName,
              value: Lastname + " " + FirstName,
            },
            { label: CompanyName, value: CompanyName },
          ]
        : Lastname === "" && FirstName != "" && CompanyName != ""
        ? [
            {
              label: FirstName + " " + Lastname,
              value: FirstName + " " + Lastname,
            },
            { label: CompanyName, value: CompanyName },
          ]
        : FirstName != "" && Lastname != "" && CompanyName === ""
        ? [
            {
              label: FirstName + " " + Lastname,
              value: FirstName + " " + Lastname,
            },
            {
              label: Lastname + " " + FirstName,
              value: Lastname + " " + FirstName,
            },
          ]
        : FirstName === "" && Lastname != "" && CompanyName === ""
        ? [
            {
              label: Lastname + " " + FirstName,
              value: Lastname + " " + FirstName,
            },
          ]
        : Lastname === "" && FirstName != "" && CompanyName === ""
        ? [
            {
              label: FirstName + " " + Lastname,
              value: FirstName + " " + Lastname,
            },
          ]
        : FirstName === "" && Lastname === "" && CompanyName != ""
        ? [{ label: CompanyName, value: CompanyName }]
        : []
    )
  }, [FirstName, Lastname, CompanyName])

  const AddContactPerson = () => {
    setFieldValue("ListOfContactPerson", [
      ...ListOfContactPerson,
      {
        Salutation: "",
        Firstname: "",
        LastName: "",
        EmailAddress: "",
        WorkPhone: "",
        Mobile: "",
      },
    ])
  }

  const SalutationOption = [
    { label: "Mr.", value: 1 },
    { label: "Ms.", value: 2 },
    { label: "Mrs.", value: 3 },
  ]
  const GSTTreatmentOption = [
    { label: "UGST", value: 1 },
    { label: "IGST", value: 2 },
    { label: "SGST", value: 3 },
  ]

  const StateOption = [
    { label: "Gujarat", value: 1 },
    { label: "Rajasthan", value: 2 },
    { label: "Maharashtra", value: 3 },
    { label: "TamilNadu", value: 3 },
    { label: "Haryana", value: 3 },
  ]
  const CurrencyOption = [
    { label: "Indian Rupee (₹)", value: 1 },
    { label: "United States Dollar ($)", value: 2 },
    { label: "Dinar (KD)", value: 3 },
  ]

  const PaymentTermOption = [
    { label: "PIA: Payment in advance", value: 1 },
    {
      label:
        "Net 7, 10, 15, 30, 60, or 90: Payment expected within 7, 10, 15, 30, 60, or 90 days after the invoice date",
      value: 2,
    },
    { label: "EOM: End of month", value: 3 },
    { label: "21 MFI: 21st of the month following invoice date", value: 4 },
    { label: "COD: Cash on delivery", value: 5 },
    { label: "CND: Cash next delivery", value: 6 },
  ]
  const TDSOption = [
    { label: "10%", value: 1 },
    { label: "20%", value: 2 },
    { label: "30%", value: 3 },
  ]

  const CountryOption = [
    { label: "India", value: 1 },
    { label: "United State of America", value: 2 },
    { label: "Kuwait", value: 3 },
  ]

  const delete_ContactPerson = index => {
    setFieldValue(
      "ListOfContactPerson",
      ListOfContactPerson.filter((element, i) => i !== index)
    )
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>{"Add Vendor"} | Katlax OMS</title>
        </MetaTags>

        <Container fluid>
          <Row className="mt-3">
            <Col lg={6}>
              <div className="mt-2" style={{ fontSize: "large" }}>
                <b>Add Vendor</b>
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
                          <div className="mt-2" style={{ color: "#000000" }}>
                            Primary Contact
                          </div>
                        </Col>
                        <Col lg={2}>
                          <Field
                            name="Salutation"
                            placeholder={"Salutation"}
                            component={CustomSelect}
                            options={SalutationOption}
                            maxLength={50}
                          />
                        </Col>
                        <Col lg={2}>
                          <Field
                            type="text"
                            name="FirstName"
                            placeholder={"First Name"}
                            component={CustomInput}
                          />
                        </Col>
                        <Col lg={2}>
                          <Field
                            type="text"
                            name="Lastname"
                            placeholder={"Last Name"}
                            component={CustomInput}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={2}>
                          <div className="mt-2" style={{ color: "#000000" }}>
                            Company Name
                          </div>
                        </Col>
                        <Col lg={4}>
                          <Field
                            type="text"
                            name="CompanyName"
                            placeholder={"Enter Company Name"}
                            component={CustomInput}
                            maxLength={50}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={2}>
                          <div className="mt-2" style={{ color: "#000000" }}>
                            Vendor Display Name{" "}
                            <span className="text-danger">*</span>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <Field
                            name="DisplayName"
                            placeholder={"Select Display Name"}
                            component={CustomSelect}
                            options={DisplayNameOption}
                          />
                        </Col>
                      </Row>

                      <Row>
                        <Col lg={2} style={{ color: "#000000" }}>
                          Vendor Email
                        </Col>
                        <Col lg={4}>
                          <Field
                            type="text"
                            name="VendorEmail"
                            placeholder={"Enter Vendor Email"}
                            component={CustomInput}
                            maxLength={50}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={2}>
                          <div className="mt-4" style={{ color: "#000000" }}>
                            Vendor Phone
                          </div>
                        </Col>

                        <Col lg={3} sm={3} md={3}>
                          <Field
                            name="Mobile"
                            label="Mobile No"
                            placeholder={"Enter Mobile No"}
                            country={country}
                            countryCode={CountryCode}
                            component={CustomPhoneInput}
                            onChange={(value, { countryCode, dialCode }) => {
                              setFieldValue("CountryCode", dialCode)
                              setFieldValue(
                                "Mobile",
                                value.substring(dialCode.toString().length)
                              )
                            }}
                          />
                        </Col>
                        <Col lg={3} sm={3} md={3}>
                          <Field
                            label="Work Phone"
                            name="WorkPhone"
                            placeholder={"Enter Work Phone"}
                            country={country}
                            countryCode={CountryCode}
                            component={CustomPhoneInput}
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

                      <Row>
                        <Col lg={2} style={{ color: "#000000" }}>
                          Skype Name/Number
                        </Col>
                        <Col lg={4}>
                          <Field
                            type="text"
                            name="Skype"
                            placeholder={"Enter Skype Name/Number"}
                            component={CustomInput}
                            maxLength={50}
                            icon={true}
                            iconClass={"mdi mdi-skype"}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={2} style={{ color: "#000000" }}>
                          Designation
                        </Col>
                        <Col lg={4}>
                          <Field
                            type="text"
                            name="Designation"
                            placeholder={"Enter Designation"}
                            component={CustomInput}
                            maxLength={50}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={2} style={{ color: "#000000" }}>
                          Department
                        </Col>
                        <Col lg={4}>
                          <Field
                            type="text"
                            name="Department"
                            placeholder={"Enter Department"}
                            component={CustomInput}
                            maxLength={50}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={2} style={{ color: "#000000" }}>
                          Website
                        </Col>
                        <Col lg={4}>
                          <Field
                            type="text"
                            name="Website"
                            placeholder={"Enter Website"}
                            component={CustomInput}
                            maxLength={50}
                          />
                        </Col>
                      </Row>
                      <hr></hr>
                      <Row>
                        <Col lg={12} sm={12} md={12}>
                          <Nav tabs className="nav-tabs-custom">
                            <NavItem>
                              <NavLink
                                style={{ cursor: "pointer" }}
                                className={classnames({
                                  active: mode === 1,
                                })}
                                onClick={() => {
                                  setMode(1)
                                }}
                              >
                                Other Details
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                style={{ cursor: "pointer" }}
                                className={classnames({
                                  active: mode === 2,
                                })}
                                onClick={() => {
                                  setMode(2)
                                }}
                              >
                                Address
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                style={{ cursor: "pointer" }}
                                className={classnames({
                                  active: mode === 3,
                                })}
                                onClick={() => {
                                  setMode(3)
                                }}
                              >
                                Contact Person
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                style={{ cursor: "pointer" }}
                                className={classnames({
                                  active: mode === 4,
                                })}
                                onClick={() => {
                                  setMode(4)
                                }}
                              >
                                Bank Details
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                style={{ cursor: "pointer" }}
                                className={classnames({
                                  active: mode === 5,
                                })}
                                onClick={() => {
                                  setMode(5)
                                }}
                              >
                                Remarks
                              </NavLink>
                            </NavItem>
                          </Nav>
                          <TabContent
                            activeTab={mode}
                            className="p-3 text-muted"
                          >
                            <TabPane tabId={1}>
                              <Row>
                                <Col lg={2}>
                                  <div
                                    className="mt-2"
                                    style={{ color: "#000000" }}
                                  >
                                    GST Treatment &nbsp;
                                    <span className="text-danger">*</span>
                                  </div>
                                </Col>
                                <Col lg={4}>
                                  <Field
                                    name="GSTTreatment"
                                    placeholder={"GST Treatment"}
                                    component={CustomSelect}
                                    options={GSTTreatmentOption}
                                    maxLength={50}
                                  />
                                </Col>
                              </Row>
                              <Row>
                                <Col lg={2}>
                                  <div
                                    className="mt-2"
                                    style={{ color: "#000000" }}
                                  >
                                    GSTN
                                  </div>
                                </Col>
                                <Col lg={4}>
                                  <InputMask
                                    mask="99aaaaa9999a9a*"
                                    value={GSTN}
                                    name="GSTN"
                                    className="form-control input-color"
                                    style={{
                                      height: "35px",
                                      marginBottom: "18px",
                                      color: "#495057",
                                      font: "revert",
                                    }}
                                    placeholder="Enter GST Number"
                                    onChange={event => {
                                      setFieldValue(
                                        "GSTN",
                                        event.target.value?.toUpperCase()
                                      )
                                      setFieldValue(
                                        "PAN",
                                        event.target.value
                                          ?.toUpperCase()
                                          .slice(2, 12)
                                      )
                                    }}
                                  >
                                    {inputProps => (
                                      <MaterialInput
                                        {...inputProps}
                                        type="tel"
                                        disableUnderline
                                      />
                                    )}
                                  </InputMask>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg={2}>
                                  <div
                                    className="mt-2"
                                    style={{ color: "#000000" }}
                                  >
                                    PAN
                                  </div>
                                </Col>
                                <Col lg={4}>
                                  <Field
                                    type="text"
                                    name="PAN"
                                    placeholder={"Enter PAN"}
                                    component={CustomInput}
                                  />
                                </Col>
                              </Row>
                              <Row>
                                <Col lg={2}>
                                  <div
                                    className="mt-2"
                                    style={{ color: "#000000" }}
                                  >
                                    Source of Supply{" "}
                                    <span className="text-danger">*</span>
                                  </div>
                                </Col>
                                <Col lg={4}>
                                  <Field
                                    name="SourceofSupply"
                                    placeholder={"Select Source of Supply"}
                                    component={CustomSelect}
                                    options={StateOption}
                                  />
                                </Col>
                              </Row>
                              <Row>
                                <Col lg={2}>
                                  <div
                                    className="mt-2"
                                    style={{ color: "#000000" }}
                                  >
                                    Currency
                                  </div>
                                </Col>
                                <Col lg={4}>
                                  <Field
                                    name="Currency"
                                    placeholder={"Select Currency"}
                                    component={CustomSelect}
                                    options={CurrencyOption}
                                  />
                                </Col>
                              </Row>
                              <Row>
                                <Col lg={2}>
                                  <div
                                    className="mt-2"
                                    style={{ color: "#000000" }}
                                  >
                                    Payment Term
                                  </div>
                                </Col>
                                <Col lg={4}>
                                  <Field
                                    name="PaymentTerm"
                                    placeholder={"Select Payment Term"}
                                    component={CustomSelect}
                                    options={PaymentTermOption}
                                  />
                                </Col>
                              </Row>
                              <Row>
                                <Col lg={2}>
                                  <div
                                    className="mt-2"
                                    style={{ color: "#000000" }}
                                  >
                                    TDS
                                  </div>
                                </Col>
                                <Col lg={4}>
                                  <Field
                                    name="TDS"
                                    placeholder={"Select TDS"}
                                    component={CustomSelect}
                                    options={TDSOption}
                                  />
                                </Col>
                              </Row>
                              <Row>
                                <Col lg={2}>
                                  <div
                                    className="mt-2"
                                    style={{ color: "#000000" }}
                                  >
                                    TIN No.
                                  </div>
                                </Col>
                                <Col lg={4}>
                                  <Field
                                    type="text"
                                    name="TIN"
                                    placeholder={"Enter TIN No."}
                                    component={CustomInput}
                                  />
                                </Col>
                              </Row>{" "}
                              <Row>
                                <Col lg={2}>
                                  <div
                                    className="mt-2"
                                    style={{ color: "#000000" }}
                                  >
                                    Service Tax No.
                                  </div>
                                </Col>
                                <Col lg={4}>
                                  <Field
                                    type="text"
                                    name="ServiceTaxNo"
                                    placeholder={"Enter Service Tax No"}
                                    component={CustomInput}
                                  />
                                </Col>
                              </Row>{" "}
                              <Row>
                                <Col lg={2}>
                                  <div
                                    className="mt-2"
                                    style={{ color: "#000000" }}
                                  >
                                    Tax No.
                                  </div>
                                </Col>
                                <Col lg={4}>
                                  <Field
                                    type="text"
                                    name="TaxNo"
                                    placeholder={"Enter Tax No"}
                                    component={CustomInput}
                                  />
                                </Col>
                              </Row>{" "}
                              <Row>
                                <Col lg={2}>
                                  <div
                                    className="mt-2"
                                    style={{ color: "#000000" }}
                                  >
                                    MSME No.
                                  </div>
                                </Col>
                                <Col lg={4}>
                                  <Field
                                    type="text"
                                    name="MSMENo"
                                    placeholder={"Enter MSME No"}
                                    component={CustomInput}
                                  />
                                </Col>
                              </Row>{" "}
                              <Row>
                                <Col lg={2}>
                                  <div
                                    className="mt-2"
                                    style={{ color: "#000000" }}
                                  >
                                    Opening Balance
                                  </div>
                                </Col>
                                <Col lg={4}>
                                  <Field
                                    type="number"
                                    name="OpeningBalance"
                                    placeholder={"Enter Opening Balance"}
                                    component={CustomInput}
                                    onChange={e => {
                                      setFieldValue(
                                        "OpeningBalance",
                                        e.target.value.slice(0, 7)
                                      )
                                    }}
                                  />
                                </Col>
                              </Row>{" "}
                              <Row>
                                <Col lg={2}>
                                  <div
                                    className="mt-2"
                                    style={{ color: "#000000" }}
                                  >
                                    Credit Limit
                                  </div>
                                </Col>
                                <Col lg={4}>
                                  <Field
                                    type="text"
                                    name="CreditLimit"
                                    placeholder={"Enter Credit Limit"}
                                    component={CustomInput}
                                  />
                                </Col>
                              </Row>{" "}
                              <Row>
                                <Col lg={2}>
                                  <div
                                    className="mt-2"
                                    style={{ color: "#000000" }}
                                  >
                                    Skype Name/Number
                                  </div>
                                </Col>
                                <Col lg={4}>
                                  <Field
                                    type="text"
                                    name="SkypeNameNumber"
                                    placeholder={"Enter Skype Name/Number"}
                                    component={CustomInput}
                                    icon={true}
                                    iconClass={"mdi mdi-skype"}
                                  />
                                </Col>
                              </Row>{" "}
                              <Row>
                                <Col lg={2}>
                                  <div
                                    className="mt-2"
                                    style={{ color: "#000000" }}
                                  >
                                    Facebook
                                  </div>
                                </Col>
                                <Col lg={4}>
                                  <Field
                                    type="text"
                                    name="Facebook"
                                    placeholder={"Enter Facebook"}
                                    component={CustomInput}
                                    icon={true}
                                    iconClass={"mdi mdi-facebook"}
                                  />
                                </Col>
                              </Row>
                              <Row
                                style={{
                                  marginTop: "-15px",
                                  marginBottom: "8px",
                                }}
                              >
                                <Col lg={2}></Col>
                                <Col lg={4}>
                                  <Link
                                    to={`https://www.facebook.com/${Facebook}`}
                                    target="_blank"
                                    style={{
                                      color: "skyblue",
                                    }}
                                  >
                                    {`https://www.facebook.com/${Facebook}`}
                                  </Link>
                                </Col>
                              </Row>{" "}
                              <Row>
                                <Col lg={2}>
                                  <div
                                    className="mt-2"
                                    style={{ color: "#000000" }}
                                  >
                                    Twitter
                                  </div>
                                </Col>
                                <Col lg={4}>
                                  <Field
                                    type="text"
                                    name="Twitter"
                                    placeholder={"Enter Twitter"}
                                    component={CustomInput}
                                    // style={
                                    //   {
                                    //      marginBottom: "-16px",
                                    //      marginTop: "10px",
                                    //   }
                                    // }
                                    icon={true}
                                    iconClass={"mdi mdi-twitter"}
                                  />
                                </Col>
                              </Row>
                              <Row
                                style={{
                                  marginTop: "-15px",
                                  marginBottom: "8px",
                                }}
                              >
                                <Col lg={2}></Col>
                                <Col lg={4}>
                                  <Link
                                    to={`https://twitter.com/${Twitter}`}
                                    target="_blank"
                                    style={{
                                      color: "skyblue",
                                    }}
                                  >
                                    {`https://twitter.com/${Twitter}`}
                                  </Link>
                                </Col>
                              </Row>
                            </TabPane>
                            <TabPane tabId={2}>
                              <Row>
                                <Col lg={6}>
                                  <Row className="mb-2">
                                    <Col>
                                      <div
                                        style={{
                                          fontSize: "17px",
                                          color: "black",
                                        }}
                                      >
                                        <b>Billing Address</b>
                                      </div>
                                    </Col>
                                  </Row>
                                  <hr></hr>
                                  <Row>
                                    <Col lg={4}>
                                      <div
                                        className="mt-2"
                                        style={{ color: "#000000" }}
                                      >
                                        Attention
                                      </div>
                                    </Col>
                                    <Col lg={8}>
                                      <Field
                                        name="BillingAddressAttention"
                                        placeholder={"Enter Attention"}
                                        component={CustomInput}
                                        maxLength={50}
                                      />
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col lg={4}>
                                      <div
                                        className="mt-2"
                                        style={{ color: "#000000" }}
                                      >
                                        Country/Religion
                                      </div>
                                    </Col>
                                    <Col lg={8}>
                                      <Field
                                        name="BillingAddressCountry"
                                        placeholder={"Select County/religion"}
                                        component={CustomSelect}
                                        options={CountryOption}
                                      />
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col lg={4}>
                                      <div
                                        className="mt-2"
                                        style={{ color: "#000000" }}
                                      >
                                        Address Line 1
                                      </div>
                                    </Col>
                                    <Col lg={8}>
                                      <Field
                                        text="textarea"
                                        name="BillingAddressAddressLine1"
                                        placeholder={"Enter  Address Line 1"}
                                        component={CustomInput}
                                        maxLength={50}
                                      />
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col lg={4}>
                                      <div
                                        className="mt-2"
                                        style={{ color: "#000000" }}
                                      >
                                        Address Line 2
                                      </div>
                                    </Col>
                                    <Col lg={8}>
                                      <Field
                                        text="textarea"
                                        name="BillingAddressAddressLine2"
                                        placeholder={"Enter  Address Line 2"}
                                        component={CustomInput}
                                        maxLength={50}
                                      />
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col lg={4}>
                                      <div
                                        className="mt-2"
                                        style={{ color: "#000000" }}
                                      >
                                        Address Line 3
                                      </div>
                                    </Col>
                                    <Col lg={8}>
                                      <Field
                                        text="textarea"
                                        name="BillingAddressAddressLine3"
                                        placeholder={"Enter  Address Line 3"}
                                        component={CustomInput}
                                        maxLength={50}
                                      />
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col lg={4}>
                                      <div
                                        className="mt-2"
                                        style={{ color: "#000000" }}
                                      >
                                        City
                                      </div>
                                    </Col>
                                    <Col lg={8}>
                                      <Field
                                        name="BillingAddressCity"
                                        placeholder={"Enter City"}
                                        component={CustomInput}
                                        maxLength={50}
                                      />
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col lg={4}>
                                      <div
                                        className="mt-2"
                                        style={{ color: "#000000" }}
                                      >
                                        State
                                      </div>
                                    </Col>
                                    <Col lg={8}>
                                      <Field
                                        name="BillingAddressState"
                                        placeholder={"Select State"}
                                        component={CustomSelect}
                                        options={StateOption}
                                      />
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col lg={4}>
                                      <div
                                        className="mt-2"
                                        style={{ color: "#000000" }}
                                      >
                                        Zip Code
                                      </div>
                                    </Col>
                                    <Col lg={8}>
                                      <Field
                                        name="BillingAddressZipCode"
                                        placeholder={"Enter Zip Code"}
                                        component={CustomInput}
                                        maxLength={50}
                                      />
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col lg={4}>
                                      <div
                                        className="mt-2"
                                        style={{ color: "#000000" }}
                                      >
                                        Phone
                                      </div>
                                    </Col>

                                    <Col lg={8}>
                                      <Field
                                        name="BillingAddressMobile"
                                        placeholder={"Enter Phone No"}
                                        country={country}
                                        countryCode={CountryCode}
                                        component={CustomPhoneInput}
                                        onChange={(
                                          value,
                                          { countryCode, dialCode }
                                        ) => {
                                          setFieldValue("CountryCode", dialCode)
                                          setFieldValue(
                                            "BillingAddressMobile",
                                            value.substring(
                                              dialCode.toString().length
                                            )
                                          )
                                        }}
                                        required
                                      />
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col lg={4}>
                                      <div
                                        className="mt-2"
                                        style={{ color: "#000000" }}
                                      >
                                        Fax
                                      </div>
                                    </Col>
                                    <Col lg={8}>
                                      <Field
                                        name="BillingAddressFax"
                                        placeholder={"Enter Fax"}
                                        component={CustomInput}
                                        maxLength={50}
                                      />
                                    </Col>
                                  </Row>
                                </Col>
                                <Col lg={6}>
                                  <Row className="mb-2">
                                    <Col lg={6}>
                                      <div
                                        style={{
                                          fontSize: "17px",
                                          color: "black",
                                        }}
                                      >
                                        <b>Shipping Address</b>
                                      </div>
                                    </Col>
                                    <Col lg={6}>
                                      <div
                                        style={{
                                          textAlign: "right",
                                          color: "blue",
                                          cursor: "pointer",
                                        }}
                                        onClick={() => {
                                          setFieldValue(
                                            "ShippingAddressAttention",
                                            BillingAddressAttention
                                          )
                                          setFieldValue(
                                            "ShippingAddressCountry",
                                            BillingAddressCountry
                                          )
                                          setFieldValue(
                                            "ShippingAddressAddressLine1",
                                            BillingAddressAddressLine1
                                          )
                                          setFieldValue(
                                            "ShippingAddressAddressLine2",
                                            BillingAddressAddressLine2
                                          )
                                          setFieldValue(
                                            "ShippingAddressAddressLine3",
                                            BillingAddressAddressLine3
                                          )
                                          setFieldValue(
                                            "ShippingAddressCity",
                                            BillingAddressCity
                                          )
                                          setFieldValue(
                                            "ShippingAddressState",
                                            BillingAddressState
                                          )
                                          setFieldValue(
                                            "ShippingAddressZipCode",
                                            BillingAddressZipCode
                                          )
                                          setFieldValue(
                                            "ShippingAddressMobile",
                                            BillingAddressMobile
                                          )
                                          setFieldValue(
                                            "ShippingAddressFax",
                                            BillingAddressFax
                                          )
                                        }}
                                      >
                                        <i class="fas fa-arrow-down"></i> &nbsp;
                                        Copy Billing Address
                                      </div>
                                    </Col>
                                  </Row>
                                  <hr></hr>
                                  <Row>
                                    <Col lg={4}>
                                      <div
                                        className="mt-2"
                                        style={{ color: "#000000" }}
                                      >
                                        Attention
                                      </div>
                                    </Col>
                                    <Col lg={8}>
                                      <Field
                                        name="ShippingAddressAttention"
                                        placeholder={"Enter Attention"}
                                        component={CustomInput}
                                        maxLength={50}
                                      />
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col lg={4}>
                                      <div
                                        className="mt-2"
                                        style={{ color: "#000000" }}
                                      >
                                        Country/Religion
                                      </div>
                                    </Col>
                                    <Col lg={8}>
                                      <Field
                                        name="ShippingAddressCountry"
                                        placeholder={"Select County/religion"}
                                        component={CustomSelect}
                                        options={CountryOption}
                                      />
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col lg={4}>
                                      <div
                                        className="mt-2"
                                        style={{ color: "#000000" }}
                                      >
                                        Address Line 1
                                      </div>
                                    </Col>
                                    <Col lg={8}>
                                      <Field
                                        text="textarea"
                                        name="ShippingAddressAddressLine1"
                                        placeholder={"Enter  Address Line 1"}
                                        component={CustomInput}
                                        maxLength={50}
                                      />
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col lg={4}>
                                      <div
                                        className="mt-2"
                                        style={{ color: "#000000" }}
                                      >
                                        Address Line 2
                                      </div>
                                    </Col>
                                    <Col lg={8}>
                                      <Field
                                        text="textarea"
                                        name="ShippingAddressAddressLine2"
                                        placeholder={"Enter  Address Line 2"}
                                        component={CustomInput}
                                        maxLength={50}
                                      />
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col lg={4}>
                                      <div
                                        className="mt-2"
                                        style={{ color: "#000000" }}
                                      >
                                        Address Line 3
                                      </div>
                                    </Col>
                                    <Col lg={8}>
                                      <Field
                                        text="textarea"
                                        name="ShippingAddressAddressLine3"
                                        placeholder={"Enter  Address Line 3"}
                                        component={CustomInput}
                                        maxLength={50}
                                      />
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col lg={4}>
                                      <div
                                        className="mt-2"
                                        style={{ color: "#000000" }}
                                      >
                                        City
                                      </div>
                                    </Col>
                                    <Col lg={8}>
                                      <Field
                                        name="ShippingAddressCity"
                                        placeholder={"Enter City"}
                                        component={CustomInput}
                                        maxLength={50}
                                      />
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col lg={4}>
                                      <div
                                        className="mt-2"
                                        style={{ color: "#000000" }}
                                      >
                                        State
                                      </div>
                                    </Col>
                                    <Col lg={8}>
                                      <Field
                                        name="ShippingAddressState"
                                        placeholder={"Select State"}
                                        component={CustomSelect}
                                        options={StateOption}
                                      />
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col lg={4}>
                                      <div
                                        className="mt-2"
                                        style={{ color: "#000000" }}
                                      >
                                        Zip Code
                                      </div>
                                    </Col>
                                    <Col lg={8}>
                                      <Field
                                        name="ShippingAddressZipCode"
                                        placeholder={"Enter Zip Code"}
                                        component={CustomInput}
                                        maxLength={50}
                                      />
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col lg={4}>
                                      <div
                                        className="mt-2"
                                        style={{ color: "#000000" }}
                                      >
                                        Phone
                                      </div>
                                    </Col>

                                    <Col lg={8}>
                                      <Field
                                        name="ShippingAddressMobile"
                                        placeholder={"Enter Phone No"}
                                        country={country}
                                        countryCode={CountryCode}
                                        component={CustomPhoneInput}
                                        onChange={(
                                          value,
                                          { countryCode, dialCode }
                                        ) => {
                                          setFieldValue("CountryCode", dialCode)
                                          setFieldValue(
                                            "Mobile",
                                            value.substring(
                                              dialCode.toString().length
                                            )
                                          )
                                        }}
                                        required
                                      />
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col lg={4}>
                                      <div
                                        className="mt-2"
                                        style={{ color: "#000000" }}
                                      >
                                        Fax
                                      </div>
                                    </Col>
                                    <Col lg={8}>
                                      <Field
                                        name="ShippingAddressFax"
                                        placeholder={"Enter Fax"}
                                        component={CustomInput}
                                        maxLength={50}
                                      />
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                            </TabPane>
                            <TabPane tabId={3}>
                              {/* <div
                                className="table-responsive"
                                style={{ zIndex: "9 !important" }}
                              >
                                <table className="table table-bordered mb-0">
                                  <thead>
                                    <tr className="table-light">
                                      <th style={{ minWidth: "250px" }}>
                                        Salutation
                                      </th>
                                      <th style={{ minWidth: "250px" }}>
                                        First Name
                                      </th>
                                      <th style={{ minWidth: "250px" }}>
                                        Last Name
                                      </th>
                                      <th style={{ minWidth: "250px" }}>
                                        Email Address
                                      </th>
                                      <th style={{ minWidth: "250px" }}>
                                        Work Phone
                                      </th>
                                      <th style={{ minWidth: "250px" }}>
                                        Mobile
                                      </th>
                                      <th
                                        style={{
                                          borderBlockColor: "white",
                                          borderColor: "white",
                                          backgroundColor: "white",
                                        }}
                                      ></th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {ListOfContactPerson &&
                                      ListOfContactPerson.map(
                                        (contactPerson, index) => (
                                          <tr>
                                            <td>
                                              <select
                                                class="form-control"
                                                name={`ListOfContactPerson.[${index}].ContactPersonSalutation`}
                                              >
                                                <option>
                                                  Select Salutation
                                                </option>
                                                {SalutationOption?.map(
                                                  (x, i) => {
                                                    return (
                                                      <option
                                                        key={i}
                                                        value={x.value}
                                                      >
                                                        {x.label}
                                                      </option>
                                                    )
                                                  }
                                                )}
                                              </select>
                                              // <Field
                                              //   name={`ListOfContactPerson.[${index}].ContactPersonSalutation`}
                                              //   placeholder={"Salutation"}
                                              //   component={CustomSelect}
                                              //   options={SalutationOption}
                                              //   isClearable={false}
                                              //   // style={{
                                              //   //   width: "150px !important",
                                              //   // }}
                                              // />
                                            </td>
                                            <td>
                                              <Field
                                                type="text"
                                                name={`ListOfContactPerson.[${index}].FirstName`}
                                                placeholder={"First Name"}
                                                component={CustomInput}
                                                // style={{ width: "150px" }}
                                              />
                                            </td>
                                            <td>
                                              <Field
                                                type="text"
                                                name={`ListOfContactPerson.[${index}].LastName`}
                                                placeholder={"Last Name"}
                                                component={CustomInput}
                                                // style={{ width: "150px" }}
                                              />
                                            </td>
                                            <td>
                                              <Field
                                                type="text"
                                                name={`ListOfContactPerson.[${index}].Email`}
                                                placeholder={"Email"}
                                                component={CustomInput}
                                                // style={{ width: "180px" }}
                                              />
                                            </td>
                                            <td>
                                              <Field
                                                name={`ListOfContactPerson.[${index}].Mobile`}
                                                placeholder={"Enter Mobile No"}
                                                country={country}
                                                countryCode={CountryCode}
                                                component={CustomPhoneInput}
                                                onChange={(
                                                  value,
                                                  { countryCode, dialCode }
                                                ) => {
                                                  setFieldValue(
                                                    "CountryCode",
                                                    dialCode
                                                  )
                                                  setFieldValue(
                                                    "Mobile",
                                                    value.substring(
                                                      dialCode.toString().length
                                                    )
                                                  )
                                                }}
                                                // style={{ width: "175px" }}
                                              />
                                            </td>
                                            <td>
                                              <Field
                                                name={`ListOfContactPerson.[${index}].WorkPhone`}
                                                placeholder={"Enter Work Phone"}
                                                country={country}
                                                countryCode={CountryCode}
                                                component={CustomPhoneInput}
                                                onChange={(
                                                  value,
                                                  { countryCode, dialCode }
                                                ) => {
                                                  setFieldValue(
                                                    "CountryCode",
                                                    dialCode
                                                  )
                                                  setFieldValue(
                                                    "WorkPhone",
                                                    value.substring(
                                                      dialCode.toString().length
                                                    )
                                                  )
                                                }}
                                                // style={{ width: "175px" }}
                                              />
                                            </td>
                                            <td
                                              style={{
                                                borderBlockColor: "white",
                                                borderColor: "white",
                                              }}
                                            >
                                              <i
                                                class="fas fa-times-circle"
                                                style={{
                                                  color: "red",
                                                  marginTop: "12px",
                                                }}
                                                onClick={() => {
                                                  delete_ContactPerson(index)
                                                }}
                                              ></i>
                                            </td>
                                          </tr>
                                        )
                                      )}
                                  </tbody>
                                </table>
                              </div>{" "} */}
                              {ListOfContactPerson &&
                                ListOfContactPerson.map(
                                  (contactPerson, index) => (
                                    <>
                                      <Row>
                                        <Col lg={3}>
                                          <Field
                                            label="Salutation"
                                            name={`ListOfContactPerson.[${index}].ContactPersonSalutation`}
                                            placeholder={"Salutation"}
                                            component={CustomSelect}
                                            options={SalutationOption}
                                            isClearable={false}
                                            // style={{
                                            //   width: "150px !important",
                                            // }}
                                          />
                                        </Col>
                                        <Col lg={3}>
                                          <Field
                                            label="First Name"
                                            type="text"
                                            name={`ListOfContactPerson.[${index}].FirstName`}
                                            placeholder={"First Name"}
                                            component={CustomInput}
                                            // style={{ width: "150px" }}
                                          />
                                        </Col>
                                        <Col lg={3}>
                                          <Field
                                            label="Last Name"
                                            type="text"
                                            name={`ListOfContactPerson.[${index}].LastName`}
                                            placeholder={"Last Name"}
                                            component={CustomInput}
                                            // style={{ width: "150px" }}
                                          />
                                        </Col>
                                        <Col lg={3}>
                                          <Field
                                            label="Email"
                                            type="text"
                                            name={`ListOfContactPerson.[${index}].Email`}
                                            placeholder={"Email"}
                                            component={CustomInput}
                                            // style={{ width: "180px" }}
                                          />
                                        </Col>
                                        <Col lg={3}>
                                          <Field
                                            label="Mobile No."
                                            name={`ListOfContactPerson.[${index}].Mobile`}
                                            placeholder={"Enter Mobile No"}
                                            country={country}
                                            countryCode={CountryCode}
                                            component={CustomPhoneInput}
                                            onChange={(
                                              value,
                                              { countryCode, dialCode }
                                            ) => {
                                              setFieldValue(
                                                "CountryCode",
                                                dialCode
                                              )
                                              setFieldValue(
                                                "Mobile",
                                                value.substring(
                                                  dialCode.toString().length
                                                )
                                              )
                                            }}
                                            // style={{ width: "175px" }}
                                          />
                                        </Col>
                                        <Col lg={3}>
                                          <Field
                                            label="Work Phone"
                                            name={`ListOfContactPerson.[${index}].WorkPhone`}
                                            placeholder={"Enter Work Phone"}
                                            country={country}
                                            countryCode={CountryCode}
                                            component={CustomPhoneInput}
                                            onChange={(
                                              value,
                                              { countryCode, dialCode }
                                            ) => {
                                              setFieldValue(
                                                "CountryCode",
                                                dialCode
                                              )
                                              setFieldValue(
                                                "WorkPhone",
                                                value.substring(
                                                  dialCode.toString().length
                                                )
                                              )
                                            }}
                                            // style={{ width: "175px" }}
                                          />
                                        </Col>
                                        <Col
                                          lg={1}
                                          style={{ textAlign: "end" }}
                                        >
                                          <div className="d-grid">
                                            <Link
                                              data-repeater-delete
                                              style={{
                                                color: "#bbbcc6",
                                                marginTop: "35px",
                                              }}
                                              value="Delete"
                                              onClick={() =>
                                                delete_ContactPerson(index)
                                              }
                                            >
                                              <i className="ti-trash"></i>{" "}
                                              Delete
                                            </Link>
                                          </div>
                                        </Col>
                                      </Row>
                                      <hr></hr>
                                    </>
                                  )
                                )}
                              <Row className="mt-3">
                                <Col lg={12} style={{ textAlign: "left" }}>
                                  <Link
                                    onClick={() => {
                                      AddContactPerson()
                                    }}
                                  >
                                    <i className="fas fa-plus"></i> &nbsp; Add
                                    Contact Person
                                  </Link>
                                </Col>
                              </Row>
                            </TabPane>
                            <TabPane tabId={4}>
                              <FieldArray
                                name="ListOfBankAccount"
                                render={arrayHelpers => {
                                  return (
                                    <Fragment>
                                      {ListOfBankAccount?.map(
                                        (BankAccount, index) => (
                                          <div
                                            data-repeater-list="group-a"
                                            key={index}
                                          >
                                            <div data-repeater-item>
                                              <Row className="mb-2">
                                                <Col>
                                                  <div
                                                    style={{
                                                      fontSize: "17px",
                                                      color: "black",
                                                    }}
                                                  >
                                                    <b>Bank {index + 1} </b>
                                                  </div>
                                                </Col>
                                              </Row>
                                              <Row>
                                                <Col lg={2}>
                                                  <div
                                                    className="mt-2"
                                                    style={{ color: "#000000" }}
                                                  >
                                                    Beneficiary Name
                                                  </div>
                                                </Col>
                                                <Col lg={4}>
                                                  <Field
                                                    type="text"
                                                    name={`ListOfBankAccount.[${index}].BeneficiaryName`}
                                                    placeholder={
                                                      "Enter Beneficiary Name"
                                                    }
                                                    component={CustomInput}
                                                  />
                                                </Col>
                                                {index >= 1 ? (
                                                  <Col
                                                    lg={1}
                                                    style={{ textAlign: "end" }}
                                                  >
                                                    <div className="d-grid">
                                                      <Link
                                                        data-repeater-delete
                                                        style={{
                                                          color: "#bbbcc6",
                                                        }}
                                                        value="Delete"
                                                        onClick={() =>
                                                          arrayHelpers.remove(
                                                            index
                                                          )
                                                        }
                                                      >
                                                        <i className="ti-trash"></i>{" "}
                                                        Delete
                                                      </Link>
                                                    </div>
                                                  </Col>
                                                ) : (
                                                  ""
                                                )}
                                              </Row>
                                              <Row>
                                                <Col lg={2}>
                                                  <div
                                                    className="mt-2"
                                                    style={{ color: "#000000" }}
                                                  >
                                                    Bank Name
                                                  </div>
                                                </Col>
                                                <Col lg={4}>
                                                  <Field
                                                    type="text"
                                                    name={`ListOfBankAccount.[${index}].BankName`}
                                                    placeholder={
                                                      "Enter Bank Name"
                                                    }
                                                    component={CustomInput}
                                                  />
                                                </Col>
                                              </Row>
                                              <Row>
                                                <Col lg={2}>
                                                  <div
                                                    className="mt-2"
                                                    style={{ color: "#000000" }}
                                                  >
                                                    Account Number{" "}
                                                    <span className="text-danger">
                                                      *
                                                    </span>
                                                  </div>
                                                </Col>
                                                <Col lg={4}>
                                                  <Field
                                                    type={
                                                      isAccountNumber
                                                        ? "password"
                                                        : "text"
                                                    }
                                                    name={`ListOfBankAccount.[${index}].AccountNumber`}
                                                    placeholder={
                                                      "Enter Account Number"
                                                    }
                                                    component={CustomInput}
                                                    passwordEye={true}
                                                    setIsPassword={
                                                      setIsAccountNumber
                                                    }
                                                  />
                                                </Col>
                                              </Row>

                                              <Row>
                                                <Col lg={2}>
                                                  <div
                                                    className="mt-2"
                                                    style={{ color: "#000000" }}
                                                  >
                                                    Re-Enter Account Number{" "}
                                                    <span className="text-danger">
                                                      *
                                                    </span>
                                                  </div>
                                                </Col>
                                                <Col lg={4}>
                                                  <Field
                                                    type="text"
                                                    name={`ListOfBankAccount.[${index}].ReEnterAccountNumber`}
                                                    placeholder={
                                                      "Re-Enter Account Number"
                                                    }
                                                    component={CustomInput}
                                                    onChange={e => {
                                                      setFieldValue(
                                                        `ListOfBankAccount.[${index}].ReEnterAccountNumber`,
                                                        e.target.value
                                                      )
                                                      if (
                                                        e.target.value &&
                                                        e.target.value !=
                                                          BankAccount.AccountNumber
                                                      ) {
                                                        setFieldValue(
                                                          `ListOfBankAccount.[${index}].validateReEnterAccountNumber`,
                                                          "Re-Enter Account Number does not match Account Number."
                                                        )
                                                      } else {
                                                        setFieldValue(
                                                          `ListOfBankAccount.[${index}].validateReEnterAccountNumber`,
                                                          ""
                                                        )
                                                      }
                                                    }}
                                                    style={{
                                                      marginBottom: "-16px",
                                                    }}
                                                  />
                                                  <span
                                                    style={{
                                                      color: "#ec4561",
                                                      fontSize: "80%",
                                                    }}
                                                  >
                                                    {
                                                      BankAccount.validateReEnterAccountNumber
                                                    }
                                                  </span>
                                                </Col>
                                              </Row>
                                              <Row>
                                                <Col lg={2}>
                                                  <div
                                                    className="mt-2"
                                                    style={{ color: "#000000" }}
                                                  >
                                                    IFSC{" "}
                                                    <span className="text-danger">
                                                      *
                                                    </span>
                                                  </div>
                                                </Col>
                                                <Col lg={4}>
                                                  <Field
                                                    type="text"
                                                    name={`ListOfBankAccount.[${index}].IFSC`}
                                                    placeholder={"Enter IFSC"}
                                                    component={CustomInput}
                                                    style={{
                                                      marginTop: "10px",
                                                    }}
                                                  />
                                                </Col>
                                              </Row>
                                              <hr></hr>
                                            </div>
                                          </div>
                                        )
                                      )}
                                      <Row>
                                        <Col
                                          lg={12}
                                          style={{ textAlign: "left" }}
                                        >
                                          <Link
                                            onClick={() =>
                                              arrayHelpers.push(
                                                initListOfBankAccount
                                              )
                                            }
                                          >
                                            <i className="fa fa-plus"></i>{" "}
                                            &nbsp; Add New Bank
                                          </Link>
                                        </Col>
                                      </Row>
                                    </Fragment>
                                  )
                                }}
                              ></FieldArray>
                            </TabPane>
                            <TabPane tabId={5}>
                              <Row>
                                <Col lg={6}>
                                  <div className="mb-2">
                                    <text style={{ color: "black" }}>
                                      Remarks
                                    </text>{" "}
                                    (For Internal Use)
                                  </div>
                                  <Field
                                    type="textarea"
                                    name="Remark"
                                    placeholder={"Enter Remark"}
                                    component={CustomInput}
                                    maxLength={100}
                                  />
                                </Col>
                              </Row>
                            </TabPane>
                          </TabContent>
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
                              navigate("/vendors")
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
AddVendor.propTypes = {
  t: PropTypes.any,
}
export default withRouter(withTranslation()(AddVendor))
