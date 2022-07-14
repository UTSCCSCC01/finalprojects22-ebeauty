import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/index.css';
import '../css/SearchPage.css';
import React, { useEffect, useState } from 'react';
import ServiceDropdown from '../components/ServiceDropdown';
import { listTaskProviders } from '../actions/taskproviderAction';
import Loader from '../components/Loader';
import Message from '../components/Message';
import ProviderCard from '../components/ProviderCard';
import SearchBox from '../components/SearchBox';
import Paginator from '../components/Paginator';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { TextField } from '@mui/material'

// create a new component called search page, which will hold the search bar and the results, and then export it, so that it can be used in the main page
const SearchPage = () => {
  let navigate = useNavigate();

  function redirect_to_addresspage() {
    navigate('/addresspage');
  }

  const { keyword } = useParams();
  const { pageNumber } = useParams();
  console.log(pageNumber);
  console.log (keyword);
  // use dispatch to call the listTaskProviders action
  const dispatch = useDispatch();
  const taskProvidersList = useSelector((state) => state.taskProviders);
  const { loading, error, taskProviders, pages, page } = taskProvidersList;
  console.log(pages);
  useEffect(() => {
    dispatch(listTaskProviders(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("");

  return (
    <>
      <div className="search-page">
        <SearchBox />
        <div className="filter-div">
          <div className="filter-interior-div">
            <h2>Service Type</h2>
            <div className="filter-interior-dropdown-div">
              <ServiceDropdown 
                name="service"
                onChange={(e) =>{
                  setService(e.target.value);
                }}
                value={service}
              />
            </div>
          </div>
          <div className="filter-interior-div">
            <h2>Location</h2>
            <div className="location-bar">
              <p 
                className="location-bar-text"
                name="location"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                value={location}
              >Toronto, Ontario</p>
              <button onClick={redirect_to_addresspage} className="location-text">
                Location
              </button>
            </div>
          </div>
          <div className="filter-interior-div">
            <h2>Time and Date</h2>
              <div className="filter-interior-time-div">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={date}
                    onChange={(newValue) => {
                      setDate(newValue);
                    }}
                    renderInput={(params) => <TextField size="small" {...params} />}
                  />
                </LocalizationProvider>
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
