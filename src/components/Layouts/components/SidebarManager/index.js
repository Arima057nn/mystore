import { Button } from "@mui/material";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
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
  const navigate = useNavigate();
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

      <Button
        variant="contained"
        onClick={() => {
          navigate("/login");
          localStorage.clear();
        }}
        sx={{ marginTop: 2 }}
      >
        Logout
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          navigate("/");
        }}
        color="success"
        startIcon={<HomeIcon />}
        sx={{ marginTop: 2 }}
      >
        Home
      </Button>
    </div>
  );
}

export default SidebarManager;
