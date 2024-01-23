import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import NotFoundPage from "./pages/NotFoundPage";
import Cerca from "./pages/Cerca";
import Footer from "./components/Footer";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cerca" element={<Cerca />} />
          <Route path="*" element={<NotFoundPage />} /> 
      </Routes>
      </Container>
      <Container fluid className="bg-dark">
        <Footer />
      </Container>
    </BrowserRouter>
    
  );
}

export default App;
