import Logo from "./Logo.jsx";
import { Box, Typography } from "@mui/material";
import Link from "./Link.jsx";
import { useNavigate } from "react-router-dom";
import SecondaryButton from "./SecondaryButton.jsx";

const Header = ({ title, back = null }) => {
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                flexGrow: 9,
              }}
            >
              {title}
            </Typography>
            {back && (
              <Box
                sx={{
                  flexGrow: 1,
                }}
              >
                <SecondaryButton onClick={() => navigate(back)}>
                  Back
                </SecondaryButton>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </header>
  );
};

export default Header;
