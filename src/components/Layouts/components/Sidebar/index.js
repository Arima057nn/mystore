import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import styles from "./Sidebar.module.scss";

const cx = classNames.bind(styles);
function Sidebar({ children }) {
  useEffect(() => {
    const handleScroll = () => {
      // console.log(window.screenY);
      if (window.scrollY > 754) {
        console.log("heeh");
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  return <aside className={cx("wrapper")}>{children}</aside>;
}

export default Sidebar;
