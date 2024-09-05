import { Stack } from "@mui/material";
import Header from "../Header.jsx";
import LinearProgress from "../LinearProgress.jsx";
import useGlobalAppStore from "../../stores/globalAppStore.js";
import { Fragment } from "react";

const Layout = ({ title, links = null, children }) => {
  const loading = useGlobalAppStore((state) => state.loading);
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
      {loading ? <LinearProgress /> : <Fragment>{children}</Fragment>}
    </Stack>
  );
};

export default Layout;
