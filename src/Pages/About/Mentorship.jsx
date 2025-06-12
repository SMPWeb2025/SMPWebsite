import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const Mentorship = () => {
    const content = (<>
    <h1 className="text-4xl font-bold mb-5">Mentorship</h1>
    <p className="mb-4">
        Mentoring is a particular form of relationship designed to provide personal and professional support to an individual. The mentor is more experienced than the mentee and makes use of that experience in a facilitative way to support the development of the mentee. The mentoring relationship provides a developmental opportunity for both parties and is of mutual benefit. In a nutshell, a student mentor's role may be perceived to be facilitative, supportive and developmental for the student community in general. The SMP has two mentorship-related wings: ISMP and DAMP.
    </p>
    <h2 className="text-xl font-bold mb-2">Institute Student Mentorship Program(ISMP)</h2>
    <p className="mb-4">
The Institute Student Mentorship Program (ISMP) aims at developing a smooth transition to campus life for every new entrant to an academic program at IIT Bombay. It is an initiative of the SMP within the student community which primarily deals with mentorship for the first-year undergraduate students. Selected senior students, called Institute Student Mentors (ISMs), are responsible for helping a group of first-year students adjust to the new environment. They subsequently monitor their progress throughout the year. Mentors help solve students' academic and personal problems while on campus, and guide them through the first year of college life away from home.
    </p>
    <h2 className="text-xl font-bold mb-2">
        Department Academic Mentorship Program(DAMP)
    </h2>
    <p className="mb-4">
        DAMP or Department Academic Mentorship Program, is a student-run support program primarily for students at the sophomores level and above. Apart from mentorship for sophomores, the DAMP program hosts many sessions and has compiled various resources to guide you through all your years at the institute. All of this is handled by the DAMP Coordinators at the department level and by the Academic and DAMP Cabinet Heads at the Institute level.
    </p>
    </>);
    const sidebar = navData["About Us"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="About Us"/>
    )
}

export default Mentorship;