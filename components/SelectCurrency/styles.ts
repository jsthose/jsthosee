import { StylesConfig } from "react-select";

const colourStyles: StylesConfig<any> = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  menuPortal: (base) => ({ ...base, zIndex: 4 }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? "#0088cc"
        : isFocused
        ? "#0088cc"
        : "white",
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? "black"
        : isFocused
        ? "white"
        : "black",
      cursor: isDisabled ? "not-allowed" : "pointer",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? "#0088cc"
            : "#303757"
          : "white",
      },
    };
  },
};

export default colourStyles;
