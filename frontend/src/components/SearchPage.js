import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link, useParams } from 'react-router-dom';
import '../css/index.css';
import '../css/SearchPage.css';
import React, { useEffect, useState } from 'react';
import ServiceDropdown from './ServiceDropdown';
import { listTaskProviders } from '../actions/taskproviderAction';
import Loader from './Loader';
import Message from './Message';
import ProviderCard from './ProviderCard';
import SearchBox from './SearchBox';

// create a new component called search page, which will hold the search bar and the results, and then export it, so that it can be used in the main page
const SearchPage = () => {
  let navigate = useNavigate();

  function handleClick() {
    navigate('/searchpage');
  }

  function redirect_to_addresspage() {
    navigate('/addresspage');
  }

  const { keyword } = useParams();
  // console.log(keyword);

  // use dispatch to call the listTaskProviders action
  const dispatch = useDispatch();
  const taskProvidersList = useSelector((state) => state.taskProviders);
  const { loading, error, taskProviders } = taskProvidersList;
  useEffect(() => {
    dispatch(listTaskProviders(keyword));
  }, [dispatch, keyword]);

  return (
    <>
      <div className="search-page">
        <SearchBox />
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
                return (
                  <ProviderCard
                    taskProvider={taskProvider}
                    key={taskProvider._id}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
