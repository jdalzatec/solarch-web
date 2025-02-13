import { Box } from "@mui/material";

const FlexColumn = ({ ...props }) => {
  return (
    <Box
      {...props}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        ...props.sx,
      }}
    />
  );
};

export default FlexColumn;
