import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import ImgCoffee from "../../../../assets/images/B1.jpg";
import Add from "../../../Button/Add";
import { faAdd, faMinus } from "@fortawesome/free-solid-svg-icons";
import Rated from "../../../Rated";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../../../../styles/theme";

import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
const cx = classNames.bind(styles);

function Product({ isFav, book }) {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const [isfav, setIsfav] = useState(isFav);
  // const [shopOptions, setShowOptions] = useState(false);
  const FavHandle = () => {
    if (isfav === 1) setIsfav(0);
    else setIsfav(1);
  };

  useEffect(() => {
    if (count > 0) setShow(true);
    else setShow(false);
  }, [count]);

  const BookFavButton = styled(IconButton)(({ isfav }) => ({
    color: isfav ? Colors.primary : Colors.light,
  }));
  // const handleMouseEnter = () => {
  //   setShowOptions(true);
  // };

  // const handleMouseLeave = () => {
  //   setShowOptions(false);
  // };
  return (
    <div
      className={cx("container")}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      <Link to={"/Product/book"}>
        <img className={cx("img")} src={ImgCoffee}></img>
      </Link>
      <div className={cx("info-container")}>
        <div className={cx("info")}>
          <a href="/Product/book" className={cx("title")}>
            Fresh Line
          </a>

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
        {/* {shopOptions && ( */}

        <BookFavButton size="small" onClick={FavHandle} isfav={isfav}>
          <FavoriteIcon />
        </BookFavButton>

        <BookFavButton size="small">
          <VisibilityIcon />
        </BookFavButton>

        {/* )} */}
      </div>
    </div>
  );
}

export default Product;
