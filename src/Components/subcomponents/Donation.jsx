import React from "react";
import { Link } from "react-router-dom";
const Donation = () => {
  return (
    <div className="flex w-screen h-screen">
      {/* Sidebar */}
      <div className="w-1/4 flex flex-col mt-8 ml-[140px] gap-y-4">
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
        className="w-3/4 h-full text-xl text-black bg-blue-50 border-4 border-[#FF6666]  "
        id="chatbot-box"
      ></div>
    </div>
  );
};

export default Donation;
