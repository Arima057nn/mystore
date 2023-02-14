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
  //   quantity: cart.quantity,
  // });
  const [show, setShow] = useState(true);
  const [book, setBook] = useState({});
  // const [book, setBook] = useState([]);
  console.log(cart);
  console.log("oke");
  console.log(book[0]);

 
  // useEffect(() => {
  //   setBook(books?.filter((book) => book.id == cart.bookid));
  // }, []);
  // console.log(cart.quantity);

  console.log(cart.bookid);
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/books/show/${cart.book_id}`)
      .then((res) => res.json())
      .then((datas) => {
        setBook(datas[0]);
        console.log(datas[0]);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/carts/${cart.customer_id}/${cart.book_id}`);
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
            // onClick={() => {
            //   setCount((prevState) => prevState + 1);
            //   setCart({ ...cart, quantity: count + 1 });
            //   hanhdleDataBook({ ...cart, quantity: count + 1 });
            // }}
          >
            <Add faicon={faAdd} />
          </div>
          <span
            className={cx("count")}
            // onClick={() => {
            //   console.log(cart.quantity);
            //   handleSubmitUpdate();
            // }}
          >
            {cart.quantity}
          </span>
          <div
            onClick={() => {
              // if (count > 1) {
              //   setCount((prevState) => prevState - 1);
              //   setCart({ ...cart, quantity: count - 1 });
              //   hanhdleDataBook({ ...cart, quantity: count - 1 });
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
          ${book.price} x {cart.quantity}

          </span>
          <span className={cx("price2")}>$ {book.price * cart.quantity}</span>

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
