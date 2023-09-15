import "./App.css";
import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Cart from "./components/cart/Cart";
import Delivery from "./components/cart/Delivery";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/eats/stores/:id/menus" element={<Menu />} exact />
            <Route path="/cart" element={<Cart />} exact />
            <Route path="/delivery" element={<Delivery />} exact />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
