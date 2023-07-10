// import PropTypes from 'prop-types';
// import React from "react";
// import { Row, Col, Alert, Card, CardBody, Container, Form, FormFeedback, Label, Input } from "reactstrap";

// // Formik Validation
// import * as Yup from "yup";
// import { useFormik } from "formik";

// // Redux
// import { connect, useDispatch } from "react-redux";

// // import { withRouter, Link } from "react-router-dom"
// import { Link } from 'react-router-dom';
// import withRouter from 'components/Common/withRouter';

// // action
// import { userForgetPassword } from "../../store/actions";

// // import images
// import logoSm from "../../assets/images/logo-sm.png";

// const ForgetPasswordPage = props => {
//   const dispatch = useDispatch();

//   const validation = useFormik({
//     // enableReinitialize : use this flag when initial values needs to be changed
//     enableReinitialize: true,

//     initialValues: {
//       email: '',
//     },
//     validationSchema: Yup.object({
//       email: Yup.string().required("Please Enter Your Email"),
//     }),
//     onSubmit: (values) => {
//       dispatch(userForgetPassword(values, props.history));
//     }
//   });

//   document.title = "Forget Password | Veltrix - React Admin & Dashboard Template";
//   return (
//     <React.Fragment>
//       <div className="home-btn d-none d-sm-block">
//         <Link to="/" className="text-dark">
//           <i className="fas fa-home h2"></i>
//         </Link>
//       </div>
//       <div className="account-pages my-5 pt-5">
//         <Container>
//           <Row className="justify-content-center">
//             <Col md={8} lg={6} xl={4}>
//               <Card className="overflow-hidden">
//                 <div className="bg-primary">
//                   <div className="text-primary text-center p-4">
//                     <h5 className="text-white font-size-20 p-2">Forget Password</h5>
//                     <Link to="/index" className="logo logo-admin">
//                       <img src={logoSm} height="24" alt="logo" />
//                     </Link>
//                   </div>
//                 </div>
//                 <CardBody className="p-4">

//                   {props.forgetError && props.forgetError ? (
//                     <Alert color="danger" style={{ marginTop: "13px" }} className="mt-5">
//                       {props.forgetError}
//                     </Alert>
//                   ) : null}
//                   {props.forgetSuccessMsg ? (
//                     <Alert color="success" style={{ marginTop: "13px" }} className="mt-5">
//                       {props.forgetSuccessMsg}
//                     </Alert>
//                   ) : null}

//                   <Form
//                     onSubmit={(e) => {
//                       e.preventDefault();
//                       validation.handleSubmit();
//                       return false;
//                     }}
//                     className="mt-4">

//                     <div className="mb-3">
//                       <Label className="form-label" htmlor="useremail">Email</Label>
//                       <Input
//                         name="email"
//                         className="form-control"
//                         placeholder="Enter email"
//                         type="email"
//                         onChange={validation.handleChange}
//                         onBlur={validation.handleBlur}
//                         value={validation.values.email || ""}
//                         invalid={
//                           validation.touched.email && validation.errors.email ? true : false
//                         }
//                       />
//                       {validation.touched.email && validation.errors.email ? (
//                         <FormFeedback type="invalid"><div>{validation.errors.email}</div></FormFeedback>
//                       ) : null}
//                     </div>

//                     <div className="row  mb-0">
//                       <div className="col-12 text-end">
//                         <button className="btn btn-primary w-md waves-effect waves-light" type="submit">Reset</button>
//                       </div>
//                     </div>

//                   </Form>
//                 </CardBody>
//               </Card>
//               <div className="mt-5 text-center">
//                 <p>Remember It ? <Link to="/login" className="fw-medium text-primary"> Sign In here </Link> </p>
//                 <p>
//                   © {new Date().getFullYear()} Veltrix. Crafted with{" "}
//                   <i className="mdi mdi-heart text-danger" /> by Themesbrand
//                 </p>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </React.Fragment>
//   );
// };

// ForgetPasswordPage.propTypes = {
//   forgetError: PropTypes.any,
//   forgetSuccessMsg: PropTypes.any,
//   history: PropTypes.object,
//   userForgetPassword: PropTypes.func
// };

// const mapStatetoProps = state => {
//   const { forgetError, forgetSuccessMsg } = state.ForgetPassword;
//   return { forgetError, forgetSuccessMsg };
// };

// export default withRouter(
//   connect(mapStatetoProps, { userForgetPassword })(ForgetPasswordPage)
// );

