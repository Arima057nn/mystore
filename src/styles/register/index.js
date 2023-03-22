import { styled } from "@mui/material/styles";
import "@fontsource/montez";
import "@fontsource/merienda-one/";
import candles from "../../assets/images/background.jpeg";
import { Box, Stack, Button, TextField } from "@mui/material";
import { Colors } from "../theme";

// Container
export const LoginBackground = styled(Box)(({ theme }) => ({
  background: `linear-gradient(80deg, #333, transparent 90%), url(${candles}),no-repeat`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "center",
  [theme.breakpoints.down("lg")]: {
    height: 600,
  },
  [theme.breakpoints.down("md")]: {
    height: 450,
  },
  [theme.breakpoints.down("sm")]: {
    height: 300,
    alignItems: "center",
  },
}));
export const LoginContainerLeft = styled(Box)(({ theme }) => ({
  flex: 1,
}));

export const LoginContainerRight = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: 60,
  // padding: "12px 12px",
  [theme.breakpoints.down("md")]: {
    height: 450,
    marginRight: 0,
  },
}));

export const LoginForm = styled(Stack)(({ theme }) => ({
  // padding: 12,
  width: 400,
  // height: 450,
  padding: "36px 44px",

  backgroundColor: Colors.white,
  borderRadius: 8,
  [theme.breakpoints.down("md")]: {
    // height: 450,
  },
}));

export const FormInput = styled(Stack)(({ theme }) => ({
  width: "100%",
  marginBottom: 2,
  [theme.breakpoints.down("md")]: {
    // height: 450,
  },
}));

export const LoginButton = styled(Button)(({ show, theme }) => ({
  marginTop: 30,
  marginBottom: 24,
  background: Colors.suki,
  opacity: 0.9,
  width: "100%",
  height: 48,
}));

export const RegisterButton = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginTop: 20,
  marginBottom: 16,
}));
///////////////////////////////////
