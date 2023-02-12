import classNames from "classnames/bind";
import styles from "../../CustomersManager/AddCustomer/AddCustomer.module.scss";
import AddtoCart from "../../../../components/Button/AddtoCard";
import React, { useState } from "react";
import axios from "axios";

const cx = classNames.bind(styles);

function AddCategory() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/genres/create", {
        name,   
      });
      setName("");
      alert("Add Category successful!!");
    } catch (event) {
      alert("Add Category failed!");
    }
  };
  return (
    <>
      <h1>Add Categories</h1>
      <div className={cx("wrapper")}>
        <form onSubmit={handleSubmit} className={cx("info")}>
          <div className={cx("box")}>
            <label for="name">Name</label>
            <input
              className={cx("input")}
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          

          <div className={cx("submit-btn")}>
            <AddtoCart addtocart={"Add Category"} type={"submit"} />
          </div>
        </form>
      </div>
    </>
  );
}

export default AddCategory;
