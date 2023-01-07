import React from "react";
import { TextField, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import {
  LoginContainerRight,
  LoginContainerLeft,
  LoginForm,
  LoginBackground,
  LoginButton,
  FormInput,
} from "../../styles/login";
import { useMediaQuery } from "@mui/material/";

export default function Login() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

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
            Sign up
          </Typography>

          <FormInput>
            <TextField
              label="First Name"
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Last Name"
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Phone"
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Password"
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Confirm Password"
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
          </FormInput>

          <Box textAlign={"center"}>
            <LoginButton variant="contained">Sign up</LoginButton>
          </Box>
        </LoginForm>
      </LoginContainerRight>
    </LoginBackground>
  );
}
