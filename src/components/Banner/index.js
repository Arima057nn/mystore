import styles from "./Banner.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Banner() {
  return <div className={cx("wrapper")}></div>;
}

export default Banner;
