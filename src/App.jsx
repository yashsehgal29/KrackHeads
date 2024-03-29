import "./App.css";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Services from "./Components/Services";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Homemain from "./Components/Homemain";
import Prescription from "./Components/subcomponents/Prescription";
import Donation from "./Components/subcomponents/Donation";
import MedicalScans from "./Components/subcomponents/MedicalScans";
import Ayurvedic from "./Components/subcomponents/Ayurvedic";

// bg-gradient-to-b from-[#FFEADD] via-[rgb(130,184,237)] to-[#FF8989]
function App() {
  return (
    <div
      className="z-0 bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${"/src/assets/BG.svg"})` }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/home" element={<Homemain />}></Route>
        <Route path="/prescription" element={<Prescription />}></Route>
        <Route path="/donation" element={<Donation />}></Route>
        <Route path="/medicalscans" element={<MedicalScans />}></Route>
        <Route path="/ayurvedic" element={<Ayurvedic />}></Route>
      </Routes>
    </div>
  );
}

export default App;
