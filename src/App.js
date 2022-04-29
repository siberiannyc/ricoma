import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Countdown from "./elements/countdown/countdown";
import Modal from "./components/modal";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import About from "./pages/about";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer />
      <Countdown />
    </>
  );
}

export default App;
