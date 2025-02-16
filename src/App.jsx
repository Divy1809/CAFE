import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import ReviewPage from './pages/ReviewPage';
import CafePage from './pages/CafePage';
import OrderFoodPage from './pages/OrderFoodPage';
import CartReviewPage from './pages/CartReviewPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/reviews" element={<ReviewPage />} />
        <Route path="/cafe" element={<CafePage />} />
        <Route path="/order" element={<OrderFoodPage />} />
        <Route path="/cart" element={<CartReviewPage />} />
        <Route path="/confirmation" element={<OrderConfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App;