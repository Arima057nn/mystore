import React from "react";

import theme from "../../styles/theme";
import { ThemeProvider } from "@mui/material/";
import Login from "../../components/login";
function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
}

export default Home;
