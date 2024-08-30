import { Link as MUILink } from "@mui/material";

const Link = ({ ...props }) => {
  return (
    <MUILink
      color="secondary"
      sx={{
        ":hover": {
          cursor: "pointer",
        },
      }}
      {...props}
    />
  );
};

export default Link;
