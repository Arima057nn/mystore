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
import EditCustomer from "../../../pages/Admin/CustomersManager/EditCustomer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import RefreshIcon from "@mui/icons-material/Refresh";
const cx = classNames.bind(styles);
function Customers() {
  const [modal, setModal] = useState(false);
  const [customer, setCustomer] = useState({});
  const [datas, setDatas] = useState([]);
  const [refreshdatas, setRefreshdatas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const token = localStorage.getItem("token");
  if (token === "admin123") console.log("hehe");
  const handleChangeSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    // setDatas(datas.filter((user) => user.name.includes(searchTerm)));
    // if (searchTerm === "") setDatas(refreshdatas);
    // else if()
  });
  // const handleSubmitSearch = (event) => {
  //   event.preventDefault();
  //   axios
  //     .get(`http://localhost:3001/users/?name=${searchTerm}`)
  //     .then((response) => {
  //       console.log(response.data);
  //       setDatas(datas.filter((user) => user.name.includes(searchTerm)));
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    setDatas(datas.filter((user) => user.name.includes(searchTerm)));
  };
  const toggleRefresh = () => {
    setDatas(refreshdatas);
    setSearchTerm("");
  };

  useEffect(() => {
    fetch(`http://localhost:3001/users/`)
      .then((res) => res.json())
      .then((datas) => {
        setDatas(datas); // Dùng cái này nó sẽ re-render Contentt
        setRefreshdatas(datas);
      });
  }, []);

  const toggleModal = (id) => {
    setModal(!modal);
    datas.map((user) => {
      if (user.id === id) setCustomer(user);
      console.log(customer.id);
    });
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/users/${id}`);
      setDatas(datas.filter((user) => user.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header-wrapper")}>
        <h1>Customers</h1>
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
            placeholder="Search Customer"
            variant="outlined"
          />

          <button type="submit" className={cx("btn-search")}>
            Search
          </button>
          <IconButton aria-label="delete" onClick={toggleRefresh}>
            <RefreshIcon />
          </IconButton>
        </form>

        <Link to={"/admin/customer/create"}>
          <button className={cx("btn-create")}>+ Add Customers</button>
        </Link>
      </div>

      <div className={cx("info-wrapper")}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Phone</TableCell>

              <TableCell></TableCell>
              <TableCell></TableCell>
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
                    <Avatar src={value.avt} sx={{ mr: 2 }} />
                    <Typography color="textPrimary" variant="body1">
                      {value.name}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{value.email}</TableCell>
                <TableCell>{value.address}</TableCell>
                <TableCell>{value.phone}</TableCell>

                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>
                  {modal && (
                    <div className={cx("modal")}>
                      <div
                        onClick={() => toggleModal(value.id)}
                        className={cx("overlay")}
                      ></div>
                      <div className={cx("modal-content-admin")}>
                        <EditCustomer customer={customer} />
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
                    sx={{ mr: -3 }}
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

export default Customers;
