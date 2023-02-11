import React from "react";
import { TextField, Typography, Box, Checkbox, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

function Login() {
  const theme = useTheme();
  const token = localStorage.getItem("token");

  console.log(token);
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [userdatas, setDatas] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [account, setAccount] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    if (loginStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3001/users/`)
      .then((res) => res.json())
      .then((datas) => {
        setDatas(datas); // Dùng cái này nó sẽ re-render Contentt
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);

    axios
      .get(
        `http://localhost:3001/users/?phone=${username}&password=${password}`
      )
      .then((response) => {
        console.log(response.data[0]);
        localStorage.setItem("userData", JSON.stringify(response.data[0]));
        console.log(response.data[0]);

        if (response.data[0] !== undefined) {
          if (response.data[0].phone === "0111111111") {
            navigate("/admin");
            console.log("hello admin");
            localStorage.setItem("token", "admin123");
          } else if (response.data[0].phone === "0111111112") {
            navigate("/admin");
            console.log("hello admin");
            localStorage.setItem("token", "admin123");
          } else {
            navigate("/");
            console.log("hello customer");
            localStorage.setItem("token", "user123");
          }
          setAccount(response.data[0]);
        } else console.log("chiu");
      })
      .catch((error) => {
        setIsLoggedIn(false);
        console.error(error);
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
              label="Username"
              type={"text"}
              variant="outlined"
              sx={{ marginBottom: 2 }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Password"
              type={"password"}
              variant="outlined"
              sx={{ marginBottom: 2 }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
              <LoginButton variant="contained" onClick={handleSubmit}>
                Sign in
              </LoginButton>
            </Box>
          </FormInput>

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

export default Login;
