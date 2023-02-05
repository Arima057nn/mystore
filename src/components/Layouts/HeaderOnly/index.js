import Header from "../components/Header";
import Footer from "../components/Footer";
import classNames from "classnames/bind";

import styles from "./HeaderOnly.module.scss";
const cx = classNames.bind(styles);

function HeaderOnly({ content }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>{content}</div>
      <Footer />
    </div>
  );
}

export default HeaderOnly;
