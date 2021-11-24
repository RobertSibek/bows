import { Grid, Box } from "@mui/material";
import { useState } from "react";
import { Badge } from "@mui/material";
import { ShoppingCart as CartIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./ShopScreen.css";

import { products } from "../data/products";
import Item from "../components/Item";

const ShopScreen = (props) => {
  const [itemsCount, setItemsCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [searchedText, setSearchedText] = useState("");
  const imageRoot = "static/images/";

  const searchTextHandler = (event) => {
    setSearchedText(event.target.value);
  };

  const cartHandler = (id, action) => {
    const index = cart.findIndex((item) => item.id === id);

    // adding item to cart
    if (action === "add") {
      if (index < 0) {
        let newCart = cart;
        let newItem = { id: id, count: 1 };
        newCart.push(newItem);
        setCart(newCart);
      } else {
        let updatedCart = cart;
        updatedCart[index].count += 1;
        setCart(updatedCart);
      }
    }
    // removing item from cart
    if (action === "remove") {
      if (index < 0) return;
      let updatedCart = cart;
      updatedCart[index].count =
        updatedCart[index].count > 0 ? updatedCart[index].count - 1 : 0;
      setCart(updatedCart);
    }

    let totalCount = 0;
    cart.forEach((i) => (totalCount += i.count));
    setItemsCount(totalCount);
    // localStorage.setItem("Cart", JSON.stringify(cart));
  };

  return (
    <div>
      <div className="header">
        <div className="menu"></div>
        <div className="searchbox">
          <input
            type="text"
            className="search"
            onChange={searchTextHandler}
            placeholder="search product"
          />
        </div>
        <div className="cart-icon">
          {itemsCount > 0 && (
            <Badge badgeContent={itemsCount} color="primary">
              <Link to="/cart" state={{ cart: cart }}>
                <CartIcon />
              </Link>
            </Badge>
          )}
        </div>
      </div>
      <Box sx={{ mx: 5, my: 5, flexGrow: 1 }}>
        <Grid container spacing={2} sx={{ mx: "auto" }}>
          {products
            .filter(
              (p) =>
                p.title.toUpperCase().search(searchedText.toUpperCase()) > -1
            )
            .map((product) => (
              <Grid item xs={4} key={product.id}>
                <Item
                  key={product.id}
                  id={product.id}
                  amount={0}
                  title={product.title}
                  price={product.price}
                  description={product.description}
                  image={imageRoot + product.image}
                  onUpdateCart={cartHandler}
                />
              </Grid>
            ))}
        </Grid>
      </Box>
    </div>
  );
};

export default ShopScreen;
