import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';
import { listProviderDetails } from '../actions/providerAction';
import ReactStars from 'react-stars'
import { Link } from 'react-router-dom';


const ViewProfileProvider = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const providerDetails = useSelector((state) => state.providerDetails);
  const { taskProvider, loading, error } = providerDetails;

  useEffect(() => {
    dispatch(listProviderDetails(id));
  }, [dispatch, id]);

  // const taskProvider = {};
  const rating = {
    size: 30,
    value: taskProvider.rating,
    edit: false
  };

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
                {taskProvider.name}
              </h1>
              <p>
                <img
                  src={require('../images/barber.jpg')}
                  className="profileImage"
                />
              </p>

              <p className="displayProfileLine">{taskProvider.name}</p>
              <div>
                {/* should pass service info base on _id in db  */}
                <p className="displayProfileLine">{taskProvider.name}</p>
                <p className="displayProfileLine">Service provided two</p>
              </div>
              <br></br>
              <p className="displayProfileLine">{taskProvider.title}</p>
              <p className="displayProfileLine">{taskProvider.address}</p>
              <p className="displayProfileLine">{taskProvider.city}</p>
              <p className="displayProfileLine">{taskProvider.state}</p>
              <p className="displayProfileLine">{taskProvider.country}</p>
            </div>
            <button className="appointmentButton">Book an appointment</button>
          </CardBody>
        </Card>
      </div>
      
      <div className="displayProfileRating">
        <h9>Current Rating: {taskProvider.rating}</h9>
        <ReactStars {...rating}/>
        <div>
          <Link to="/reviews" >
            <button className="profileButton">Write a Review</button>
          </Link>
        </div>
      
        <img src={require('../images/makeup.jpg')} className="profileUploadedImg" />
      </div>

      
      
      
    </div>
  );
};
export default ViewProfileProvider;
