import { TextField } from "@mui/material";
import { styled } from "@mui/material";

const sizes = {
  small: "w-20 h-10 !text-xs",
  medium: "w-32 h-12 !text-base",
  large: "w-40 h-14 !text-lg !font-bold",
  full: "w-full h-16 !text-[1.8em] !font-bold",
};
const borderWidth = "0.075em";
const focusBorderWidth = "0.1em";

const StyledInput = styled(TextField)({
  textTransform: "none",
  width: "100%",
  borderRadius: "0.25rem",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(0, 0, 0, 0.5)",
      borderWidth: `${borderWidth}`,
    },
    "&:hover fieldset": {
      borderColor: "black",
      borderWidth:  `${focusBorderWidth}`,
    },
    "&.Mui-focused fieldset": {
      borderColor: "black",
      borderWidth: `${focusBorderWidth}`,
    },
  },
  "& .MuiInputLabel-root": {
    color: "black",
    "&.Mui-focused": {
      color: "purple",
    }
  },
});

export default function MyInput({
  children,
  className = "",
  size = "medium",
  ...props
}) {
  let currSize = sizes[size];
  console.log("Curr size: ", currSize);
  console.log("classname: ", className);

  return (
    <TextField
      sx={{
        textTransform: "none",
        boxShadow: "0px 2px 6px purple",
        color: "purple",
        borderRadius: "0.25rem",
      }}
      className={`${className} ${currSize}`}
      {...props}
    >
      {children}
    </TextField>
  );
}

export { StyledInput };
