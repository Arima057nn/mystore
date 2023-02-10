import classNames from "classnames/bind";
import styles from "./Search.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleChangeSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    // console.log(datas);
    navigate(`/booksearch/${searchTerm}`);
  };

  return (
    <form className={cx("wrapper")} onSubmit={handleSubmitSearch}>
      <FontAwesomeIcon icon={faSearch} className={cx("icon")} />
      <input
        value={searchTerm}
        onChange={handleChangeSearch}
        className={cx("box")}
        placeholder={"Searching for ..."}
      />

      <button type="submit" className={cx("button")}>
        Search
      </button>
    </form>
  );
}

export default Search;
