import React from "react";
import { Typography, Box, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./login.module.scss";

import {
  LoginContainerRight,
  LoginContainerLeft,
  LoginForm,
  LoginBackground,
  LoginButton,
  FormInput,
  RegisterButton,
} from "../../styles/login";
const cx = classNames.bind(styles);

function Login() {
  const theme = useTheme();
  const token = localStorage.getItem("token");

  console.log(token);
  const [userdatas, setDatas] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [account, setAccount] = useState({});
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    // if (loginStatus === "true") {
    //   setIsLoggedIn(true);
    // }
  }, []);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/users/`)
      .then((res) => res.json())
      .then((datas) => {
        setDatas(datas); // Dùng cái này nó sẽ re-render Contentt
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);

    axios
      .post(
        `http://127.0.0.1:8000/api/users/login?phone=${username}&password=${password}`
      )
      .then((response) => {
        console.log("hhehe");
        console.log(response);
        localStorage.setItem("userData", JSON.stringify(response.data));

        if (response.data[0] !== "Account does not exist") {
          if (response.data.phone === "0111111111") {
            navigate("/admin");
            console.log("hello admin");
            localStorage.setItem("token", "admin123");
          } else if (response.data.phone === "0111111112") {
            navigate("/admin");
            console.log("hello admin");
            localStorage.setItem("token", "admin123");
          } else {
            navigate("/");
            console.log("hello customer");
            localStorage.setItem("token", "user123");
          }
          setAccount(response.data);
          alert("Sign in success. Please try again.");
        } else {
          // localStorage.setItem("token", "null123");
          // localStorage.setItem("userData", JSON.stringify(userfake));
          console.log("chiu");
          alert("Sign in failed. Please try again.");
        }
      })
      .catch((error) => {
        // setIsLoggedIn(false);
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

          <form onSubmit={handleSubmit}>
            <input
              className={cx("input")}
              label="Username"
              type={"text"}
              variant="outlined"
              placeholder={"Username"}
              sx={{ marginBottom: 2 }}
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className={cx("input")}
              label="Password"
              type={"password"}
              required
              placeholder={"Password"}
              variant="outlined"
              sx={{ marginBottom: 2 }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>
              {/* <Checkbox {...label} /> Remember me */}
              <input
                type={"checkbox"}
                className={cx("btn-checkbox")}
                fontSize={"1.1 rem"}
              />
              Remember me
            </div>

            <LoginButton variant="contained" type="submit">
              Sign in
            </LoginButton>
          </form>

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
