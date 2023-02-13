import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
import AddDisable from "../../components/Button/AddDisable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faMinus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";

const cx = classNames.bind(styles);

function Cart() {
  const acc = JSON.parse(localStorage.getItem("userData"));
  // console.log(acc.id);
  const [datas, setDatas] = useState([]);
  const [books, setBooks] = useState([]);
  const [count, setCount] = useState(1);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  const [order, setOrder] = useState({});
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState(0);

  const [detail, setDetail] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/books/`)
      .then((res) => res.json())
      .then((datas) => {
        setBooks(datas);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3001/carts/?userid=${acc.id}`)
      .then((res) => res.json())
      .then((datas) => {
        setDatas(datas);
        // const sum = datas
        //   .map((item) => item.price * item.quanlity)
        //   .reduce((acc, current) => acc + current, 0);
        // setTotal(sum);
        // setDetail(datas);
      });
  }, []);

  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:3001/carts/${id}`);
  //     setDatas(datas.filter((book) => book.id !== id));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/orders/", {
        customer_id: acc.id,
        fullname: acc.name,
        phone: acc.phone,
        address: acc.address,
        total,
        status,
      });
      alert("Đặt hàng thành công");
    } catch (event) {
      alert("Add to cart failed. Please try again.");
    }
  };
  return (
    <>
      <div className={cx("product-wrapper")}>
        {datas.map((book) => (
          <div className={cx("box")}>
            <img className={cx("img")} src={book.image}></img>
            <div className={cx("info")}>
              <a>
                <span className={cx("title")}>{book.name}</span>
              </a>
              <div className={cx("price")}>
                <span className={cx("price1")}>
                  ${book.price} x {book.quanlity}
                </span>
                <span className={cx("price2")}>
                  $ {book.price * book.quanlity}
                </span>
              </div>
              <div className={cx("quantity")}>
                <div
                // onClick={() => {
                //   if (count > 1) {
                //     setCount(book.quanlity - 1);
                //   }
                // }}
                >
                  <AddDisable faicon={faMinus} />
                </div>
                <span className={cx("count")}>{book.quanlity}</span>
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
        ))}
      </div>
      <div className={cx("payment-wrapper")}>
        <div className={cx("total")}>
          <span className={cx("header")}>Total</span>
          <span>$ {total}</span>
        </div>
        <div className={cx("comment")}>
          <span className={cx("header")}>Additional Comments</span>
          <textarea className={cx("textarea")}></textarea>
        </div>
        <div className={cx("address")}>
          <span className={cx("header")}>Address</span>
          <p>{user.address}</p>
        </div>
        <div>
          <button className={cx("button")} type="submit">
            XÁC NHẬN MUA HÀNG
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
