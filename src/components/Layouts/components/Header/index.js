import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import Search from "../../../Search";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import {
  faUser,
  faXmark,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import BookCart from "../../../BookCart";

const cx = classNames.bind(styles);

function Header() {
  const [modal, setModal] = useState(false);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/carts/`)
      .then((res) => res.json())
      .then((datas) => {
        setDatas(datas);
      });
  }, []);

  // console.log(book);

  const toggleModal = () => {
    setModal(!modal);
    this.classList.toggle("active");
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      {modal && (
        <div className={cx("modal")}>
          <div onClick={toggleModal} className={cx("overlay")}></div>
          <div className={cx("modal-content")}>
            <div className={cx("header-container")}>
              <div className={cx("icon-container")}>
                <ShoppingBagOutlinedIcon fontSize={"large"} />
                <p style={{ fontWeight: 500 }}>2 item</p>
              </div>
              <FontAwesomeIcon
                icon={faXmark}
                className={cx("icon")}
                onClick={toggleModal}
              />
            </div>
            {datas.map((value) => (
              <BookCart databooks={value} />
            ))}

            <div className={cx("checkout-container")}>
              <button className={cx("button")}>Checkout Now</button>
              <a href="/cart">
                <button className={cx("button-view")}>View Cart</button>
              </a>
            </div>
          </div>
        </div>
      )}
      <header className={cx("wrapper")}>
        <div className={cx("inner")}>
          <div>
            <a className={cx("logo")} href="/">
              BookStore
            </a>
          </div>
          <Search />
          <div className={cx("action-container")}>
            <Link to={"/profile"} className={cx("action")}>
              <FontAwesomeIcon icon={faUser} className={cx("icon")} />
            </Link>
            <div className={cx("action")} onClick={toggleModal}>
              <FontAwesomeIcon icon={faBagShopping} className={cx("icon")} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
