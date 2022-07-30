import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import { listProviderDetails } from "../actions/providerAction";
import ReactStars from "react-stars";
import CustomerCalendar from './CustomerCalendar';

function roundHalf(num1, num2) {
  if (num2 === 0) return 0;
  return Math.round((num1 / num2) * 2) / 2;
}

const ViewProfileProvider = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const providerDetails = useSelector((state) => state.providerDetails);
  const { provider, loading, error } = providerDetails;
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(listProviderDetails(id));
  }, [dispatch, id]);

  const onClickBookAppointment = () => {
    navigate("/service-list", { state: provider.name });
  };
  // const provider = {};
  const rating = {
    size: 30,
    value: roundHalf(provider.totalRating, provider.ratingPopulation),
    edit: false,
  };

  return (
    <div
      className="profile"
      style={{
        display: "flex",
        justifyContent: "left",
        width: "100%",
        paddingTop: "10pt",
        paddingBottom: "30pt",
      }}
    >
      <br></br>
      <div style={{width:"50%"}}>
        <Card className="profileCardView">
          <CardBody>
            <div>
              <h1>{provider.name}</h1>
              <p>
                <img src={require("../images/barber.jpg")} className="profileImage" />
              </p>

              <p className="displayProfileLine">{provider.name}</p>
              <div>
                {/* should pass service info base on _id in db  */}
                <p className="displayProfileLine">{provider.name}</p>
                <p className="displayProfileLine">Service provided two</p>
              </div>
              <br></br>
              <p className="displayProfileLine">{provider.title}</p>
              <p className="displayProfileLine">{provider.address}</p>
              <p className="displayProfileLine">{provider.city}</p>
              <p className="displayProfileLine">{provider.state}</p>
              <p className="displayProfileLine">{provider.country}</p>
            </div>
            <button className="appointmentButton" style={"cursor: pointer"} onClick={onClickBookAppointment}>
              Book an appointment
            </button>
          </CardBody>
        </Card>
      </div>

      <div className="displayProfileRating">
        <h9>Current Rating: {roundHalf(provider.totalRating, provider.ratingPopulation)}</h9>
        <ReactStars {...rating} />
        <div>
          <Link to="/reviews">
            <button className="profileButton">Write a Review</button>
          </Link>
        </div>
      
        {/* <img src={require('../images/makeup.jpg')} className="profileUploadedImg" /> */}
        <CustomerCalendar providerId={provider._id} className="customerCalendar"/>
      </div>

      
      
    </div>
  );
};
export default ViewProfileProvider;
