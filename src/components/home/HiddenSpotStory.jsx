import React from "react";
const HiddenSpotStory = () => {
  return (
    <>
      {/* story */}
      <div className="container-fluid our-story my-5">
        <div className="row">
          <div className="col-md-12 story-box">
            <p className="text-center fs-4">Discover</p>
            <h1 className="text-center fs-1">our story</h1>
          </div>
        </div>
      </div>
      {/* hidden spot history */}
      <div className="container-fluid justify-content-center hidden-spot-history">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <h1>The hidden spot</h1>
            <p>
              The Hidden Spot is a Sydney-based restaurant/café that provides an
              ideal location to celebrate birthdays, anniversaries, baby showers
              and much more. There is a huge variety of sweets, savories and
              foods on our menu. The high-quality food and breath-taking views
              can leave a lasting impression on your guests. Whether you want to
              arrange a private function or corporate party, our place is an
              ideal venue to make your function memorable and successful.
            </p>
          </div>
          <div className="col-md-4">
            <img
              src="../../../src/assets/images/hidden-spot-cafe-breakfast-2.jpeg"
              alt="hidden spot history"
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
};

export default HiddenSpotStory;
