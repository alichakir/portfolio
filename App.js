import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import SingleProject from './Pages/SingleProject'
import Reviews from "./Pages/Reviews";
function App() {
  return (
    <Router>
   <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/reviews" element={<Reviews/>} />
        <Route path="/Projet/:projectId" element={<SingleProject/>} />
      </Routes>
      <Footer/>
  
    </Router>
  );
}
export default App;
