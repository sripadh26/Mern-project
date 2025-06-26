import React, { useState } from 'react';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes, BrowserRouter as Router, useLocation } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import LoginPopup from './components/LoginPopup/LoginPopup';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import MyOrders from './pages/MyOrders/MyOrders';
import ReviewForm from './components/ReviewForm/ReviewForm';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation(); 
  const hideFooter = location.pathname === '/submit-review';

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} setSearchQuery={setSearchQuery} /> 
        
        <Routes>
          <Route path='/' element={<Home searchQuery={searchQuery} />} /> 
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/myorder' element={<MyOrders />} />
          <Route path='/submit-review' element={<ReviewForm/>}/>
        </Routes>
        
      </div>
      {!hideFooter && <Footer />} 
      
    </>
  );
}

export default App;
