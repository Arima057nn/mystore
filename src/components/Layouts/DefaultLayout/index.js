import classNames from "classnames/bind";
import Header from "../components/Header";
import Banner from "../../Banner";
import styles from "./DefaultLayout.module.scss";
import Sidebar from "../components/Sidebar";

const cx = classNames.bind(styles);

function DefaultLayout({ children, content }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <Banner />
      <div className={cx("container")}>
        <Sidebar children={children} />
        <div className={cx("content")}>{content}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
