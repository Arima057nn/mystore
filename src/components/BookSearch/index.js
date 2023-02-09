import styles from "./BookSearch.module.scss";
import classNames from "classnames/bind";
import Product from "../Layouts/components/Product";
import { useState } from "react";

const cx = classNames.bind(styles);

function BookSearch({ datas }) {
  const [books, setBooks] = useState(datas);
  return (
    <div className={cx("wrapper")}>
      {books.map((book) => {
        <Product book={book} isFav={0} />;
      })}
    </div>
  );
}

export default BookSearch;
