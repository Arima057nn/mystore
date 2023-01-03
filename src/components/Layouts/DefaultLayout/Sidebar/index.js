import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import Categories from "../../../Categories";

const cx = classNames.bind(styles);
function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <Categories />
    </aside>
  );
}

export default Sidebar;
