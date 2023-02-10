import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";

import styles from "../Profile.module.scss";

const cx = classNames.bind(styles);

function Wishlist() {
  const [datas, setDatas] = useState([]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/wishlist/${id}`);
      setDatas(datas.filter((book) => book.id !== id));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetch(`http://localhost:3001/wishlist/`)
      .then((res) => res.json())
      .then((datas) => {
        setDatas(datas);
      });
  }, []);

  console.log(datas);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("header")}>
          <FontAwesomeIcon icon={faUser} className={cx("icon")} />
          <h2>My Wishlist</h2>
        </div>
      </div>
      <div className={cx("order-container")}>
        <div className={cx("order-header")}>
          <h5 className={cx("header")}>Name</h5>
          <h5 className={cx("header")}>Price</h5>
          <h5 className={cx("header-description")}>Description</h5>

          <div className={cx("btn-detail")}></div>
        </div>
        {datas.map((book) => (
          <div className={cx("order-item")}>
            <h5 className={cx("item-info-id")}>{book.name}</h5>
            <h5 className={cx("item-info")}>{book.price}</h5>
            <h5 className={cx("item-info-description")}>{book.description}</h5>
            <h5
              className={cx("btn-detail")}
              onClick={() => handleDelete(book.id)}
            >
              <FontAwesomeIcon icon={faTrash} className={cx("icon")} />
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
