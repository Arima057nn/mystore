import classNames from "classnames/bind";
import styles from "./ProductDetail.module.scss";
import AddtoCard from "../../components/Button/AddtoCard";
import Rated from "../../components/Rated";
import ImgBook from "../../assets/images/B1.jpg";
import { useState, useEffect } from "react";
import AddButton from "../../components/Button/AddButton";
import { faAdd, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router";
import { Avatar, Button, TextField } from "@mui/material";
import axios from "axios";

const cx = classNames.bind(styles);

function ProductDetail() {
  const [show, setShow] = useState(true);
  const [datas, setDatas] = useState([]);
  const [count, setCount] = useState(1);
  const [cmt, setCmt] = useState("");
  const params = useParams();
  const acc = JSON.parse(localStorage.getItem("userData"));
  console.log(acc);
  useEffect(() => {
    fetch(`http://localhost:3001/comments/?bookid=${params.key}`)
      .then((res) => res.json())
      .then((datas) => {
        setDatas(datas);
        console.log(datas);
      });
  }, []);

  console.log(params);

  const handleSubmitComment = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/comments/", {
        userid: acc.id,
        cmt,
        bookid: params.key,
      });
      setCmt("");

      alert("Sign up successful!");
    } catch (event) {
      alert("Sign up failed. Please try again.");
    }
  };
  // return <h1>hehe</h1>;
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("image")}>
          <img src={ImgBook} />
        </div>
        <div className={cx("content")}>
          <h1>Đắc nhân tâm</h1>
          <div className={cx("rated")}>
            <h6>Rated:</h6>
            <Rated />
          </div>
          <h6 className={cx("type")}>Type:</h6>
          <div className={cx("type-container")}>
            <button className={cx("type-btn")}>type1</button>
            <button className={cx("type-btn")}>type2</button>
            <button className={cx("type-btn")}>type3</button>
          </div>
          <h2 className={cx("price")}>$ 101.00</h2>
          <span>Chỉ còn lại 10 sản phẩm</span>
          <br />

          {/* <div className={cx("button")}>
            {show ? (
              <div onClick={() => setShow(false)}>
                <AddtoCard addtocart={"Add to cart"} />
              </div>
            ) : (
              <div className={cx("quantity")}>
                <div
                  onClick={() => {
                    if (count > 1) {
                      setCount(count - 1);
                    } else setShow(true);
                  }}
                >
                  <AddButton faicon={faMinus} />
                </div>
                <span className={cx("count")}>{count}</span>
                <div onClick={() => setCount(count + 1)}>
                  <AddButton faicon={faAdd} />
                </div>
              </div>
            )}
          </div> */}
        </div>
      </div>
      <div className={cx("title-container")}>
        {/* <div className={cx("title", "border-bt")}>Description</div> */}
        <div className={cx("title")}>Reviews</div>
      </div>

      {datas.map((cmt) => (
        <div className={cx("comment-container")}>
          <Avatar>?</Avatar>
          <div className={cx("comment")}>{cmt.cmt}</div>
        </div>
      ))}

      <form onSubmit={handleSubmitComment}>
        <TextField
          fullWidth
          id="standard-textarea"
          label="Write Comment"
          // placeholder="Placeholder"
          multiline
          variant="standard"
          value={cmt}
          onChange={(e) => setCmt(e.target.value)}
        ></TextField>
        <Button type="submit" variant="contained" sx={{ mt: 1 }}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ProductDetail;
