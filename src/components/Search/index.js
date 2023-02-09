import classNames from "classnames/bind";
import styles from "./Search.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Search() {
  const [datas, setDatas] = useState([]);
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChangeSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    setDatas(datas.filter((user) => user.name.includes(searchTerm)));
    // console.log(datas);
  };

  useEffect(() => {
    fetch(`http://localhost:3001/books/`)
      .then((res) => res.json())
      .then((datas) => {
        setDatas(datas);
      });
  }, []);
  return (
    <form className={cx("wrapper")} onSubmit={handleSubmitSearch}>
      <FontAwesomeIcon icon={faSearch} className={cx("icon")} />
      <input
        value={searchTerm}
        onChange={handleChangeSearch}
        className={cx("box")}
        placeholder={"Searching for ..."}
      />
      <Link
        to={{
          pathname: "/booksearch",
          state: { data: "This is my data" },
        }}
      >
        <button type="submit" className={cx("button")}>
          Search
        </button>
      </Link>
    </form>
  );
}

export default Search;
