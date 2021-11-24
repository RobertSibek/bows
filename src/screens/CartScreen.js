import { Box, Paper, Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import "./CartScreen.css";
import { products } from "../data/products";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useLocation } from "react-router-dom";

const CartScreen = (props) => {
  const location = useLocation();
  const { cart } = location.state;
  let totalAmount = 0;

  return (
    <Paper sx={{ my: 5, py: 3 }} elevation={5}>
      <div className="title">Cart</div>
      <Box sx={{ mx: "auto", mt: 5, flexGrow: 1, elevation: 5 }}>
        <Divider />
        <TableContainer component={Paper}>
          <Table sx={{ mx: "auto", width: "80%" }}>
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((item) => {
                let productIndex = products.findIndex((p) => p.id === item.id);
                totalAmount += products[productIndex].price * item.count;
                return (
                  <TableRow key={item.id}>
                    <TableCell>{products[productIndex].title}</TableCell>
                    <TableCell>{item.count}</TableCell>
                    <TableCell>{products[productIndex].price}</TableCell>
                  </TableRow>
                );
              })}
              <TableRow>
                <TableCell variant="head">Total</TableCell>
                <TableCell></TableCell>
                <TableCell variant="head">{totalAmount}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell colSpan={3}>
                  <Button variant="contained">
                    <Link to="/">Back</Link>
                  </Button>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Paper>
  );
};

export default CartScreen;
