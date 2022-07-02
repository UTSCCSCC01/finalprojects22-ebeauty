import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardBody } from 'reactstrap';
import { listTaskProviderDetails } from '../actions/taskproviderAction';

const ViewProfileProvider = ({ match }) => {
  const dispatch = useDispatch();
  const taskProviderDetails = useSelector((state) => state.taskProviderDetails);
  // const { taskProvider, loading, error } = taskProviderDetails;

  useEffect(() => {
    dispatch(listTaskProviderDetails());
  }, [dispatch, match]);

  const taskProvider = {};

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
                [{taskProvider.title}] {taskProvider.name}
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
                <p className="displayProfileLine">service.name</p>
                <p className="displayProfileLine">Service provided two</p>
              </div>
              <br></br>
              <p className="displayProfileLine">Title</p>
              <p className="displayProfileLine">Adress</p>
              <p className="displayProfileLine">City</p>
              <p className="displayProfileLine">Province</p>
              <p className="displayProfileLine">Country</p>
            </div>
            <button className="appointmentButton">Book an appointment</button>
          </CardBody>
        </Card>
      </div>

      <img
        src={require('../images/makeup.jpg')}
        className="profileUploadedImg"
      />

      <img
        src={require('../images/rating-stars-4.jpg')}
        className="profileStars"
      />
    </div>
  );
};
export default ViewProfileProvider;
