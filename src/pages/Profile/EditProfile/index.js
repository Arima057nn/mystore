import classNames from "classnames/bind";
import styles from "../Profile.module.scss";
import AddtoCart from "../../../components/Button/AddtoCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const cx = classNames.bind(styles);

function EditProfile() {
  const [datas, setDatas] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );
  const [profileEdit, setProfileEdit] = useState({
    id: datas.id,
    last_name: datas.last_name,
    email: datas.email,
    phone: datas.phone,
    address: datas.address,
    password: datas.password,
  });

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(
        `http://127.0.0.1:8000/api/users/${datas.id}`,
        profileEdit
      );
      localStorage.setItem("userData", JSON.stringify(profileEdit));
      alert("Update successful!");
    } catch (e) {
      alert("Update failed. Please try again.");
    }
  };

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

      <form className={cx("info")} onSubmit={handleSubmitUpdate}>
        <div className={cx("box")}>
          <label for="name">Name</label>
          <input
            className={cx("input")}
            id="name"
            type="text"
            required
            value={profileEdit.last_name}
            onChange={(e) =>
              setProfileEdit({ ...profileEdit, last_name: e.target.value })
            }
          />
        </div>
        <div className={cx("box")}>
          <label for="email">Email</label>
          <input
            className={cx("input")}
            id="email"
            type="email"
            required
            value={profileEdit.email}
            onChange={(e) =>
              setProfileEdit({ ...profileEdit, email: e.target.value })
            }
          />
        </div>

        <div className={cx("box")}>
          <label for="phone">Phone</label>
          <input
            className={cx("input")}
            id="phone"
            type="tel"
            required
            value={profileEdit.phone}
            onChange={(e) =>
              setProfileEdit({ ...profileEdit, phone: e.target.value })
            }
          />
        </div>

        <div className={cx("box")}>
          <label for="address">Address</label>
          <input
            className={cx("input")}
            id="address"
            required
            value={profileEdit.address}
            onChange={(e) =>
              setProfileEdit({ ...profileEdit, address: e.target.value })
            }
          />
        </div>
        <div className={cx("box")}>
          <label for="password">Password</label>
          <input
            className={cx("input")}
            id="password"
            type="password"
            required
            value={profileEdit.password}
            onChange={(e) =>
              setProfileEdit({ ...profileEdit, password: e.target.value })
            }
          />
        </div>
        <div>
          <AddtoCart addtocart={"Save Changes"} type={"submit"} />
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
