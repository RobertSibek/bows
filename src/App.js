import "./App.css";
import { useState } from "react";
import { ShoppingCart as CartIcon } from "@mui/icons-material";
import ShopScreen from "./screens/ShopScreen";
import CartScreen from "./screens/CartScreen";
import { Badge } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = (props) => {
  const [itemsCount, setItemsCount] = useState(0);
  const [cart, setCart] = useState([]);

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
  };

  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <div className="menu"></div>
          <div className="searchbox">
            <input
              type="text"
              className="search"
              placeholder="search product"
            />
          </div>
          <div className="cart-icon">
            {itemsCount > 0 && (
              <Badge badgeContent={itemsCount} color="primary">
                <Link to="/cart">
                  <CartIcon />
                </Link>
              </Badge>
            )}
          </div>
        </div>
        <Routes>
          <Route path="/" element={<ShopScreen onUpdateCart={cartHandler} />} />
          <Route path="/cart" element={<CartScreen cart={cart} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
