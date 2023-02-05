import React from "react";
import { TextField, Typography, Box, Checkbox, Link } from "@mui/material";
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

  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.error) {
        // Handle error
      } else {
        // Handle successful login
      }
    } catch (error) {
      // Handle network error
    }
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

          <FormInput onSubmit={handleSubmit}>
            <TextField
              label="Username"
              variant="outlined"
              sx={{ marginBottom: 2 }}
              value={formData.username}
              onChange={handleInputChange}
            />
            <TextField
              label="Password"
              variant="outlined"
              sx={{ marginBottom: 2 }}
              value={formData.password}
              onChange={handleInputChange}
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
            <LoginButton variant="contained" href="/" type="submit">
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
