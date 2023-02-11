import classNames from "classnames/bind";
import styles from "./Profile.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);

function Profile() {
  const [datas, setDatas] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );

  // useEffect(() => {
  //   fetch(`http://localhost:3001/users/3`)
  //     .then((res) => res.json())
  //     .then((datas) => {
  //       setDatas(datas); // Dùng cái này nó sẽ re-render Contentt
  //     });
  // }, []);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("header")}>
          <FontAwesomeIcon icon={faUser} className={cx("icon")} />
          <h2>My Profile</h2>
        </div>
        <Link to={"/profile/edit"} className={cx("edit-btn")}>
          Edit Profile
        </Link>
      </div>

      <form className={cx("info")}>
        <div className={cx("box")}>
          <label for="name">Name</label>
          <input
            value={datas.name}
            className={cx("input")}
            id="name"
            type="text"
          ></input>
        </div>
        <div className={cx("box")}>
          <label for="email">Email</label>
          <input
            value={datas.email}
            className={cx("input")}
            id="email"
            type="email"
          ></input>
        </div>

        <div className={cx("box")}>
          <label for="phone">Phone</label>
          <input
            value={datas.phone}
            className={cx("input")}
            id="phone"
            type="tel"
          ></input>
        </div>

        <div className={cx("box")}>
          <label for="address">Address</label>
          <input
            value={datas.address}
            className={cx("input")}
            id="address"
          ></input>
        </div>
        <div className={cx("box")}>
          <label for="password">Password</label>
          <input
            value={datas.password}
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
