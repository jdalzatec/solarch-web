import "@radix-ui/themes/styles.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import { Theme } from "@radix-ui/themes";

function App() {
  return (
    <Theme
      accentColor="yellow"
      radius="full"
      scaling="110%"
      panelBackground="solid"
      style={{
        backgroundColor: "transparent",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/404" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Theme>
  );
}

export default App;
