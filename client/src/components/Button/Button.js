import React from "react";
import { Button } from "@mui/material";
let sizes = {
  small: "xs:h-8 xs:px-4 xs:text-xs",
  medium: "xs:h-10 xs:px-6 xs:text-base md:h-12 md:px-8 md:!text-xl",
  large: "xs:h-12 xs:px-8 xs:text-lg md:h-14 md:px-10 md:text-xl lg:w-full",
  full: "w-full xs:h-14 xs:text-xl md:h-16 md:text-2xl lg:h-20 lg:text-3xl",
  fit: "!w-full !h-full"
};

export default function MyButton({
  children,
  className = "",
  size = "medium",
  ...props
}) {
  let currSize = sizes[size];
  // console.log("Curr size: ", currSize);
  // console.log("classname: ", className);

  return (
    <Button
      sx={{ textTransform: "none", backgroundColor: "orange", color: "black" }}
      className={` ${currSize} ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}
