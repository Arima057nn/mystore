import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
import AddDisable from "../../components/Button/AddDisable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faMinus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";
import BookCart2 from "../../components/BookCart2";

const cx = classNames.bind(styles);

function Cart() {
  const acc = JSON.parse(localStorage.getItem("userData"));

  const [carts, setCarts] = useState([]);
  const [books, setBooks] = useState([]);
  const [note, setNote] = useState("");
  const [status, setStatus] = useState(0);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);
  let cartsData = carts;

  useEffect(() => {
    const fetchBookDatas = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1:8000/api/books/index`);
        const bookData = res.data;
        setBooks(bookData);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchCartDatas = async () => {
      try {
        const res = await axios.get(
          `http://127.0.0.1:8000/api/carts/show/${acc.id}`
        );
        const cartData = res.data;
        setCarts(cartData);
        cartsData = carts;
      } catch (err) {
        console.error(err);
      }
    };

    fetchBookDatas();
    fetchCartDatas();
  }, []);

  const handleTotal = (carts, books) => {
    console.log("carts data...", carts);
    const newTotal = carts?.reduce((total, cart) => {
      const book = books.find((book) => book.id === cart.book_id);
      return book ? total + cart.quantity * book.price : total;
    }, 0);
    setTotal(newTotal);
    console.log(newTotal);
    return newTotal;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/orders/create", {
        customer_id: acc.id,
        fullname: acc.last_name,
        phone: acc.phone,
        address: acc.address,
        note: note,
        total: total,
        status: 0,
      });
      alert("Add order successful!", 100);
    } catch (event) {
      alert("Add order failed !!!");
    }
    axios.post(`http://127.0.0.1:8000/api/carts/delete/${acc.id}`);
  };

  const handleDelete = async (e) => {
    try {
      const res = await axios.post(
        `http://127.0.0.1:8000/api/carts/delete/${acc.id}`
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className={cx("product-wrapper")}>
        {carts.map((book) => (
          <BookCart2 cart={book} />
        ))}
      </div>
      <form className={cx("payment-wrapper")} onSubmit={(e) => handleSubmit(e)}>
        <div className={cx("total")}>
          <span className={cx("header")} onClick={(e) => handleDelete(e)}>
            Total
          </span>
          <span>
            $
            {carts.length > 0 && books.length > 0
              ? () => handleTotal(carts, books)
              : 0}
          </span>
        </div>
        <div className={cx("comment")}>
          <span className={cx("header")}>Additional Comments</span>
          <textarea
            className={cx("textarea")}
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
        </div>
        <div className={cx("address")}>
          <span className={cx("header")}>Address</span>
          <p>{acc.address}</p>
        </div>
        <div>
          <button
            className={cx("button")}
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            XÁC NHẬN MUA HÀNG
          </button>
        </div>
      </form>
    </>
  );
}

export default Cart;
