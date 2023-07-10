import React, { useState, useEffect } from "react"
import MetaTags from "react-meta-tags"
import {
  Row,
  Col,
  Card,
  CardBody,
  Container,
  Button,
  Input,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Label,
} from "reactstrap"
import { useNavigate, Link } from "react-router-dom"
import withRouter from "components/Common/withRouter"
import { withTranslation } from "react-i18next"
import PropTypes from "prop-types"
import CustomTable from "../../Custom/TableWithRemotePagination"
import classnames from "classnames"

const PurchaseOrder = props => {
  const navigate = useNavigate()
  const [totalSize, setTotalSize] = useState(3)
  const [isDraft, setIsDraft] = useState(false)
  const [hide, setHide] = useState(1)
  const [mode, setMode] = useState(1)

  const columns = [
    {
      text: (
        <>
          <Input
            type="checkbox"
            className="form-check-input"
            id="Add"
            checked={false}
          />
          &nbsp; Date
        </>
      ),
      dataField: "Date",
      style: { minWidth: "150px" },
    },
    {
      text: "Purchase Order",
      dataField: "PurchaseOrder",
      style: { minWidth: "150px" },
    },
    {
      text: "Reference",
      dataField: "Reference",
      style: { minWidth: "150px" },
    },
    {
      text: "Vendor Name",
      dataField: "VendoreName",
      style: { minWidth: "200px" },
    },
    {
      text: "Status",
      dataField: "Status",
      style: { minWidth: "100px" },
    },
    {
      text: "Amount",
      dataField: "Amount",
      style: { minWidth: "150px" },
    },
    {
      text: "Expected Delivery Date",
      dataField: "ExpectedDeliveryDate",
      style: { minWidth: "180px" },
    },
    {
      text: "Actions",
      dataField: "Actions",
      style: { minWidth: "100px" },
    },
  ]

  const rows = [
    {
      Date: (
        <>
          <Input
            type="checkbox"
            className="form-check-input"
            id="Add"
            checked={false}
          />{" "}
          &nbsp; 31-May-2023
        </>
      ),
      PurchaseOrder: (
        <>
          <Link
            onClick={() => {
              setHide(2)
            }}
          >
            PO-00003
          </Link>
        </>
      ),
      Reference: "ESTIMATE####",
      VendoreName: "Test Company",
      Status: (
        <>
          <text style={{ color: "grey" }}>DRAFT</text>
        </>
      ),
      Amount: "Rs.12,578.72",
      ExpectedDeliveryDate: "05-June-2023",
      Actions: (
        <>
          <div className="d-flex">
            {/* {isDraft ? ( */}
            <Button
              className="btn btn-secondary waves-effect waves-light btn btn-secondary"
              style={{
                width: "25px",
                height: "25px",
                padding: "0px",
              }}
              onClick={() => {
                // navigate("/add-purchase-order")
              }}
              title="Edit"
            >
              <i className="fas fa-edit" style={{ color: "#17a98c" }}></i>
            </Button>
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
    },
    {
      Date: (
        <>
          <Input
            type="checkbox"
            className="form-check-input"
            id="Add"
            checked={false}
          />{" "}
          &nbsp; 30-May-2023
        </>
      ),
      PurchaseOrder: (
        <>
          <Link
            onClick={() => {
              setHide(2)
            }}
          >
            PO-00002
          </Link>
        </>
      ),
      Reference: "",
      VendoreName: "VDeep Vendor",
      Status: (
        <>
          <text style={{ color: "green" }}>ACCEPTED</text>
        </>
      ),
      Amount: "Rs.111,000.00",
      ExpectedDeliveryDate: "",
      Actions: (
        <>
          <div className="d-flex">
            {/* <Button
              className="btn btn-secondary waves-effect waves-light btn btn-secondary"
              style={{
                width: "25px",
                height: "25px",
                padding: "0px",
              }}
              onClick={() => {
                // navigate("/add-purchase-order")
              }}
              title="Edit"
            >
              <i className="fas fa-edit" style={{ color: "#17a98c" }}></i>
            </Button>
            &nbsp; */}
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
    },
    {
      Date: (
        <>
          <Input
            type="checkbox"
            className="form-check-input"
            id="Add"
            checked={false}
          />{" "}
          &nbsp; 29-May-2023
        </>
      ),
      PurchaseOrder: (
        <>
          <Link
            onClick={() => {
              setHide(2)
            }}
          >
            PO-00001
          </Link>
        </>
      ),
      Reference: "",
      VendoreName: "Test Company",
      Status: (
        <>
          <text style={{ color: "#798ad8" }}>ISSUED</text>
        </>
      ),
      Amount: "Rs.1000.00",
      ExpectedDeliveryDate: "",
      Actions: (
        <>
          <div className="d-flex">
            {/* <Button
              className="btn btn-secondary waves-effect waves-light btn btn-secondary"
              style={{
                width: "25px",
                height: "25px",
                padding: "0px",
              }}
              onClick={() => {
                // navigate("/add-purchase-order")
              }}
              title="Edit"
            >
              <i className="fas fa-edit" style={{ color: "#17a98c" }}></i>
            </Button>
            &nbsp; */}
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
          <title>{"Purchase Orders"} | Katlax OMS</title>
        </MetaTags>

        <Container fluid>
          {hide === 1 ? (
            <>
              <Row className="mt-3">
                <Col lg={6}>
                  <div className="mt-2" style={{ fontSize: "large" }}>
                    <b>Purchase Orders</b>
                  </div>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col className="col-12">
                  <Card>
                    <CardBody>
                      <CustomTable
                        keyField="Vendor"
                        columns={columns}
                        data={rows}
                        totalSize={totalSize}
                        getData={getData}
                      />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </>
          ) : (
            <>
              <Row>
                <Col
                  lg={3}
                  md={3}
                  sm={3}
                  style={{
                    // minHeight: "500px",
                    height: "100%",
                  }}
                >
                  <Row style={{ background: "#f0f0f0", marginLeft: "-25px" }}>
                    <Col
                      lg={12}
                      md={12}
                      sm={12}
                      style={{ marginTop: "20px", marginBottom: "6px" }}
                    >
                      <div className="d-flex">
                        <div style={{ width: "400px" }}>
                          All Paurchase Order
                        </div>
                        <div style={{ textAlign: "right", width: "100%" }}>
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              //   navigate("/add-vendor")
                            }}
                            style={{
                              padding: "0.05rem 0.5rem",
                            }}
                          >
                            + New
                          </button>
                        </div>
                      </div>
                    </Col>
                    <Col
                      lg={12}
                      md={12}
                      sm={12}
                      style={{
                        borderTop: "1px solid #cacaca",
                      }}
                    >
                      <Row style={{ marginBottom: "5px", marginTop: "5px" }}>
                        <div className="col-1 col-lg-1 col-md-1 col-sm-2">
                          {" "}
                          <Input
                            type="checkbox"
                            className="form-check-input"
                            id="check"
                            checked={false}
                          />
                        </div>
                        <div className="col col-lg-6 col-md-6 col-sm-6">
                          <text>Test Company </text>
                          <br></br>
                          <div style={{ fontSize: "10px", marginTop: "6px" }}>
                            <Link to="#">PO-00001</Link> | 31-May-2023
                          </div>
                        </div>
                        <div
                          className="col col-lg-5 col-md-5 col-sm-4"
                          style={{
                            marginLeft: "-2px",
                            textAlign: "end",
                            padding: "0.05rem 0.5rem",
                          }}
                        >
                          <text>Rs.111,000.00</text>
                          <br></br>
                          <text style={{ fontSize: "10px", color: "#798ad8" }}>
                            ISSUED
                          </text>
                        </div>
                      </Row>
                    </Col>
                  </Row>
                </Col>

                <Col
                  lg={9}
                  md={9}
                  sm={9}
                  style={{ borderLeft: "1px solid #cacaca" }}
                >
                  <Row>
                    <Col
                      lg={12}
                      style={{
                        marginTop: "20px",
                      }}
                    >
                      <div style={{ fontSize: "16px", color: "grey" }}>
                        PO-00001
                      </div>
                      <div style={{ textAlignLast: "end" }}>
                        {/* <button
                      className="btn btn-sm  btn-light"
                      style={{ marginTop: "-50px" }}
                      onClick={() => {}}
                    >
                      Edit
                    </button> */}
                        <button
                          type="button"
                          className="btn"
                          style={{
                            marginTop: "-50px",
                            fontSize: "20px",
                            position: "sticky",
                            border: 0,
                          }}
                          onClick={() => navigate("/purchase-order")}
                        >
                          <span>×</span>
                        </button>
                      </div>
                    </Col>
                    <Col lg={12} style={{ borderTop: "1px solid #cacaca" }}>
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
                            Comments & History
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
                            Bill
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent activeTab={mode} className="p-3 text-muted">
                        <TabPane tabId={1}>
                          {/* <Row>
                        <Col lg={3}>31-May-2023 12:40PM</Col>
                        <Col lg={9}>
                          Purchase Order created for Rs.1000.00 by Agent.
                        </Col>
                      </Row>
                      <Row className="mt-2">
                        <Col lg={3}>31-May-2023 12:40PM</Col>
                        <Col lg={9}>
                          Purchase Order created for Rs.1000.00 by Agent.
                        </Col>
                      </Row> */}

                          <ol className="activity-feed mb-0 ps-2 ms-1">
                            <li className="feed-item">
                              <p className="mb-0" style={{ fontSize: "11px" }}>
                                31-May-2023 12:40PM
                              </p>
                              <p className="mb-0">
                                Purchase Order created for Rs.1000.00 by Agent.
                              </p>
                            </li>
                            <li className="feed-item">
                              <p className="mb-0" style={{ fontSize: "11px" }}>
                                31-May-2023 12:40PM
                              </p>
                              <p className="mb-0">
                                Purchase Order created for Rs.1000.00 by Agent.
                              </p>
                            </li>
                          </ol>

                          <Row
                            style={{
                              borderTop: "1px solid #cacaca",
                            }}
                          >
                            <Col
                              lg={12}
                              md={12}
                              sm={12}
                              style={{ marginTop: "40px" }}
                            >
                              <Row style={{ backgroundColor: "#f8f9fa00" }}>
                                <Col lg={1}></Col>
                                <Col lg={10} md={10} sm={10}>
                                  <Row>
                                    <Col lg={6} md={12} sm={12}>
                                      <text
                                        style={{
                                          fontSize: "20px",
                                          color: "black",
                                        }}
                                      >
                                        PURCHASE ORDER
                                      </text>
                                      <br></br>
                                      <text>
                                        Purchase Order#<b>PO-00001</b>
                                      </text>
                                      <Row style={{ marginTop: "30px" }}>
                                        <Col lg={2}>
                                          <button
                                            className="btn btn-primary"
                                            disabled
                                            style={{
                                              padding: "0.05rem 0.5rem",
                                              backgroundColor: "#626ed4",
                                            }}
                                          >
                                            ISSUED
                                          </button>
                                        </Col>
                                      </Row>
                                      <Row style={{ marginTop: "15px" }}>
                                        <Col lg={7} md={12} sm={12}>
                                          <b>ORDER PAYMENT</b>
                                        </Col>
                                        <Col lg={5} md={5} sm={12}>
                                          31-May-2023
                                        </Col>
                                      </Row>

                                      <Row style={{ marginTop: "15px" }}>
                                        <Col lg={7} md={12} sm={12}>
                                          <b>PAYMENT TERMS</b>
                                        </Col>
                                        <Col lg={5} md={5} sm={12}>
                                          Due on Receipt
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col lg={1}></Col>
                                    <Col
                                      lg={5}
                                      md={12}
                                      sm={12}
                                      style={{ marginTop: "15px" }}
                                    >
                                      {" "}
                                      <text>
                                        <b>VENDOR ADDRESS</b>
                                      </text>
                                      <br></br>
                                      <Link to="#">Test Company</Link>
                                      <br></br>
                                      <br></br>
                                      <Row style={{ marginTop: "30px" }}>
                                        <Col lg={12} md={12} sm={12}>
                                          <b>DELIVERY ADDRESS</b>
                                        </Col>
                                      </Row>
                                      <Row>
                                        <Col lg={12} md={12} sm={12}>
                                          A-910,Titanium City Center, Prahlad
                                          Nagar, Ahmedabad , Gujarat - 380018
                                        </Col>
                                      </Row>
                                    </Col>
                                  </Row>
                                  <Row style={{ marginTop: "40px" }}>
                                    <Col lg={12}>
                                      <div className="table-responsive">
                                        <table className="table mb-0">
                                          <thead>
                                            <tr className="table-light">
                                              <th style={{ minWidth: "220px" }}>
                                                {/* <th style={{ minWidth: "250px" }}> */}
                                                ITEMS & DESCRIPTION
                                              </th>
                                              <th style={{ minWidth: "50px" }}>
                                                ORDERD
                                              </th>
                                              <th style={{ minWidth: "100px" }}>
                                                STATUS
                                              </th>
                                              <th style={{ minWidth: "100px" }}>
                                                RATE
                                              </th>
                                              <th style={{ minWidth: "100px" }}>
                                                AMOUNT
                                              </th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td>
                                                {/* <Row>
                                              <Col lg={6} md={6} sm={6}> */}
                                                <img
                                                  src={
                                                    "https://cdn.pixabay.com/photo/2017/11/10/04/47/image-2935360_1280.png"
                                                  }
                                                  alt=""
                                                  className="avatar-xs rounded-square"
                                                  style={{
                                                    borderRadius: "5px",
                                                  }}
                                                />
                                                {/* </Col>
                                              <Col lg={10} md={10} sm={10}> */}
                                                &nbsp;<span> Raw Material</span>
                                                {/* </Col> */}
                                                {/* </Row> */}
                                              </td>
                                              <td>1 Box</td>
                                              <td>
                                                0 Received<br></br>0 Billed
                                              </td>
                                              <td>Rs.10,000.00</td>
                                              <td>10,000.00</td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>{" "}
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col
                                      md={6}
                                      lg={6}
                                      sm={12}
                                      style={{ marginBottom: "-9px" }}
                                    ></Col>
                                    <Col
                                      md={6}
                                      lg={6}
                                      sm={12}
                                      style={{ marginBottom: "-9px" }}
                                    >
                                      <Label
                                        md={6}
                                        style={{
                                          textAlign: "left",
                                          paddingLeft: "15px",
                                        }}
                                      >
                                        <b style={{ fontWeight: 600 }}>
                                          {"Sub Total"} :
                                        </b>
                                      </Label>
                                      <Label
                                        md={6}
                                        style={{
                                          textAlign: "right",
                                          paddingRight: "15px",
                                        }}
                                      >
                                        Rs.10,000.00
                                      </Label>
                                    </Col>
                                    <Col md={6} lg={6} sm={12}></Col>
                                    <Col md={6} lg={6} sm={12}>
                                      <Label
                                        md={6}
                                        style={{
                                          textAlign: "left",
                                          paddingLeft: "15px",
                                          marginTop: "-17px",
                                        }}
                                      >
                                        <b style={{ fontWeight: 100 }}>
                                          Total Quantity : 1
                                        </b>
                                      </Label>
                                    </Col>

                                    <Col
                                      md={6}
                                      lg={6}
                                      sm={12}
                                      className="mb-1"
                                    ></Col>
                                    <Col md={6} lg={6} sm={12} className="mb-1">
                                      <Label
                                        md={6}
                                        style={{
                                          textAlign: "left",
                                          paddingLeft: "15px",
                                        }}
                                      >
                                        <b style={{ fontWeight: 600 }}>
                                          {"Discount"} :
                                        </b>
                                      </Label>
                                      <Label
                                        md={6}
                                        style={{
                                          textAlign: "right",
                                          paddingRight: "15px",
                                        }}
                                      >
                                        Rs.1,000.00
                                      </Label>
                                    </Col>

                                    <Col
                                      md={6}
                                      lg={6}
                                      sm={12}
                                      className="mb-1"
                                    ></Col>
                                    <Col md={6} lg={6} sm={12} className="mb-1">
                                      <hr className="mt-0 mb-0"></hr>
                                      <Label
                                        md={6}
                                        style={{
                                          textAlign: "left",
                                          paddingLeft: "15px",
                                        }}
                                      >
                                        <b style={{ fontWeight: 600 }}>
                                          {"Total"} :
                                        </b>
                                      </Label>
                                      <Label
                                        md={6}
                                        style={{
                                          textAlign: "right",
                                          paddingRight: "15px",
                                        }}
                                      >
                                        Rs.9,000.00
                                      </Label>
                                      <hr className="mt-0 mb-0"></hr>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col lg={1}></Col>
                              </Row>
                            </Col>
                          </Row>

                          <Row>
                            <Col lg={12} style={{ marginBottom: "20px" }}>
                              <hr></hr>
                              <div>
                                <b>31-May-2023 | PurchaseOrderReceipt</b> &nbsp;
                                <Link to="#" onClick={() => window.open("/")}>
                                  <i className="ti-download"></i> Download
                                </Link>
                              </div>
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId={2}></TabPane>
                      </TabContent>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </>
          )}
        </Container>
      </div>
    </React.Fragment>
  )
}
PurchaseOrder.propTypes = {
  t: PropTypes.any,
}

export default withRouter(withTranslation()(PurchaseOrder))
