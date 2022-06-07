
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
          <p className="search-body">Find Beauty Professionals with the help of Amor</p>
          <div className="search-form">
            <div className="sb-container-input">
              <input type="text" className="sb-input" autoComplete="off" placeholder="I need help with" />
            <button type="button" className="btn sb-button">Find Beauty Today</button>
          </div>
        </div>
        <div className="sb-examples">
          <button className="btn-secondary">Hair Designer</button>
          <button className="btn-secondary">Nail Polisher</button>
          <button className="btn-secondary">Makeup Artist</button>

        </div>
        </div>


      </div>
    </>
  );
};

export default Home;
