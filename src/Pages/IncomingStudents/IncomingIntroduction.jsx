import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";
import { Link } from "react-router-dom";

const IncomingIntroduction = () => {
    const content = (<><h1 className="text-4xl font-bold mb-5">Introduction</h1>
    <p className="mb-4">
        Welcome to the website of Student Mentor Program, IIT Bombay!
    </p>
    <p className="mb-4">
        The main aim of this website is to acquaint you with the different facets of this college which you might be curious about. We hope this will help in making the difficult choice ahead of you and give you some insight into the culture at IIT Bombay from a student’s perspective!
    </p>
    <p className="mb-4">
        We are the <b>Student Mentor Programme</b> (SMP), a programme within IIT Bombay, with the primary objective of enabling constructive and positive interaction, guidance and mentorship of junior students by senior students. We aim at providing a reliable and comprehensive support system to the student community to motivate them to excel in both academic and non-academic fields, and to make the most of their life at IIT Bombay.
    </p>
    <p className="mb-4">
        This website has a lot of carefully curated information that we believe is relevant to you. Take your time to go through the different sections, we’ve covered various aspects of <Link to="/life-at-iitb/introduction" className="text-blue-600 hover:underline p-0!">life at IITB</Link> - from academics to <Link to="/extra-curriculars/gymkhana" className="text-blue-600 hover:underline p-0!">extracurriculars</Link>.
    </p>
    <p className="mb-4">
        Before you begin exploring, we urge you to visit the official website of IIT Bombay which covers important official information for prospective students: <Link to="https://www.iitb.ac.in/en/students/information-prospective-students" className="text-blue-600 hover:underline p-0!" target="_blank">Information for Prospective Students | Indian Institute of Technology Bombay</Link>
    </p>

    <p className="mb-4">
        We hope this website gives you some clarity. In case of any doubts or concerns, feel free to email us on <Link to="mailto:smpcs2024@gmail.com" className="text-blue-600 hover:underline p-0!" target="_blank">smpcs2024@gmail.com</Link> and we will reply to you as soon as possible. Our team is always there to assist you and you can visit <Link to="/about/team"
        className="text-blue-600 hover:underline p-0!">this page</Link> to access our contact information.
    </p>

    <p className="mb-4">Happy exploring!</p>
    <p className="mb-4">Warm Regards</p>
    <p className="mb-4"><b>Sara Atnoorkar | Amritansh Joshi</b><br /><b>Overall Coordinators, Student Mentor Program, IIT Bombay</b>
    </p>
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>

    <iframe
        border="0"
        src="https://www.youtube.com/embed/1jYlB0xrbUw?si=h0sL-SnSkhe2Ae1P"
        title="IIT Bombay from the Air"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '85%',
            height: '90%',
            border: '0',
        }}
        />
        </div>
    </>);
    const sidebar = navData["Incoming Students"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="Incoming Students"/>
    )
}

export default IncomingIntroduction;