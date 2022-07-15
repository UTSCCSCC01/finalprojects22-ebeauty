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
  console.log (keyword);
  // use dispatch to call the listProviders action
  const dispatch = useDispatch();
  const providersList = useSelector((state) => state.providers);
  const { loading, error, providers, pages, page } = providersList;
  console.log(pages);
  useEffect(() => {
    dispatch(listProviders(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  const [date, setDate] = useState("");
  const [service, setService] = useState("");
  const [addr,setAddr] = useState("");

  
  useEffect(() => {
    async function fetchAddr(){
      await fetch("/api/customers/getDefaultAddress/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(res => {
        return res.json()
      }).then(data => {
        setAddr(data.address)
      })
    }
    fetchAddr()
  }, [addr])

  return (
    <>
      <div className="search-page">
        <SearchBox />
        <div className='address-form'>
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
                onChange={(e) =>{
                  setService(e.target.value);
                }}
                value={service}
              />
            </div>
          </div>
          <div className="filter-interior-div">
            <h2>Time and Date</h2>
            <div className="filter-interior-time-div">
              <DateTimePickerComponent 
                placeholder="Choose a date and time"
                name="date"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                value={date}
              ></DateTimePickerComponent>
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
                return (
                  <ProviderCard
                    provider={provider}
                    key={provider._id}
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