import PropTypes from "prop-types"
import MetaTags from "react-meta-tags"
import React, { useState } from "react"
import { Row, Col, Alert, Card, CardBody, Container, Form } from "reactstrap"
import { Field, FormikProvider, useFormik } from "formik"
// Redux
import { connect, useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

// action
import { userForgetPassword } from "../../store/actions"

// import images
import logoSm from "../../assets/images/logo-sm.png"
import withRouter from "components/Common/withRouter"

import * as Yup from "yup"
import CustomInput from "Custom/CustomInput"
import OTPInput, { ResendOTP } from "otp-input-react"

const ForgetPasswordPage = props => {
  // function handleValidSubmit(event, values) {
  //   props.userForgetPassword(values, props.history)
  // }

  const dispatch = useDispatch()
  const [oTP, setOTP] = useState("123456")
  const [mode, setMode] = useState(0)
  const [validationMsgOTP, setValidationMsgOTP] = useState("")

  const [isPasswordNew, setIsPasswordNew] = useState(true)
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(true)

  const navigate = useNavigate()

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email or Mobile No is a required field."),
  })

  const formik = useFormik({
    validationSchema: validationSchema,
    onSubmit: (values, formikHelpers) =>
      handleValidSubmit(values, formikHelpers),
    initialValues: {
      email: "admin@themesbrand.com",
    },
    validateOnBlur: false,
  })

  const {} = formik

  const handleValidSubmit = values => {
    // props.userForgetPassword(values, props.history)
    setMode(1)
  }

  const validationSchemaOTP = Yup.object().shape({})

  const formikOTP = useFormik({
    validationSchema: validationSchemaOTP,
    onSubmit: (values, formikHelpers) =>
      handleValidSubmitOTP(values, formikHelpers),
    initialValues: {
      OTP: "",
    },
    validateOnBlur: false,
  })

  const {
    values: { OTP },
  } = formikOTP

  const handleValidSubmitOTP = values => {
    // props.userForgetPassword(values, props.history)
    if (oTP !== "123456") {
      setValidationMsgOTP("OTP is not correct.")
    } else {
      setMode(2)
    }
  }

  const validationSchemaConfirmPassword = Yup.object().shape({
    Password: Yup.string()
      .min(6)
      .max(6)
      .required("Password is a required field."),
    ConfirmPassword: Yup.string()
      .oneOf([Yup.ref("Password"), null], "Passwords must match")
      .required("Confirm Password is a required field."),
  })

  const formikConfirmPassword = useFormik({
    validationSchema: validationSchemaConfirmPassword,
    onSubmit: (values, formikHelpers) =>
      handleValidSubmitConfirmPassword(values, formikHelpers),
    initialValues: {
      Password: "",
      ConfirmPassword: "",
    },
    validateOnBlur: false,
  })

  const {} = formikConfirmPassword

  const handleValidSubmitConfirmPassword = values => {
    navigate("/login")
    // dispatch(userForgetPassword(values, props.history))
  }

  const handleOnChangeOTP = event => {
    setOTP(event)
    setValidationMsgOTP("")
  }

  const renderButton = buttonProps => {
    return (
      <button
        style={{ border: "0px" }}
        {...buttonProps}
        className="btn text-primary"
      >
        {buttonProps.remainingTime !== 0
          ? `${buttonProps.remainingTime} sec to Resend`
          : "Resend OTP"}
      </button>
    )
  }
  const renderTime = () => React.Fragment
  return (
    <React.Fragment>
      <MetaTags>
        <title>Forget Password | Katlax OMS</title>
      </MetaTags>
      {/* <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2"></i>
        </Link>
      </div> */}
      <div className="account-pages my-5 pt-3">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={4}>
              <Card className="overflow-hidden">
                <div className="bg-primary">
                  <div className="text-primary text-center p-2">
                    <h5 className="text-white font-size-20 mt-3">
                      Forget Password
                    </h5>
                    {/* <a href="index.html" className="logo logo-admin">
                      <img src={logoSm} height="24" alt="logo" />
                    </a> */}
                    <p className="text-white-50">
                      {mode === 0
                        ? "Don't worry, just enter email and submit."
                        : mode === 1
                        ? "Enter OTP which is send to your email."
                        : mode === 2
                        ? "Set your new password."
                        : ""}
                    </p>
                  </div>
                </div>
                <CardBody className="p-3">
                  {props.forgetError && props.forgetError ? (
                    <Alert
                      color="danger"
                      style={{ marginTop: "13px" }}
                      className="mt-5"
                    >
                      {props.forgetError}
                    </Alert>
                  ) : null}
                  {props.forgetSuccessMsg ? (
                    <Alert
                      color="success"
                      style={{ marginTop: "13px" }}
                      className="mt-5"
                    >
                      {props.forgetSuccessMsg}
                    </Alert>
                  ) : null}

                  {/* <AvForm
                    className="form-horizontal mt-4"
                    onValidSubmit={(e, v) => handleValidSubmit(e, v)}
                  >
                    <div className="mb-3">
                      <AvField
                        name="email"
                        label="Email"
                        className="form-control"
                        placeholder="Enter email"
                        type="email"
                        required
                      />
                    </div>
                    <Row className="mb-3">
                      <Col className="text-end">
                        <button
                          className="btn btn-primary w-md waves-effect waves-light"
                          type="submit"
                        >
                          Reset
                        </button>
                      </Col>
                    </Row>
                  </AvForm> */}
                  {mode === 0 ? (
                    <FormikProvider value={formik}>
                      <Form onSubmit={formik.handleSubmit}>
                        {props.error && typeof props.error === "string" ? (
                          <Alert color="danger">{props.error}</Alert>
                        ) : null}
                        <Row className="mt-4">
                          <Col lg={12}>
                            <Field
                              type="text"
                              label={"Email"}
                              name="email"
                              placeholder={"Enter Email"}
                              component={CustomInput}
                              maxLength={50}
                              required
                            />
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Col className="text-end">
                            <button
                              className="btn btn-primary w-md waves-effect waves-light"
                              type="submit"
                            >
                              Reset
                            </button>
                          </Col>
                        </Row>
                      </Form>
                    </FormikProvider>
                  ) : mode === 1 ? (
                    <FormikProvider value={formikOTP}>
                      <Form onSubmit={formikOTP.handleSubmit}>
                        {/* {props.error && typeof props.error === "string" ? (
                          <Alert color="danger">{props.error}</Alert>
                        ) : null} */}
                        <div>
                          <div
                            className="row branchOTP mt-4 mb-4"
                            style={{ textAlign: "center" }}
                          >
                            <OTPInput
                              style={{ display: "inline", borderRadius: "5px" }}
                              value={oTP}
                              onChange={handleOnChangeOTP}
                              autoFocus
                              OTPLength={6}
                              otpType="number"
                              disabled={false}
                              validate={{ required: { value: true } }}
                              required={true}
                            />
                            <span
                              style={{
                                marginLeft: "-95px",
                                color: "#ec4561",
                                marginTop: "0.25rem",
                                fontSize: "80%",
                              }}
                            >
                              {validationMsgOTP}
                            </span>
                          </div>
                        </div>
                        <Row className="mb-2">
                          <Col>
                            <ResendOTP
                              renderButton={renderButton}
                              renderTime={renderTime}
                              // onResendClick={() => handleValidSubmitOTP()}
                            />
                          </Col>
                          <Col
                            // style={{ textAlign: "left"}}
                            style={{ marginLeft: "10px" }}
                          >
                            <button
                              className="btn btn-primary w-md waves-effect waves-light"
                              type="Verify"
                            >
                              Verify
                            </button>
                          </Col>
                        </Row>
                      </Form>
                    </FormikProvider>
                  ) : mode === 2 ? (
                    <FormikProvider value={formikConfirmPassword}>
                      <Form
                        onSubmit={formikConfirmPassword.handleSubmit}
                        className="mt-4"
                      >
                        <div className="mb-2 ">
                          <Field
                            type={isPasswordNew ? "password" : "text"}
                            name="Password"
                            label="New Password"
                            placeholder="Enter New Password"
                            component={CustomInput}
                            // icon={true}
                            // iconClass={"mdi mdi-lock"}
                            passwordEye={true}
                            setIsPassword={setIsPasswordNew}
                            required
                          />
                        </div>
                        <div className="mb-2">
                          <Field
                            type={isPasswordConfirm ? "password" : "text"}
                            name="ConfirmPassword"
                            label="Confirm Password"
                            placeholder="Enter Confirm Password"
                            component={CustomInput}
                            // icon={true}
                            // iconClass={"mdi mdi-lock"}
                            passwordEye={true}
                            setIsPassword={setIsPasswordConfirm}
                            required
                          />
                        </div>
                        <Row className="mb-2">
                          <Col style={{ textAlign: "right" }}>
                            <button
                              className="btn btn-primary w-md waves-effect waves-light"
                              type="submit"
                            >
                              Confirm
                            </button>
                          </Col>
                        </Row>
                      </Form>
                    </FormikProvider>
                  ) : (
                    ""
                  )}
                </CardBody>
              </Card>
              <div className="mt-2 text-center">
                <p>
                  Remember Password ?{" "}
                  <Link to="/login" className="fw-medium text-primary">
                    {" "}
                    Login{" "}
                  </Link>{" "}
                </p>
                {/* <p>
                  © {new Date().getFullYear()} Veltrix. Crafted with{" "}
                  <i className="mdi mdi-heart text-danger" /> by Themesbrand
                </p> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

ForgetPasswordPage.propTypes = {
  forgetError: PropTypes.any,
  forgetSuccessMsg: PropTypes.any,
  history: PropTypes.object,
  userForgetPassword: PropTypes.func,
}

const mapStatetoProps = state => {
  const { forgetError, forgetSuccessMsg } = state.ForgetPassword
  return { forgetError, forgetSuccessMsg }
}

export default withRouter(
  connect(mapStatetoProps, { userForgetPassword })(ForgetPasswordPage)
)
