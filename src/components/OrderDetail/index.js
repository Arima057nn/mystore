import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./OrderDetail.module.scss";

const cx = classNames.bind(styles);

function OrderDetail({ data }) {
  const [detail, setDetail] = useState(data.detail);
  console.log(detail);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("header")}>
          {/* <FontAwesomeIcon icon={faUser} className={cx("icon")} /> */}
          <h2>My Order</h2>
        </div>
      </div>
      <div className={cx("order-container")}>
        <div className={cx("order-header")}>
          <h5 className={cx("header")}>Order #</h5>
          <h5 className={cx("header")}>BookID</h5>
          <h5 className={cx("header")}>Name</h5>
          <h5 className={cx("header")}>Quantity</h5>
          <h5 className={cx("header")}>Price</h5>
        </div>
      </div>
      {detail.map((value) => (
        <div className={cx("order-item")}>
          <h5 className={cx("item-info-id")}>{data.id}</h5>
          <h5 className={cx("item-info-id")}>{value.id}</h5>
          <h5 className={cx("item-info")}>{value.name}</h5>
          <h5 className={cx("item-info")}>{value.quantity}</h5>
          <h5 className={cx("item-info")}>{value.price}</h5>
        </div>
      ))}
    </div>
  );
}

export default OrderDetail;
