import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
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
import axios from "axios";
import { Avatar } from "@mui/material";

const cx = classNames.bind(styles);

function Header() {
  const [modal, setModal] = useState(false);
  const [datas, setDatas] = useState([]);
  const [listChange, setListChange] = useState([]);
  const [listId, setListId] = useState([]);
  const [user, setUser] = useState({});

  const navigate = useNavigate();
  const acc = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    fetch(`http://localhost:3001/carts/?userid=${acc.id}`)
      .then((res) => res.json())
      .then((datas) => {
        setDatas(datas);
        console.log(datas);
      });
  }, []);

  // console.log(datas);

  const toggleModal = () => {
    setModal(!modal);
    this.classList.toggle("active");
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  // handle databook
  const hanhdleDataBook = (data) => {
    if (!listId.includes(data.id)) {
      setListChange([...listChange, data]);
    } else {
      const updateIndex = listChange.findIndex((item) => item.id === data.id);
      listChange[updateIndex] = { ...data };
      setListChange([...listChange]);
    }
    setListId([...listId, data.id]);
  };

  // call api update
  const handleUpdate = async (id, cart) => {
    await axios.put(`http://localhost:3001/carts/${id}`, cart);
  };

  // handle viewcart
  const handleSubmitViewCart = () => {
    // listChange.length && listChange.map((item) => handleUpdate(item.id, item));
    navigate("/cart");
  };
  const token = localStorage.getItem("token");

  return (
    <>
      {modal &&
        (token === "user123" ? (
          <div className={cx("modal")}>
            <div onClick={toggleModal} className={cx("overlay")}></div>
            <div className={cx("modal-content")}>
              <div className={cx("header-container")}>
                <div className={cx("icon-container")}>
                  <ShoppingBagOutlinedIcon fontSize={"large"} />
                  <p style={{ fontWeight: 500, fontSize: 24 }}>Cart</p>
                </div>
                <FontAwesomeIcon
                  icon={faXmark}
                  className={cx("icon")}
                  onClick={toggleModal}
                />
              </div>
              {datas.map((value) => (
                <BookCart cart={value} />
              ))}

              <div className={cx("checkout-container")}>
                <button className={cx("button")}>Checkout Now</button>

                <button
                  className={cx("button-view")}
                  onClick={() => handleSubmitViewCart()}
                >
                  View Cart
                </button>
              </div>
            </div>
          </div>
        ) : (
          <></>
        ))}
      <header className={cx("wrapper")}>
        <div className={cx("inner")}>
          <div>
            <a className={cx("logo")} href="/">
              BookStore
            </a>
          </div>
          <Search />

          <div className={cx("action-container")}>
            <div
              // className={cx("action")}
              onClick={() => {
                if (token === "user123") {
                  navigate("/profile");
                } else if (token === "admin123") {
                } else {
                  navigate("/login");
                }
              }}
            >
              <div className={cx("avt")}>
                <Avatar src={"/images/avatar1.jpg"} sx={{ mr: 2 }} />
              </div>
            </div>
            {/* <h4>{user.name}</h4> */}
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
