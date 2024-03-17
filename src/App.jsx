import React from "react";
import { BrowserRouter } from "react-router-dom";
import Container from "./routes/Container";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
