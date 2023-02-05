import classNames from "classnames/bind";
import styles from "../../Profile/Profile.module.scss";
import AddtoCart from "../../../components/Button/AddtoCard";
import React, { useState } from "react";
import axios from "axios";

const cx = classNames.bind(styles);

function AddCustomer() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("https://your-api.com/signup", {
        username,
        email,
        password,
        phone,
        address,
      });
      setUsername("");
      setEmail("");
      setPassword("");
      setError("Sign up successful!");
    } catch (e) {
      setError("Sign up failed. Please try again.");
    }
  };
  return (
    <>
      <h1 mb={4}>Add Customers</h1>
      <div className={cx("wrapper")}>
        <form onClick={handleSubmit} className={cx("info")}>
          {/* {error && <p>{error}</p>} */}
          <div className={cx("box")}>
            <label for="name">Name</label>
            <input
              className={cx("input")}
              id="name"
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          <div>
            <AddtoCart addtocart={"Add Customer"} type={"submit"} />
          </div>
        </form>
      </div>
    </>
  );
}

export default AddCustomer;
