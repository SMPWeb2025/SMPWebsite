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
        <div className="container " >
          <footer className="grid lg:grid-cols-5 grid-cols-3 py-5 gap-4 mx-auto text-center border-top">
            <div className="lg:col-span-2 col-span-3 mb-3 text-center footerContainer">
              <a
                href="/"
                className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
              >
                <img
                  src={logo}
                  style={{ height: "90px" }}
                  href="https://smp.gymkhana.iitb.ac.in/"
                  classNameName="footer-img"
                  alt="smp logo"
                />
              </a>
              <h6 className="pb-4 m-0" style={{ color: "#E1F7F5" }}>
                Learning. Growing. Becoming
              </h6>
              <p className="">© SMP {year}</p>
            </div>

            {/* <div className="col mb-2"></div> */}

            <div className="col-span-1 mb-3 mx-auto text-xs md:text-lg">
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

            <div className="col-span-1 mb-3 mx-auto text-xs md:text-lg">
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

            <div className="col-span-1 mb-3 mx-auto text-xs md:text-lg">
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
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3  border-top border-black">
              <div className="col-md-4 d-flex align-items-center">
                <a
                  href="/"
                  className="mb-3 me-2 mb-md-0  text-decoration-none lh-1"
                >
                  <svg className="bi" width="30" height="24">
                    <use xlink:href="#bootstrap"></use>
                  </svg>
                </a>
                <span className="mb-3 mb-md-0 ">Made with ❤️ SMP Web Team</span>
              </div>

              <ul className="nav col-md-4 justify-content-end list-unstyled d-flex footerItems">
                <li className="m-3">
                  <a className="" href="https://www.instagram.com/smp.iitb/">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li className="m-3">
                  <a className="" href="https://www.facebook.com/smpiitb">
                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                  </a>
                </li>
                <li className="m-3">
                  <a className="" href="">
                    <FontAwesomeIcon icon={faEnvelope} />
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
