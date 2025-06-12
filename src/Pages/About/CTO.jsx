import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const CTO = () => {
    const content = (<>
    <h1 className="text-4xl font-bold mb-5">Counseling, Training, and Outreach (CTO)</h1>
    <p className="mb-4">
        The Counseling, Training, and Outreach (CTO) Cabinet of IIT Bombay's Student Mentorship Programme (SMP) is dedicated to enhancing student well-being and development. It actively engages with the institute's counseling and wellness support structures, plans and executes comprehensive training of SMP mentor along with SMPCs and DAMP cabinet. It also curates the mentorship handbooks in collaboration with the SMP Team. The CTO Cabinet also develops initiatives to promote mental well-being awareness and maintains SMP's social media presence to effectively communicate its core values through its new content. These efforts ensure a supportive and well-informed environment for all students.
    </p>
    </>);
    const sidebar = navData["About Us"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="About Us"/>
    )
}

export default CTO;