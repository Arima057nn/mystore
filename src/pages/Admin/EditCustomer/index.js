import classNames from "classnames/bind";
import styles from "../Profile.module.scss";
import AddtoCart from "../../../components/Button/AddtoCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const cx = classNames.bind(styles);

function EditCustomer({ customer }) {
  const [error, setError] = useState(null);
  const [customerId, setCustomerId] = useState(customer.id);
  const [customerEdit, setCustomerEdit] = useState({
    name: customer.name,
    email: customer.email,
    phone: customer.phone,
    address: customer.address,
    password: customer.password,
  });

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/users/${customerId}`);

      setError("Update successful!");
    } catch (e) {
      setError("Update failed. Please try again.");
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("header")}>
          <FontAwesomeIcon icon={faUser} className={cx("icon")} />
          <h2>Edit Customer</h2>
        </div>
      </div>

      <form className={cx("info")} onSubmit={handleSubmitUpdate}>
        <div className={cx("box")}>
          <label for="name">Name</label>
          <input
            className={cx("input")}
            id="name"
            type="text"
            required
            value={customerEdit.name}
            onChange={(e) => setCustomerEdit(e.target.value)}
          />
        </div>
        <div className={cx("box")}>
          <label for="email">Email</label>
          <input
            className={cx("input")}
            id="email"
            type="email"
            required
            value={customerEdit.email}
            onChange={(e) => setCustomerEdit(e.target.value)}
          />
        </div>

        <div className={cx("box")}>
          <label for="phone">Phone</label>
          <input
            className={cx("input")}
            id="phone"
            type="tel"
            required
            value={customerEdit.phone}
            onChange={(e) => setCustomerEdit(e.target.value)}
          />
        </div>

        <div className={cx("box")}>
          <label for="address">Address</label>
          <input
            className={cx("input")}
            id="address"
            required
            value={customerEdit.address}
            onChange={(e) => setCustomerEdit(e.target.value)}
          />
        </div>
        <div className={cx("box")}>
          <label for="password">Password</label>
          <input
            className={cx("input")}
            id="password"
            type="password"
            required
            value={customerEdit.password}
            onChange={(e) => setCustomerEdit(e.target.value)}
          />
        </div>
        <div>
          <AddtoCart addtocart={"Save Changes"} type={"submit"} />
        </div>
      </form>
    </div>
  );
}

export default EditCustomer;
