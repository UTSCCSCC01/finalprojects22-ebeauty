import React, { useEffect } from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
const ReservationCustomer = () => {   
    
  const isCompleted = false;
    return (
      <div
      style={{
        display: 'flex',
        justifyContent: 'left',
        width: '100%',
        paddingTop: '10pt',
        paddingBottom: '30pt',
      }}>
        <br></br>
        <div
        >
          
          <Card className="reservationCardView">
            <CardBody>
              <div>
                <h1>
                  Reservation Number
                </h1>
                <p>
                  <img
                    src={require('../images/barber.jpg')}
                    className="profileImage"
                  />
                </p>
  
                <p className="displayProfileLine">[Provider Name]</p>
                <div>
                  <p className="displayProfileLine">[Provider Address]</p>
                  <p className="displayProfileLine">Service reserved</p>
                </div>
                <br></br>
                <p className="displayProfileLine">Provider Phone NUmber</p>
                <p className="displayProfileLine">Scheduled Date</p>
                <p className="displayProfileLine">Scheduled Time</p>
                <p className="displayProfileLine">Completion Date</p>
                <p className="displayProfileLine">Completion Time</p>
              </div>
            </CardBody>
          </Card>
        
        </div>
        <br></br>
        <div className="displayReservationButton">
          <Card className="reservationButtonCard">
          <button className="reservationButton">Cancel this apoointment</button>
          <button className="reservationButton">Reschedule this appointment</button>
          <button className="reservationButton">Rate the Service Provided</button>
          </Card>
        </div>      
        
        
      </div>
    );
  };
  export default ReservationCustomer;