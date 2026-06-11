import "./footer.css";
import logo from "./logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

function Footer() {
  const year = new Date().getFullYear();
  const { language } = useLanguage();
  const hi = language === 'hi';
  return (
    <>
      {/* <Announcements/> */}
      <div className="footersmp" style={{backgroundColor:"#142749"}} >
        <div className="container">
          <footer className="grid lg:grid-cols-5 grid-cols-3 gap-1 md:gap-5 pt-6 pb-0 mx-auto text-center border-top">
            <div className="lg:col-span-2 col-span-3 mb-3 text-center footerContainer">
              <Link
                to="/"
                className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
              >
                <img
                  src={logo}
                  style={{ height: "90px" }}
                  to="/"
                  className="footer-img"
                  alt="smp logo"
                />
              </Link>
              <h6 className="pb-4 m-0" style={{ color: "#E1F7F5" }}>
                {hi ? 'सीखना। बढ़ना। बनना।' : 'Learning. Growing. Becoming'}
              </h6>
              <p className="">© SMP {year}</p>
            </div>

            {/* <div className="col mb-2"></div> */}

            <div className="col-span-1 mb-3 mx-auto text-xs md:text-lg py-4">
              <div className="text-xs md:text-2xl font-bold mb-2">{hi ? 'नेविगेट' : 'Navigate'}</div>
              <ul
                className="nav flex-column footerItems"
                style={{ color: "E1F7F5" }}
              >
                <li className="nav-item mb-2" style={{ color: "E1F7F5" }}>
                  <Link to="/" className="nav-link p-0" style={{ color: "E1F7F5" }}>
                    {hi ? 'होम' : 'Home'}
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/incoming-students/introduction" className="nav-link p-0 ">
                    {hi ? 'आने वाले छात्र' : 'Incoming Students'}
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/academics/introduction" className="nav-link p-0 ">
                    {hi ? 'शैक्षणिक' : 'Academics'}
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="life-at-iitb/introduction" className="nav-link p-0 ">
                    {hi ? 'IIT बॉम्बे में जीवन' : 'Life at IITB'}
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/extra-curriculars/gymkhana" className="nav-link p-0 ">
                    {hi ? 'पाठ्येतर गतिविधियाँ' : 'Extracurriculars'}
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/about/our-objective" className="nav-link p-0 ">
                    {hi ? 'हमारे बारे में' : 'About Us'}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1 mb-3 mx-auto text-xs md:text-lg py-4">
              <div className="text-xs md:text-2xl font-bold mb-2">{hi ? 'त्वरित लिंक' : 'Quick links'}</div>
              <ul className="nav flex-column footerItems">
                <li className="nav-item mb-2">
                  <Link to="incoming-students/things-to-bring" className="nav-link p-0 ">
                    {hi ? 'क्या लाएँ' : 'Things to bring'}
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="academics/curriculum" className="nav-link p-0 ">
                    {hi ? 'पाठ्यक्रम' : 'Curriculum'}
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/incoming-students/accomodation" className="nav-link p-0 ">
                    {hi ? 'आवास' : 'Accomodation'}
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/incoming-students/scholarships" className="nav-link p-0 ">
                    {hi ? 'छात्रवृत्तियाँ' : 'Scholarships'}
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/incoming-students/fee-structure" className="nav-link p-0 ">
                    {hi ? 'शुल्क संरचना' : 'Fee Structure'}
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/academics/departments" className="nav-link p-0 ">
                    {hi ? 'विभाग' : 'Departments'}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1 mb-3 mx-auto text-xs md:text-lg py-4">
              <div className="text-xs md:text-2xl font-bold mb-2">{hi ? 'त्वरित लिंक' : 'Quick links'}</div>
              <ul className="nav flex-column footerItems">
                <li className="nav-item mb-2">
                  <Link to="/extra-curriculars/gymkhana" className="nav-link p-0 ">
                    {hi ? 'जिमखाना' : 'Gymkhana'}
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/extra-curriculars/culturals" className="nav-link p-0 ">
                    {hi ? 'सांस्कृतिक' : 'Culturals'}
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/extra-curriculars/media" className="nav-link p-0 ">
                    {hi ? 'मीडिया' : 'Media'}
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/extra-curriculars/institute-bodies" className="nav-link p-0 ">
                    {hi ? 'संस्थान की संस्थाएँ' : 'Institute Bodies'}
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/extra-curriculars/technical-affairs" className="nav-link p-0 ">
                    {hi ? 'तकनीकी मामले' : 'Technical Affairs'}
                  </Link>
                </li>
              </ul>
            </div>
          </footer>
          <div className="container">
            <footer className="flex flex-wrap justify-between items-center py-3 border-t border-black">
              <div className="md:w-1/3 flex items-center justify-center mx-auto">
                
                <span className="mb-3 mb-md-0 ">{hi ? 'SMP वेब टीम द्वारा ❤️ के साथ बनाया गया' : 'Made with ❤️ by SMP Web Team'}</span>
              </div>

              <ul className="md:w-1/3 justify-center list-none flex items-center mx-auto footerItems footer-socials">
                <li className="m-3">
                  <Link to="https://www.instagram.com/smp.iitb/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="lg"/>
                  </Link>
                </li>
                <li className="m-3">
                  <Link to="https://www.facebook.com/smpiitb" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="lg"/>
                  </Link>
                </li>
                <li className="m-3">
                  <Link to="mailto:smpcs2025@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} size="lg"/>
                  </Link>
                </li>
              </ul>

            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
