import {
  Avatar,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Button,
  InputAdornment,
  SvgIcon,
  TextField,
  IconButton,
} from "@mui/material";
import Search from "@mui/icons-material/Search";

import classNames from "classnames/bind";
import styles from "../Admin.module.scss";
import EditBook from "../../../pages/Admin/BooksManager/EditBook";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import RefreshIcon from "@mui/icons-material/Refresh";
const cx = classNames.bind(styles);
function Books() {
  const [modal, setModal] = useState(false);
  const [book, setBook] = useState({});
  const [datas, setDatas] = useState([]);
  const [refreshdatas, setRefreshdatas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChangeSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSubmitSearch = (event) => {
    event.preventDefault();
    setDatas(datas.filter((user) => user.name.includes(searchTerm)));
    console.log(datas);
  };

  const toggleRefresh = () => {
    setDatas(refreshdatas);
    setSearchTerm("");
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/books/index`)
      .then((res) => res.json())
      .then((datas) => {
        setDatas(datas);
        setRefreshdatas(datas);
      });
  }, []);

  const toggleModal = (id) => {
    setModal(!modal);
    datas.map((user) => {
      if (user.id === id) setBook(user);
      console.log(book.id);
    });
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/books/${id}`);
      setDatas(datas.filter((user) => user.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header-wrapper")}>
        <h1>Books</h1>
      </div>

      <div className={cx("search-wrapper")}>
        <form onSubmit={handleSubmitSearch} className={cx("input-field")}>
          <TextField
            value={searchTerm}
            onChange={handleChangeSearch}
            sx={{ width: 600 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SvgIcon color="action" fontSize="small">
                    <Search />
                  </SvgIcon>
                </InputAdornment>
              ),
            }}
            placeholder="Search Books"
            variant="outlined"
          />

          <button type="submit" className={cx("btn-search")}>
            Search
          </button>
          <IconButton aria-label="delete" onClick={toggleRefresh}>
            <RefreshIcon />
          </IconButton>
        </form>

        <Link to={"/admin/book/create"}>
          <button className={cx("btn-create")}>+ Add Books</button>
        </Link>
      </div>

      <div className={cx("info-wrapper")}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>

              <TableCell>Description</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>Quanlity</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          {datas.map((value) => (
            <TableBody key={value.id}>
              <TableRow hover>
                <TableCell>
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <Avatar src={value.image} sx={{ mr: 2 }} />
                    <Typography color="textPrimary" variant="body1">
                      {value.name}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{value.price}</TableCell>
                <TableCell>{value.description}</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>{value.quanlity}</TableCell>
                <TableCell>
                  {modal && (
                    <div className={cx("modal")}>
                      <div
                        onClick={() => toggleModal(value.id)}
                        className={cx("overlay")}
                      ></div>
                      <div className={cx("modal-content-admin")}>
                        <EditBook book={book} />
                      </div>
                    </div>
                  )}
                  <Button
                    variant="contained"
                    sx={{ mr: 1 }}
                    color="success"
                    onClick={() => toggleModal(value.id)}
                  >
                    Update
                  </Button>
                  <Button
                    sx={{ mr: -2 }}
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(value.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </div>
    </div>
  );
}

export default Books;
