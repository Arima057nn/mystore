import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import styles from "../Profile.module.scss";
import OrderDetail from "../../../components/OrderDetail";

const cx = classNames.bind(styles);

function Order() {
  const [datas, setDatas] = useState([]);
  const [orderDetail, setOrderDetail] = useState({});
  const [modal, setModal] = useState(false);

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/orders/show/${user.id}`)
      .then((res) => res.json())
      .then((datas) => {
        setDatas(datas);
      });
  }, []);

  const toggleModal = (id) => {
    setModal(!modal);
    datas.map((order) => {
      if (order.id === id) setOrderDetail(order);
    });
  };
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
          <h5 className={cx("header-id")}>OrderID</h5>
          <h5 className={cx("header")}>Status</h5>
          <h5 className={cx("header")}>Date</h5>
          <h5 className={cx("header")}>Total</h5>
          {/* <div className={cx("btn-detail")}></div> */}
        </div>
        {datas.map((order) => (
          <div className={cx("order-item")}>
            <h5 className={cx("item-info-id")}>{order.id}</h5>
            <h5 className={cx("item-info")}>{order.status}</h5>
            <h5 className={cx("item-info")}>{order.created_date}</h5>
            <h5 className={cx("item-info")}>{order.total}</h5>
            {/* {modal && (
              <div className={cx("modal")}>
                <div
                  onClick={() => toggleModal(order.id)}
                  className={cx("overlay")}
                ></div>
                <div className={cx("modal-content-admin")}>
                  <OrderDetail data={orderDetail} />
                </div>
              </div>
            )} */}

            {/* <div
              className={cx("btn-detail")}
              onClick={() => toggleModal(order.id)}
            >
              <FontAwesomeIcon icon={faArrowRight} className={cx("icon")} />
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Order;
