import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";
import Aero from './icons/Aero.svg';
import Chemical from './icons/Chemical.svg';
import Chemistry from './icons/Chemistry.svg';
import Civil from './icons/civil.svg';
import CSE from './icons/CSE.svg';
import Eco from './icons/Eco.svg';
import Elec from './icons/Elec.svg';
import Energy from './icons/Energy.svg';
import Ep from './icons/Ep.svg';
import Enviro from './icons/Enviro.svg';
import IDC from './icons/IDC.svg';
import IEOR from './icons/IEOR.svg';
import Maths from './icons/Maths.svg';
import Mech from './icons/Mech.svg';
import Meta from './icons/Meta.svg';

import { Link } from "react-router-dom";

const Departments = () => {
  const departments = [
  { name: "Aerospace Engineering", src: Aero, path: "aerospace" },
  { name: "Chemical Engineering", src: Chemical, path: "chemical" },
  { name: "Chemistry", src: Chemistry, path: "chemistry" },
  { name: "Civil Engineering", src: Civil, path: "civil" },
  { name: "Computer Science", src: CSE, path: "cse" },
  { name: "Economics", src: Eco, path: "economics" },
  { name: "Electrical Engineering", src: Elec, path: "electrical" },
  { name: "Energy Science and Engineering", src: Energy, path: "energy" },
  { name: "Engineering Physics", src: Ep, path: "ep" },
  { name: "Environmental Sciences", src: Enviro, path: "environmental" },
  { name: "Industrial Design Centre", src: IDC, path: "idc" },
  { name: "IEOR", src: IEOR, path: "ieor" },
  { name: "Mathematics", src: Maths, path: "maths" },
  { name: "Mechanical Engineering", src: Mech, path: "mech" },
  { name: "Metallurgical Engineering and Materials Science", src: Meta, path: "meta" },
];

  const deptGrid = (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
      {departments.map((dept, index) => (
        <Link
          to={`/academics/departments/${dept.path}`}
          key={index}
          className="flex flex-col items-center text-center p-4 rounded-[10px] hover:shadow-lg transition-shadow duration-300 cursor-pointer"
        >
          <img src={dept.src} alt={dept.name} className="w-24 h-24 mb-4 object-contain" />
          <p className="font-medium">{dept.name}</p>
        </Link>
      ))}
    </div>
  );

  const content = (
    <>
      <h1 className="text-4xl font-bold mb-5">Departments</h1>
      <p className="mb-4">
        <em>A short introduction to various departments, Department Activities and Alumni</em>
      </p>
      <p className="mb-4">
        This site is meant for you, the future entrants into the IITs, to get an idea of what the different branches actually do and what engineering/sciences really involve. We, the students of IIT Bombay, have prepared this material describing the programmes offered at IIT Bombay based on our experience here. The description of each programme is focused on how it is structured at IIT Bombay and the nature of similar programmes offered at other colleges might be different. To get an in-depth description of all the departments and programmes, do check out the individual websites of each IIT.
      </p>
      <p className="mb-4">
        Please note that this information is NOT officially endorsed by IIT Bombay and merely represents the opinions of the students who have contributed to it.
      </p>
      <p className="mb-4">
        <b>If you have any doubts, please feel free to post your questions at the bottom of the respective department pages. If you have any other general questions you can post them here.</b>
      </p>
      <p className="mb-4">
        <b>Humble Appeal :</b> Many students have fallen bait to the practice of blindly following the cutoffs of the previous years and have ended up disliking the branch that they choose. We hope YOU, the future IITian will make judicious use of this initiative and make an informed choice!
      </p>
      {deptGrid}
    </>
  )

  const contentHi = (
    <>
      <h1 className="text-4xl font-bold mb-5">विभाग</h1>
      <p className="mb-4">
        <em>विभिन्न विभागों, विभागीय गतिविधियों और पूर्व छात्रों का संक्षिप्त परिचय</em>
      </p>
      <p className="mb-4">
        यह वेबसाइट आपके लिए बनाई गई है — भविष्य के IIT में प्रवेश करने वाले छात्रों के लिए — ताकि आप जान सकें कि विभिन्न शाखाएँ वास्तव में क्या करती हैं और इंजीनियरिंग/विज्ञान में क्या होता है। IIT बॉम्बे के छात्रों ने यहाँ के कार्यक्रमों का विवरण अपने अनुभव के आधार पर तैयार किया है।
      </p>
      <p className="mb-4">
        कृपया ध्यान दें कि यह जानकारी IIT बॉम्बे द्वारा आधिकारिक रूप से समर्थित नहीं है और केवल योगदान करने वाले छात्रों की राय है।
      </p>
      <p className="mb-4">
        <b>विनम्र अपील:</b> कई छात्र पिछले वर्षों के कट-ऑफ का अंधाधुंध अनुसरण करते हैं और अंत में अपनी चुनी हुई शाखा से असंतुष्ट हो जाते हैं। हम उम्मीद करते हैं कि आप इस पहल का विवेकपूर्ण उपयोग करके एक सूचित निर्णय लेंगे!
      </p>
      {deptGrid}
    </>
  )
  const sidebar = navData["Academics"];

  return (
    <Page content={content} contentHi={contentHi} sidebar={sidebar} sideHeading="Academics" />
  )
}
export default Departments

