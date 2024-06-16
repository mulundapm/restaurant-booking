import './App.css';
import React from 'react';
import { InputProvider } from './context/InputContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingPage from './pages/BookingPage';
import ConfirmationPage from './pages/ConfirmationPage';
import HomePage from './pages/HomePage';
import { CartProvider } from './context/CartContext';
import OrderingPage from './pages/OrderingPage';
import ReviewPage from './pages/ReviewPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {

  return (
    <Router>
        <CartProvider>
          <InputProvider>
            <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/booking" element={<BookingPage />}/>
              <Route path="/confirmation" element={<ConfirmationPage />}/>
              <Route path="/ordering" element={<OrderingPage />}/>
              <Route path="/review" element={<ReviewPage />}/>
              <Route path="/about" element={<AboutPage />}/>
              <Route path="/contact" element={<ContactPage />}/>
            </Routes>
          </InputProvider>
        </CartProvider>
    </Router>
  );
}

export default App;


