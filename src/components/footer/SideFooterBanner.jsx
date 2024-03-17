import React from "react";

const SideFooterBanner = () => {
  return (
    <>
      {/* side-footer-banner */}
      <div className="container-fluid bg-dark py-5">
        <div className="row justify-content-center align-items-center pb-5">
          <div className="col-md-8">
            <div className="row">
              {/* location */}
              <div className="col-md-3 location-flex-box text-center">
                <div className="location-title-context d-flex flex-column text-center text-white gap-2">
                  {/* location icon */}
                  <p className="location-box">
                    <i className="fa-solid fa-location-dot location-icon fs-3 text-white"></i>
                  </p>
                  <span className="fw-bold">VISIT US</span>
                  <span>
                    Shop 5/73 Anderson Rd <br /> Smeaton Grange
                  </span>
                </div>
              </div>
              {/* open */}
              <div className="col-md-3 location-flex-box text-center">
                <div className="location-title-context d-flex flex-column text-center text-white gap-2">
                  {/* location icon */}
                  <p className="location-box">
                    <i className="fa-solid fa-clock location-icon fs-3 text-white"></i>
                  </p>
                  <span className="fw-bold">WE ARE OPEN</span>
                  <span>
                    Mon - Fri: 5:30am - 3pm <br />
                    Sat: 7am - 2pm <br />
                    Sun: Closed
                  </span>
                </div>
              </div>
              {/* open */}
              <div className="col-md-3 location-flex-box text-center">
                <div className="location-title-context d-flex flex-column text-center text-white gap-2">
                  {/* location icon */}
                  <p className="location-box">
                    <i className="fa-solid fa-phone location-icon fs-3 text-white"></i>
                  </p>
                  <span className="fw-bold">RESERVATION</span>
                  <span>
                    0404 343 934 <br />
                    k.prasad@thehookahteam.net
                  </span>
                </div>
              </div>
              {/* connected */}
              <div className="col-md-3 location-flex-box text-center">
                <div className="location-title-context d-flex flex-column text-center text-white gap-2">
                  {/* location icon */}
                  <p className="location-box">
                    <i className="fa-brands fa-nfc-directional location-icon fs-3 text-white"></i>
                  </p>
                  <span className="fw-bold">STAY CONNECTED</span>
                  <span
                    className="d-flex mx-auto gap-3 fs-3"
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fa-brands fa-facebook facebook"></i>
                    <i className="fa-brands fa-square-instagram instagram"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideFooterBanner;
