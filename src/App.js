import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { CartProvider } from './Components/CartContext.js';

import Home from "./pages/home/Home";
import About from "./pages/home/About";
import Menu from "./pages/home/Menu";
import Shop from "./pages/home/Shop";
import Blog from "./pages/home/blog";
import Contact from "./pages/home/contact";
import Pay from "./payment/payment.js";
import Cart from "./pages/home/cart.js";

import Login from "./auth/Login.js";
import Signup from "./auth/sign.js";

import HeaderWrapper from "./Components/HeaderWrapper.js";


const ProtectedRoute = ({ user, children }) => {
  if (!user) return <Navigate to="/login" replace />;
  return children;
};


const AuthRoute = ({ user, children }) => {
  if (user) return <Navigate to="/" replace />;
  return children;
};

function App() {
  const [user, setUser] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);


  if (loading) return <div>Loading...</div>;

  return (
    <CartProvider>
      <Router>
        <HeaderWrapper user={user} />

        <Routes>
 
          <Route path="/login" element={<AuthRoute user={user}><Login /></AuthRoute>} />
          <Route path="/signup" element={<AuthRoute user={user}><Signup /></AuthRoute>} />

          <Route path="/" element={<ProtectedRoute user={user}><Home /></ProtectedRoute>} />
          <Route path="/about" element={<ProtectedRoute user={user}><About /></ProtectedRoute>} />
          <Route path="/menu" element={<ProtectedRoute user={user}><Menu /></ProtectedRoute>} />
          <Route path="/shop" element={<ProtectedRoute user={user}><Shop /></ProtectedRoute>} />
          <Route path="/blog" element={<ProtectedRoute user={user}><Blog /></ProtectedRoute>} />
          <Route path="/contact" element={<ProtectedRoute user={user}><Contact /></ProtectedRoute>} />
          <Route path="/payment" element={<ProtectedRoute user={user}><Pay /></ProtectedRoute>} />
          <Route path="/cart" element={<ProtectedRoute user={user}><Cart /></ProtectedRoute>} />

       
          <Route path="*" element={<Navigate to={user ? "/" : "/login"} replace />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
