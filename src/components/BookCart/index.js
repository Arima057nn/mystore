import styles from "./BookCart.module.scss";
import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import Add from "../../components/Button/Add";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faAdd, faMinus } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function BookCart({ databooks, hanhdleDataBook }) {
  const [cart, setCart] = useState({
    id: databooks.id,
    bookid: databooks.bookid,
    name: databooks.name,
    image: databooks.image,
    quanlity: databooks.quanlity,
    price: databooks.price,
  });
  const [datas, setDatas] = useState([]);
  const [show, setShow] = useState(true);

  // const [book, setBook] = useState([]);
  // console.log(book[0]);

  const [count, setCount] = useState(cart.quanlity);
  // useEffect(() => {
  //   setBook(books?.filter((book) => book.id == cart.bookid));
  // }, []);
  // console.log(cart.quanlity);

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

  const handleSubmitUpdate = async (e) => {
    axios.put(`http://localhost:3001/carts/${databooks.id}`, cart);
  };

  return (
    show && (
      <div className={cx("product-container")}>
        <div className={cx("quantity")}>
          <div
            onClick={() => {
              setCount((prevState) => prevState + 1);
              setCart({ ...cart, quanlity: count + 1 });
              hanhdleDataBook({ ...cart, quanlity: count + 1 });
            }}
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
            {count}
          </span>
          <div
            onClick={() => {
              if (count > 1) {
                setCount((prevState) => prevState - 1);
                setCart({ ...cart, quanlity: count - 1 });
                hanhdleDataBook({ ...cart, quanlity: count - 1 });
              }
            }}
          >
            <Add faicon={faMinus} />
          </div>
        </div>
        <img
          className={cx("img")}
          src={cart.image}
          onClick={() => handleSubmitUpdate()}
        ></img>
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
