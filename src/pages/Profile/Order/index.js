import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import styles from "../Profile.module.scss";

const cx = classNames.bind(styles);

function Order() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("header")}>
          <FontAwesomeIcon icon={faUser} className={cx("icon")} />
          <h2>My Order</h2>
        </div>
      </div>
      <div className={cx("order-container")}>
        <div className={cx("order-header")}>
          <h5 className={cx("header")}>Order #</h5>
          <h5 className={cx("header")}>Status</h5>
          <h5 className={cx("header")}>Date</h5>
          <h5 className={cx("header")}>Total</h5>
          <div className={cx("btn-detail")}></div>
        </div>
        <div className={cx("order-item")}>
          <h5 className={cx("item-info-id")}>#f1234567</h5>
          <h5 className={cx("item-info")}>Status</h5>
          <h5 className={cx("item-info")}>Nov 10, 2022</h5>
          <h5 className={cx("item-info")}>$360</h5>
          <h5 className={cx("btn-detail")}>
            <FontAwesomeIcon icon={faArrowRight} className={cx("icon")} />
          </h5>
        </div>
        <div className={cx("order-item")}>
          <h5 className={cx("item-info-id")}>#f1234567</h5>
          <h5 className={cx("item-info")}>Status</h5>
          <h5 className={cx("item-info")}>Nov 10, 2022</h5>
          <h5 className={cx("item-info")}>$360</h5>
          <h5 className={cx("btn-detail")}>
            <FontAwesomeIcon icon={faArrowRight} className={cx("icon")} />
          </h5>
        </div>
        <div className={cx("order-item")}>
          <h5 className={cx("item-info-id")}>#f1234567</h5>
          <h5 className={cx("item-info")}>Status</h5>
          <h5 className={cx("item-info")}>Nov 10, 2022</h5>
          <h5 className={cx("item-info")}>$360</h5>
          <h5 className={cx("btn-detail")}>
            <FontAwesomeIcon icon={faArrowRight} className={cx("icon")} />
          </h5>
        </div>

        <div className={cx("order-item")}>
          <h5 className={cx("item-info-id")}>#f1234567</h5>
          <h5 className={cx("item-info")}>Status</h5>
          <h5 className={cx("item-info")}>Nov 10, 2022</h5>
          <h5 className={cx("item-info")}>$360</h5>
          <h5 className={cx("btn-detail")}>
            <FontAwesomeIcon icon={faArrowRight} className={cx("icon")} />
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Order;
