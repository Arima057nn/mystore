import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../Profile.module.scss";

const cx = classNames.bind(styles);

function Order() {
  const [datas, setDatas] = useState([]);
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState();
  const [orderDetail, setOrderDetail] = useState({});
  const [modal, setModal] = useState(false);
  const acc = JSON.parse(localStorage.getItem("userData"));

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/favorites/show/${user.id}`)
      .then((res) => res.json())
      .then((datas) => {
        setDatas(datas);
      });
  }, []);
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/books/index/`)
      .then((res) => res.json())
      .then((datas) => {
        setBooks(datas);
      });
  }, []);

  const toggleModal = (id) => {
    setModal(!modal);
    datas.map((order) => {
      if (order.id === id) setOrderDetail(order);
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/favorites/${acc.id}/${id}`);
      setDatas(datas.filter((book) => book.book_id !== id));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("header")}>
          <h2>My Wishlists</h2>
        </div>
      </div>
      <div className={cx("order-container")}>
        <div className={cx("order-header")}>
          <h5 className={cx("header-id")}>ID</h5>
          <h5 className={cx("header")}>Name</h5>
        </div>
        {datas.map((order) => (
          <div className={cx("order-item")}>
            <h5 className={cx("item-info-id")}>{order.book_id}</h5>
            {/* {setBook(books.filter((book) => book.id === order.book_id))} */}
            {/* <h5 className={cx("item-info")}>{book.tittle}</h5> */}

            <div
              className={cx("btn-detail")}
              onClick={() => handleDelete(order.book_id)}
            >
              <FontAwesomeIcon icon={faTrash} className={cx("icon")} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Order;
