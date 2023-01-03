import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import ImgCoffee from "../../../../assets/images/menu-7.png";
import Add from "../../../Button/Add";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faMinus, faStar } from "@fortawesome/free-solid-svg-icons";

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
          <div className={cx("star-container")}>
            <FontAwesomeIcon icon={faStar} className={cx("star1")} />
            <FontAwesomeIcon icon={faStar} className={cx("star1")} />
            <FontAwesomeIcon icon={faStar} className={cx("star1")} />
            <FontAwesomeIcon icon={faStar} className={cx("star2")} />
            <FontAwesomeIcon icon={faStar} className={cx("star2")} />
          </div>
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

      <div className={cx("action")}>
        {shopOptions && <Add faicon={faAdd} />}
      </div>
    </div>
  );
}

export default Product;
