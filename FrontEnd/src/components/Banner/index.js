import styles from "./Banner.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Banner() {
  return (
    <div className={cx("wrapper")}>
      <h1 className={cx("title")}>BookStore</h1>
    </div>
  );
}

export default Banner;
