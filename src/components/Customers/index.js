import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Button,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
} from "@mui/material";
import avaImg from "../../assets/images/avatar1.jpg";

import Search from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function Customers() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/users/`)
      .then((res) => res.json())
      .then((datas) => {
        setDatas(datas); // Dùng cái này nó sẽ re-render Contentt
      });
  }, []);

  const handleDelete = async (id) => {
    // setIsLoading(true);
    try {
      await axios.delete(`http://localhost:3001/users/${id}`);
      setDatas(datas.filter((user) => user.id !== id));
    } catch (error) {
      console.error(error);
    }
    // setIsLoading(false);
  };
  return (
    <>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          m: -1,
        }}
      >
        <Typography sx={{ m: 1 }} variant="h4">
          Customers
        </Typography>
        <Box sx={{ m: 1 }}>
          <Link to={"/customer/create"}>
            <Button color="primary" variant="contained">
              Add Customers
            </Button>
          </Link>
        </Box>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon color="action" fontSize="small">
                        <Search />
                      </SvgIcon>
                    </InputAdornment>
                  ),
                }}
                placeholder="Search customer"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Card sx={{ mt: 3 }}>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox color="primary" />
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Registration date</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            {datas.map((value) => (
              <TableBody key={value.id}>
                <TableRow hover>
                  <TableCell padding="checkbox">
                    <Checkbox value="true" />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Avatar src={avaImg} sx={{ mr: 2 }} />
                      <Typography color="textPrimary" variant="body1">
                        {value.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{value.email}</TableCell>
                  <TableCell>{value.address}</TableCell>
                  <TableCell>{value.phone}</TableCell>
                  <TableCell>{value.createdAt}</TableCell>
                  <TableCell>
                    <Button variant="contained" sx={{ mr: 1 }} color="success">
                      Update
                    </Button>
                    <Button
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

            <></>
          </Table>
        </Box>
      </Card>
    </>
  );
}

export default Customers;
