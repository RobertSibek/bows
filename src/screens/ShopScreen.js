import { products } from "../data/products";
import Item from "../components/Item";
import { Grid, Box } from "@mui/material";

const ShopScreen = (props) => {
  const imageRoot = "static/images/";

  const updateCartHandler = (item_id, action) => {
    props.onUpdateCart(item_id, action);
  };

  return (
    <Box sx={{ mx: 5, mt: 5, flexGrow: 1 }}>
      <Grid container spacing={2} sx={{ mx: "auto" }}>
        {products.map((product) => (
          <Grid item xs={4}>
            <Item
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              image={imageRoot + product.image}
              onUpdateCart={updateCartHandler}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ShopScreen;
