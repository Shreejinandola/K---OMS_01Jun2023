import React, { useState, useEffect } from "react"
import MetaTags from "react-meta-tags"
import { Row, Col, Card, CardBody, Container, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"
import withRouter from "components/Common/withRouter"
import { withTranslation } from "react-i18next"
import PropTypes from "prop-types"
import CustomTable from "../../Custom/TableWithRemotePagination"

const Roles = props => {
  const navigate = useNavigate()
  const [totalSize, setTotalSize] = useState(6)

  const columns = [
    {
      text: "Name",
      dataField: "Name",
      style: { width: "68%" },
    },
    {
      text: "No. of User",
      dataField: "NoofUser",
      style: { width: "20%" },
    },

    {
      text: "Actions",
      dataField: "Actions",
      style: { width: "12%" },
    },
  ]

  const rows = [
    {
      Name: "Admin",
      NoofUser: "2",
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
                navigate("/new-role")
              }}
              title="Edit"
            >
              <i className="fas fa-edit" style={{ color: "#17a98c" }}></i>
            </Button>
          </div>
        </>
      ),
    },
    {
      Name: "Team Member",
      NoofUser: "5",
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
                navigate("/new-role")
              }}
              title="Edit"
            >
              <i className="fas fa-edit" style={{ color: "#17a98c" }}></i>
            </Button>
          </div>
        </>
      ),
    },
    {
      Name: "Customer",
      NoofUser: "7",
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
                navigate("/new-role")
              }}
              title="Edit"
            >
              <i className="fas fa-edit" style={{ color: "#17a98c" }}></i>
            </Button>{" "}
          </div>
        </>
      ),
    },
    {
      Name: "Vendor Portal Access",
      NoofUser: "9",
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
                navigate("/new-role")
              }}
              title="Edit"
            >
              <i className="fas fa-edit" style={{ color: "#17a98c" }}></i>
            </Button>
          </div>
        </>
      ),
    },
    {
      Name: "Customer Portal Access",
      NoofUser: "0",
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
                navigate("/new-role")
              }}
              title="Edit"
            >
              <i className="fas fa-edit" style={{ color: "#17a98c" }}></i>
            </Button>
          </div>
        </>
      ),
    },
    {
      Name: "Team Member Type A",
      NoofUser: "2",
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
                navigate("/new-role")
              }}
              title="Edit"
            >
              <i className="fas fa-edit" style={{ color: "#17a98c" }}></i>
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
          <title>{"Roles"} | Katlax OMS</title>
        </MetaTags>

        <Container fluid>
          <Row className="mt-3">
            <Col lg={6}>
              <div className="mt-2" style={{ fontSize: "large" }}>
                <b>Roles</b>
              </div>
            </Col>
            <Col lg={6} style={{ textAlign: "end" }}>
              <button
                className="btn btn-primary"
                onClick={() => {
                  navigate("/new-role")
                }}
              >
                Add Role
              </button>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CustomTable
                    keyField="Roles"
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
    </React.Fragment>
  )
}
Roles.propTypes = {
  t: PropTypes.any,
}
export default withRouter(withTranslation()(Roles))
