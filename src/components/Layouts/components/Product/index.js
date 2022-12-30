import classNames from "classnames/bind";
import styles from "./Product.module.scss";
// import ImgCoffee from "../../../../assets/images/menu-1.png";

const cx = classNames.bind(styles);

function Product() {
  return (
    <div>
      <div className={cx("img")}></div>
    </div>
  );
}

export default Product;
