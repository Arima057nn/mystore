import classNames from "classnames/bind";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../../Banner";

import styles from "./DefaultLayout.module.scss";
import Sidebar from "../components/Sidebar";
import PigBankImg from "../../../assets/images/piggy-bank.png";
import DeliveryFastImg from "../../../assets/images/delivery-fast.png";
import SavingTimeImg from "../../../assets/images/24-hours.png";
import PaymentBankImg from "../../../assets/images/payment-method.png";

const cx = classNames.bind(styles);

function DefaultLayout({ children, content }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <Banner />
      <div className={cx("cart-wrapper")}>
        <div className={cx("cart")}>
          <img className={cx("img")} src={DeliveryFastImg}></img>
          <div className={cx("title")}>
            <h4>Fast Delivery</h4>
            <span>Start from $10</span>
          </div>
        </div>
        <div className={cx("cart")}>
          <img className={cx("img")} src={PigBankImg}></img>
          <div className={cx("title")}>
            <h4>Money Guarantee</h4>
            <span>7 Days Back</span>
          </div>
        </div>
        <div className={cx("cart")}>
          <img className={cx("img")} src={SavingTimeImg}></img>
          <div className={cx("title")}>
            <h4>365 Days </h4>
            <span>For free return</span>
          </div>
        </div>
        <div className={cx("cart")}>
          <img className={cx("img")} src={PaymentBankImg}></img>
          <div className={cx("title")}>
            <h4>For free return</h4>
            <span>Secure system</span>
          </div>
        </div>
      </div>
      <div className={cx("container")}>
        <Sidebar children={children} />
        <div className={cx("content")}>{content}</div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
