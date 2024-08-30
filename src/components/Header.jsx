import Logo from "./Logo.jsx";
import { Box, Typography } from "@mui/material";
import Link from "./Link.jsx";
import { useNavigate } from "react-router-dom";

const Header = ({ title }) => {
  const navigate = useNavigate();
  return (
    <header>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: 2,
          }}
        >
          <Link onClick={() => navigate("/")}>
            <Logo width={100} />
          </Link>
          <Typography variant="h5">{title}</Typography>
        </Box>
      </Box>
    </header>
  );
};

export default Header;
