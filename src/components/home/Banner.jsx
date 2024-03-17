const Banner = () => {
  return (
    <>
      <div className="container-fluid">
        {/* for banner */}
        <div className="row">
          {/* banner */}
          <div className="col-md-12 p-0">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active banner">
                  <img
                    src="../../../src/assets/images/hidden-spot-cafe-breakfast-0.jpeg"
                    className="d-block w-100 opacity-75"
                    alt="hidden spot breakfast"
                  />
                  <div className="carousel-caption">
                    <h4>Welcome to Hidden Spot</h4>
                    <p>
                      Make your next function more memorial and successful with
                      us
                    </p>
                  </div>
                </div>
                <div className="carousel-item banner">
                  <img
                    src="../../../src/assets/images/hidden-spot-cafe-breakfast-1.jpeg"
                    className="d-block w-100"
                    alt="hidden spot breakfast"
                  />
                  <div className="carousel-caption">
                    <h4>Welcome to Hidden Spot</h4>
                    <p>
                      Make your next function more memorial and successful with
                      us
                    </p>
                  </div>
                </div>
                <div className="carousel-item banner">
                  <img
                    src="../../../src/assets/images/hidden-spot-cafe-breakfast-2.jpeg"
                    className="d-block w-100"
                    alt="hidden spot breakfast"
                  />
                  <div className="carousel-caption">
                    <h4>Welcome to Hidden Spot</h4>
                    <p>
                      Make your next function more memorial and successful with
                      us
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
