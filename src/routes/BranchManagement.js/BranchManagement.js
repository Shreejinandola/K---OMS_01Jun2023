import React from "react"
import { useState } from "react"
import { Card, CardBody, Container, Row, Col } from "reactstrap"

import { useNavigate, Link } from "react-router-dom"

function BranchManagement() {
  const [isEditMenuOpen, setIsEditMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleEditButtonClick = () => {
    setIsEditMenuOpen(!isEditMenuOpen)
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="mt-2" style={{ color: "black" }}>
                <h5>
                  <b>Branch List</b>
                </h5>
                <span>Dashboard &gt; Branch List</span>
              </div>
            </Col>
            <Col lg={6}>
              <div style={{ textAlign: "end" }} className="mt-3 me-2">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => {
                    navigate("/add-branch")
                  }}
                >
                  Add Branch
                </button>
              </div>
            </Col>
          </Row>
          &nbsp;
          <Card>
            <CardBody>
              <div>
                <span>Show entries :</span>
                <select>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
              </div>
              &nbsp;
              <div>
                <table
                  className="table table-bordered border-dark"
                  style={{ border: "black" }}
                >
                  <thead className="table-success">
                    <tr>
                      <th scope="col">Business Name</th>
                      <th scope="col">Contact Person Name</th>
                      <th scope="col"> Business Phone No</th>
                      <th scope="col">Business Address</th>
                      <th scope="col"> Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row"> Smoke House</td>
                      <td>Shreeji Nandola</td>
                      <td>+49 8525145362805</td>
                      <td> Hotel Aalen</td>
                      <td>
                        <div className="ms-2">
                          <button
                            className="waves-effect waves-light btn btn-secondary"
                            onClick={handleEditButtonClick}
                            style={{ width: 30, height: 30 }}
                          >
                            <i className="fas fa-ellipsis-v"></i>
                          </button>
                          {isEditMenuOpen && (
                            <div className="mt-2">
                              <button
                                type="button"
                                className=" waves-effect waves-light btn btn-secondary btn-sm"
                              >
                                <i className="fas fa-eye text-info"></i>
                              </button>
                              &nbsp;
                              <button
                                type="button"
                                className=" waves-effect waves-light btn btn-secondary btn-sm "
                              >
                                <i className="fas fa-edit text-success "></i>
                              </button>
                              &nbsp;
                              <button
                                type="button"
                                className=" waves-effect waves-light btn btn-secondary btn-sm"
                              >
                                <i className="fas fa-trash text-danger"></i>
                              </button>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default BranchManagement
