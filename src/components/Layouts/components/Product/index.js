import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import Add from "../../../Button/Add";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
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
import axios from "axios";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function Product({ isFav, book }) {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  // const [error, setError] = useState(null);
  const acc = JSON.parse(localStorage.getItem("userData"));
  const [isfav, setIsfav] = useState(isFav);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const FavHandle = async (event) => {
    if (token === "user123") {
      if (isfav === 1) {
        setIsfav(0);
        await axios.delete(
          `http://127.0.0.1:8000/api/favorites/${acc.id}/${book.id}`
        );
      } else {
        event.preventDefault();
        try {
          setIsfav(1);
          await axios.post("http://127.0.0.1:8000/api/favorites/create/", {
            book_id: book.id,
            customer_id: acc.id,
          });
          // alert("Add book to fav successful!");
        } catch (event) {
          // alert("Add book to fav successful !!!");
        }
      }
    }
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/carts/create/", {
        book_id: book.id,
        quantity: 1,
        customer_id: acc.id,
      });
      alert("Add book to cart successful!");
    } catch (event) {
      alert("Add book to cart successful !!!");
    }
  };

  return (
    <>
      {modal && (
        <div className={cx("modal")}>
          <div onClick={toggleModal} className={cx("overlay")}></div>
          <div className={cx("modal-content")}>
            <div className={cx("image")}>
              <img src={book.image} alt={book.tittle} />
            </div>
            <div className={cx("content")}>
              <div className={cx("close-btn")}>
                <BookFavButton size="small" onClick={toggleModal}>
                  <CloseIcon />
                </BookFavButton>
              </div>
              <h1>{book.tittle}</h1>

              <h2 className={cx("price")}>$ {book.price}</h2>
              <span>{book.content}</span>
              <br />
              {/* <div className={cx("button")}>
                <AddtoCard addtocart={"Add to cart"} />
              </div> */}
            </div>
          </div>
        </div>
      )}
      <div className={cx("container")}>
        <div onClick={() => navigate(`/book/${book.id}`)}>
          <img className={cx("img")} src={book.image}></img>
        </div>
        <div className={cx("info-container")}>
          <div className={cx("info")}>
            <Link className={cx("title")}>{book.tittle}</Link>
            {/* <Rated /> */}
            <p className={cx("price")}>$ {book.price}</p>
          </div>

          <div className={cx("button-container")}>
            <div className={cx("count")}>{show && count}</div>
            <div
              onClick={(e) => {
                if (token === "user123") {
                  if (count < 1) {
                    setCount(count + 1);
                    handleSubmit(e);
                  }
                }
              }}
            >
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
