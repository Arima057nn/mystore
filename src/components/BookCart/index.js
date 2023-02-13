import styles from "./BookCart.module.scss";
import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import Add from "../../components/Button/Add";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faAdd, faMinus } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function BookCart({ cart }) {
  // const [cartt, setCartt] = useState({
  //   userid: cart.id,
  //   bookid: cart.bookid,
  //   quanlity: cart.quanlity,
  // });
  console.log(cart);
  const [show, setShow] = useState(true);
  const [book, setBook] = useState({});

  // const [count, setCount] = useState(cart.quanlity);
  // useEffect(() => {
  //   setBook(books?.filter((book) => book.id == cart.bookid));
  // }, []);
  // console.log(cart.quanlity);

  useEffect(() => {
    fetch(`http://localhost:3001/books/?id=${cart.bookid}`)
      .then((res) => res.json())
      .then((datas) => {
        setBook(datas[0]);
        console.log(datas[0]);
      });
  }, []);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/carts/${id}`);

      setShow(false);
    } catch (error) {
      console.error(error);
    }
  };

  // const handleSubmitUpdate = async (e) => {
  //   axios.put(`http://localhost:3001/carts/${cart.id}`, cart);
  // };

  return (
    show && (
      <div className={cx("product-container")}>
        <div className={cx("quantity")}>
          <div
          // onClick={() => {
          //   setCount((prevState) => prevState + 1);
          //   setCartt({ ...cartt, quanlity: count + 1 });
          //   hanhdleDataBook({ ...cart, quanlity: count + 1 });
          // }}
          >
            <Add faicon={faAdd} />
          </div>
          <span
            className={cx("count")}
            // onClick={() => {
            //   console.log(cart.quanlity);
            //   handleSubmitUpdate();
            // }}
          >
            {cart.quanlity}
          </span>
          <div
            onClick={() => {
              // if (count > 1) {
              //   setCount((prevState) => prevState - 1);
              //   setCartt({ ...cartt, quanlity: count - 1 });
              //   hanhdleDataBook({ ...cart, quanlity: count - 1 });
              // }
            }}
          >
            <Add faicon={faMinus} />
          </div>
        </div>
        <img
          className={cx("img")}
          src={book.image}
          // onClick={() => handleSubmitUpdate()}
        ></img>
        <div className={cx("info")}>
          <a>
            <span className={cx("title")}>{cart.name}</span>
          </a>
          <span className={cx("price1")}>
            ${book.price} x {cart.quanlity}
          </span>
          <span className={cx("price2")}>$ {book.price * cart.quanlity}</span>
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
