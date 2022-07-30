import '../css/index.css';
import '../css/SearchPage.css';
import React from 'react';
import { Link } from 'react-router-dom';

const OrderHistoryPage = () => {

  return (
      <div className="order-history-page">
        <div className="order-history-list">
          <header>
            <h1>Order History</h1>
          </header>
          <h1>Upcoming Orders</h1>
            <div>
            <Link
              id="order-history-card"
              to={{
                pathname: `/reservationCustomer`, 
                query:{isCompleted: false}
              }}>
              <div className="order-history-elem">
                <img
                  src={require('../images/barber.jpg')}
                  alt="barber"
                  className="image-barber"
                />
      
                <div className="search-result-text">
                  <h3>Ang, 15th, 2022</h3>
                  <p>provider name</p>
                  <p>service 2</p>
                  <div className="rate">
      
                  </div>
                </div>
                <div id="view-reservation" to={`/reservationCustomer`}>
                  View Details of order
                </div>
              </div>
            </Link>
          </div>

          <div>
            <Link
              id="order-history-card"
              to={{
                pathname: `/reservationCustomer`, 
                query:{isCompleted: false}
              }}>
              <div className="order-history-elem">
                <img
                  src={require('../images/barber.jpg')}
                  alt="barber"
                  className="image-barber"
                />
      
                <div className="search-result-text">
                  <h3>Ang, 18th, 2022</h3>
                  <p>provider name</p>
                  <p>service 3</p>
                  <div className="rate">
      
                  </div>
                </div>
                <div id="view-reservation" to={`/reservationCustomer`}>
                  View Details of order
                </div>
              </div>
            </Link>
          </div>

          <h1>Completed Orders</h1>
          <div>
            <Link
              id="order-history-card"
              to={{
                pathname: `/reservationCustomer`, 
                query:{isCompleted: true}
              }}>
              <div className="order-history-elem">
                <img
                  src={require('../images/barber.jpg')}
                  alt="barber"
                  className="image-barber"
                />
      
                <div className="search-result-text">
                  <h3>Jun, 15th, 2022</h3>
                  <p>provider name</p>
                  <p>service 2</p>
                  <div className="rate">
      
                  </div>
                </div>
                <div id="view-reservation" to={`/reservationCustomer`}>
                  View Details of order
                </div>
              </div>
            </Link>
          </div>

          <div>
            <Link
              id="order-history-card"
              to={{
                pathname: `/reservationCustomer`, 
                query:{isCompleted: true}
              }}>
              <div className="order-history-elem">
                <img
                  src={require('../images/barber.jpg')}
                  alt="barber"
                  className="image-barber"
                />
      
                <div className="search-result-text">
                  <h3>Jun, 5th, 2022</h3>
                  <p>provider name</p>
                  <p>service 1</p>
                  <div className="rate">
      
                  </div>
                </div>
                <div id="view-reservation" to={`/reservationCustomer`}>
                  View Details of order
                </div>
              </div>
            </Link>
          </div>

          
        </div>
          
      </div>
  );
};

export default OrderHistoryPage;