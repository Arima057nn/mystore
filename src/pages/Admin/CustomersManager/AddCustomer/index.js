import classNames from "classnames/bind";
import styles from "./AddCustomer.module.scss";
import AddtoCart from "../../../../components/Button/AddtoCard";
import React, { useState } from "react";
import axios from "axios";

const cx = classNames.bind(styles);

function AddCustomer() {
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
      setError("Sign up successful!");
    } catch (event) {
      setError("Sign up failed. Please try again.");
    }
  };
  return (
    <>
      <h1>Add Customer</h1>
      <div className={cx("wrapper")}>
        <form onSubmit={handleSubmit} className={cx("info")}>
          <div className={cx("box")}>
            <label for="name">Name</label>
            <input
              className={cx("input")}
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={cx("box")}>
            <label for="email">Email</label>
            <input
              className={cx("input")}
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
          </div>
          <div className={cx("box")}>
            <label for="phone">Phone</label>
            <input
              className={cx("input")}
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            ></input>
          </div>
          <div className={cx("box")}>
            <label for="address">Address</label>
            <input
              className={cx("input")}
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            ></input>
          </div>
          <div className={cx("box")}>
            <label for="password">Password</label>
            <input
              className={cx("input")}
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
          </div>
          <div className={cx("submit-btn")}>
            <AddtoCart addtocart={"Add Customer"} type={"submit"} />
          </div>
        </form>
      </div>
    </>
  );
}

export default AddCustomer;
