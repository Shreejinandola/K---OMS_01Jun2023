import { ErrorMessage } from "formik"
import { Label } from "reactstrap"
import Select from "react-select"
import { reactSelectCustomStyles } from "../Custom/reactSelectCustomStyles"

const CustomSelect = ({
  field,
  form: { touched, errors, setFieldValue },
  label,
  isMulti,
  required,
  placeholder,
  onChange,
  options,
  isClearable = true,
  ...props
}) => {
  let values = []
  if (isMulti === true && Array.isArray(field?.value)) {
    values =
      options?.filter(({ value }) =>
        field?.value?.some(option => option.value === value)
      ) ?? []
  } else {
    values = options.find(option => option.value === field.value) ?? []
  }
  return (
    <div className="mb-3">
      {label ? (
        <Label>
          {label} {required && <span className="text-danger">*</span>}
        </Label>
      ) : (
        ""
      )}
      <Select
        {...field} //one > feild pass use of ...field
        {...props} //one > proprties pass use of ...props
        options={options}
        value={values}
        placeholder={placeholder}
        isClearable={isClearable} //this is in dropdown => x
        classNamePrefix={`select-${field.name}`}
        onChange={event => {
          if (onChange) {
            onChange(event)
          } else {
            if (isMulti === true) {
              // setFieldValue(field.name, event ?? [])
              setFieldValue(field.name, event ?? null)
            } else {
              // setFieldValue(field.name, event?.value ?? null)
              setFieldValue(field.name, event?.value ?? "")
            }
          }
        }}
        className={`${
          !!touched[field.name] && !!errors[field.name] && "border-danger"
        }`}
        isMulti={isMulti === true}
        styles={reactSelectCustomStyles}
      />
      <ErrorMessage name={field.name} component="div" className="text-danger" />
    </div>
  )
}

export default CustomSelect
