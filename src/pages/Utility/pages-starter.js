import React from "react"
import { Container } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const PagesStarter = () => {
  document.title = "Starter Page | Katlax - OMS"
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs
            maintitle="Veltrix"
            title="Extra Pages"
            breadcrumbItem="Starter Page"
          />
        </Container>
      </div>
    </React.Fragment>
  )
}

export default PagesStarter
