import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import '../css/index.css'
import '../css/SearchPage.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import  ServiceDropdown  from './ServiceDropdown'

// create a new component called search page, which will hold the search bar and the results, and then export it, so that it can be used in the main page
const SearchPage = () => {

  let navigate = useNavigate()

  function handleClick () {
    navigate("/searchpage")
  }

  const [search, setSearch] = useState("")
  const [results, setResults] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.get('http://localhost:3000/profiles').then(res => {
      res.data.filter(profile => {
        if (search === "") {
          setResults([profile])
        }
        else if (profile.name.toLowerCase().includes(search.toLowerCase())) {
          setResults([profile])
        }
      })
    })
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="search-page">
      <form className="search-bar" onSubmit={handleSubmit}>
        <div className="search-btn">
          <button className="search-icon" type="submit" onClick={handleClick}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <input
          value={search}
          type="text"
          className="search-text"
          placeholder="No Result? Find Another Service Here!"
          onChange={handleChange} />
      </form>
      <div className="location-bar">
        <input type="text" className="location-text" placeholder="Location" />
      </div>

      {/* <ServiceDropdown/> */}

      <div className="search-results">
        <header>
          <h1>Recommended Taskers</h1>
        </header>
        {results.map((result, id) => {
          return (
            <div className="search-result" key={id}>
              <img src={require('../images/barber.jpg')} className="image-barber" />
              <div className="search-result-text">
                <h3>{result.name}</h3>
                <p>{result.title}</p>
                <div className="rate">
                  <span>{result.rate}</span>
                </div>
              </div>
              <a href="#">View Profile</a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SearchPage