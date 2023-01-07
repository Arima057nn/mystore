import React from "react";

import theme from "../../styles/theme";
import { ThemeProvider } from "@mui/material/";
import Register from "../../components/register";
function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Register />
    </ThemeProvider>
  );
}

export default Home;
