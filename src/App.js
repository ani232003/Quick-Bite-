import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { onAuthStateChanged, getRedirectResult } from "firebase/auth"; // 👈 added getRedirectResult
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom"; // 👈 need this
import { CartProvider } from '../src/Components/CartContext.js';

import Home from "./pages/home/Home";
import About from "./pages/home/About";
import Menu from "./pages/home/Menu";
import Shop from "./pages/home/Shop";
import Blog from "./pages/home/blog";
import Contact from "./pages/home/contact";
import Pay from "./payment/payment.js";
import Cart from "./pages/home/cart.js"

import Login from "./auth/Login.js";
import Signup from "./auth/sign.js";

import HeaderWrapper from "../src/Components/HeaderWrapper.js"; 

function App() {
  const [user, setUser] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
  
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

   
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          alert("Login with Google successful!");
          navigate("/home"); 
        }
      })
      .catch((error) => {
        console.error(error.message);
      });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <CartProvider>
      <Router>
        <HeaderWrapper user={user} />

        <Routes>
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" replace />} />
          <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" replace />} />
          <Route path="/" element={user ? <Home /> : <Navigate to="/login" replace />} />
          <Route path="/about" element={user ? <About /> : <Navigate to="/login" replace />} />
          <Route path="/menu" element={user ? <Menu /> : <Navigate to="/login" replace />} />
          <Route path="/shop" element={user ? <Shop /> : <Navigate to="/login" replace />} />
          <Route path="/blog" element={user ? <Blog /> : <Navigate to="/login" replace />} />
          <Route path="/contact" element={user ? <Contact /> : <Navigate to="/login" replace />} />
          <Route path="/payment" element={user ? <Pay /> : <Navigate to="/login" replace />} />
          <Route path="/cart" element={user ? <Cart /> : <Navigate to="/login" replace />} />
          <Route path="*" element={<Navigate to={user ? "/" : "/login"} replace />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
