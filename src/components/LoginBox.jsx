import { Box, Card, Stack, Typography, useTheme } from "@mui/material";
import Logo from "./Logo.jsx";

const LoginBox = ({ title, children }) => {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        height: "100vh",
        p: 3,
        background:
          "linear-gradient(90deg, rgba(254,225,64,1) 0%, rgba(250,112,154,1) 100%)",
      }}
    >
      <Card
        sx={{
          mx: "auto",
          mt: { lg: 20 },
          minWidth: { xs: "100%", md: "600px" },
          p: 4,
          overflowY: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
            mb: 3,
          }}
        >
          <Logo width={200} />
          <Typography variant="h4">{title}</Typography>
        </Box>
        {children}
      </Card>
    </Stack>
  );
};

export default LoginBox;
