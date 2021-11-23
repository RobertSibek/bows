import { Box, Grid, Paper, Button, Typography } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./CartScreen.css";

const CartScreen = (props) => {
  return (
    <Paper sx={{ my: 5, py: 3 }} elevation={5}>
      <Box sx={{ mx: 5, mt: 5, flexGrow: 1, elevation: 5 }}>
        <Grid container spacing={2} sx={{ mx: "auto" }}>
          <Grid item xs={10}>
            first
          </Grid>
          <Grid item xs={10}>
            second
          </Grid>
          <Grid item xs={10}>
            third
          </Grid>
          <Grid item xs={10}>
            <Button variant="contained">
              <Link to="/">Back</Link>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default CartScreen;
