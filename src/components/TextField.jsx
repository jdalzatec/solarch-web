import { IconButton, TextField as MUITextField, Tooltip } from "@mui/material";
import React from "react";
import InfoIcon from "@mui/icons-material/Info";

const TextField = React.forwardRef((props, ref) => {
  return (
    <MUITextField
      variant="outlined"
      color="text"
      size="small"
      ref={ref}
      {...props}
      error={!!props.error}
      sx={{
        "& .Mui-focused": {
          borderRadius: "1px",
        },
        "& .MuiFormLabel-colorPrimary": {
          color: "rgba(0, 0, 0, 0.6)",
        },
      }}
      slotProps={{
        input: {
          endAdornment: !!props.error && (
            <Tooltip title={props.error.message}>
              <InfoIcon color="error" />
            </Tooltip>
          ),
        },
      }}
      fullWidth
    />
  );
});

TextField.displayName = "TextField";

export default TextField;
