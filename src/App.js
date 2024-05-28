import './App.css';
import React from 'react';
import { InputProvider } from './context/InputContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingPage from './pages/BookingPage';
import ConfirmationPage from './pages/ConfirmationPage';
import HomePage from './pages/HomePage';

function App() {

  return (
    <Router>
        <InputProvider>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/booking" element={<BookingPage />}/>
            <Route path="/confirmation" element={<ConfirmationPage />}/>
          </Routes>
        </InputProvider>
    </Router>
  );
}

export default App;


/* <Route path="/">
<Nav />
<HeroSection />
<OrderDelivery />
</Route>
<Route path="/booking">
  <BookingPage />
</Route>
<Route path="/confirmation">
  <ConfirmationPage />
</Route> */