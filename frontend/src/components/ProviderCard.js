import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

const ProviderCard = ({ taskProvider }) => {
  return (
    <div>
      <Link id="provider-card" to={`/taskprovider/${taskProvider._id}`}>
        <div className="search-result" key={taskProvider._id}>
          <img
            src={require('../images/barber.jpg')}
            alt="barber"
            className="image-barber"
          />

          <div className="search-result-text">
            <h3>{taskProvider.name}</h3>
            <p>{taskProvider.title}</p>
            <div className="rate">
              <span>{taskProvider.rating}</span>
            </div>
          </div>
          <Link id="view-profile" to={`/taskprovider/${taskProvider._id}`}>
            View Profile
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default ProviderCard;
