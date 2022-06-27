import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../css/index.css';
import '../css/SearchPage.css';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ServiceDropdown from './ServiceDropdown';
import { Link } from 'react-router-dom';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { listTaskProviders } from '../actions/taskproviderAction';
import Loader from './Loader';
import Message from './Message';
import ProviderCard from './ProviderCard';

// create a new component called search page, which will hold the search bar and the results, and then export it, so that it can be used in the main page
const SearchPage = ({ searchResults }) => {
  let navigate = useNavigate();

  function handleClick() {
    navigate('/searchpage');
  }

  function redirect_to_addresspage() {
    navigate('/addresspage');
  }

  // use dispatch to call the listTaskProviders action
  const dispatch = useDispatch();
  const taskProvidersList = useSelector((state) => state.taskProviders);
  const { loading, error, taskProviders } = taskProvidersList;
  useEffect(() => {
    dispatch(listTaskProviders());
  }, [dispatch]);

  const [filteredData, setfilteredData] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  // when user types in the search bar, the search term will be updated
  const handleChange = (e) => {
    setSearchInput(e.target.value);
    const newFilteredResults = searchResults.filter((profile) => {
      return Object.keys(profile).some((key) => {
        return profile[key]
          .toString()
          .toLowerCase()
          .includes(searchInput.toString().toLowerCase());
      });
    });

    if (searchInput === '') {
      setfilteredData([]);
    } else {
      setfilteredData(newFilteredResults);
    }
  };

  const handleClickX = () => {
    setfilteredData([]);
    setSearchInput('');
  };

  return (
    <>
      <div className="search-page">
        <form className="search-bar">
          <div className="search-btn">
            <button className="search-icon" type="submit" onClick={handleClick}>
              {filteredData.length === 0 ? (
                <FontAwesomeIcon icon={faSearch} />
              ) : (
                <FontAwesomeIcon icon={faXmark} onClick={handleClickX} />
              )}
            </button>
          </div>
          <input
            value={searchInput}
            type="text"
            className="search-text"
            placeholder="No Result? Find Another Service Here!"
            onChange={handleChange}
          />
        </form>
        <div className="location-bar">
          <button onClick={redirect_to_addresspage} className="location-text">
            Location
          </button>
        </div>

        <ServiceDropdown />

        <div className="search-results">
          <header>
            <h1>Recommended Taskers</h1>
          </header>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <div>
              {taskProviders.map((taskProvider) => {
                return <ProviderCard taskProvider={taskProvider} />;
              })}
            </div>
          )}
          {/* map the filtered data set */}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
