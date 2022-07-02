import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/index.css';
import '../css/SearchPage.css';
import React, { useEffect, useState } from 'react';
import ServiceDropdown from './ServiceDropdown';
import { listTaskProviders } from '../actions/taskproviderAction';
import Loader from './Loader';
import Message from './Message';
import ProviderCard from './ProviderCard';
import SearchBox from './SearchBox';
import Paginator from './Paginator';
import {DateTimePickerComponent} from '@syncfusion/ej2-react-calendars';
import 'react-datepicker/dist/react-datepicker.css'

// create a new component called search page, which will hold the search bar and the results, and then export it, so that it can be used in the main page
const SearchPage = () => {
  let navigate = useNavigate();

  function redirect_to_addresspage() {
    navigate('/addresspage');
  }

  const { keyword } = useParams();
  const { pageNumber } = useParams();
  console.log(pageNumber);

  // use dispatch to call the listTaskProviders action
  const dispatch = useDispatch();
  const taskProvidersList = useSelector((state) => state.taskProviders);
  const { loading, error, taskProviders, pages, page } = taskProvidersList;
  console.log(pages);
  useEffect(() => {
    dispatch(listTaskProviders(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <div className="search-page">
        <SearchBox />
        <div className="filter-div">
          <div className="filter-interior-div">
            <h2>Service Type</h2>
            <div className="filter-interior-dropdown-div">
              <ServiceDropdown />
            </div>
          </div>
          <div className="filter-interior-div">
            <h2>Location</h2>
            <div className="location-bar">
              <p className="location-bar-text">Toronto, Ontario</p>
              <button onClick={redirect_to_addresspage} className="location-text">
                Location
              </button>
            </div>
          </div>
          <div className="filter-interior-div">
            <h2>Time and Date</h2>
            <div className="filter-interior-time-div">
              <DateTimePickerComponent placeholder="Choose a date and time"></DateTimePickerComponent>
            </div>
          </div>
        </div>

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
        <>
          <Paginator
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      </div>
    </>
  );
};

export default SearchPage;
