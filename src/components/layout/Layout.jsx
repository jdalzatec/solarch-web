import { Stack } from "@mui/material";
import Header from "../Header.jsx";

const Layout = ({ title, links = null, children }) => {
  return (
    <Stack
      direction="column"
      spacing={3}
      sx={{
        maxWidth: { xs: "100%", lg: "800px" },
        mx: { xs: 3, lg: "auto" },
        mt: 3,
      }}
    >
      <Header title={title} links={links} />
      {children}
    </Stack>
  );
};

export default Layout;
