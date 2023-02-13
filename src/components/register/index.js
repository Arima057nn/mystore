import { TextField, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import axios from "axios";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/users/", {
        name,
        email,
        password,
        phone,
        address,
      });
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
      setAddress("");
      alert("Sign up successful!");
    } catch (event) {
      alert("Sign up failed. Please try again.");
    }
  };
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

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

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="YourName"
              variant="outlined"
              required
              sx={{ marginBottom: 2 }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Email"
              fullWidth
              variant="outlined"
              sx={{ marginBottom: 2 }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              label="Phone"
              fullWidth
              variant="outlined"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Address"
              fullWidth
              required
              variant="outlined"
              sx={{ marginBottom: 2 }}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ marginBottom: 2 }}
            />

            <LoginButton variant="contained" type="submit">
              Sign up
            </LoginButton>
          </form>

          <a href="/login" textAlign={"right"} fontSize={"1.1rem"}>
            Sign in now ?
          </a>
        </LoginForm>
      </LoginContainerRight>
    </LoginBackground>
  );
}
