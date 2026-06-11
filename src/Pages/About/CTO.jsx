import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";
import TeamCard from "../../Components/TeamPage/TeamCard";
import { teamData } from "../../Components/TeamPage/teamData";

const CTO = () => {
    const ctoHead = teamData.find(member => member.designation === "Counselling, Training and Outreach Head (CTO)");

    const content = (<>
    <h1 className="text-4xl font-bold mb-5">Counseling, Training, and Outreach (CTO)</h1>
    <p className="mb-4">
        The Counseling, Training, and Outreach (CTO) Cabinet of IIT Bombay's Student Mentorship Programme (SMP) is dedicated to enhancing student well-being and development. It actively engages with the institute's counseling and wellness support structures, plans and executes comprehensive training of SMP mentor along with SMPCs and DAMP cabinet. It also curates the mentorship handbooks in collaboration with the SMP Team. The CTO Cabinet also develops initiatives to promote mental well-being awareness and maintains SMP's social media presence to effectively communicate its core values through its new content. These efforts ensure a supportive and well-informed environment for all students.
    </p>
    
    {/* CTO Head Card Section */}
            <div className="mt-6">
                <h2 className="text-3xl font-bold mb-8 text-center">Meet the CTO Head</h2>
                
                {/* Flex centered for a single card */}
                <div className="flex justify-center items-center">
                    {ctoHead && (
                        <div className="box-content shrink-0 md:w-[22rem] w-[16rem] h-[25rem] md:p-6 p-2">
                            <TeamCard member={ctoHead} />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
    const sidebar = navData["About Us"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="About Us"/>
    )
}

export default CTO;