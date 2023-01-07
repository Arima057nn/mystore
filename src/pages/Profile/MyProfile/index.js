import classNames from "classnames/bind";
import styles from "./MyProfile.module.scss";

const cx = classNames.bind(styles);

function MyProfile() {
  return (
    <div className={cx("wrapper")}>
      <div></div>
    </div>
  );
}

export default MyProfile;
