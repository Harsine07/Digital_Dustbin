import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CustomerChoice.css';
import bggimg from '../images/schedule.png';
import orderimg from '../images/orders.jpg';
import database from '../images/database.jpg';

const CustomerChoice = () => {
  const navigate = useNavigate();

  const redirectToPlaceOrder = () => {
    navigate('/Place_order');
  };

  const redirectToTrackOrder = () => {
    navigate('/Track_order');
  };

  const redirectToViewDatabase = () => {
    navigate('/View_database');
  };

  return (
    <div>
      {/* Container for Schedule Booking */}
      <div className="container">
        <img className="bggimg" src={bggimg} alt="Schedule Background" />
        <div className="schedule-booking-container">
          <button className="schedule-booking-button" onClick={redirectToPlaceOrder}>
            Schedule Booking
          </button>
        </div>
      </div>

      {/* Container for Orders */}
      <div className="containerr">
        <img className="orderimg" src={orderimg} alt="Orders Background" />
        <div className="order-booking-containerr">
          <button className="order-booking-button" onClick={redirectToTrackOrder}>
            Orders
          </button>
        </div>
      </div>

      {/* Container for Database */}
      <div className="containerrr">
        <img className="database" src={database} alt="database Background" />
        <div className="database-booking-containerrr">
          <button className="database-booking-button" onClick={redirectToViewDatabase}>
            Database
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerChoice;
