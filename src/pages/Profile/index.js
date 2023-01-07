import classNames from "classnames/bind";
import styles from "./Profile.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Profile() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("header")}>
          <FontAwesomeIcon icon={faUser} className={cx("icon")} />
          <h2>My Profile</h2>
        </div>
        <a href="./edit" className={cx("edit-btn")}>
          Edit Profile
        </a>
      </div>

      <form className={cx("info")}>
        <div className={cx("box")}>
          <label for="name">Name</label>
          <input
            value="Phạm Tiến Dũng"
            className={cx("input")}
            id="name"
            type="text"
          ></input>
        </div>
        <div className={cx("box")}>
          <label for="email">Email</label>
          <input
            value="dung.pt4525@sis.hust.edu.vn"
            className={cx("input")}
            id="email"
            type="email"
          ></input>
        </div>

        <div className={cx("box")}>
          <label for="phone">Phone</label>
          <input
            value="0123456789"
            className={cx("input")}
            id="phone"
            type="tel"
          ></input>
        </div>

        <div className={cx("box")}>
          <label for="address">Address</label>
          <input
            value="Giải Phóng, Hà Nội"
            className={cx("input")}
            id="address"
          ></input>
        </div>
        <div className={cx("box")}>
          <label for="password">Password</label>
          <input
            value="123456789"
            className={cx("input")}
            id="password"
            type="password"
          ></input>
        </div>
      </form>
    </div>
  );
}

export default Profile;
