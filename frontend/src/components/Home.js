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

      {/* <img src={require("../images/haircut.jpg")} alt="haircut" /> */}

      <div className="row">
        <div className="column">
          <div class="image">
            <img
              class="image__img"
              src={require("../images/haircut.jpg")}
              alt="Bricks"
            />
            <div class="image__overlay image__overlay--primary">
              <div class="image__title">Haircut</div>
              <p class="image__description">Enjoy New Style!</p>
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
              <div className="image__title">Nail</div>
              <p className="image__description">Enjoy New Style!</p>
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
              <div className="image__title">Makeup</div>
              <p className="image__description">Enjoy New Style!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
