import React from "react";
import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Product from "../../components/Layouts/components/Product";
const cx = classNames.bind(styles);

function Home() {
  const [allBooks, setAllBooks] = useState([]);
  const [trendingBooks, setTrendingBooks] = useState([]);
  const [popularBooks, setPopularBooks] = useState([]);

  const token = localStorage.getItem("token");
  // const acc = JSON.parse(localStorage.getItem("userData"));
  // const acc = JSON.parse(localStorage.getItem("account"));
  // console.log(acc);
  if (token === "user123") console.log("hihi");
  useEffect(() => {
    fetch(`http://localhost:3001/popularBooks/`)
      .then((res) => res.json())
      .then((datas) => {
        setPopularBooks(datas);
      });
  }, []);
  useEffect(() => {
    fetch(`http://localhost:3001/trendingBooks/`)
      .then((res) => res.json())
      .then((datas) => {
        setTrendingBooks(datas);
      });
  }, []);
  useEffect(() => {
    fetch(`http://localhost:3001/books/`)
      .then((res) => res.json())
      .then((datas) => {
        setAllBooks(datas);
      });
  }, []);

  const renderPopularBooks = popularBooks.map((book) => (
    <Product book={book} isFav={0} />
  ));
  const renderTrendingBooks = trendingBooks.map((book) => (
    <Product book={book} isFav={0} />
  ));
  const renderAllBooks = allBooks.map((book) => (
    <Product book={book} isFav={0} />
  ));

  return (
    <>
      <div className={cx("wrapper")}>
        <h2 className={cx("title")}>Popular Books</h2>
        <p className={cx("description")}>Best collection in 2021 for you!</p>
        <div className={cx("container")}>{renderPopularBooks}</div>
      </div>

      <div className={cx("wrapper")}>
        <h2 className={cx("title")}>Trending Books</h2>
        <p className={cx("description")}>Best collection in 2021 for you!</p>
        <div className={cx("container")}>{renderTrendingBooks}</div>
      </div>

      <div className={cx("wrapper")}>
        <h2 className={cx("title")}>All Books</h2>
        <p className={cx("description")}>Best collection in 2021 for you!</p>
        <div className={cx("container")}>{renderAllBooks}</div>
        <div className={cx("button-container")}>
          <button className={cx("button")}>Load More...</button>
        </div>
      </div>
    </>
  );
}

export default Home;
