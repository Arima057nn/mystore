import classNames from "classnames/bind";
import styles from "../../Profile/Profile.module.scss";
import AddtoCart from "../../../components/Button/AddtoCard";
import { Typography } from "@mui/material";

const cx = classNames.bind(styles);

function AddCustomer() {
  return (
    <>
      <Typography variant="h4" mb={4}>
        Add Customer
      </Typography>
      <div className={cx("wrapper")}>
        <form className={cx("info")}>
          <div className={cx("box")}>
            <label for="name">Name</label>
            <input className={cx("input")} id="name" type="text" required />
          </div>
          <div className={cx("box")}>
            <label for="email">Email</label>
            <input
              className={cx("input")}
              id="email"
              type="email"
              required
            ></input>
          </div>

          <div className={cx("box")}>
            <label for="phone">Phone</label>
            <input
              className={cx("input")}
              id="phone"
              type="tel"
              required
            ></input>
          </div>

          <div className={cx("box")}>
            <label for="address">Address</label>
            <input className={cx("input")} id="address" required></input>
          </div>
          <div className={cx("box")}>
            <label for="password">Password</label>
            <input
              className={cx("input")}
              id="password"
              type="password"
              required
            ></input>
          </div>
        </form>
        <div>
          <AddtoCart addtocart={"Add Customer"} />
        </div>
      </div>
    </>
  );
}

export default AddCustomer;
