import { TextField as MUITextField } from "@mui/material";
import React from "react";

const TextField = React.forwardRef((props, ref) => {
  return <MUITextField variant="outlined" size="small" ref={ref} {...props} />;
});

export default TextField;
