import "./footer.css";
import logo from "./logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHeart } from "@fortawesome/free-regular-svg-icons";
import Announcements from "../Annoucements/Announcements";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      {/* <Announcements/> */}
      <div className="footersmp" style={{backgroundColor:"#142749"}} >
        <div className="container">
          <footer className="grid lg:grid-cols-5 grid-cols-3 gap-1 md:gap-5 pt-6 pb-0 mx-auto text-center border-top">
            <div className="lg:col-span-2 col-span-3 mb-3 text-center footerContainer">
              <a
                href="/"
                className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
              >
                <img
                  src={logo}
                  style={{ height: "90px" }}
                  href="https://smp.gymkhana.iitb.ac.in/"
                  className="footer-img"
                  alt="smp logo"
                />
              </a>
              <h6 className="pb-4 m-0" style={{ color: "#E1F7F5" }}>
                Learning. Growing. Becoming
              </h6>
              <p className="">© SMP {year}</p>
            </div>

            {/* <div className="col mb-2"></div> */}

            <div className="col-span-1 mb-3 mx-auto text-xs md:text-lg py-4">
              <div className="text-xs md:text-2xl font-bold mb-2">Navigate</div>
              <ul
                className="nav flex-column footerItems"
                style={{ color: "E1F7F5" }}
              >
                <li className="nav-item mb-2" style={{ color: "E1F7F5" }}>
                  <a href="#" className="nav-link p-0" style={{ color: "E1F7F5" }}>
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 ">
                    Incoming Students
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 ">
                    Academics
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 ">
                    Life at IITB
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 ">
                    Extracurriculars
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 ">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-1 mb-3 mx-auto text-xs md:text-lg py-4">
              <div className="text-xs md:text-2xl font-bold mb-2">Quick links</div>
              <ul className="nav flex-column footerItems">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 ">
                    Curriculum
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 ">
                    Accomodation
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 ">
                    Scholarships
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 ">
                    Fee Structure
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 ">
                    Departments
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-1 mb-3 mx-auto text-xs md:text-lg py-4">
              <div className="text-xs md:text-2xl font-bold mb-2">Quick links</div>
              <ul className="nav flex-column footerItems">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 ">
                    Gymkhana
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 ">
                    Culturals
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 ">
                    Media
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 ">
                    Sports
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 ">
                    Institute Bodies
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 ">
                    Technical Affairs
                  </a>
                </li>
              </ul>
            </div>
          </footer>
          <div className="container">
            <footer className="flex flex-wrap justify-between items-center py-3 border-t border-black">
              <div className="md:w-1/3 flex items-center justify-center mx-auto">
                
                <span className="mb-3 mb-md-0 ">Made with ❤️ SMP Web Team</span>
              </div>

              <ul className="md:w-1/3 justify-center list-none flex items-center mx-auto footerItems footer-socials">
                <li className="m-3">
                  <a href="https://www.instagram.com/smp.iitb/">
                    <FontAwesomeIcon icon={faInstagram} size="lg"/>
                  </a>
                </li>
                <li className="m-3">
                  <a href="https://www.facebook.com/smpiitb">
                    <FontAwesomeIcon icon={faFacebook} size="lg"/>
                  </a>
                </li>
                <li className="m-3">
                  <a href="">
                    <FontAwesomeIcon icon={faEnvelope} size="lg"/>
                  </a>
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
