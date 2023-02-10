import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import Search from "../../../Search";
import { useState } from "react";
import ImgBook from "../../../../assets/images/B1.jpg";
import Add from "../../../../components/Button/Add";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import {
  faUser,
  faXmark,
  faBagShopping,
  faAdd,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Header() {
  const [modal, setModal] = useState(false);
  const [count, setCount] = useState(1);

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
              <FontAwesomeIcon icon={faXmark} className={cx("icon")} />
            </div>
            <div className={cx("product-container")}>
              <div className={cx("quantity")}>
                <div
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  <Add faicon={faAdd} />
                </div>
                <span className={cx("count")}>{count}</span>
                <div
                  onClick={() => {
                    if (count > 1) {
                      setCount(count - 1);
                    }
                  }}
                >
                  <Add faicon={faMinus} />
                </div>
              </div>

              <img className={cx("img")} src={ImgBook}></img>

              <div className={cx("info")}>
                <a>
                  <span className={cx("title")}>Dac nhan tam</span>
                </a>

                <span className={cx("price1")}>$100 x 2</span>
                <span className={cx("price2")}>$ 200</span>
              </div>
              <FontAwesomeIcon icon={faXmark} className={cx("icon")} />
            </div>
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
