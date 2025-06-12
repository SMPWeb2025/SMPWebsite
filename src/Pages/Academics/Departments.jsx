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
  { name: "Engineering Physics", src: Ep, path: "engineering-physics" },
  { name: "Environmental Sciences", src: Enviro, path: "environmental" },
  { name: "Industrial Design Centre", src: IDC, path: "idc" },
  { name: "IEOR", src: IEOR, path: "ieor" },
  { name: "Mathematics", src: Maths, path: "maths" },
  { name: "Mechanical Engineering", src: Mech, path: "mechanical" },
  { name: "Metallurgical Engineering and Materials Science", src: Meta, path: "metallurgy" },
];

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
      
      {/* Department Grid Starts Here */}
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

    </>
  )
  const sidebar = navData["Academics"];
  
  return (
    <Page content={content} sidebar={sidebar} sideHeading="Academics" />
  )
}
export default Departments

