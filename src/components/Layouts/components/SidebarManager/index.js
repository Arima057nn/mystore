import classNames from "classnames/bind";
import styles from "./SidebarManager.module.scss";

const cx = classNames.bind(styles);
const data = [
  {
    ImgUrl: "/images/customer.png",
    categoryName: "Customers",
  },
  {
    ImgUrl: "/images/books.png",
    categoryName: "Books",
  },
  {
    ImgUrl: "/images/category.png",
    categoryName: "Categories",
  },
  {
    ImgUrl: "/images/order.png",
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
