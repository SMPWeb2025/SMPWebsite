import React from "react";
import './Page.css'

const Page = () => {
  return (
    <div className="flex flex-col lg:flex-row p-5 md:p-10 lg:p-20 gap-5 lg:gap-20 mt-12 overall">
      
      {/* Main Content */}
      <div className="flex-1 content-container">
        <h1 className="text-4xl font-bold mb-4">Introduction</h1>
        <p className="mb-4">
          Message from the General Secretary, Academic Affairs (UG) Congratulations, and give
          yourself a round of applause, for you are the new waves in this vast ocean of possibilities...
        </p>
        <p className="mb-4">
          As an academic institution, IIT Bombay can and will teach you a lot of things during your stay here.
          The important thing is to keep your mind open and keep learning. It's truly a warehouse of
          opportunities...
        </p>
        <p className="mb-4">
          Try your best to maintain a balance between your academics and the plethora of extra-curricular activities...
        </p>
        <p className="mb-4">
          Lastly, your time is limited. You can fail even at what you don’t want, so you might as well take
          a chance on doing what you love/desire...
        </p>
        <p className="mt-8">
          Regards,<br />
          <span className="font-bold">Arjun Saikumar Simha</span><br />
          General Secretary Academic Affairs (UG)<br />
          IIT Bombay<br />
          Email:<a href="mailto:gsecaaug@iitb.ac.in" className="text-blue-600 underline">gsecaaug@iitb.ac.in</a>
        </p>
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
