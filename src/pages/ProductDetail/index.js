import classNames from "classnames/bind";
import styles from "./ProductDetail.module.scss";

import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Avatar, Button, TextField } from "@mui/material";
import axios from "axios";

const cx = classNames.bind(styles);

function ProductDetail() {
  const [datas, setDatas] = useState([]);
  const [book, setBook] = useState({});
  const [cmt, setCmt] = useState("");
  const params = useParams();

  const acc = JSON.parse(localStorage.getItem("userData"));
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/comments/${params.key}`)
      .then((res) => res.json())
      .then((datas) => {
        setDatas(datas);
        console.log(datas);
      });
  }, []);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/books/show/${params.key}`)
      .then((res) => res.json())
      .then((datas) => {
        console.log(datas);
        setBook(datas[0]);
      });
  }, []);

  console.log(params);

  const handleSubmitComment = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/comments/create", {
        user_id: acc.id,
        cmt,
        book_id: params.key,
      });
      setCmt("");
      alert("Add Comment successful!");
    } catch (event) {
      alert("Add Comment successful!");
    }
  };
  // return <h1>hehe</h1>;
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("image")}>
          <img src={book.image} />
        </div>
        <div className={cx("content")}>
          <h1>{book.tittle}</h1>
          <div className={cx("rated")}></div>

          <h4>{book.content}</h4>
          <h2 className={cx("price")}>$ {book.price}</h2>
          <span>Chỉ còn lại {book.quantity} sản phẩm</span>
          <br />
        </div>
      </div>
      <div className={cx("title-container")}>
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
