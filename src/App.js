import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { Routes, Route } from "react-router-dom";
import Products from './component/Products';
import Product from './component/product';
import Cart from './component/Cart';
import About from './component/About'
import Contact from './component/Contact';
import Login from './component/Login';
import Register from './component/Register';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/products" element={<Products/>} />
        <Route exact path="/products/:id" element={<Product/>} />
        <Route exact path="/About" element={<About/>} />
        <Route exact path="/Contact" element={<Contact/>} />
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>


      </Routes>
    </>
  );
}

export default App;
