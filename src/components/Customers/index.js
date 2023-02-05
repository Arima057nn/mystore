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
const customer = {
  name: "Pham Tien Dung",
  email: "dungpt.gmail.com",
  address: "Thanh Hóa",
  phone: "0123456789",
  password: "**********",
  createdAt: "8/1/2023",
};

const data = [
  {
    name: "Pham Tien Dung",
    email: "dungpt.gmail.com",
    address: "Thanh Hóa",
    phone: "0123456789",
    password: "**********",
    createdAt: "8/1/2023",
  },
  {
    name: "Pham Tien Dung",
    email: "dungpt.gmail.com",
    address: "Thanh Hóa",
    phone: "0123456789",
    password: "**********",
    createdAt: "8/1/2023",
  },
  {
    name: "Pham Tien Dung",
    email: "dungpt.gmail.com",
    address: "Thanh Hóa",
    phone: "0123456789",
    password: "**********",
    createdAt: "8/1/2023",
  },
  {
    name: "Pham Tien Dung",
    email: "dungpt.gmail.com",
    address: "Thanh Hóa",
    phone: "0123456789",
    password: "**********",
    createdAt: "8/1/2023",
  },
  {
    name: "Pham Tien Dung",
    email: "dungpt.gmail.com",
    address: "Thanh Hóa",
    phone: "0123456789",
    password: "**********",
    createdAt: "8/1/2023",
  },
  {
    name: "Pham Tien Dung",
    email: "dungpt.gmail.com",
    address: "Thanh Hóa",
    phone: "0123456789",
    password: "**********",
    createdAt: "8/1/2023",
  },
  {
    name: "Pham Tien Dung",
    email: "dungpt.gmail.com",
    address: "Thanh Hóa",
    phone: "0123456789",
    password: "**********",
    createdAt: "8/1/2023",
  },

  {
    name: "Pham Tien Dung",
    email: "dungpt.gmail.com",
    address: "Thanh Hóa",
    phone: "0123456789",
    password: "**********",
    createdAt: "8/1/2023",
  },

  {
    name: "Pham Tien Dung",
    email: "dungpt.gmail.com",
    address: "Thanh Hóa",
    phone: "0123456789",
    password: "**********",
    createdAt: "8/1/2023",
  },
];
function Customers() {
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
          <Link to={"/customer/add"}>
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
            {data.map((value, index) => (
              <TableBody>
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
                    <Button variant="contained" color="error">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            ))}

            <></>
          </Table>
        </Box>
        {/* <TablePagination
        component="div"
        count={customers.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      /> */}
      </Card>
    </>
  );
}

export default Customers;
