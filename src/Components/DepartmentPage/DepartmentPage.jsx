import React from "react";
import aeroBanner from './banner/aero.jpg'
import chemBanner from './banner/chem.jpg'
import chemistryBanner from './banner/chemistry.jpg'
import civilBanner from './banner/civil.jpg'
import cseBanner from './banner/cs.jpg'
import ecoBanner from './banner/eco.jpg'
import elecBanner from './banner/elec.jpg'
import energyBanner from './banner/energy.jpg'
import epBanner from './banner/ep.jpg'
import enviroBanner from './banner/env.jpg'
import idcBanner from './banner/idc.jpg'
import ieorBanner from './banner/ieor.jpg'
import mathsBanner from './banner/math.jpg'
import mechBanner from './banner/mech.jpg'
import metaBanner from './banner/meta.jpg'

import departmentContent from './DepartmentContent.jsx';

// Example department data (replace with real content and image paths)
const departmentData = {
  aerospace: {
    title: "Aerospace Engineering",
    heroImage: aeroBanner,
    content: departmentContent.aerospace,
  },
  chemical: {
    title: "Chemical Engineering",
    heroImage: chemBanner,
    content: (
      departmentContent.chemical
    ),
  },
  chemistry: {
    title: "Chemistry",
    heroImage: chemistryBanner,
    content: (
      departmentContent.chemistry
    ),
  },
  civil : {
    title: "Civil Engineering",
    heroImage: civilBanner,
    content: departmentContent.civil,
  },
  cse : {
    title: "Computer Science and Engineering",
    heroImage: cseBanner,
    content: departmentContent.cse,
  },
  economics : {
    title: "Economics",
    heroImage: ecoBanner,
    content: departmentContent.economics,
  },
  // Add more departments as needed
};

const DepartmentPage = ({ departmentKey }) => {
  const department = departmentData[departmentKey];

  if (!department) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">Department not found</h1>
        <p>Please check the URL or try another department.</p>
      </div>
    );
  }

  const { title, heroImage, content } = department;

  return (
    <div className="flex flex-col bg-[#ececec] min-h-screen">
      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">
            {title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-5 md:px-16 lg:px-40 py-10">
        <div className="bg-white rounded-[10px] shadow-md p-6 md:p-10">
          <div className="prose prose-lg max-w-none">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentPage;
