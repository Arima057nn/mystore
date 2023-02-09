import React from "react";
import { useEffect, useState } from "react";
import BookSearch from "../../components/BookSearch";
import classNames from "classnames/bind";
import styles from "./SearchBook.module.scss";
const cx = classNames.bind(styles);

function SearchBook({ props }) {
  const data = "hehe";
  // const datas = this.props.state;
  // console.log(datas);
  return <h1>{data}</h1>;
  // return <BookSearch datas={datas} />;
}

export default SearchBook;
