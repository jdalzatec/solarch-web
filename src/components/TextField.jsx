import { TextField as MUITextField, Tooltip } from "@mui/material";
import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import { baseOverrides } from "../../theme.js";

const TextField = React.forwardRef((props, ref) => {
  return (
    <MUITextField
      variant="outlined"
      color="text"
      size="small"
      ref={ref}
      {...props}
      error={!!props.error}
      sx={baseOverrides}
      slotProps={{
        input: {
          endAdornment: !!props.error && (
            <Tooltip title={props.error}>
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
