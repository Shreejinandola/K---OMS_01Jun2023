import PropTypes from "prop-types"
import React, { useEffect, useCallback, useRef } from "react"

// //Import Scrollbar
import SimpleBar from "simplebar-react"

// MetisMenu
import MetisMenu from "metismenujs"
import withRouter from "components/Common/withRouter"
import { Link, useLocation } from "react-router-dom"

//i18n
import { withTranslation } from "react-i18next"

const SidebarContent = props => {
  const location = useLocation()
  const ref = useRef()
  const path = location.pathname

  const activateParentDropdown = useCallback(item => {
    item.classList.add("active")
    const parent = item.parentElement
    const parent2El = parent.childNodes[1]

    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }

    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement

      if (parent2) {
        parent2.classList.add("mm-show") // ul tag

        const parent3 = parent2.parentElement // li tag
        if (parent3) {
          parent3.classList.add("mm-active") // li
          parent3.childNodes[0].classList.add("mm-active") //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add("mm-show") // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add("mm-show") // li
              parent5.childNodes[0].classList.add("mm-active") // a tag
            }
          }
        }
      }
      scrollElement(item)
      return false
    }
    scrollElement(item)
    return false
  }, [])

  const removeActivation = items => {
    for (var i = 0; i < items.length; ++i) {
      var item = items[i]
      const parent = items[i].parentElement

      if (item && item.classList.contains("active")) {
        item.classList.remove("active")
      }
      if (parent) {
        const parent2El =
          parent.childNodes && parent.childNodes.lenght && parent.childNodes[1]
            ? parent.childNodes[1]
            : null
        if (parent2El && parent2El.id !== "side-menu") {
          parent2El.classList.remove("mm-show")
        }

        parent.classList.remove("mm-active")
        const parent2 = parent.parentElement

        if (parent2) {
          parent2.classList.remove("mm-show")

          const parent3 = parent2.parentElement
          if (parent3) {
            parent3.classList.remove("mm-active") // li
            parent3.childNodes[0].classList.remove("mm-active")

            const parent4 = parent3.parentElement // ul
            if (parent4) {
              parent4.classList.remove("mm-show") // ul
              const parent5 = parent4.parentElement
              if (parent5) {
                parent5.classList.remove("mm-show") // li
                parent5.childNodes[0].classList.remove("mm-active") // a tag
              }
            }
          }
        }
      }
    }
  }

  const activeMenu = useCallback(() => {
    const pathName = location.pathname
    const fullPath = pathName
    let matchingMenuItem = null
    const ul = document.getElementById("side-menu")
    const items = ul.getElementsByTagName("a")
    removeActivation(items)

    for (let i = 0; i < items.length; ++i) {
      if (fullPath === items[i].pathname) {
        matchingMenuItem = items[i]
        break
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem)
    }
  }, [path, activateParentDropdown])

  useEffect(() => {
    ref.current.recalculate()
  }, [])

  useEffect(() => {
    new MetisMenu("#side-menu")
    activeMenu()
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    activeMenu()
  }, [activeMenu])

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300
      }
    }
  }

  return (
    <React.Fragment>
      <SimpleBar style={{ maxHeight: "100%" }} ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li>
              <Link to="/user-list" className=" waves-effect">
                <i className="ti-user"></i>

                <span>{props.t("Users")}</span>
              </Link>
            </li>
            <li>
              <Link to="/roles" className=" waves-effect">
                <i className="ti-server"></i>
                <span>{props.t("Roles")}</span>
              </Link>
            </li>
            <li>
              <Link to="/vendors" className=" waves-effect">
                <i className="ti-briefcase"></i>
                <span>{props.t("Vendors")}</span>
              </Link>
            </li>

            <li>
              <Link to="/purchase-order" className=" waves-effect">
                <i className="ti-bag"></i>
                <span>{props.t("Purchase Order")}</span>
              </Link>
            </li>
            <li>
              <Link to="/Exercise-1" className=" waves-effect">
                <i className="ti-comments-smiley"></i>
                <span>{props.t("Exercise-1")}</span>
              </Link>
            </li>
            <li>
              <Link to="/Exercise-2" className="waves-effect">
                <i className="ti-comments-smiley"></i>
                <span>{props.t("Exercise-2")}</span>
              </Link>
            </li>
            <li>
              <Link to="/DupliUser" className="waves-effect">
                <i className="ti-comments-smiley"></i>
                <span>{props.t("DupliUser")}</span>
              </Link>
            </li>
            <li>
              <Link to="/otheroneuser" className="waves-effect">
                <i className="ti-comments-smiley"></i>
                <span>{props.t("OtheroneUser")}</span>
              </Link>
            </li>
            <li>
              <Link to="/add-product" className="waves-effect">
                {/* link set same name of path  */}
                <i className="ti-comments-smiley"></i>
                <span>{props.t("AddProducts")}</span>
              </Link>
            </li>
            <li>
              <Link to="/branch-management" className="waves-effect">
                <i className="ti-comments-smiley"></i>
                <span>{props.t("Branch Management")}</span>
              </Link>
            </li>
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  )
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(SidebarContent))
