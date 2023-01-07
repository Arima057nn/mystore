import React from "react";
import {
  TextField,
  Typography,
  Fab,
  Box,
  Checkbox,
  Divider,
  Link,
  Button,
} from "@mui/material";
import { useTheme, useState } from "@mui/material/styles";

import {
  LoginContainerRight,
  LoginContainerLeft,
  LoginForm,
  LoginBackground,
  LoginButton,
  FormInput,
  RegisterButton,
} from "../../styles/login";
import { useMediaQuery } from "@mui/material/";

export default function Login() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <LoginBackground>
      <LoginContainerLeft />
      <LoginContainerRight>
        <LoginForm>
          <Typography
            mb={4}
            variant="subtitle"
            textAlign={"center"}
            sx={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              fontFamily: "Merienda One",
            }}
          >
            Login
          </Typography>

          <FormInput>
            <TextField
              label="Email"
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Password"
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
          </FormInput>
          <Box fontSize={"1.1rem"}>
            <Checkbox {...label} /> Remember me
          </Box>
          <Link
            href="#"
            underline="hover"
            textAlign={"right"}
            // color="success"
            fontSize={"1.1rem"}
          >
            Forgot Password?
          </Link>

          <Box textAlign={"center"}>
            <LoginButton variant="contained" href="/">
              Sign in
            </LoginButton>
          </Box>

          <RegisterButton>
            Not a member?
            <Link
              href="/register"
              textAlign={"right"}
              // color="success"
              fontSize={"1.1rem"}
            >
              Sign up now
            </Link>
          </RegisterButton>
        </LoginForm>
      </LoginContainerRight>
    </LoginBackground>
  );
}
