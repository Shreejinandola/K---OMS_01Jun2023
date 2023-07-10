import { ErrorMessage } from "formik"
import { Label } from "reactstrap"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"

const CustomPhoneInput = ({
  field,
  form: { touched, errors },
  label,
  country,
  required,
  placeholder,
  countryCode,
  ...props
}) => {
  return (
    <div className="mb-3">
      {label ? (
        <Label>
          {/* {label} {required && <span className="font-danger">*</span>} */}
          {label} {required && <span className="text-danger">*</span>}
        </Label>
      ) : (
        ""
      )}
      <PhoneInput
        {...field}
        {...props}
        value={`${countryCode} ${field.value}`}
        country={country ?? "in"}
        enableSearch={false}
        countryCodeEditable={false}
        placeholder={placeholder}
        // onlyCountries={["in", "gr", "fr", "us", "de", "gb"]}
        // onlyCountries={["gr", "de", "it", "in"]}
        invalid={!!touched[field.name] && !!errors[field.name]}
        inputStyle={{ width: "100%" }}
      />
      <ErrorMessage name={field.name} component="div" className="text-danger" />
    </div>
  )
}

export default CustomPhoneInput
