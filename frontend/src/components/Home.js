import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Home = () => {
  const [homeSearchInput, setHomeSearchInput] = useState('');
  const updateInput = (e) => {
    setHomeSearchInput(e.target.value);
    // console.log(homeSearchInput);
  };

  function findBeauty(e) {
    e.preventDefault();
    if (homeSearchInput.trim()) {
      window.location.href = `/searchpage/${homeSearchInput}`;
    } else {
      window.location.href = '/searchpage';
    }
  }

  function goToSignUp(e) {
    e.preventDefault();
    window.location.href = '/signup';
  }

  function goToFindJob(e) {
    e.preventDefault();
    window.location.href = '/findjob';
  }
  return (
    <>
      <div className="homepage-search">
        <div className="home-sb-container">
          <h1 className="search-header">
            <span>Find Your Beauty Today</span>
          </h1>
          <p className="search-body">
            Find Beauty Professionals with the help of Amor
          </p>
          <form className="search-form" onSubmit={findBeauty}>
            <div className="sb-container-input">
              <input
                type="text"
                className="sb-input"
                autoComplete="off"
                placeholder="I am looking for..."
                onChange={updateInput}
              />
              <button
                type="button"
                className="btn sb-button"
                onClick={findBeauty}>
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <div className="image">
            <img
              className="image__img"
              src={require('../images/haircut.jpg')}
              alt="Bricks"
            />
            <div className="image__overlay image__overlay--primary">
              <div className="image__title">Hair Designer</div>
              {/* <div className="image__description">Enjoy New Style!</div> */}
            </div>
          </div>
        </div>

        <div className="column">
          <div className="image">
            <img
              className="image__img"
              src={require('../images/nail-polish.jpg')}
              alt="Bricks"
            />
            <div className="image__overlay image__overlay--primary">
              <div className="image__title">Nail Artist</div>
              {/* <div className="image__description">Enjoy New Style!</div> */}
            </div>
          </div>
        </div>
        <div className="column">
          <div className="image">
            <img
              className="image__img"
              src={require('../images/makeup.jpg')}
              alt="Bricks"
            />
            <div className="image__overlay image__overlay--primary">
              <div className="image__title">Makeup Artist</div>
              {/* <div className="image__description">Enjoy New Style!</div> */}
            </div>
          </div>
        </div>
      </div>

      {/* <div>Featured Beauty Professionals</div> */}

      <div>
        <div className="container-wide">
          <h1>Ready to get started</h1>
          <div className="ready-to-start-container">
            <div className="left-ready-to-start-container-border">
              <div className="left-container">
                <img
                  className="customer-picture"
                  src={require('../images/amorr-customer.png')}></img>
                <p>Like our service? Sign up now to explore more!</p>
                <button className="btn-secondary" onClick={goToSignUp}>
                  Become a customer
                </button>
              </div>
            </div>
            <div className="right-ready-to-start-container">
              <img
                className="provider-picture"
                src={require('../images/service-provider.png')}></img>
              <p>
                Like our platform? Sign up now and deliver your beauty expertise
              </p>
              <button className="btn-secondary" onClick={goToFindJob}>
                Makeup a Service Provider
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="sb-examples">
          <p className="title" id="sb-examples-title">
            Get beauty today
          </p>
          <button className="btn-secondary">Hair Designer</button>
          <button className="btn-secondary">Makeup Artist</button>
          <button className="btn-secondary">Nail Artist</button>
        </div>
      </div>
    </>
  );
};

export default Home;
