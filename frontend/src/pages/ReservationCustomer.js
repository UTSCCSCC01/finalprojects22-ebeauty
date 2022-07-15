const ReservationCustomer = () => {   
    
    return (
      <div
        className="profile"
        style={{
          display: 'flex',
          justifyContent: 'left',
          width: '100%',
          paddingTop: '10pt',
          paddingBottom: '30pt',
        }}>
        <br></br>
        <div>
          <Card className="profileCardView">
            <CardBody>
              <div>
                <h1>
                  {provider.name}
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
                  <p className="displayProfileLine">Service provided two</p>
                </div>
                <br></br>
                <p className="displayProfileLine">{provider.title}</p>
                <p className="displayProfileLine">{provider.address}</p>
                <p className="displayProfileLine">{provider.city}</p>
                <p className="displayProfileLine">{provider.state}</p>
                <p className="displayProfileLine">{provider.country}</p>
              </div>
              <button className="appointmentButton">Cancel this apoointment</button>
              <button className="appointmentButton">Reschedule this appointment</button>
            </CardBody>
          </Card>
        </div>
              
        
        
      </div>
    );
  };
  export default ReservationCustomer;