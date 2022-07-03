import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBox = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const { keyword } = useParams();

  const handleChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchKeyword.trim()) {
      window.location.href = `/searchpage/${searchKeyword}`;
    } else {
      window.location.href = '/searchpage';
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-btn">
        <button className="search-icon" type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <input
        type="text"
        className="search-text"
        placeholder={
          keyword
            ? 'No Results? Try With Another Service'
            : 'Explore Your Beauty Today'
        }
        // value={searchKeyword}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBox;
