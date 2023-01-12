import React from "react";

import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Product from "../../components/Layouts/components/Product";
// import books from "../../../src/data/index";
const cx = classNames.bind(styles);

const popularBooks = [
  {
    id: 1,
    name: "Super Backpack",
    price: 129.99,
    description:
      "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    image: "https://cf.shopee.vn/file/sg-11134201-22100-gl6k8whuk7iva4",
  },
  {
    id: 2,
    name: "New Hip",
    price: 199.99,
    description:
      "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    image:
      "https://salt.tikicdn.com/ts/product/45/3b/fc/aa81d0a534b45706ae1eee1e344e80d9.jpg",
  },
  {
    id: 3,
    name: "Elite Series",
    price: 189.99,
    description:
      "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    image:
      "https://salt.tikicdn.com/ts/product/45/3b/fc/aa81d0a534b45706ae1eee1e344e80d9.jpg",
  },
];

const trendingBooks = [
  {
    id: 1,
    name: "Super Backpack",
    price: 129.99,
    description:
      "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    image: "https://cf.shopee.vn/file/sg-11134201-22100-gl6k8whuk7iva4",
  },
  {
    id: 2,
    name: "New Hip",
    price: 199.99,
    description:
      "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    image:
      "https://salt.tikicdn.com/ts/product/45/3b/fc/aa81d0a534b45706ae1eee1e344e80d9.jpg",
  },
  {
    id: 3,
    name: "Elite Series",
    price: 189.99,
    description:
      "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    image:
      "https://salt.tikicdn.com/ts/product/45/3b/fc/aa81d0a534b45706ae1eee1e344e80d9.jpg",
  },
];

const allBooks = [
  {
    id: 1,
    name: "Super Backpack",
    price: 129.99,
    description:
      "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    image: "https://cf.shopee.vn/file/sg-11134201-22100-gl6k8whuk7iva4",
  },
  {
    id: 2,
    name: "New Hip",
    price: 199.99,
    description:
      "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    image:
      "https://salt.tikicdn.com/ts/product/45/3b/fc/aa81d0a534b45706ae1eee1e344e80d9.jpg",
  },
  {
    id: 3,
    name: "Elite Series",
    price: 189.99,
    description:
      "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    image:
      "https://salt.tikicdn.com/ts/product/45/3b/fc/aa81d0a534b45706ae1eee1e344e80d9.jpg",
  },

  {
    id: 4,
    name: "Elite Series",
    price: 189.99,
    description:
      "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    image:
      "https://salt.tikicdn.com/ts/product/45/3b/fc/aa81d0a534b45706ae1eee1e344e80d9.jpg",
  },

  {
    id: 5,
    name: "Elite Series",
    price: 189.99,
    description:
      "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    image:
      "https://salt.tikicdn.com/ts/product/45/3b/fc/aa81d0a534b45706ae1eee1e344e80d9.jpg",
  },

  {
    id: 6,
    name: "Elite Series",
    price: 189.99,
    description:
      "Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna",
    image:
      "https://salt.tikicdn.com/ts/product/45/3b/fc/aa81d0a534b45706ae1eee1e344e80d9.jpg",
  },
];

function Home() {
  const renderPopularBooks = popularBooks.map((book) => (
    <Product book={book} isFav={0} />
  ));
  const renderAllBooks = allBooks.map((book) => (
    <Product book={book} isFav={0} />
  ));
  const renderTrendingBooks = trendingBooks.map((book) => (
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
      </div>
    </>
  );
}

export default Home;
