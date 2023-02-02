import classNames from "classnames/bind";
import styles from "./Categories.module.scss";
import AcUnitIcon from "@mui/icons-material/AcUnit";

const cx = classNames.bind(styles);

function Categories() {
  const data = [
    {
      //   cateImg: "./images/category/cat1.png",
      categoryName: "Chính trị - Pháp luật",
    },
    {
      //   cateImg: "./images/category/cat2.png",
      categoryName: "Khoa học công nghệ",
    },
    {
      //   cateImg: "./images/category/cat3.png",
      categoryName: "Kinh tế",
    },
    {
      //   cateImg: "./images/category/cat4.png",
      categoryName: "Truyện - Tiểu thuyết",
    },
    {
      //   cateImg: "./images/category/cat5.png",
      categoryName: "Sách thiếu nhi",
    },
    {
      //   cateImg: "./images/category/cat6.png",
      categoryName: "Văn học - Nghệ thuật",
    },
    {
      //   cateImg: "./images/category/cat7.png",
      categoryName: "Tâm linh - Tôn giáo",
    },

    {
      //   cateImg: "./images/category/cat11.png",
      categoryName: "Văn hóa xã hội",
    },

    {
      //   cateImg: "./images/category/cat11.png",
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
