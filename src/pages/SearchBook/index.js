import React from "react";
import BookSearch from "../../components/BookSearch";
import classNames from "classnames/bind";
import styles from "./SearchBook.module.scss";
const cx = classNames.bind(styles);

function SearchBook() {
  return <BookSearch />;
}

export default SearchBook;
