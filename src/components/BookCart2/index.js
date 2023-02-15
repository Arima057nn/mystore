import styles from "./BookCart2.module.scss";
import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import Add from "../../components/Button/Add";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faAdd, faMinus } from "@fortawesome/free-solid-svg-icons";
import AddDisable from "../Button/AddDisable";
const cx = classNames.bind(styles);

function BookCart2({ cart, props }) {
  const [book, setBook] = useState({});
  const [price, setPrice] = useState(0);

  console.log(cart.bookid);
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/books/show/${cart.book_id}`)
      .then((res) => res.json())
      .then((datas) => {
        setBook(datas[0]);
        props.callback(datas[0].price);
        // console.log(datas[0]);
      });
  }, []);

  return (
    <div className={cx("box")}>
      <img className={cx("img")} src={book.image}></img>
      <div className={cx("info")}>
        <a>
          <span className={cx("title")}>{book.tittle}</span>
        </a>
        <div className={cx("price")}>
          <span className={cx("price1")}>${book.price} x 1</span>
          <span className={cx("price2")}>$ {book.price * 1}</span>
        </div>
        <div className={cx("quantity")}>
          <div
          // onClick={() => {
          //   if (count > 1) {
          //     setCount(book.quantity - 1);
          //   }
          // }}
          >
            <AddDisable faicon={faMinus} />
          </div>
          <span className={cx("count")}>1</span>
          <div
          // onClick={() => {
          //   setCount(count + 1);
          // }}
          >
            <AddDisable faicon={faAdd} />
          </div>
        </div>
      </div>
      {/* <div className={cx("xmark")}>
      <FontAwesomeIcon icon={faXmark} className={cx("icon")} />
    </div> */}
    </div>
  );
}

export default BookCart2;
