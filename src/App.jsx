import Navbar from "./components/Navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Shop from "./components/pages/Shop";
import Contact from "./components/pages/Contact";
import Footer from "./components/pages/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/shop" element={<Shop></Shop>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>

        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
