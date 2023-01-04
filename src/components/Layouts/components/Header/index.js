import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Search from "../../../Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHeart,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div>
          <a className={cx("logo")} href="/">
            BookStore
          </a>
        </div>
        <Search />
        <div className={cx("action-container")}>
          <div className={cx("action")}>
            <FontAwesomeIcon icon={faHeart} className={cx("icon")} />
          </div>
          <div className={cx("action")}>
            <FontAwesomeIcon icon={faUser} className={cx("icon")} />
          </div>
          <div className={cx("action")}>
            <FontAwesomeIcon icon={faBagShopping} className={cx("icon")} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
