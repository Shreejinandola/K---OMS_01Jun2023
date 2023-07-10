import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import {
  Row,
  Col,
  CardBody,
  Card,
  Container,
  Label,
  Form,
  FormFeedback,
  Input,
} from "reactstrap"

// Redux
import { connect, useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import withRouter from "components/Common/withRouter"

// Formik validation
import * as Yup from "yup"
import { Field, FormikProvider, useFormik } from "formik"

// actions
import { loginUser, apiError } from "../../store/actions"

// import images
import logoSm from "../../assets/images/logo-sm.png"
import CustomInput from "Custom/CustomInput"

const Login = props => {
  const dispatch = useDispatch()

  const [userLogin, setUserLogin] = useState([])

  const { user } = useSelector(state => ({
    user: state.Account.user,
  }))

  useEffect(() => {
    if (user && user) {
      setUserLogin({
        email: user.email,
        password: user.password,
      })
    }
  }, [user])

  // const validation = useFormik({
  //   // enableReinitialize : use this flag when initial values needs to be changed
  //   enableReinitialize: true,

  //   initialValues: {
  //     email: userLogin.email || "admin@themesbrand.com" || "",
  //     password: userLogin.password || "123456" || "",
  //   },
  //   validationSchema: Yup.object({
  //     email: Yup.string().required("Please Enter Your User Name"),
  //     password: Yup.string().required("Please Enter Your Password"),
  //   }),
  //   onSubmit: values => {
  //     dispatch(loginUser(values, props.router.navigate))
  //   },
  // })

  const [isPassword, setIsPassword] = useState(true)

  // const handleValidSubmit = (event, values) => {
  //   props.loginUser(values, props.history)
  // }

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email or Mobile No is a required field."),
    password: Yup.string().required("Password is a required field."),
  })

  const formik = useFormik({
    validationSchema: validationSchema,
    onSubmit: (values, formikHelpers) =>
      handleValidSubmit(values, formikHelpers),
    initialValues: {
      email: userLogin.email || "admin@themesbrand.com" || "",
      password: userLogin.password || "123456" || "",
    },
    validateOnBlur: false,
  })

  const {
    setValues,
    setFieldValue,
    values: { email, password },
  } = formik

  const handleValidSubmit = values => {
    dispatch(loginUser(values, props.router.navigate))
  }

  document.title = "Login | Katlax OMS"
  return (
    <React.Fragment>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={4}>
              <Card className="overflow-hidden">
                <div className="bg-primary">
                  <div className="text-primary text-center p-4">
                    <h5 className="text-white font-size-20">
                      Login to Katlax OMS
                    </h5>

                    <Link to="/" className="logo logo-admin">
                      <img src={logoSm} height="24" alt="logo" />
                    </Link>
                  </div>
                </div>

                <CardBody className="p-4">
                  <div className="p-3">
                    <FormikProvider value={formik}>
                      <Form onSubmit={formik.handleSubmit}>
                        {props.error && typeof props.error === "string" ? (
                          <Alert color="danger">{props.error}</Alert>
                        ) : null}
                        <Row className="mt-4">
                          <Col lg={12}>
                            <Field
                              type="text"
                              label={"Email/Mobile"}
                              name="email"
                              placeholder={"Enter Email/Mobile"}
                              component={CustomInput}
                              maxLength={50}
                              icon={true}
                              iconClass={"mdi mdi-account"}
                              required
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={12}>
                            <Field
                              type={isPassword ? "password" : "text"}
                              label={"Password"}
                              name="password"
                              placeholder={"Enter Password"}
                              component={CustomInput}
                              icon={true}
                              iconClass={"mdi mdi-lock"}
                              passwordEye={true}
                              setIsPassword={setIsPassword}
                              required
                            />
                          </Col>
                          <Col sm={12} className="text-end">
                            <button
                              className="btn btn-primary w-md waves-effect waves-light"
                              type="submit"
                            >
                              Log In
                            </button>
                          </Col>
                        </Row>
                        <Row className="mt-0 mb-0 row">
                          <div className="col-12 mt-2 ">
                            <Link to="/forgot-password">
                              <i className="mdi mdi-lock"></i> Forgot your
                              password?
                            </Link>
                          </div>
                        </Row>
                      </Form>
                    </FormikProvider>
                  </div>
                </CardBody>

                {/* <CardBody className="p-4">
                  <div className="p-3">
                    <Form
                      className="mt-4"
                      onSubmit={e => {
                        e.preventDefault()
                        validation.handleSubmit()
                        return false
                      }}
                      action="#"
                    >
                      <div className="mb-3">
                        <Label className="form-label" htmlFor="username">
                          Username
                        </Label>
                        <Input
                          name="email"
                          className="form-control"
                          placeholder="Enter Username"
                          type="email"
                          id="username"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.email || ""}
                          invalid={
                            validation.touched.email && validation.errors.email
                              ? true
                              : false
                          }
                        />
                        {validation.touched.email && validation.errors.email ? (
                          <FormFeedback type="invalid">
                            {validation.errors.email}
                          </FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-3">
                        <Label className="form-label" htmlFor="userpassword">
                          Password
                        </Label>
                        <Input
                          name="password"
                          value={validation.values.password || ""}
                          type="password"
                          className="form-control"
                          placeholder="Enter Password"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.password &&
                            validation.errors.password
                              ? true
                              : false
                          }
                        />
                        {validation.touched.password &&
                        validation.errors.password ? (
                          <FormFeedback type="invalid">
                            {validation.errors.password}
                          </FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-3 row">
                        <div className="col-sm-6">
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customControlInline"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customControlInline"
                            >
                              Remember me
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-6 text-end">
                          <button
                            className="btn btn-primary w-md waves-effect waves-light"
                            type="submit"
                          >
                            Log In
                          </button>
                        </div>
                      </div>

                      <div className="mt-2 mb-0 row">
                        <div className="col-12 mt-4">
                          <Link to="/forgot-password">
                            <i className="mdi mdi-lock"></i> Forgot your
                            password?
                          </Link>
                        </div>
                      </div>
                    </Form>
                  </div>
                </CardBody> */}
              </Card>
              {/* <div className="mt-5 text-center">
                <p>
                  Don&#39;t have an account ?{" "}
                  <Link to="/register" className="fw-medium text-primary">
                    {" "}
                    Signup now{" "}
                  </Link>{" "}
                </p>
                <p>
                  © {new Date().getFullYear()} Veltrix. Crafted with{" "}
                  <i className="mdi mdi-heart text-danger" /> by Themesbrand
                </p>
              </div> */}
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  const { error } = state.Login
  return { error }
}

export default withRouter(
  connect(mapStateToProps, { loginUser, apiError })(Login)
)

Login.propTypes = {
  error: PropTypes.any,
  history: PropTypes.object,
  loginUser: PropTypes.func,
}
