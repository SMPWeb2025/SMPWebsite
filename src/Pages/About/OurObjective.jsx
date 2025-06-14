import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";
import { Link } from "react-router-dom";

const OurObjective = () => {
    const content = (<>
    <h1 className="text-4xl font-bold mb-5">About Us</h1>
    <p className="mb-8">
        Welcome! This website has been created by the Student Mentor Program to introduce incoming freshers to life at IIT Bombay. We encourage you to browse through the various sections and make an informed choice about your college and department. Though we've tried to cover most questions on this website, feel free to mail us at <Link to="mailto:smpcs2025@gmail.com" className="text-blue-600 hover:underline p-0!" target="_blank">smpcs2025@gmail.com</Link> for any queries you may have.
    </p>
    <h1 className="text-4xl font-bold mb-5">Our Objective</h1>
    <p className="mb-4">
        Student Mentor Programme (SMP), is a program within IIT Bombay, with the primary objective of enabling constructive and positive interaction, guidance and mentorship of junior students by senior students. We aim at providing a reliable and comprehensive support system to the student community to motivate them to excel in both academic and non-academic fields, and to make the most of their life at IIT Bombay.
    </p>
    </>);
    const sidebar = navData["About Us"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="About Us"/>
    )
}

export default OurObjective;