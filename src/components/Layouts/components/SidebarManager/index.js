import classNames from "classnames/bind";
import styles from "./SidebarManager.module.scss";
import IconImg from "../../../../assets/images/customer-class-line-svgrepo-com.png";

const cx = classNames.bind(styles);
const data = [
  {
    cateImg: "../../../../assets/images/customer-class-line-svgrepo-com.png",
    categoryName: "Customers",
  },
  {
    cateImg: "../../../../assets/images/order-svgrepo-com.png",
    categoryName: "Books",
  },
  {
    cateImg: "../../../../assets/images/order-svgrepo-com.png",
    categoryName: "Categories",
  },
  {
    cateImg: "../../../../assets/images/order-svgrepo-com.png",
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
            href={`/manager/${value.categoryName}`}
            className={cx("category")}
            key={index}
          >
            <img className={cx("img")} src={`${value.cateImg}`} />
            {value.categoryName}
          </a>
        );
      })}
    </div>
  );
}

export default SidebarManager;
