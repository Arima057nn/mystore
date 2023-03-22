import classNames from "classnames/bind";
import styles from "../../CustomersManager/AddCustomer/AddCustomer.module.scss";
import AddtoCart from "../../../../components/Button/AddtoCard";
import React, { useState } from "react";
import axios from "axios";

const cx = classNames.bind(styles);

function AddBook() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quanlity, setQuanlity] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/books/index", {
        name,
        description,
        price,
        quanlity,
      });
      setName("");
      setDescription("");

      setError("Sign up successful!");
    } catch (event) {
      setError("Sign up failed. Please try again.");
    }
  };
  return (
    <>
      <h1>Add Books</h1>
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

          <div className={cx("box")}>
            <label for="price">Price</label>
            <input
              className={cx("input")}
              id="price"
              type="text"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className={cx("box")}>
            <label for="description">Description</label>
            <textarea
              rows={8}
              className={cx("input")}
              id="description"
              type="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>

          <div className={cx("box")}>
            <label for="quanlity">Quanlity</label>
            <input
              className={cx("input")}
              id="quanlity"
              type="text"
              required
              value={quanlity}
              onChange={(e) => setQuanlity(e.target.value)}
            />
          </div>

          <div className={cx("submit-btn")}>
            <AddtoCart addtocart={"Add Book"} type={"submit"} />
          </div>
        </form>
      </div>
    </>
  );
}

export default AddBook;
