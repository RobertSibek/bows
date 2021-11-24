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

const CartScreen = (props) => {
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
                <TableCell> Price</TableCell>
                <TableCell>Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.cart.map((item) => {
                let productIndex = products.findIndex((p) => p.id === item.id);
                return (
                  <TableRow>
                    <TableCell>{products[productIndex].title}</TableCell>
                    <TableCell>{products[productIndex].price}</TableCell>
                    <TableCell>{item.count}</TableCell>
                  </TableRow>
                );
              })}

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
