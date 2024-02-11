import React, { useState } from "react";
import { BrowserRouter, Link, NavLink, Routes, Route } from "react-router-dom";
import Prescription from "./subcomponents/Prescription";
import Donation from "./subcomponents/Donation";
import MedicalScans from "./subcomponents/MedicalScans";
import Ayurvedic from "./subcomponents/Ayurvedic";

const Homemain = () => {
  return (
    <div className="flex w-screen h-screen">
      {/* Sidebar */}
      <div className="flex flex-col mt-8 ml-[140px] gap-y-4">
        <NavLink
          to="/home/prescription"
          className="p-3 bg-yellow-300 rounded-l-2xl"
        >
          Prescription Analyzer
        </NavLink>
        <NavLink to="/home/donation" className="p-3 bg-yellow-300">
          Donation
        </NavLink>
        <NavLink to="/home/reviewmedicalscans" className="p-3 bg-yellow-300">
          Review Medical Scans
        </NavLink>
        <NavLink to="/home/ayurvedic" className="p-3 bg-yellow-300">
          Ayurvedic Remedies
        </NavLink>
      </div>

      {/* Chat bot */}
      <div
        className="w-4/5 h-full text-xl bg-white border-4 border-[#FF6666] "
        id="chatbot-box"
      >
        <Routes>
          <Route path="/home/prescription" element={<Prescription />} />
          <Route path="/home/donation" element={<Donation />} />
          <Route path="/home/reviewmedicalscans" element={<MedicalScans />} />
          <Route path="/home/ayurvedic" element={<Ayurvedic />} />
        </Routes>
      </div>
    </div>
  );
};

export default Homemain;
