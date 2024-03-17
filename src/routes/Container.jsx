import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
const Container = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
};
export default Container;
