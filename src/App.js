import ShopScreen from "./screens/ShopScreen";
import CartScreen from "./screens/CartScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const App = (props) => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ShopScreen />} />
          <Route path="/cart" element={<CartScreen />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
