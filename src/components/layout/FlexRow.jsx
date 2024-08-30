import { Box } from "@mui/material";

const FlexRow = ({ ...props }) => {
  return (
    <Box
      {...props}
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2,
        ...props.sx,
      }}
    />
  );
};

export default FlexRow;
