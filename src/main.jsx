import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Layout from './Pages/Layout.jsx'

// Academics Components
import Intro from './Pages/Academics/Intro.jsx'
import SemEx from './Pages/Academics/SemEx.jsx'
import CPI_Calculation from './Pages/Academics/CPI_Calculation.jsx'
import Departments from './Pages/Academics/Departments.jsx'
import Curriculum from './Pages/Academics/Curriculum.jsx'
import BranchChange from './Pages/Academics/BranchChange.jsx'
import IDDDP from './Pages/Academics/IDDDP.jsx'
import DeptRouteWrapper from './Components/DepartmentPage/DeptRouteWrapper.jsx'

// About Us Components
import OurObjective from './Pages/About/OurObjective';
import Mentorship from './Pages/About/Mentorship';
import ISMP from './Pages/About/ISMP';
import ELP from './Pages/About/ELP';
import CAT from './Pages/About/CAT';
import Team from './Pages/About/Team';

// Extra Curriculars Components
import Gymkhana from './Pages/ExtraCurriculars/Gymkhana';
import Culturals from './Pages/ExtraCurriculars/Culturals';
import Media from './Pages/ExtraCurriculars/Media';
import TechnicalAffairs from './Pages/ExtraCurriculars/TechnicalAffairs';
import InstituteBodies from './Pages/ExtraCurriculars/InstituteBodies';

// Incoming Students Components
import IncomingIntroduction from './Pages/IncomingStudents/IncomingIntroduction';
import Onboarding from './Pages/IncomingStudents/Onboarding';
import Accommodation from './Pages/IncomingStudents/Accomodation';
import Scholarships from './Pages/IncomingStudents/Scholarships';
import FeeStructure from './Pages/IncomingStudents/FeeStructure';
import LetterToParents from './Pages/IncomingStudents/LetterToParents';

// Life at IITB Components
import LifeIntroduction from './Pages/LifeAtIITB/LifeIntroduction';
import InAndAroundCampus from './Pages/LifeAtIITB/InAndAroundCampus';
import SupportAvailable from './Pages/LifeAtIITB/SupportAvailable';
import CultureAtIITB from './Pages/LifeAtIITB/CultureAtIITB';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about/',
        element: <Layout />,
        children: [
            {
                path: 'our-objective',
                element: <OurObjective />
            },
            {
                path: 'mentorship',
                element: <Mentorship />
            },
            {
                path: 'ismp',
                element: <ISMP />
            },
            {
                path: 'elp',
                element: <ELP />
            },
            {
                path: 'cat',
                element: <CAT />
            },
            {
                path: 'team',
                element: <Team />
            }
        ]
      },
      {
        path: 'academics/',
        element: <Layout />,
        children: [
          {
            path: 'introduction',
            element: <Intro />
          },
          {
            path: 'curriculum',
            element: <Curriculum />
          },
          {
            path: 'departments',
            element: <Departments />
          },
          {
            path: 'departments/:dept',
            element: <DeptRouteWrapper />,  // dynamic sub-routes for each department
          },
          {
            path: 'cpi-calculation',
            element: <CPI_Calculation />
          },
          {
            path: 'branch-change',
            element: <BranchChange />
          },
          {
            path: 'idddp',
            element: <IDDDP />
          },
          {
            path: 'semester-exchange',
            element: <SemEx />
          }
        ]
      },
      {
        path: 'extra-curriculars/',
        element: <Layout />,
        children: [
            {
                path: 'gymkhana',
                element: <Gymkhana />
            },
            {
                path: 'culturals',
                element: <Culturals />
            },
            {
                path: 'media',
                element: <Media />
            },
            {
                path: 'technical-affairs',
                element: <TechnicalAffairs />
            },
            {
                path: 'institute-bodies',
                element: <InstituteBodies />
            }
        ]
      },
      {
        path: 'incoming-students/',
        element: <Layout />,
        children: [
            {
                path: 'introduction',
                element: <IncomingIntroduction />
            },
            {
                path: 'onboarding',
                element: <Onboarding />
            },
            {
                path: 'accomodation', // Note: Typo 'Accomodation' from your data, keeping it for consistency
                element: <Accommodation />
            },
            {
                path: 'scholarships',
                element: <Scholarships />
            },
            {
                path: 'fee-structure',
                element: <FeeStructure />
            },
            {
                path: 'letter-to-parents',
                element: <LetterToParents />
            }
        ]
      },
      {
        path: 'life-at-iitb/',
        element: <Layout />,
        children: [
            {
                path: 'introduction',
                element: <LifeIntroduction />
            },
            {
                path: 'in-and-around-the-campus',
                element: <InAndAroundCampus />
            },
            {
                path: 'support-available',
                element: <SupportAvailable />
            },
            {
                path: 'culture-at-iitb',
                element: <CultureAtIITB />
            }
        ]
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
