import React, { useState } from "react";
import Slider from "react-slick";

import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Product from "../../components/Layouts/components/Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={cx("control")} onClick={onClick}>
      <button className={cx("next")}>
        <FontAwesomeIcon className={cx("icon")} icon={faRightLong} />
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={cx("control")} onClick={onClick}>
      <button className={cx("prev")}>
        <FontAwesomeIcon className={cx("icon")} icon={faLeftLong} />
      </button>
    </div>
  );
};

function Home() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings}>
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
    </Slider>
  );
}

export default Home;
