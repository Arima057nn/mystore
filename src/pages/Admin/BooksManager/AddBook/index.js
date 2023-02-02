import classNames from "classnames/bind";
import styles from "../../CustomersManager/AddCustomer/AddCustomer.module.scss";
import AddtoCart from "../../../../components/Button/AddtoCard";
import React, { useState } from "react";
import axios from "axios";

const cx = classNames.bind(styles);

function AddBook() {
  const [tittle, setTittle] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [categoryid, setCategoryid] = useState("");
  const [image, setImage] = useState(null);

  const [error, setError] = useState(null);
  const handleAvatarChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("tittle", tittle);
    formData.append("quantity", quantity);
    formData.append("price", price);
    formData.append("image", image);
    formData.append("categoryid", categoryid);
    formData.append("content", content);
    try {
      await axios.post("http://127.0.0.1:8000/api/books/create", formData);
      // setTittle("");
      // setContent("");
      // setPrice("");
      // setQuantity("");
      // setCategoryid("");
      // setImage(null);

      alert("Add book successful!");
    } catch (event) {
      alert("Add book failed. Please try again.");
    }
  };
  return (
    <>
      <h1>Add Books</h1>
      <div className={cx("wrapper")}>
        <form onSubmit={handleSubmit} className={cx("info")}>
          <div className={cx("box")}>
            <label for="tittle">Name</label>
            <input
              className={cx("input")}
              id="tittle"
              type="text"
              required
              value={tittle}
              onChange={(e) => setTittle(e.target.value)}
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
            <label for="content">content</label>
            <textarea
              rows={8}
              className={cx("input")}
              id="content"
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </div>

          <div className={cx("box")}>
            <label for="quantity">Quantity</label>
            <input
              className={cx("input")}
              id="quantity"
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div className={cx("box")}>
            <label for="categoryid">Categoryid</label>
            <input
              className={cx("input")}
              id="categoryid"
              type="text"
              value={categoryid}
              onChange={(e) => setCategoryid(e.target.value)}
            />
          </div>

          <div className={cx("box")}>
            <input
              type="file"
              accept="assets/image/*"
              onChange={(e) => handleAvatarChange(e)}
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
