import classNames from "classnames/bind";
import styles from "./Account.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faUser,
  faLocationDot,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import { faCreditCard, faHeart } from "@fortawesome/free-regular-svg-icons";
const cx = classNames.bind(styles);

function Account() {
  return (
    <div className={cx("wrapper")}>
      <h2 className={cx("header")}>DASHBOARD</h2>
      <div className={cx("box")}>
        <FontAwesomeIcon icon={faBagShopping} className={cx("icon")} />
        <span className={cx("title")}>Order</span>
      </div>
      <div className={cx("box")}>
        <FontAwesomeIcon icon={faHeart} className={cx("icon")} />
        <span className={cx("title")}>Wishlist</span>
      </div>
      <div className={cx("box")}>
        <FontAwesomeIcon icon={faHeadset} className={cx("icon")} />
        <span className={cx("title")}>Support Tickets</span>
      </div>

      <div className={cx("space")}></div>
      <h2 className={cx("header")}>ACCOUNT SETTINGS</h2>
      <div className={cx("box")}>
        <FontAwesomeIcon icon={faUser} className={cx("icon")} />
        <span className={cx("title")}> info</span>
      </div>
      <div className={cx("box")}>
        <FontAwesomeIcon icon={faLocationDot} className={cx("icon")} />
        <span className={cx("title")}>Addresses</span>
      </div>
      <div className={cx("box")}>
        <FontAwesomeIcon icon={faCreditCard} className={cx("icon")} />
        <span className={cx("title")}>Payment Method</span>
      </div>

      <a href="/login" className={cx("button-container")}>
        <button className={cx("button")}>Đăng xuất</button>
      </a>
    </div>
  );
}

export default Account;
