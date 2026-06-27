import { teamData } from "./teamData.js";
import TeamCarousel from "./TeamCarausel";

function TeamLayout() {
    return (
        <div className='flex flex-col justify-center items-center w-full'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='md:text-4xl text-2xl font-bold mb-5 text-center'>SMP Team 2026-27</h1>
                <p className='md:text-lg text-sm mb-8 text-center'>
                    The Student Mentor Program (SMP) is a comprehensive institute body consisting of multiple verticals such as DAMP, ELP, and CTO, supported by a large team. It is led by the Overall Coordinators at the institute level, with Cabinet Heads overseeing each vertical. The Department Academic Mentorship Program (DAMP) functions under the guidance of ~<b>20</b> DAMP Coordinators and Academic and DAMP Cabinet Heads. The ELP and CTO verticals are also actively managed by their respective cabinet heads. In total, the SMP team comprises ~<b>150</b> Institute Student Mentors and ~<b>300</b> Department Academic Mentors, forming a strong support system for students across various departments and academic years.
                </p>
            </div>
            <div  className="md:text-lg text-sm text-center italic font-bold mb-5">
                Click or hover over image to know more about our team members
            </div>
            <TeamCarousel teamData={teamData}/>

        </div>
    )
}

export default TeamLayout;