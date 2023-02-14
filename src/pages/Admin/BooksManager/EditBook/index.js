import classNames from "classnames/bind";
import styles from "./Profile.module.scss";
import AddtoCart from "../../../../components/Button/AddtoCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from "axios";
const cx = classNames.bind(styles);

function EditBook({ book }) {
  const [error, setError] = useState(null);

  const [bookEdit, setBookEdit] = useState({
    id: book.id,
    tittle: book.tittle,
    price: book.price,
    content: book.content,
    quantity: book.quantity,
    categoryid: book.categoryid,
  });

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://127.0.0.1:8000/api/books/${book.id}`,
        bookEdit
      );
      alert("Edit Book successful!");
    } catch (e) {
      alert("Edit Book failed. Please try again.");
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("header")}>
          <FontAwesomeIcon icon={faUser} className={cx("icon")} />
          <h2>Edit book</h2>
        </div>
      </div>

      <form className={cx("info")} onSubmit={handleSubmitUpdate}>
        <div className={cx("box")}>
          <label for="tittle">tittle</label>
          <input
            className={cx("input")}
            id="tittle"
            type="text"
            required
            value={bookEdit.tittle}
            onChange={(e) =>
              setBookEdit({ ...bookEdit, tittle: e.target.value })
            }
          />
        </div>
        <div className={cx("box")}>
          <label for="price">Price</label>
          <input
            className={cx("input")}
            id="price"
            type="text"
            required
            value={bookEdit.price}
            onChange={(e) =>
              setBookEdit({ ...bookEdit, price: e.target.value })
            }
          />
        </div>
        <div className={cx("box")}>
          <label for="content">Content</label>
          <textarea
            className={cx("input")}
            id="content"
            type="description"
            rows="4"
            required
            value={bookEdit.content}
            onChange={(e) =>
              setBookEdit({ ...bookEdit, content: e.target.value })
            }
          />
        </div>

        <div className={cx("box")}>
          <label for="name">Quantity</label>
          <input
            className={cx("input")}
            id="quantity"
            type="text"
            required
            value={bookEdit.quantity}
            onChange={(e) =>
              setBookEdit({ ...bookEdit, quantity: e.target.value })
            }
          />
        </div>

        <div className={cx("box")}>
          <label for="categoryid">CategoryID</label>
          <input
            className={cx("input")}
            id="categoryid"
            type="text"
            required
            value={bookEdit.categoryid}
            onChange={(e) =>
              setBookEdit({ ...bookEdit, categoryid: e.target.value })
            }
          />
        </div>
        <div>
          <AddtoCart addtocart={"Save Changes"} type={"submit"} />
        </div>
      </form>
    </div>
  );
}

export default EditBook;
