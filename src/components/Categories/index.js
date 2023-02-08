import classNames from "classnames/bind";
import styles from "./Categories.module.scss";
import AcUnitIcon from "@mui/icons-material/AcUnit";

const cx = classNames.bind(styles);

function Categories() {
  const data = [
    {
      categoryName: "Chính trị - Pháp luật",
    },
    {
      categoryName: "Khoa học công nghệ",
    },
    {
      categoryName: "Kinh tế",
    },
    {
      categoryName: "Truyện - Tiểu thuyết",
    },
    {
      categoryName: "Sách thiếu nhi",
    },
    {
      categoryName: "Văn học - Nghệ thuật",
    },
    {
      categoryName: "Tâm linh - Tôn giáo",
    },

    {
      categoryName: "Văn hóa xã hội",
    },

    {
      categoryName: "Lịch sử",
    },
  ];

  return (
    <div className={cx("wrapper")}>
      <h2 className={cx("header")}>Top Categories</h2>
      {data.map((value, index) => {
        return (
          <span className={cx("category")} key={index}>
            <AcUnitIcon className={cx("icon")} fontSize={"4px"} />
            {value.categoryName}
          </span>
        );
      })}
    </div>
  );
}

export default Categories;
