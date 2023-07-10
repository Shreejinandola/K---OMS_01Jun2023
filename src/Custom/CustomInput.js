import { ErrorMessage } from "formik"
import { Input, Label, InputGroup } from "reactstrap"

const CustomInput = ({
  field,
  form: { touched, errors },
  label,
  disable,
  placeholder,
  required,
  icon,
  iconClass,
  ...props
}) => {
  return (
    <div className="mb-3">
      {label && (
        <Label>
          {label} {required && <span className="text-danger">*</span>}
        </Label>
      )}
      <InputGroup>
        {icon ? (
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className={iconClass}></i>
            </span>
          </div>
        ) : (
          ""
        )}
        <Input
          {...field}
          {...props}
          disabled={disable}
          placeholder={placeholder}
          autoComplete={"off"}
          className={`${props.passwordEye ? "passwordInput" : ""}`}
        />
        {props.passwordEye ? (
          <div className="input-group-append">
            <span
              className="input-group-text passwordInputEye"
              style={{
                background: "transparent",
                borderColor: "#ced4da",
              }}
            >
              <i
                onClick={e => {
                  props.setIsPassword(props.type === "password" ? false : true)
                }}
                className={`fa ${
                  props.type === "password" ? "fa-eye-slash" : "fa-eye"
                }`}
              ></i>
            </span>
          </div>
        ) : (
          ""
        )}
      </InputGroup>
      <ErrorMessage name={field.name} component="div" className="text-danger" />
    </div>
  )
}

export default CustomInput
