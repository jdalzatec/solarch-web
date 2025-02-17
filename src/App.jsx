import "@fontsource/raleway/600.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import SignUp from "./pages/SignUp.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../theme.js";
import NewQuote from "./pages/NewQuote.jsx";
import Home from "./pages/Home.jsx";
import Quote from "./pages/Quote.jsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          <Route path="/" element={<Home />} />
          <Route path="/quotes/new" element={<NewQuote />} />
          <Route path="/quotes/:quoteId" element={<Quote />} />

          <Route path="/404" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
