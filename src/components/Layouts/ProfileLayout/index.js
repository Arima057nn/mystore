import classNames from "classnames/bind";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./ProfileLayout.module.scss";
import Sidebar from "../components/Sidebar";

const cx = classNames.bind(styles);

function ProfileLayout({ children, content }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar children={children} />
        <div className={cx("content")}>{content}</div>
      </div>
      <Footer />
    </div>
  );
}

export default ProfileLayout;
