// import React from 'react'
import { useState } from "react"
import { Container } from "reactstrap"
import { Row } from "reactstrap"
import { Col } from "reactstrap"

export function Form() {
  const [FirstName, setFirstName] = useState("")
  const [LastName, setLastName] = useState("")
  const [Checkmeout, setCheckmeout] = useState(false)
  const [Pickafruit, setPickafruit] = useState("")
  const [Exampletextarea, setExampletextarea] = useState("")
  const [Gender, setGender] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    if (
      FirstName.length == 0 ||
      LastName.length == 0 ||
      Checkmeout == false ||
      Pickafruit.length == 0 ||
      Exampletextarea.length == 0
    ) {
      setError(true)
    } else if (Gender == "") {
      alert("Please select your gender")
    } else if (
      FirstName &&
      LastName &&
      Checkmeout &&
      Gender &&
      Exampletextarea
    ) {
      alert(
        "FirstName : " +
          FirstName +
          "\n" +
          "LastName : " +
          LastName +
          "\n" +
          "Check me out : " +
          Checkmeout +
          "\n" +
          "Pick a fruit : " +
          Pickafruit +
          "\n" +
          "Gender : " +
          Gender +
          "\n" +
          "Example textarea : " +
          Exampletextarea
      )
    } else {
    }
  }
  return (
    <div style={{ paddingTop: 100 }}>
      <Container>
        <h4>
          <b>Form</b>
        </h4>
        <hr />
        <form onSubmit={handleSubmit}>
          <Row className="mt-2">
            <Col lg={1}>
              <label>First Name :</label>
            </Col>
            <Col lg={3}>
              <input
                className="form-control"
                type="text"
                name={FirstName}
                value={FirstName}
                placeholder={"Enter your first name"}
                onChange={e => setFirstName(e.target.value)}
                maxLength={50}
              />
              {error && FirstName <= 0 ? (
                <label
                  for="validationCustom01"
                  className="form-label"
                  style={{ color: "red" }}
                >
                  First name can't be empty
                </label>
              ) : (
                ""
              )}
            </Col>
          </Row>

          <div className="mb-3">
            <Row className="mt-4">
              <Col lg={1}>
                <label>Last Name :</label>
              </Col>
              <Col lg={3}>
                <input
                  className="form-control"
                  type="text"
                  name={LastName}
                  value={LastName}
                  placeholder="Enter your last name"
                  onChange={e => setLastName(e.target.value)}
                  id="validationCustom02"
                />
                {error && LastName.length <= 0 ? (
                  <label
                    for="validationCustom02"
                    className="form-label"
                    style={{ color: "red" }}
                  >
                    Last name can't be empty
                  </label>
                ) : (
                  ""
                )}
              </Col>
            </Row>
          </div>

          <div className="mb-3 form-check">
            <Row className="mt-2">
              <Col lg={12}>
                <input
                  type="checkbox"
                  name="Checkmeout"
                  className="form-check-input"
                  onClick={() => {
                    Checkmeout == false
                      ? setCheckmeout(true)
                      : setCheckmeout(false)
                  }}
                />
                <label className="mt-0">Check me out</label>
                <br></br>
                {error && Checkmeout == false ? (
                  <label
                    className="form-check-label"
                    for="invalidCheck"
                    style={{ color: "red", transform: "translateX(-20px)" }}
                  >
                    Check me out can't selected
                  </label>
                ) : (
                  ""
                )}
              </Col>
            </Row>
          </div>

          <div className="mb-3">
            <Row className="mt-2">
              <Col lg={1}>
                <label>Pick a fruit : </label>
              </Col>
              <Col lg={3}>
                <select
                  className="form-select"
                  type="select"
                  name={Pickafruit}
                  onChange={e => setPickafruit(e.target.value)}
                >
                  <option>Choose...</option>
                  <option value="apple">Apple</option>
                  <option value="banana">Banana</option>
                  <option value="orange">Orange</option>
                </select>
                <br></br>
                {error && Pickafruit.length <= 0 ? (
                  <label className="form-label" style={{ color: "red" }}>
                    can't selected a fruit
                  </label>
                ) : (
                  ""
                )}
              </Col>
            </Row>
          </div>

          <div className="form-check">
            <Row className="mt-2">
              <Col lg={12}>
                <input
                  className="form-check-input"
                  type="radio"
                  name={Gender}
                  value={Gender}
                  id="Male"
                  onClick={() => {
                    Gender == "Male" ? setGender("Female") : setGender("Male")
                  }}
                />
                <label className="form-check-label" for="Male">
                  Male
                </label>
              </Col>
            </Row>
          </div>
          <div className="form-check">
            <Row className="mt-2">
              <Col lg={12}>
                <input
                  className="form-check-input"
                  type="radio"
                  name={Gender}
                  value={Gender}
                  id="Female"
                  onClick={() => {
                    Gender == "Female" ? setGender("Male") : setGender("Female")
                  }}
                />
                <label className="form-check-label" for="Female">
                  Female
                </label>
              </Col>
            </Row>
          </div>

          <div className="mt-3 mb-3">
            <Row>
              <Col lg={12}>
                <label>Text area</label>
              </Col>

              <Col lg={4}>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Enter some text here...."
                  height={20}
                  width={25}
                  onChange={e => setExampletextarea(e.target.value)}
                ></textarea>
                <br></br>
                {error && Exampletextarea.length <= 0 ? (
                  <label
                    for="Exampletextarea"
                    className="form-label"
                    style={{ color: "red" }}
                  >
                    Enter some text here !
                  </label>
                ) : (
                  ""
                )}
              </Col>
            </Row>
          </div>

          <div class="col-12">
            <button class="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </Container>
    </div>
  )
}

export default Form
