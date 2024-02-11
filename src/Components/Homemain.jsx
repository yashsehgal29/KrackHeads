import React, { useState } from "react";
import { Link } from "react-router-dom";

const Homemain = () => {
  return (
    <div className="flex w-full h-screen">
      {/* Sidebar */}
      <div className="flex flex-col mt-8 ml-[140px] gap-y-4">
        <Link to="/prescription">
          <button className="w-full p-3 bg-yellow-300 rounded-l-2xl">
            Prescription Analyzer
          </button>
        </Link>
        <Link to="/donation">
          <button className="w-full p-3 bg-yellow-300 rounded-l-2xl">
            Donation
          </button>
        </Link>
        <Link to="/medicalscans">
          <button className="w-full p-3 bg-yellow-300 rounded-l-2xl">
            Review Medical Scans
          </button>
        </Link>
        <Link to="/ayurvedic">
          <button className="w-full p-3 bg-yellow-300 rounded-l-2xl">
            Ayurvedic
          </button>
        </Link>
      </div>

      {/* Chat bot */}
      <div
        className="w-4/5 h-full text-xl text-black bg-white border-4 border-[#FF6666] "
        id="chatbot-box"
      ></div>
    </div>
  );
};

export default Homemain;
