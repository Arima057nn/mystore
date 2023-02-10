import styles from "./BookSearch.module.scss";
import classNames from "classnames/bind";
import Product from "../Layouts/components/Product";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const cx = classNames.bind(styles);

function BookSearch() {
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
  console.log(books?.filter((book) => book.name.includes(params.key)));

  const renderSearchBooks = books
    ?.filter((book) => book.name.includes(params.key))
    .map((book) => <Product book={book} isFav={0} />);

  // return (
  //   <div className={cx("wrapper")}>
  //     <h1 className={cx("item")}>hehe</h1>
  //     <h1 className={cx("item")}>hehe</h1>
  //     <h1 className={cx("item")}> hehe</h1>
  //   </div>
  // );
  // return (
  //   <div className={cx("wrapper")}>
  //     {books
  //       ?.filter((book) => book.name.includes(params.key))
  //       .map((book) => {
  //         <Product book={book} isFav={0} />;
  //       })}
  //   </div>
  // );

  return <div className={cx("wrapper")}>{renderSearchBooks}</div>;
}

export default BookSearch;
