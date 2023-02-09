import classNames from "classnames/bind";
import styles from "./Categories.module.scss";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/categories/`)
      .then((res) => res.json())
      .then((datas) => {
        setCategories(datas);
      });
  }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>Top Categories</div>
      {categories.map((value, index) => {
        return (
          <span className={cx("category")} key={index}>
            <AcUnitIcon className={cx("icon")} fontSize={"4px"} />
            {value.name}
          </span>
        );
      })}
    </div>
  );
}

export default Categories;
