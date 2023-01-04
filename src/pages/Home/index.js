import React from "react";
// import Slider from "react-slick";

import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Product from "../../components/Layouts/components/Product";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Home() {
  return (
    <>
      <div className={cx("wrapper")}>
        <h2 className={cx("title")}>Popular Books</h2>
        <p className={cx("description")}>Best collection in 2021 for you!</p>
        <div className={cx("container")}>
          <Product />
          <Product />
          <Product />
        </div>
      </div>

      <div className={cx("wrapper")}>
        <h2 className={cx("title")}>Trending Books</h2>
        <p className={cx("description")}>Best collection in 2021 for you!</p>
        <div className={cx("container")}>
          <Product />
          <Product />
          <Product />
        </div>
      </div>

      <div className={cx("wrapper")}>
        <h2 className={cx("title")}>All Books</h2>
        <p className={cx("description")}>Best collection in 2021 for you!</p>
        <div className={cx("container")}>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </>
  );
}

export default Home;
