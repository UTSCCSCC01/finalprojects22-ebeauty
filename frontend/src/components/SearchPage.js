import { useNavigate } from "react-router-dom"
import '../css/index.css'
import '../css/SearchPage.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import  ServiceDropdown  from './ServiceDropdown'

// create a new component called search page, which will hold the search bar and the results, and then export it, so that it can be used in the main page
const SearchPage = () => {
  let navigate = useNavigate()
  function handleClick () {
    navigate("/searchpage")
  }
  return (
    <div className="search-page">
      <div className="search-bar">
        <div className="search-btn">
          <button className="search-icon" type="submit" onClick={handleClick}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <input type="text" className="search-text" placeholder="No Result? Find Another Service Here!" />

      </div>
        <div className="location-bar">
            <input type="text" className="location-text" placeholder="Location"/>
        </div>

      <ServiceDropdown/>




    </div>
  )
}

export default SearchPage