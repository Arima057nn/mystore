import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
import ImgBook from "../../assets/images/B1.jpg";
import Add from "../../components/Button/Add";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faMinus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const cx = classNames.bind(styles);

const popularBooks = [
  {
    id: 1,
    name: "Super Backpack",
    price: 129.99,
    description:
      "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    image: "https://cf.shopee.vn/file/sg-11134201-22100-gl6k8whuk7iva4",
  },
  {
    id: 2,
    name: "New Hip",
    price: 199.99,
    description:
      "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    image:
      "https://salt.tikicdn.com/ts/product/45/3b/fc/aa81d0a534b45706ae1eee1e344e80d9.jpg",
  },
  {
    id: 3,
    name: "Elite Series",
    price: 189.99,
    description:
      "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    image:
      "https://salt.tikicdn.com/ts/product/45/3b/fc/aa81d0a534b45706ae1eee1e344e80d9.jpg",
  },
];

function Cart({ book }) {
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(true);

  return (
    <>
      <div className={cx("product-wrapper")}>
        {popularBooks.map((book) => (
          <div className={cx("box")}>
            <img className={cx("img")} src={ImgBook}></img>
            <div className={cx("info")}>
              <a>
                <span className={cx("title")}>{book.name}</span>
              </a>
              <div className={cx("price")}>
                <span className={cx("price1")}>
                  ${book.price} x {count}
                </span>
                <span className={cx("price2")}>$ {book.price * count}</span>
              </div>
              <div className={cx("quantity")}>
                <div
                  onClick={() => {
                    if (count > 1) {
                      setCount(count - 1);
                    }
                  }}
                >
                  <Add faicon={faMinus} />
                </div>
                <span className={cx("count")}>{count}</span>
                <div onClick={() => setCount(count + 1)}>
                  <Add faicon={faAdd} />
                </div>
              </div>
            </div>
            <div className={cx("xmark")}>
              <FontAwesomeIcon icon={faXmark} className={cx("icon")} />
            </div>
          </div>
        ))}
      </div>
      <div className={cx("payment-wrapper")}>
        <div className={cx("total")}>
          <span className={cx("header")}>Total</span>
          <span>$1,770.00</span>
        </div>
        <div className={cx("comment")}>
          <span className={cx("header")}>Additional Comments</span>
          <textarea className={cx("textarea")}></textarea>
        </div>
        <div className={cx("address")}>
          <span className={cx("header")}>Address</span>
          <p>Phường Phương Liệt, Quận Thanh Xuân, Thành phố Hà Nội</p>
        </div>
        <div>
          <button className={cx("button")}>XÁC NHẬN MUA HÀNG</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
