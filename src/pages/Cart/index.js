import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
import ImgBook from "../../assets/images/B1.jpg";
import Add from "../../components/Button/Add";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faMinus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const cx = classNames.bind(styles);

function Cart() {
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(true);

  return (
    <>
      <div className={cx("product-wrapper")}>
        <div className={cx("box")}>
          <img className={cx("img")} src={ImgBook}></img>
          <div className={cx("info")}>
            <a>
              <span className={cx("title")}>Silver High Neck Sweater</span>
            </a>
            <div className={cx("price")}>
              <span className={cx("price1")}>$210.00 x {count}</span>
              <span className={cx("price2")}>${210 * count}.00</span>
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

        <div className={cx("box")}>
          <img className={cx("img")} src={ImgBook}></img>
          <div className={cx("info")}>
            <a>
              <span className={cx("title")}>Silver High Neck Sweater</span>
            </a>
            <div className={cx("price")}>
              <span className={cx("price1")}>$210.00 x {count}</span>
              <span className={cx("price2")}>${210 * count}.00</span>
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

        <div className={cx("box")}>
          <img className={cx("img")} src={ImgBook}></img>
          <div className={cx("info")}>
            <a>
              <span className={cx("title")}>Silver High Neck Sweater</span>
            </a>
            <div className={cx("price")}>
              <span className={cx("price1")}>$210.00 x {count}</span>
              <span className={cx("price2")}>${210 * count}.00</span>
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

        <div className={cx("box")}>
          <img className={cx("img")} src={ImgBook}></img>
          <div className={cx("info")}>
            <a>
              <span className={cx("title")}>Silver High Neck Sweater</span>
            </a>
            <div className={cx("price")}>
              <span className={cx("price1")}>$210.00 x {count}</span>
              <span className={cx("price2")}>${210 * count}.00</span>
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

        <div className={cx("box")}>
          <img className={cx("img")} src={ImgBook}></img>
          <div className={cx("info")}>
            <a>
              <span className={cx("title")}>Silver High Neck Sweater</span>
            </a>
            <div className={cx("price")}>
              <span className={cx("price1")}>$210.00 x {count}</span>
              <span className={cx("price2")}>${210 * count}.00</span>
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
