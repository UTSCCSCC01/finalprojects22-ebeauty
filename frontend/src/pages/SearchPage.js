import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/index.css';
import '../css/SearchPage.css';
import React, { useEffect, useState } from 'react';
import ServiceDropdown from '../components/ServiceDropdown';
import { listProviders } from '../actions/providerAction';
import Loader from '../components/Loader';
import Message from '../components/Message';
import ProviderCard from '../components/ProviderCard';
import SearchBox from '../components/SearchBox';
import Paginator from '../components/Paginator';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';

// create a new component called search page, which will hold the search bar and the results, and then export it, so that it can be used in the main page
const SearchPage = () => {
  let navigate = useNavigate();

  function redirect_to_addresspage() {
    navigate('/addresspage');
  }

  const { keyword } = useParams();
  const { pageNumber } = useParams();
  const [service, setService] = useState('');
  // console.log(pageNumber);
  // console.log(keyword);
  // use dispatch to call the listProviders action
  const dispatch = useDispatch();
  const providersList = useSelector((state) => state.providers);
  const { loading, error, providers, pages, page } = providersList;
  // console.log(pages);
  useEffect(() => {
    dispatch(listProviders(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);
  const [date, setDate] = useState('');
  const [addr, setAddr] = useState('');

  useEffect(() => {
    async function fetchAddr() {
      await fetch('/api/customers/getDefaultAddress/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setAddr(data.address);
        });
    }
    fetchAddr();
  }, [addr]);

  const handleServiceChange = (service) => {
    setService(service);
    window.location.href = `/searchpage/${service}`;
  };

  return (
    <>
      <div className="search-page">
        <SearchBox providers={providers} service={service} key={service._id} />
        <div className="address-form">
          <h2>{addr}</h2>
          <button onClick={redirect_to_addresspage} className="btn">
            Not where you are?
          </button>
        </div>
        <div className="filter-div">
          <div className="filter-interior-div">
            <h2>Service Type</h2>
            <div className="filter-interior-dropdown-div">
              <ServiceDropdown
                name="service"
                value={service}
                onChange={handleServiceChange}
              />
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
                  renderInput={(params) => (
                    <TextField size="small" {...params} />
                  )}
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
              {providers.map((provider) => {
                return <ProviderCard provider={provider} key={provider._id} />;
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
