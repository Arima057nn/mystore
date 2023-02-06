import classNames from "classnames/bind";
import styles from "./SidebarManager.module.scss";
import IconImg from "../../../../assets/images/customer-class-line-svgrepo-com.png";

const cx = classNames.bind(styles);
const data = [
  {
    ImgUrl:
      "https://play-lh.googleusercontent.com/n1FOqyWb0h4mkTIzENg6sMHETRvYo8nlKB7SwqER5nQSnwvwXkZAaOr_kQEJqEnB7g",
    categoryName: "Customers",
  },
  {
    ImgUrl: "/images/order-svgrepo-com.png",
    categoryName: "Books",
  },
  {
    ImgUrl: "../../../../assets/images/order-svgrepo-com.png",
    categoryName: "Categories",
  },
  {
    ImgUrl: "../../../../assets/images/order-svgrepo-com.png",
    categoryName: "Orders",
  },
];

function SidebarManager() {
  return (
    <div className={cx("wrapper")}>
      <h2 className={cx("header")}>Admin</h2>
      {data.map((value, index) => {
        return (
          <a
            href={`/admin/${value.categoryName}`}
            className={cx("category")}
            key={index}
          >
            <img className={cx("img")} src={value.ImgUrl} />
            {value.categoryName}
          </a>
        );
      })}
    </div>
  );
}

export default SidebarManager;
