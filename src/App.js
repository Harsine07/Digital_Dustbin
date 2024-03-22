// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Header';
import CustomerLogin from './components/CustomerLogin';
import RecyclerLogin from './components/RecyclerLogin';
import CustomerChoice from './components/CustomerChoice';
//import CRUD from './CRUD';

const App = () => {
  const carouselImages = [
    require('./images/1.jpg'),
    require('./images/2.jpg'),
    require('./images/3.jpeg'),
  ];

  const carouselCaptions = [
    'Environment Friendly',
    'Data Security',
    'Reducing E-Waste',
  ];

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/customerlogin" element={<CustomerLogin />} />
          <Route path='/RecyclerLogin' element={<RecyclerLogin />} />
          <Route path="/" element={<Carousel images={carouselImages} captions={carouselCaptions} />} />
          <Route path="/Customer_Choice" element={<CustomerChoice/>} />
          {/* <Route path="/Place_order" element={<CRUD />} /> */}
          
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
