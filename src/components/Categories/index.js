import classNames from "classnames/bind";
import styles from "./Categories.module.scss";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function Categories() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/genres/index`)
      .then((res) => res.json())
      .then((datas) => {
        setCategories(datas);
      });
  }, []);

  // const handleClickCategory = (event) => {
  //   event.preventDefault();
  //   // console.log(datas);
  //   navigate(`/bookcategory/${searchTerm}`);
  // };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>Top Categories</div>
      {categories.map((value, index) => {
        return (
          <span
            className={cx("category")}
            key={index}
            onClick={() => navigate(`/bookcategory/${value.id}`)}
          >
            <AcUnitIcon className={cx("icon")} fontSize={"4px"} />
            {value.name}
          </span>
        );
      })}
    </div>
  );
}

export default Categories;
