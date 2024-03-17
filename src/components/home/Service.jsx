import React from "react";
import ServiceButton from "./ServiceButton";
const Service = (props) => {
  return (
    <>
      <div className="container-fluid my-5">
        <div className="service-heading">
          <h1 className="text-center fw-bold mb-5">Our Services</h1>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-12 d-flex justify-content-center gap-5">
                {/* cafe */}
                <div className="col-md-4 cafe-service">
                  <div className="card cafe-service-card">
                    <img
                      src="../../../src/assets/images/hidden-spot-cafe-breakfast-2.jpeg"
                      alt=""
                    />
                    <div className="card-body cafe">
                      <h5 className="card-title text-uppercase fw-bold">
                        Cafe
                      </h5>
                      <p className="card-text">
                        {props.cafeContext.slice(0, 100)}...
                      </p>
                      <ServiceButton />
                    </div>
                  </div>
                </div>
                {/* meal prep */}
                <div className="col-md-4">
                  <div className="card cafe-service-card">
                    <img
                      src="../../../src/assets/images/hidden-spot-cafe-breakfast-2.jpeg"
                      alt=""
                    />
                    <div className="card-body mealPrep">
                      <h5 className="card-title text-uppercase fw-bold">
                        Meal Prep
                      </h5>
                      <p className="card-text">
                        {props.mealPrepContext.slice(0, 109)}...
                      </p>
                     <ServiceButton />
                    </div>
                  </div>
                </div>
                {/* catering */}
                <div className="col-md-4">
                  <div className="card cafe-service-card">
                    <img
                      src="../../../src/assets/images/hidden-spot-cafe-breakfast-2.jpeg"
                      alt=""
                    />
                    <div className="card-body catering">
                      <h5 className="card-title text-uppercase fw-bold">
                        Catering
                      </h5>
                      <p className="card-text">
                        {props.cateringContext.slice(0, 100)}...
                      </p>
                      <ServiceButton />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
