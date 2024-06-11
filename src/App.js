import './App.css';
import React from 'react';
import { InputProvider } from './context/InputContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingPage from './pages/BookingPage';
import ConfirmationPage from './pages/ConfirmationPage';
import HomePage from './pages/HomePage';
import { CartProvider } from './context/CartContext';

function App() {

  return (
    <Router>
        <CartProvider>
          <InputProvider>
            <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/booking" element={<BookingPage />}/>
              <Route path="/confirmation" element={<ConfirmationPage />}/>
            </Routes>
          </InputProvider>
        </CartProvider>
    </Router>
  );
}

export default App;


