import React from "react";
import './Page.css';
import { Link, useLocation } from "react-router-dom";
import Announcements from "../Annoucements/Announcements";
import { useLanguage } from "../../context/LanguageContext";
import { sidebarTranslations } from "../../translations/navTranslations";

const Page = ({ content, contentHi, sidebar, sideHeading }) => {
  const location = useLocation();
  const { language } = useLanguage();

  const displayContent = language === 'hi' && contentHi ? contentHi : content;
  const displayHeading = language === 'hi' ? (sidebarTranslations[sideHeading] || sideHeading) : sideHeading;

  return (
    <div className="flex flex-col lg:flex-row p-5 md:p-10 lg:p-20 gap-5 lg:gap-20 mt-20 overall w-full">

      {/* Main Content */}
      <div className="flex-1 content-container lg:w-3/5">
        {displayContent}
      </div>

      {/* Sidebar Container (stacked nav + announcements) */}
      <div className="hidden lg:flex flex-col w-85 sticky top-30 self-start space-y-6">

        {/* Navigation Section */}
        <div className="bg-white p-4 side-container">
          <h2 className="font-bold text-lg mb-3">{displayHeading}</h2>
          <ul className="space-y-2 text-sm">
            {sidebar.map((navItem) => {
              const path = '/' + navItem.link;
              const isActive = location.pathname === path;
              const displayName = language === 'hi'
                ? (sidebarTranslations[navItem.name] || navItem.name)
                : navItem.name;

              return (
                <li key={navItem.name}>
                  <Link
                    to={path}
                    className={`block px-2 py-1 rounded link ${
                      isActive ? 'active-link text-white' : ''
                    }`}
                  >
                    {displayName}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

      </div>
      <div className="fixed bottom-5 right-5">
        <Announcements />
      </div>
    </div>
  );
};

export default Page;
