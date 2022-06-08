const Home = () => {
  return (
    <>
      <div className="home">
        {/* <img id="home-img" src={cosmetics}></img> */}
        {/* <p>What service do you need today?</p>
        <p>Canada's #1 Beauty Delivery Service!</p> */}
      </div>
      <div className="homepage-search">
        <div className="home-sb-container">
          <h1 className="search-header">
            <span>Find Your Beauty Today</span>
          </h1>
          <p className="search-body">
            Find Beauty Professionals with the help of Amor
          </p>
          <div className="search-form">
            <div className="sb-container-input">
              <input
                type="text"
                className="sb-input"
                autoComplete="off"
                placeholder="I need help with"
              />
              <button type="button" className="btn sb-button">
                Find Beauty Today
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="row">
        <div className="column">
          <div className="image">
            <img
              className="image__img"
              src={require("../images/haircut.jpg")}
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
              src={require("../images/nail-polish.jpg")}
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
              src={require("../images/makeup.jpg")}
              alt="Bricks"
            />
            <div className="image__overlay image__overlay--primary">
              <div className="image__title">Makeup Artist</div>
              {/* <div className="image__description">Enjoy New Style!</div> */}
            </div>
          </div>
        </div>
      </div>

      <div>

        Featured Beauty Professionals

      </div>

      <div>
        Ready to get started?
      </div>

      <div>
        <div className="sb-examples">
          <p className="title" id="sb-examples-title">Get beauty today</p>
          <button className="btn-secondary">Hair Designer</button>
          <button className="btn-secondary">Makeup Artist</button>
          <button className="btn-secondary">Nail Artist</button>
        </div>
      </div>
    </>
  );
};

export default Home;
