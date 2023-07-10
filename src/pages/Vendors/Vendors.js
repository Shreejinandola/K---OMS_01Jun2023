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
  Collapse,
} from "reactstrap"
import { useNavigate, Link } from "react-router-dom"
import withRouter from "components/Common/withRouter"
import { withTranslation } from "react-i18next"
import PropTypes from "prop-types"
import CustomTable from "../../Custom/TableWithRemotePagination"
import Switch from "react-switch"

const Vendors = props => {
  const navigate = useNavigate()
  const [totalSize, setTotalSize] = useState(9)
  const [totalSizePuchaseOrder, setTotalSizePuchaseOrder] = useState(0)
  const [totalSizeShipment, setTotalSizeShipment] = useState(0)
  const [totalSizeBill, setTotalSizeBill] = useState(0)
  const [mode, setMode] = useState(0)
  const [colFilterPurchaseOrder, setColFilterPurchaseOrder] = useState(true)
  const [colFilterShipment, setColFilterShipment] = useState(true)
  const [colFilterBill, setColFilterBill] = useState(true)

  const columns = [
    {
      text: (
        <>
          <Input
            type="checkbox"
            className="form-check-input"
            id="Add"
            checked={true}
          />
          &nbsp; Company Name
        </>
      ),
      dataField: "CompanyName",
      style: { minWidth: "300px" },
    },
    {
      text: "Email",
      dataField: "Email",
      style: { minWidth: "100px" },
    },
    {
      text: "Phone",
      dataField: "Phone",
      style: { minWidth: "150px" },
    },
    {
      text: "Total PO",
      dataField: "TotalPO",
      style: { minWidth: "120px", textAlignLast: "center" },
    },
    {
      text: "PO Accepted",
      dataField: "POAccepted",
      style: { minWidth: "120px", textAlignLast: "center" },
    },
    {
      text: "PO Shipped",
      dataField: "POShipped",
      style: { minWidth: "120px", textAlignLast: "center" },
    },
    {
      text: "PO Received",
      dataField: "POReceived",
      style: { minWidth: "120px", textAlignLast: "center" },
    },
    {
      text: "Payable",
      dataField: "Payable",
      style: { minWidth: "100px", textAlignLast: "end" },
    },
    {
      text: "Status",
      dataField: "Status",
      style: { minWidth: "100px" },
    },
    {
      text: "Created At",
      dataField: "CreatedAt",
      style: { minWidth: "250px" },
    },
    {
      text: "Actions",
      dataField: "Actions",
      style: { minWidth: "100px" },
    },
  ]

  const rows = [
    {
      CompanyName: (
        <>
          <Input
            type="checkbox"
            className="form-check-input"
            id="Add"
            checked={true}
          />{" "}
          &nbsp;
          <Link
            onClick={() => {
              setMode(1)
            }}
          >
            Deep Patel 2
          </Link>
        </>
      ),
      Email: "deeppatel2@gmail.com",
      Phone: "+91 9685741234",
      TotalPO: "0.00",
      POAccepted: "0.00",
      POShipped: "0.00",
      POReceived: "0.00",
      Payable: "0.00",
      Status: (
        <>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              title="Active"
              checked
            ></input>
          </div>
        </>
      ),
      CreatedAt: "Hitesh Vaghela : 22-May-2025",
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
                // navigate("/new-role")
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
              title="Delete"
            >
              <i className="fas fa-trash-alt" style={{ color: "red" }}></i>
            </Button>
          </div>
        </>
      ),
    },
    {
      CompanyName: (
        <>
          <Input
            type="checkbox"
            className="form-check-input"
            id="Add"
            checked={true}
          />{" "}
          &nbsp;{" "}
          <Link
            onClick={() => {
              setMode(1)
            }}
          >
            TRISHUL TRADE Pvt. Ltd.
          </Link>
        </>
      ),
      Email: "TRISHULTRADE@gmail.com",
      Phone: "+91 9685741234",
      TotalPO: "0.00",
      POAccepted: "0.00",
      POShipped: "0.00",
      POReceived: "0.00",
      Payable: "0.00",
      Status: (
        <>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              title="Active"
              checked
            ></input>
          </div>
        </>
      ),
      CreatedAt: "Hitesh Vaghela : 22-May-2025",
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
                // navigate("/new-role")
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
              title="Delete"
            >
              <i className="fas fa-trash-alt" style={{ color: "red" }}></i>
            </Button>
          </div>
        </>
      ),
    },
    {
      CompanyName: (
        <>
          <Input
            type="checkbox"
            className="form-check-input"
            id="Add"
            checked={true}
          />{" "}
          &nbsp;{" "}
          <Link
            onClick={() => {
              setMode(1)
            }}
          >
            M/s Ultratech Cement Ltd.
          </Link>
        </>
      ),
      Email: "Ultratech@gmail.com",
      Phone: "+91 9685741234",
      TotalPO: "0.00",
      POAccepted: "0.00",
      POShipped: "0.00",
      POReceived: "0.00",
      Payable: "0.00",
      Status: (
        <>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              title="Active"
              checked
            ></input>
          </div>
        </>
      ),
      CreatedAt: "Hitesh Vaghela : 22-May-2025",
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
                // navigate("/new-role")
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
              title="Delete"
            >
              <i className="fas fa-trash-alt" style={{ color: "red" }}></i>
            </Button>
          </div>
        </>
      ),
    },
    {
      CompanyName: (
        <>
          <Input
            type="checkbox"
            className="form-check-input"
            id="Add"
            checked={true}
          />{" "}
          &nbsp;{" "}
          <Link
            onClick={() => {
              setMode(1)
            }}
          >
            {" "}
            BK DAS
          </Link>
        </>
      ),
      Email: "BKDAS@gmail.com",
      Phone: "+91 9685741234",
      TotalPO: "0.00",
      POAccepted: "0.00",
      POShipped: "0.00",
      POReceived: "0.00",
      Payable: "0.00",
      Status: (
        <>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              title="Active"
              checked
            ></input>
          </div>
        </>
      ),
      CreatedAt: "Hitesh Vaghela : 22-May-2025",
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
                // navigate("/new-role")
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
              title="Delete"
            >
              <i className="fas fa-trash-alt" style={{ color: "red" }}></i>
            </Button>
          </div>
        </>
      ),
    },
    {
      CompanyName: (
        <>
          <Input
            type="checkbox"
            className="form-check-input"
            id="Add"
            checked={true}
          />{" "}
          &nbsp;{" "}
          <Link
            onClick={() => {
              setMode(1)
            }}
          >
            ABCDEF
          </Link>
        </>
      ),
      Email: "ABCDEF@gmail.com",
      Phone: "+91 9685741234",
      TotalPO: "0.00",
      POAccepted: "0.00",
      POShipped: "0.00",
      POReceived: "0.00",
      Payable: "0.00",
      Status: (
        <>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              title="Active"
              checked
            ></input>
          </div>
        </>
      ),
      CreatedAt: "Hitesh Vaghela : 22-May-2025",
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
                // navigate("/new-role")
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
              title="Delete"
            >
              <i className="fas fa-trash-alt" style={{ color: "red" }}></i>
            </Button>
          </div>
        </>
      ),
    },
    {
      CompanyName: (
        <>
          <Input
            type="checkbox"
            className="form-check-input"
            id="Add"
            checked={true}
          />{" "}
          &nbsp;{" "}
          <Link
            onClick={() => {
              setMode(1)
            }}
          >
            Vodafone
          </Link>
        </>
      ),
      Email: "Vodafone@gmail.com",
      Phone: "+91 9685741234",
      TotalPO: "0.00",
      POAccepted: "0.00",
      POShipped: "0.00",
      POReceived: "0.00",
      Payable: "0.00",
      Status: (
        <>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              title="Active"
              checked
            ></input>
          </div>
        </>
      ),
      CreatedAt: "Hitesh Vaghela : 22-May-2025",
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
                // navigate("/new-role")
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
              title="Delete"
            >
              <i className="fas fa-trash-alt" style={{ color: "red" }}></i>
            </Button>
          </div>
        </>
      ),
    },
    {
      CompanyName: (
        <>
          <Input
            type="checkbox"
            className="form-check-input"
            id="Add"
            checked={true}
          />{" "}
          &nbsp;{" "}
          <Link
            onClick={() => {
              setMode(1)
            }}
          >
            Govt.
          </Link>
        </>
      ),
      Email: "Govt@gmail.com",
      Phone: "+91 9685741234",
      TotalPO: "0.00",
      POAccepted: "0.00",
      POShipped: "0.00",
      POReceived: "0.00",
      Payable: "0.00",
      Status: (
        <>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              title="Active"
              checked
            ></input>
          </div>
        </>
      ),
      CreatedAt: "Hitesh Vaghela : 22-May-2025",
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
                // navigate("/new-role")
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
              title="Delete"
            >
              <i className="fas fa-trash-alt" style={{ color: "red" }}></i>
            </Button>
          </div>
        </>
      ),
    },
    {
      CompanyName: (
        <>
          <Input
            type="checkbox"
            className="form-check-input"
            id="Add"
            checked={true}
          />{" "}
          &nbsp;{" "}
          <Link
            onClick={() => {
              setMode(1)
            }}
          >
            Intership Career Solution Pvt. Ltd.
          </Link>
        </>
      ),
      Email: "IntershipCareerSolution@gmail.com",
      Phone: "+91 9685741234",
      TotalPO: "0.00",
      POAccepted: "0.00",
      POShipped: "0.00",
      POReceived: "0.00",
      Payable: "0.00",
      Status: (
        <>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              title="Active"
              checked
            ></input>
          </div>
        </>
      ),
      CreatedAt: "Hitesh Vaghela : 22-May-2025",
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
                // navigate("/new-role")
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
              title="Delete"
            >
              <i className="fas fa-trash-alt" style={{ color: "red" }}></i>
            </Button>
          </div>
        </>
      ),
    },
    {
      CompanyName: (
        <>
          <Input
            type="checkbox"
            className="form-check-input"
            id="Add"
            checked={true}
          />{" "}
          &nbsp;{" "}
          <Link
            onClick={() => {
              setMode(1)
            }}
          >
            Zybra Private Limited
          </Link>
        </>
      ),
      Email: "Zybra@gmail.com",
      Phone: "+91 9685741234",
      TotalPO: "0.00",
      POAccepted: "0.00",
      POShipped: "0.00",
      POReceived: "0.00",
      Payable: "0.00",
      Status: (
        <>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              title="Active"
              checked
            ></input>
          </div>
        </>
      ),
      CreatedAt: "Hitesh Vaghela : 22-May-2025",
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
                // navigate("/new-role")
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
              title="Delete"
            >
              <i className="fas fa-trash-alt" style={{ color: "red" }}></i>
            </Button>
          </div>
        </>
      ),
    },
  ]

  const columnsPuchaseOrder = [
    {
      text: "PO No.",
      dataField: "PONo",
      // style: { minWidth: "100px" },
    },
    {
      text: "Ref No.",
      dataField: "RefNo",
      // style: { minWidth: "150px" },
    },
    {
      text: "PO Date",
      dataField: "PODate",
      // style: { minWidth: "120px", textAlignLast: "center" },
    },
    {
      text: "Amount",
      dataField: "Amount",
      // style: { minWidth: "120px", textAlignLast: "center" },
    },
    {
      text: "Status",
      dataField: "Status",
      // style: { minWidth: "100px" },
    },
  ]

  const rowsPuchaseOrder = [
    // {
    //   PONo: "deeppatel2@gmail.com",
    //   RefNo: "+91 9685741234",
    //   PODate: "0.00",
    //   Amount: "0.00",
    //   Status: "0.00",
    //   POReceived: "0.00",
    // },
  ]

  const columnsShipment = [
    {
      text: "Shipment Date",
      dataField: "ShipmentDate",
      // style: { minWidth: "100px" },
    },
    {
      text: "Shipment No.",
      dataField: "ShipmentNo",
      // style: { minWidth: "150px" },
    },
    {
      text: "Ref PO No.",
      dataField: "RefPONo",
      // style: { minWidth: "120px", textAlignLast: "center" },
    },
    {
      text: "Tracking No.",
      dataField: "TrackingNo",
      // style: { minWidth: "120px", textAlignLast: "center" },
    },
    {
      text: "Carrier",
      dataField: "Carrier",
    },
    {
      text: "Status",
      dataField: "Status",
      // style: { minWidth: "100px" },
    },
  ]

  const rowsShipment = [
    // {
    //   ShipmentDate: "deeppatel2@gmail.com",
    //   ShipmentNo: "+91 9685741234",
    //   RefPONo: "0.00",
    //   TrackingNo: "0.00",
    //   Carrier: "0.00",
    //   Status: "0.00",
    // },
  ]

  const columnsBill = [
    {
      text: "Bill Date",
      dataField: "BillDate",
      // style: { minWidth: "100px" },
    },
    {
      text: "Bill No.",
      dataField: "BillNo",
      // style: { minWidth: "150px" },
    },
    {
      text: "PO No.",
      dataField: "PONo",
      // style: { minWidth: "120px", textAlignLast: "center" },
    },
    {
      text: "Amount",
      dataField: "Amount",
      // style: { minWidth: "120px", textAlignLast: "center" },
    },
    {
      text: "Status",
      dataField: "Status",
      // style: { minWidth: "100px" },
    },
  ]

  const rowsBill = [
    // {
    //   BillDate: "deeppatel2@gmail.com",
    //   BillNo: "+91 9685741234",
    //   PONo: "0.00",
    //   Amount: "0.00",
    //   Status: "0.00",
    // },
  ]

  const getData = (page = 1, sizePerPage = 10) => {}

  useEffect(() => {
    getData()
  }, [])

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>{"Vendors"} | Katlax OMS</title>
        </MetaTags>

        <Container fluid>
          {mode === 0 ? (
            <>
              <Row className="mt-3">
                <Col lg={6}>
                  <div className="mt-2" style={{ fontSize: "large" }}>
                    <b>Vendors</b>
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
                  lg={2}
                  md={2}
                  sm={2}
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
                        <div style={{ width: "400px" }}>Active Vendor</div>
                        <div style={{ textAlign: "right", width: "100%" }}>
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              navigate("/add-vendor")
                            }}
                            style={{
                              padding: "0.05rem 0.5rem",
                            }}
                          >
                            +
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
                        <Col lg={12} md={12} sm={12}>
                          <Input
                            type="checkbox"
                            className="form-check-input"
                            id="check"
                            checked={false}
                          />{" "}
                          &nbsp;
                          <Link to="#">Test Company </Link>
                          <br></br>
                          <tex style={{ fontSize: "12px", marginLeft: "22px" }}>
                            Rs. 500
                          </tex>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>

                <Col
                  lg={10}
                  md={10}
                  sm={10}
                  style={{ borderLeft: "1px solid #cacaca" }}
                >
                  <Row>
                    <Col
                      lg={12}
                      style={{
                        marginTop: "20px",
                      }}
                    >
                      <div style={{ fontSize: "20px", color: "black" }}>
                        Test Company
                      </div>
                      <div style={{ textAlignLast: "end" }}>
                        <button
                          className="btn btn-sm  btn-light"
                          style={{ marginTop: "-50px" }}
                          onClick={() => {}}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="btn"
                          style={{
                            marginTop: "-50px",
                            fontSize: "20px",
                            position: "sticky",
                            border: 0,
                          }}
                          onClick={() => setMode(0)}
                        >
                          <span>×</span>
                        </button>
                      </div>
                    </Col>
                    <Col lg={12} style={{ borderTop: "1px solid #cacaca" }}>
                      <div
                        className="accordion mt-3"
                        id="accordion"
                        style={{ marginLeft: "-11px", marginRight: "-11px" }}
                      >
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="colFilterPurchaseOrder"
                          >
                            <button
                              className={`accordion-button fw-medium ${
                                !colFilterPurchaseOrder ? "collapsed" : ""
                              }`}
                              type="button"
                              onClick={() => {
                                setColFilterPurchaseOrder(
                                  !colFilterPurchaseOrder
                                )
                              }}
                              style={{
                                cursor: "pointer",
                                backgroundColor: "#f8f9fa",
                              }}
                            >
                              <i class="fas fa-genderless"></i>&nbsp;&nbsp;
                              {"Purchase Order"}
                            </button>
                          </h2>

                          <Collapse
                            isOpen={colFilterPurchaseOrder}
                            className="accordion-collapse"
                          >
                            <div
                              className="accordion-body"
                              style={{
                                backgroundColor: "#f8f9fa",
                              }}
                            >
                              <div className="text-muted">
                                <Card>
                                  <CardBody style={{ marginBottom: "-40px" }}>
                                    <Row>
                                      <Col style={{ textAlign: "end" }}>
                                        <Link to="#">+ Add New</Link>
                                      </Col>
                                    </Row>
                                    <CustomTable
                                      keyField="PuchaseOrder"
                                      columns={columnsPuchaseOrder}
                                      data={rowsPuchaseOrder}
                                      totalSize={totalSizePuchaseOrder}
                                      getData={getData}
                                    />
                                  </CardBody>
                                </Card>
                              </div>
                            </div>
                          </Collapse>
                        </div>
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div
                        className="accordion mt-3"
                        id="accordion"
                        style={{ marginLeft: "-11px", marginRight: "-11px" }}
                      >
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            id="colFilterShipment"
                          >
                            <button
                              className={`accordion-button fw-medium ${
                                !colFilterShipment ? "collapsed" : ""
                              }`}
                              type="button"
                              onClick={() => {
                                setColFilterShipment(!colFilterShipment)
                              }}
                              style={{
                                cursor: "pointer",
                                backgroundColor: "#f8f9fa",
                              }}
                            >
                              <i class="fas fa-genderless"></i>&nbsp;&nbsp;
                              {"Shipment"}
                            </button>
                          </h2>
                          <Collapse
                            isOpen={colFilterShipment}
                            className="accordion-collapse"
                          >
                            <div
                              className="accordion-body"
                              style={{
                                backgroundColor: "#f8f9fa",
                              }}
                            >
                              <div className="text-muted">
                                <Card>
                                  <CardBody style={{ marginBottom: "-40px" }}>
                                    <CustomTable
                                      keyField="Shipment"
                                      columns={columnsShipment}
                                      data={rowsShipment}
                                      totalSize={totalSizeShipment}
                                      getData={getData}
                                    />
                                  </CardBody>
                                </Card>
                              </div>
                            </div>
                          </Collapse>
                        </div>
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div
                        className="accordion mt-3"
                        id="accordion"
                        style={{ marginLeft: "-11px", marginRight: "-11px" }}
                      >
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="colFilterBill">
                            <button
                              className={`accordion-button fw-medium ${
                                !colFilterBill ? "collapsed" : ""
                              }`}
                              type="button"
                              onClick={() => {
                                setColFilterBill(!colFilterBill)
                              }}
                              style={{
                                cursor: "pointer",
                                backgroundColor: "#f8f9fa",
                              }}
                            >
                              <i class="fas fa-genderless"></i>&nbsp;&nbsp;
                              {"Bill"}
                            </button>
                          </h2>
                          <Collapse
                            isOpen={colFilterBill}
                            className="accordion-collapse"
                          >
                            <div
                              className="accordion-body"
                              style={{
                                backgroundColor: "#f8f9fa",
                              }}
                            >
                              <div className="text-muted">
                                <Card>
                                  <CardBody style={{ marginBottom: "-40px" }}>
                                    <CustomTable
                                      keyField="Bill"
                                      columns={columnsBill}
                                      data={rowsBill}
                                      totalSize={totalSizeBill}
                                      getData={getData}
                                    />
                                  </CardBody>
                                </Card>
                              </div>
                            </div>
                          </Collapse>
                        </div>
                      </div>
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
Vendors.propTypes = {
  t: PropTypes.any,
}

export default withRouter(withTranslation()(Vendors))
