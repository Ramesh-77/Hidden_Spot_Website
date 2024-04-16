import React from "react";
import { BrowserRouter } from "react-router-dom";
import Container from "./routes/Container";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <Container />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
