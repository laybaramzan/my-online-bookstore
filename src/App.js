import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Shop from "./pages/shop";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/Footer/Footer";
import men_banner from "./components/assets/banner_mens.jpg";
import women_banner from "./components/assets/banner_women.jpg";
import kid_banner from "./components/assets/banner_kids.jpg";
import Sale from "./pages/Sale";
import About from "./pages/About";
import Kids from "./pages/Kids";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />

          <Route
            path="/mens"
            element={<Men banner={men_banner} Category="men" />}
          />
          <Route
            path="/womens"
            element={<Women banner={women_banner} Category="women" />}
          />
          <Route
            path="/kids"
            element={<Kids banner={kid_banner} Category="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/sale" element={<Sale />} />
          {/*<Route path="reviews" element={<Reviews/>}/>*/}
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
