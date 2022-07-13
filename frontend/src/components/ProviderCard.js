import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars'

function roundHalf(num1, num2) {
  if(num2===0)
    return 0;
  return Math.round((num1/num2)*2)/2;
}

const ProviderCard = ({ provider }) => {
  const rating = {
    size: 20,
    value: roundHalf(provider.totalRating, provider.ratingPopulation),
    edit: false
  };

  return (
    <div>
      <Link
        key={provider._id}
        id="provider-card"
        to={`/provider/${provider._id}`}>
        <div className="search-result">
          <img
            src={require('../images/barber.jpg')}
            alt="barber"
            className="image-barber"
          />

          <div className="search-result-text">
            <h3>{provider.name}</h3>
            <p>{provider.title}</p>
            <div className="rate">
              <ReactStars {...rating}/>

            </div>
          </div>
          <div id="view-profile" to={`/provider/${provider._id}`}>
            View Profile
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProviderCard;
