import classNames from "classnames/bind";
import styles from "./Manager.module.scss";
import SidebarManager from "../components/SidebarManager";

const cx = classNames.bind(styles);

function Manager({ children, content }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <SidebarManager />
        <div className={cx("content")}>{content}</div>
      </div>
    </div>
  );
}

export default Manager;
