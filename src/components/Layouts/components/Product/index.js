import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import Add from "../../../Button/Add";
import { faAdd, faMinus } from "@fortawesome/free-solid-svg-icons";
import Rated from "../../../Rated";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../../../../styles/theme";
import AddtoCard from "../../../../components/Button/AddtoCard";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloseIcon from "@mui/icons-material/Close";
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
 
  const [modal, setModal] = useState(false);
 
  const toggleModal = () => {
    setModal(!modal);
  };
 
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      {modal && (
        <div className={cx("modal")}>
          <div onClick={toggleModal} className={cx("overlay")}></div>
          <div className={cx("modal-content")}>
            <div className={cx("image")}>
              <img src={book.image} alt={book.name} />
            </div>
            <div className={cx("content")}>
              <div className={cx("close-btn")}>
                <BookFavButton size="small" onClick={toggleModal}>
                  <CloseIcon />
                </BookFavButton>
              </div>
              <h1>{book.name}</h1>
              <div className={cx("rated")}>
                <h6>Rated:</h6>
                <Rated />
              </div>
 
              <h2 className={cx("price")}>$ {book.price}</h2>
              <span>{book.description}</span>
              <br />
              <div className={cx("button")}>
                <AddtoCard addtocart={"Add to cart"} />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={cx("container")}>
        <Link to={"/Product/book"}>
          <img className={cx("img")} src={book.image}></img>
        </Link>
        <div className={cx("info-container")}>
          <div className={cx("info")}>
            <Link href="/Product/book" className={cx("title")}>
              {book.tittle}
            </Link>
            <Rated />
            <p className={cx("price")}>$ {book.price}</p>
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
          <BookFavButton size="small" onClick={FavHandle} isfav={isfav}>
            <FavoriteIcon />
          </BookFavButton>
 
          <BookFavButton size="small" onClick={toggleModal}>
            <VisibilityIcon />
          </BookFavButton>
        </div>
      </div>
    </>
  );
}
 
export default Product;
