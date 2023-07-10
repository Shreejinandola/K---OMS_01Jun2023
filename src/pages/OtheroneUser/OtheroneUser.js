import React, { useState, useEffect } from "react"
import { Row, Col, Card, CardBody, Button, Modal } from "reactstrap"
import { FormikProvider, Form, useFormik, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

export default function OtheroneUser() {
  const [modal_center, setmodal_center] = useState(false)
  const [serach, setSerach] = useState("")
  const [page, setPage] = useState("")

  const getData = (page = 1, sizePerPage = 10) => {}

  useEffect(() => {
    getData()
  }, [])

  const validationSchema = Yup.object().shape({
    Email: Yup.string().required("Email is required feild"),
    Role: Yup.string().required("Role is required feild"),
    Salution: Yup.string().required("Salution is required feild"),
    FirstName: Yup.string().required("FirstName is required feild"),
    LastName: Yup.string().required("LastName is required feild"),
    MobileNo: Yup.string().required("Mobile No is required feild"),
    WorkPhone: Yup.string().required("WorkPhone is required feild"),
  })

  const formik = useFormik({
    onSubmit: values => handleSubmit(values),
    validationSchema: validationSchema,
    initialValues: {
      Email: "",
      Role: "",
      Salution: "",
      FirstName: "",
      LastName: "",
      MobileNo: "",
      WorkPhone: "",
    },
  })

  useEffect(() => {
    console.log("call useEffect")
  }, [serach, page])
  return (
    <>
      <div className="page-content">
        <input
          value={serach}
          onChange={e => {
            setSerach(e.target.value)
          }}
        ></input>
        <Row className="">
          <Col lg={6}>
            <h4 className="pt-4 ms-2">
              <b>Users</b>
            </h4>
          </Col>
          <Col lg={6}>
            <div className="pt-4" style={{ textAlign: "end" }}>
              <button
                className="btn btn-primary"
                onClick={() => {
                  formik.resetForm(), setmodal_center(true)
                }}
              >
                Add Users
              </button>
              &nbsp;
              <button className="btn btn-light">Export</button>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <Card>
          <CardBody>
            <div className=" ms-2 me-2 mb-2 dropdown">
              <span>Show entries:</span>
              <select
                value={page}
                onChange={e => {
                  setPage(e.target.value)
                }}
              >
                <option value="" defaultValue={"slect"}></option>

                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
            <table className="table">
              <thead className="table-light">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">Sample May</td>
                  <td>deep@domain.com</td>
                  <td>Super Admin</td>
                  <td>Active</td>
                  <td>
                    <div className="d-flex">
                      <Button
                        type="button"
                        className="btn btn-secondary waves-effect waves-light  "
                        style={{
                          height: "25px",
                          width: "25px",
                          padding: "0px",
                        }}
                        onClick={() => {
                          formik.resetForm(), setmodal_center(true)
                        }}
                      >
                        <i className="fas fa-edit  text-success"></i>
                      </Button>
                      &nbsp;
                      <Button
                        type="button"
                        className="btn btn-secondary waves-effect waves-light "
                        style={{
                          height: "25px",
                          width: "25px",
                          padding: "0px",
                        }}
                      >
                        <i className="fas fa-ban  text-danger"></i>
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td scope="row">Aakash Patel</td>
                  <td>aakash@domain.com</td>
                  <td> Accountant</td>
                  <td>Invited</td>
                  <td>
                    <div className="d-flex">
                      <Button
                        type="button"
                        className="btn btn-secondary waves-effect waves-light  "
                        style={{
                          height: "25px",
                          width: "25px",
                          padding: "0px",
                        }}
                        onClick={() => {
                          formik.resetForm(), setmodal_center(true)
                        }}
                      >
                        <i className="fas fa-edit  text-success"></i>
                      </Button>
                      &nbsp;
                      <Button
                        type="button"
                        className="btn btn-secondary waves-effect waves-light "
                        style={{
                          height: "25px",
                          width: "25px",
                          padding: "0px",
                        }}
                      >
                        <i className="fas fa-ban  text-danger"></i>
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td scope="row">Smruti Fastidious</td>
                  <td>smruti@fastidious.co.in</td>
                  <td>Admin</td>
                  <td>Active</td>
                  <td>
                    <div className="d-flex">
                      <Button
                        type="button"
                        className="btn btn-secondary waves-effect waves-light  "
                        style={{
                          height: "25px",
                          width: "25px",
                          padding: "0px",
                        }}
                        onClick={() => {
                          formik.resetForm(), setmodal_center(true)
                        }}
                      >
                        <i className="fas fa-edit  text-success"></i>
                      </Button>
                      &nbsp;
                      <Button
                        type="button"
                        className="btn btn-secondary waves-effect waves-light "
                        style={{
                          height: "25px",
                          width: "25px",
                          padding: "0px",
                        }}
                      >
                        <i className="fas fa-ban  text-danger"></i>
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td scope="row">Jyoti Shrivas</td>
                  <td>jyoti@domain.com</td>
                  <td> Team Member</td>
                  <td>Active</td>
                  <td>
                    <div className="d-flex">
                      <Button
                        type="button"
                        className="btn btn-secondary waves-effect waves-light  "
                        style={{
                          height: "25px",
                          width: "25px",
                          padding: "0px",
                        }}
                        onClick={() => {
                          formik.resetForm(), setmodal_center(true)
                        }}
                      >
                        <i className="fas fa-edit  text-success"></i>
                      </Button>
                      &nbsp;
                      <Button
                        type="button"
                        className="btn btn-secondary waves-effect waves-light "
                        style={{
                          height: "25px",
                          width: "25px",
                          padding: "0px",
                        }}
                      >
                        <i className="fas fa-ban  text-danger"></i>
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td scope="row">Sipu Sipu</td>
                  <td>sipu.34@gmail.com</td>
                  <td>Admin</td>
                  <td>Active</td>
                  <td>
                    <div className="d-flex">
                      <Button
                        type="button"
                        className="btn btn-secondary waves-effect waves-light  "
                        style={{
                          height: "25px",
                          width: "25px",
                          padding: "0px",
                        }}
                        onClick={() => {
                          formik.resetForm(), setmodal_center(true)
                        }}
                      >
                        <i className="fas fa-edit  text-success"></i>
                      </Button>
                      &nbsp;
                      <Button
                        type="button"
                        className="btn btn-secondary waves-effect waves-light "
                        style={{
                          height: "25px",
                          width: "25px",
                          padding: "0px",
                        }}
                      >
                        <i className="fas fa-ban  text-danger"></i>
                      </Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <Row>
              <Col lg={12}>
                <div>
                  <span getData={getData}>Showing Rows 1 to 5 of 5</span>
                  <ul
                    className="otheroneuserpagination pagination"
                    style={{ justifyContent: "end" }}
                  >
                    <li className="page-item active" aria-current="page">
                      <span className="page-link me-2 ">1</span>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
      <Modal isOpen={modal_center} centered={true} size="lg">
        <Row className="mt-2">
          <Col lg={12}>
            <div className=" modal-header pt-2">
              <h5 className="modal-title">Add User</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setmodal_center(false)}
              ></button>
            </div>
          </Col>
        </Row>

        <div className="modal-body">
          <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit}>
              <Row className="mt-2 pt-2">
                <Col lg={3}>
                  <div className="fieldNameLabel">
                    User Email
                    <span className="text-danger"> *</span>
                  </div>
                </Col>
                <Col lg={5}>
                  <Field
                    className=" form-control "
                    type="text"
                    name="Email"
                    placeholder="Enter Email"
                  />
                  <ErrorMessage
                    name="Email"
                    component="div"
                    className="text-danger"
                  />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col lg={3}>
                  <div className="fieldNameLabel">
                    Role
                    <span className="text-danger"> *</span>
                  </div>
                </Col>
                <Col lg={5}>
                  <Field className=" form-select  " as="select" name="Role">
                    <option value="Select Role">Select Role</option>
                    <option value="Super Admin">Super Admin</option>
                    <option value="Accountant">Accountant</option>
                    <option value="Admin">Admin</option>
                    <option value="Team Member">Team Member</option>
                  </Field>
                  <ErrorMessage
                    name="Role"
                    component="div"
                    className="text-danger"
                  />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col lg={3}>
                  <div className="fieldNameLabel">User Name</div>
                </Col>
                <Col lg={3}>
                  <Field className=" form-select " as="select" name="Salution">
                    <option value="Select Salution">Select Salution</option>
                    <option value="mr">mr.</option>
                    <option value="ms">ms.</option>
                    <option value="mrs">mrs.</option>
                  </Field>
                  <ErrorMessage
                    name="Salution"
                    component="div"
                    className="text-danger"
                  />
                </Col>
                <Col lg={3}>
                  <Field
                    className="form-control "
                    type="text"
                    name="FirstName"
                    placeholder="Enter First Name"
                  />
                  <ErrorMessage
                    name="FirstName"
                    component="div"
                    className="text-danger"
                  />
                </Col>
                <Col lg={3}>
                  <Field
                    className=" form-control "
                    type="text"
                    name="LastName"
                    placeholder="Enter Last Name"
                  />
                  <ErrorMessage
                    name="LastName"
                    component="div"
                    className="text-danger"
                  />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col lg={3}>
                  <div className="fieldNameLabel">
                    User Contact
                    <span className="text-danger"> *</span>
                  </div>
                </Col>
                <Col lg={3}>
                  <div>
                    <b>Mobile No</b>
                    <span className="text-danger"> *</span>
                    <Field
                      className=" form-control "
                      type="text"
                      name="MobileNo"
                      placeholder="+91"
                    />
                    <ErrorMessage
                      name="MobileNo"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </Col>
                <Col lg={3}>
                  <div>
                    <b>Work Phone</b>
                    <Field
                      className=" form-control "
                      type="text"
                      name="WorkPhone"
                      placeholder="+91"
                    />
                    <ErrorMessage
                      name="WorkPhone"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </Col>
              </Row>
              <hr />
              <Row className="mt-4">
                <Col lg={12}>
                  <button type="submit" className="btn btn-primary">
                    Send
                  </button>
                  &nbsp;&nbsp;
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => setmodal_center(false)}
                  >
                    Cancel
                  </button>
                </Col>
              </Row>
            </Form>
          </FormikProvider>
          {/* )} */}
        </div>
      </Modal>
    </>
  )
}
