export const reactSelectCustomStyles = {
  control: (base, state) => ({
    ...base,
    // borderColor: "#84d8e2",
    boxShadow: "#c93636",
    // "&:hover": {
    //   borderColor: "#84d8e2",
    // },
    "&:focus-within": {
      borderColor: "#36C95F",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#36C95F" : "inherit",
    "&:hover": {
      backgroundColor: state.isSelected ? "#36C95F" : "rgb(222, 235, 255)",
    },
  }),
}
