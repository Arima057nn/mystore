import classNames from "classnames/bind";
import styles from "./AddtoCard.module.scss";
const cx = classNames.bind(styles);

function Add({ addtocart, type }) {
  return (
    <button className={cx("button")} type={type}>
      <p className={cx("name")}>{addtocart}</p>
    </button>
  );
}

export default Add;
