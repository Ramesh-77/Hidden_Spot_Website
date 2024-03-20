import React from "react";
import Banner from "./Banner";
import "./Home.css";
import Service from "./Service";
import HiddenSpotStory from "./HiddenSpotStory";
import HiddenSpotFunction from "./HiddenSpotFunction";
import SideFooterBanner from "../footer/SideFooterBanner";
const Home = () => {
  const cafeContext =
    "We are always ready to serve you the mouthwatering foods, snacks and coffee and tea, providing pleasant soothing ambiance to enjoy with your beloved ones and family.";
  const mealPrepContext =
    "Discover our all-time favourites high protein meals. Nothing beats a meal that’s cooked and delivered fresh. Simply heat, eat and repeat!";
  const cateringContext =
    "Hidden Spot catering delivers the fresh and delicious catering options to Sydney’s offices, function venues, and residential homes. So whether you have a private celebration or a corporate event we can deliver fresh, delicious catering on time, every time.";

 
  return (
    <>
      {/* for home */}
      <section id="home">
        {/* carousel banner */}
        <Banner />
        
        {/* story */}
        <HiddenSpotStory />
        {/* service */}
        <Service
          cafeContext={cafeContext}
          mealPrepContext={mealPrepContext}
          cateringContext={cateringContext}
        />
        {/* hidden spot function */}
        <HiddenSpotFunction />
        {/* side footer banner */}
        <SideFooterBanner />
      </section>
    </>
  );
};

export default Home;
