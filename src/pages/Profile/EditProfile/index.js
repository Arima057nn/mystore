import classNames from "classnames/bind";
import styles from "../Profile.module.scss";
import AddtoCart from "../../../components/Button/AddtoCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function EditProfile() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("header")}>
          <FontAwesomeIcon icon={faUser} className={cx("icon")} />
          <h2>Edit Profile</h2>
        </div>
        <Link to={"/profile"} className={cx("edit-btn")}>
          Back to Profile
        </Link>
      </div>

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
          <input className={cx("input")} id="phone" type="tel" required></input>
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
        <AddtoCart addtocart={"Save Changes"} />
      </div>
    </div>
  );
}

export default EditProfile;
