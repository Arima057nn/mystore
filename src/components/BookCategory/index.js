import styles from "./BookCategory.module.scss";
import classNames from "classnames/bind";
import Product from "../Layouts/components/Product";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const cx = classNames.bind(styles);

function BookCategory() {
  const [books, setBooks] = useState();
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/books/`)
      .then((res) => res.json())
      .then((datas) => {
        setBooks(datas);
      });
  }, []);
  console.log(params);
  // console.log(books?.filter((book) => book.categoryid === params.key));

  const renderCategoryBooks = books
    ?.filter((book) => book.categoryid == params.key)
    .map((book) => <Product book={book} isFav={0} />);

  return <div className={cx("wrapper")}>{renderCategoryBooks}</div>;
}

export default BookCategory;
