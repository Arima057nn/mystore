import classNames from "classnames/bind";
import styles from "./AddtoCard.module.scss";
const cx = classNames.bind(styles);

function Add({ addtocart }) {
  return (
    <button className={cx("button")}>
      <p className={cx("name")}>{addtocart}</p>
    </button>
  );
}

export default Add;
