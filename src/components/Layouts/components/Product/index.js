import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import ImgCoffee from "../../../../assets/images/B1.jpg";
import Add from "../../../Button/Add";
import { faAdd, faMinus } from "@fortawesome/free-solid-svg-icons";
import Rated from "../../../Rated";
import { useState, useEffect } from "react";
const cx = classNames.bind(styles);

function Product() {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const [shopOptions, setShowOptions] = useState(false);

  useEffect(() => {
    if (count > 0) setShow(true);
    else setShow(false);
  }, [count]);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };

  const handleMouseLeave = () => {
    setShowOptions(false);
  };
  return (
    <div
      className={cx("container")}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className={cx("img")} src={ImgCoffee}></img>
      <div className={cx("info-container")}>
        <div className={cx("info")}>
          <p className={cx("title")}>Fresh Line</p>

          <Rated />

          <p className={cx("price")}>$ 135.79</p>
        </div>
        <div className={cx("button-container")}>
          <div onClick={() => setCount(count - 1)}>
            {show && <Add faicon={faMinus} />}
          </div>
          <div className={cx("count")}>{show && count}</div>
          <div onClick={() => setCount(count + 1)}>
            <Add faicon={faAdd} />
          </div>
        </div>
      </div>

      <div className={cx("action-container")}>
        {shopOptions && (
          <div cx={cx("action")}>
            {/* <Add faicon={faAdd} /> */}
            <Add faicon={faAdd} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
