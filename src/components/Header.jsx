import Logo from "./Logo.jsx";
import { Box, Typography } from "@mui/material";
import Link from "./Link.jsx";
import { useNavigate } from "react-router-dom";
import SecondaryButton from "./SecondaryButton.jsx";
import PrimaryButton from "./PrimaryButton.jsx";

const Header = ({ title, links = null }) => {
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
            {links && (
              <Box
                sx={{
                  flexGrow: 1,
                }}
              >
                {links.map((link, index) => {
                  if (link.action === "primary") {
                    return (
                      <PrimaryButton
                        key={index}
                        onClick={() => navigate(link.link)}
                      >
                        {link.text}
                      </PrimaryButton>
                    );
                  } else if (link.action === "secondary") {
                    return (
                      <SecondaryButton
                        key={index}
                        onClick={() => navigate(link.link)}
                      >
                        {link.text}
                      </SecondaryButton>
                    );
                  }
                })}
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </header>
  );
};

export default Header;
