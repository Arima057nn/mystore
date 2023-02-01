import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
import AddDisable from "../../components/Button/AddDisable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faMinus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
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
  const [sum, setSum] = useState(0);
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/books/index`)
      .then((res) => res.json())
      .then((datas) => {
        setBooks(datas);
      });
  }, []);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/carts/show/${acc.id}`)
      .then((res) => res.json())
      .then((datas) => {
        setCarts(datas);
        // const sum = datas
        //   .map((item) => item.price * item.quantity)
        //   .reduce((acc, current) => acc + current, 0);
        // setTotal(sum);
        // setDetail(datas);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/orders/create", {
        customer_id: acc.id,
        fullname: acc.last_name,
        phone: acc.phone,
        address: acc.address,
        note: note,
        total: sum,
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
  const handleSum = () => {
    carts.map((book) => {
      books.map((data) => {
        if (data.id === book.book_id) {
          setSum((prevState) => prevState + book.quantity * data.price);
          // console.log(1000, sum);
        }
      });
    });
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
          <span>$ {total}</span>
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
