import React from "react"
// import "bootstrap/dist/css/bootstrap.min.css"
import {
  Card,
  CardBody,
  Container,
  Row,
  Col,
  NavItem,
  Nav,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap"
import { useState } from "react"
import classnames from "classnames"
import { FormikProvider, Field, Form, useFormik } from "formik"
import CustomSelect from "Custom/CustomSelect"
import CustomInput from "Custom/CustomInput"
import CustomPhoneInput from "Custom/CustomPhoneInput"

const ShopOpenTimeOptions = [
  { label: "06:00 AM", value: 1 },
  { label: "07:00 AM", value: 2 },
  { label: "08:00 AM", value: 3 },
  { label: "09:00 AM", value: 4 },
  { label: "10:00 AM", value: 5 },
  { label: "11:00 AM", value: 6 },
  { label: "12:00 PM", value: 7 },
  { label: "01:00 PM", value: 8 },
  { label: "02:00 PM", value: 9 },
  { label: "03:00 PM", value: 10 },
  { label: "04:00 PM", value: 11 },
  { label: "05:00 PM", value: 12 },
  { label: "06:00 PM", value: 13 },
  { label: "07:00 PM", value: 14 },
  { label: "08:00 PM", value: 15 },
  { label: "09:00 PM", value: 16 },
  { label: "10:00 PM", value: 17 },
  { label: "11:00 PM", value: 18 },
  { label: "00:00 AM", value: 19 },
]

const ShopCloseTimeOptions = [
  { label: "06:00 AM", value: 1 },
  { label: "07:00 AM", value: 2 },
  { label: "08:00 AM", value: 3 },
  { label: "09:00 AM", value: 4 },
  { label: "10:00 AM", value: 5 },
  { label: "11:00 AM", value: 6 },
  { label: "12:00 PM", value: 7 },
  { label: "01:00 PM", value: 8 },
  { label: "02:00 PM", value: 9 },
  { label: "03:00 PM", value: 10 },
  { label: "04:00 PM", value: 11 },
  { label: "05:00 PM", value: 12 },
  { label: "06:00 PM", value: 13 },
  { label: "07:00 PM", value: 14 },
  { label: "08:00 PM", value: 15 },
  { label: "09:00 PM", value: 16 },
  { label: "10:00 PM", value: 17 },
  { label: "11:00 PM", value: 18 },
  { label: "00:00 AM", value: 19 },
]

function AddBranch() {
  const [mode, setMode] = useState(1)

  const formik = useFormik({
    onSubmit: (values, formikHelpers) =>
      handleValidSubmit(values, formikHelpers),
    initialValues: {
      StoreName: "",
      BusinessRegistrationNo: "",
      ContactPersonName: "",
      BusinessPhoneNo: "",
      VendorPhoneNo: "",
      ShopOpenTime: "",
      ShopCloseTime: "",
      BusinessCategory: "",
      ReferralCode: "",
    },
  })
  return (
    <React.Fragment>
      <div className="page-content">
        <Container>
          <div className="mt-2" style={{ color: "black" }}>
            <h5>Edit Branch</h5>
            <span>Dashboard &gt; Branch List &gt; Edit Branch</span>
          </div>
          <FormikProvider value={formik}>
            <Form onsubmit={formik.handleSubmit}>
              <Row>
                <Col lg={3}>
                  <Card style={{ borderRadius: 10 }} className="mt-5">
                    <CardBody>
                      <div style={{ color: "black" }}>
                        <h5>Edit Branch</h5>
                      </div>
                      <div>
                        <Nav tabs className="flex-column">
                          <NavItem className="">
                            <NavLink
                              style={{
                                cursor: "pointer",
                                marginTop: 20,
                              }}
                              className={classnames({
                                active: mode === 1,
                              })}
                              onClick={() => {
                                setMode(1)
                              }}
                            >
                              Business Details
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              style={{ cursor: "pointer", marginTop: 10 }}
                              className={classnames({
                                active: mode === 2,
                              })}
                              onClick={() => {
                                setMode(2)
                              }}
                            >
                              Address Details
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              style={{ cursor: "pointer", marginTop: 10 }}
                              className={classnames({
                                active: mode === 3,
                              })}
                              onClick={() => {
                                setMode(3)
                              }}
                            >
                              Upload Image
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              style={{ cursor: "pointer", marginTop: 10 }}
                              className={classnames({
                                active: mode === 4,
                              })}
                              onClick={() => {
                                setMode(4)
                              }}
                            >
                              Business Documents
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              style={{ cursor: "pointer", marginTop: 10 }}
                              className={classnames({
                                active: mode === 5,
                              })}
                              onClick={() => {
                                setMode(5)
                              }}
                            >
                              Paypal Details
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </div>
                    </CardBody>
                  </Card>
                </Col>

                <Col lg={9}>
                  <Card style={{ borderRadius: 10 }} className="mt-5">
                    <CardBody>
                      <div>
                        <TabContent activeTab={mode}>
                          <TabPane tabId={1}>
                            <Row>
                              <Col md={4}>
                                <div className="BusinessDetailsfont mb-2">
                                  Store Name
                                  <span className="text-danger"> *</span>
                                </div>

                                <Field
                                  name="StoreName"
                                  type="text"
                                  component={CustomInput}
                                  placeholder={"Enter Store Name"}
                                />
                              </Col>
                              <Col lg={4}>
                                <div className="BusinessDetailsfont mb-2">
                                  Business Registration No
                                  <span className="text-danger"> *</span>
                                </div>
                                <Field
                                  type="text"
                                  name="BusinessRegistrationNo"
                                  placeholder={"Business Registration No"}
                                  component={CustomInput}
                                />
                              </Col>
                              <Col lg={4}>
                                <div className=" BusinessDetailsfont mb-2">
                                  Contact Persion Name
                                  <span className="text-danger"> *</span>
                                </div>
                                <Field
                                  type="text"
                                  name="ContactPersonName"
                                  placeholder={"Enter Contact Persion Name"}
                                  component={CustomInput}
                                />
                              </Col>
                            </Row>
                            <Row className="mt-2">
                              <Col lg={4}>
                                <div className="BusinessDetailsfont mb-2">
                                  Business Phone No
                                  <span className="text-danger"> *</span>
                                </div>
                                <Field
                                  type="dropdown"
                                  name="BusinessPhoneNo"
                                  placeholder={"+49"}
                                  component={CustomPhoneInput}
                                  //onlyCountries={["gr"]}
                                />
                              </Col>
                              <Col lg={4}>
                                <div className="BusinessDetailsfont">
                                  Vendor Phone No
                                  <span className="text-danger"> *</span>
                                  <input
                                    className="form-check-input ms-4"
                                    style={{ transform: "scale(0.8)" }}
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                  />
                                  <label
                                    className="form-check-label ms-1"
                                    htmlFor="flexCheckDefault"
                                    style={{ fontSize: "smaller" }}
                                  >
                                    Same as Business
                                  </label>
                                </div>
                                <Field
                                  type="dropdown"
                                  name="VendorPhoneNo"
                                  placeholder={"+49"}
                                  component={CustomPhoneInput}
                                  //onlyCountries={["gr"]}
                                />
                              </Col>
                              <Col lg={4}>
                                <div className="BusinessDetailsfont mb-2">
                                  Business Email
                                  <span className="text-danger"> *</span>
                                </div>
                                <Field
                                  className=""
                                  type="text"
                                  name="BusinessEmail"
                                  component={CustomInput}
                                  placeholder={"Enter Business Email"}
                                />
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={4}>
                                <div className="BusinessDetailsfont">
                                  Provide Online Delivery
                                </div>
                                <div class="form-check form-check-inline mt-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio1"
                                    value="option1"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="inlineRadio1"
                                  >
                                    Yes
                                  </label>
                                </div>
                                <div class="form-check form-check-inline mt-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio2"
                                    value="option2"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="inlineRadio2"
                                  >
                                    No
                                  </label>
                                </div>
                              </Col>
                              <Col lg={4}>
                                <div className="BusinessDetailsfont mb-2">
                                  Shop Open Time
                                  <span className="text-danger"> *</span>
                                </div>
                                <Field
                                  name="ShopOpenTime"
                                  placeholder={"Select Shop Open Time"}
                                  component={CustomSelect}
                                  options={ShopOpenTimeOptions}
                                />
                              </Col>
                              <Col lg={4}>
                                <div className="BusinessDetailsfont mb-2">
                                  Shop Close Time
                                  <span className="text-danger"> *</span>
                                </div>
                                <Field
                                  className=""
                                  name="ShopCloseTime"
                                  placeholder={"Select Shop Close Time"}
                                  component={CustomSelect}
                                  options={ShopCloseTimeOptions}
                                />
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={4}>
                                <div className="BusinessDetailsfont">
                                  Provide Cash On Delivery
                                </div>
                                <div class="form-check form-check-inline mt-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio1"
                                    value="option1"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="inlineRadio1"
                                  >
                                    Yes
                                  </label>
                                </div>
                                <div class="form-check form-check-inline mt-2">
                                  <input
                                    class="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio2"
                                    value="option2"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="inlineRadio2"
                                  >
                                    No
                                  </label>
                                </div>
                              </Col>
                              <Col lg={4}>
                                <div className="BusinessDetailsfont mb-2">
                                  Business Category
                                  <span className="text-danger"> *</span>
                                </div>
                                <Field
                                  type="text"
                                  name="BusinessCategory"
                                  component={CustomInput}
                                  placeholder={"Select Category"}
                                />
                              </Col>
                              <Col lg={4}>
                                <div className="BusinessDetailsfont mb-2">
                                  Referral Code
                                </div>
                                <Field
                                  type="text"
                                  name="ReferralCode"
                                  component={CustomInput}
                                  placeholder={"REFERRAL CODE"}
                                />
                              </Col>
                            </Row>
                            <div className="mt-4">
                              <button type="submit" className="btn btn-success">
                                Next
                              </button>
                            </div>
                          </TabPane>
                        </TabContent>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Form>
          </FormikProvider>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default AddBranch
