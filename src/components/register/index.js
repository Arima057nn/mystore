import { Typography } from "@mui/material";
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
} from "../../styles/login";
import classNames from "classnames/bind";
import styles from "./register.module.scss";

const cx = classNames.bind(styles);

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
      const res = await axios.post("http://127.0.0.1:8000/api/users/register", {
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
            <input
              label="Name"
              type={"text"}
              className={cx("input")}
              sx={{ marginBottom: 2 }}
              value={name}
              placeholder={"Username"}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              label="Email"
              className={cx("input")}
              sx={{ marginBottom: 2 }}
              value={email}
              placeholder={"Email"}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              label="Phone"
              className={cx("input")}
              required
              value={phone}
              placeholder={"Phone"}
              onChange={(e) => setPhone(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <input
              label="Address"
              required
              className={cx("input")}
              sx={{ marginBottom: 2 }}
              placeholder={"Address"}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              label="Password"
              required
              className={cx("input")}
              type="password"
              value={password}
              placeholder={"Password"}
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
