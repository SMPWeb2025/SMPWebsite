import React from "react";
import './Page.css'

const Page = ({content, sidebar}) => {
  return (
    <div className="flex flex-col lg:flex-row p-5 md:p-10 lg:p-20 gap-5 lg:gap-20 mt-12 overall">
      
      {/* Main Content */}
      <div className="flex-1 content-container">
        {content}
      </div>

      {/* Sidebar Container (stacked nav + announcements) */}
      <div className="hidden lg:flex flex-col w-85 sticky top-5 self-start space-y-6">
        
        {/* Navigation Section */}
        <div className="bg-white p-4 side-container">
          <h2 className="font-bold text-lg mb-3">Academics</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#intro" className="hover:underline">Introduction</a></li>
            <li><a href="#curriculum" className="hover:underline">Curriculum</a></li>
            <li><a href="#departments" className="hover:underline">Departments</a></li>
            <li><a href="#cpi" className="hover:underline">CPI Calculation</a></li>
            <li><a href="#branch" className="hover:underline">Branch Change</a></li>
            <li><a href="#iddp" className="hover:underline">IDDP</a></li>
            <li><a href="#exchange" className="hover:underline">Semester - Exchange</a></li>
          </ul>
        </div>

        {/* Announcements Section */}
        <div className="bg-white p-4 side-container">
          <h2 className="font-bold text-lg mb-3">Announcements</h2>
          <ul className="text-sm space-y-3">
            <li>🟢 You can check the Academic calendar here.</li>
            <li>🟡 <strong>Update:</strong> Branch change removed for 2024-25. Refer to video and page for more.</li>
            <li>🔵 Follow us on Instagram for updates.</li>
            <li>🟣 Info for prospective women students available.</li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Page;
