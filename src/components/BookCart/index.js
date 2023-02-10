import styles from "./BookCart.module.scss";
import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import Add from "../../components/Button/Add";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faXmark,
  faAdd,
  faMinus,
  faL,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function BookCart({ databooks }) {
  const [cart, setCart] = useState(databooks);
  const [datas, setDatas] = useState([]);
  const [show, setShow] = useState(true);

  // const [book, setBook] = useState([]);
  // console.log(book[0]);

  const [count, setCount] = useState(cart.quanlity);
  // useEffect(() => {
  //   setBook(books?.filter((book) => book.id == cart.bookid));
  // }, []);

  useEffect(() => {
    fetch(`http://localhost:3001/carts/`)
      .then((res) => res.json())
      .then((datas) => {
        setDatas(datas);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/carts/${id}`);
      setDatas(datas.filter((book) => book.id !== id));
      setShow(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    show && (
      <div className={cx("product-container")}>
        <div className={cx("quantity")}>
          <div
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <Add faicon={faAdd} />
          </div>
          <span className={cx("count")}>{count}</span>
          <div
            onClick={() => {
              if (count > 1) {
                setCount(count - 1);
              }
            }}
          >
            <Add faicon={faMinus} />
          </div>
        </div>
        <img className={cx("img")} src={cart.image}></img>
        <div className={cx("info")}>
          <a>
            <span className={cx("title")}>{cart.name}</span>
          </a>
          <span className={cx("price1")}>
            ${cart.price} x {count}
          </span>
          <span className={cx("price2")}>$ {cart.price * count}</span>
        </div>
        <FontAwesomeIcon
          icon={faXmark}
          className={cx("icon")}
          onClick={() => handleDelete(cart.id)}
        />
      </div>
    )
  );
}

export default BookCart;
