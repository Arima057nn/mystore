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
    name: book.name,
    price: book.price,
    description: book.description,
    quanlity: book.quanlity,
  });

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:3001/books/${book.id}`,
        bookEdit
      );
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
          <h2>Edit book</h2>
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
            value={bookEdit.name}
            onChange={(e) => setBookEdit({ ...bookEdit, name: e.target.value })}
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
          <label for="description">description</label>
          <textarea
            className={cx("input")}
            id="description"
            type="description"
            rows="6"
            required
            value={bookEdit.description}
            onChange={(e) =>
              setBookEdit({ ...bookEdit, description: e.target.value })
            }
          />
        </div>

        <div className={cx("box")}>
          <label for="name">Quanlity</label>
          <input
            className={cx("input")}
            id="quanlity"
            type="text"
            required
            value={bookEdit.quanlity}
            onChange={(e) =>
              setBookEdit({ ...bookEdit, quanlity: e.target.value })
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
