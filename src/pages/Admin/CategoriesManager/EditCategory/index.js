import classNames from "classnames/bind";
import styles from "./Profile.module.scss";
import AddtoCart from "../../../../components/Button/AddtoCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from "axios";
const cx = classNames.bind(styles);

function EditCategory({ category }) {
  const [error, setError] = useState(null);

  const [categoryEdit, setCategoryEdit] = useState({
    id: category.id,
    name: category.name,
    description: category.description,
  });

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:3001/categories/${category.id}`,
        categoryEdit
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
          <h2>Edit category</h2>
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
            value={categoryEdit.name}
            onChange={(e) =>
              setCategoryEdit({ ...categoryEdit, name: e.target.value })
            }
          />
        </div>
        <div className={cx("box")}>
          <label for="description">description</label>
          <textarea
            className={cx("input")}
            id="description"
            type="description"
            rows="10"
            required
            value={categoryEdit.description}
            onChange={(e) =>
              setCategoryEdit({ ...categoryEdit, description: e.target.value })
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

export default EditCategory;
