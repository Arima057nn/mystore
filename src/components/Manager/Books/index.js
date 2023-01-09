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
import avaImg from "../../../assets/images/B1.jpg";

import Search from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
const customer = {
  name: "Đắc nhân tâm",

  address: "Thanh Hóa",
  phone: "0123456789",
  password: "**********",
  createdAt: "8/1/2023",
};
function Books() {
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
          Books
        </Typography>
        <Box sx={{ m: 1 }}>
          <Link to={"/book/add"}>
            <Button color="primary" variant="contained">
              Add Books
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
                <TableCell>Location</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Registration date</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
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
                      {customer.name}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{customer.address}</TableCell>
                <TableCell>{customer.phone}</TableCell>
                <TableCell>{customer.createdAt}</TableCell>
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

            <></>
          </Table>
        </Box>
        {/* <TablePagination
		  component="div"
		  count={Books.length}
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

export default Books;
