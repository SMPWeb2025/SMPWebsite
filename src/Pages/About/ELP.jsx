import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";
import TeamCard from "../../Components/TeamPage/TeamCard";
import { teamData } from "../../Components/TeamPage/teamData";

const ELP = () => {
    const head1 = teamData.find(member => member.name === "Mann Gabani");
    const head2 = teamData.find(member => member.name === "Samriddhi Kedia");

    const content = (<>
    <h1 className="text-4xl font-bold mb-5">English Learning Program(ELP)</h1>
    <p className="mb-4">
        The primary language for instruction at IIT Bombay is English, critical for global opportunities and social integration. Understanding this language is crucial, The English Learning Program (ELP), another vertical of the Student Mentor Program, aims to help students who wish to improve their English by facilitating learning through their initiatives, classes and activities. The entire program is free of cost and it is for everyone!
    </p>
    <p className="mb-4">
        ELP runs its classes throughout the semester- known as English Language Improvement Training (ELIT) classes. The classes are majorly activity driven. Some of the broad modules we cover :
    </p>
    <ol className="list-decimal ml-4 mb-4">
        <li><b>1-on-1</b> - Here, we provide personlized help to students and address the specific issues faced by them including- reading, writing, speaking and listening.</li>
        <li><b>Conversations club</b> - The aim is to improve the communication skills of the students by involving them in a bunch of activities like debating, presentations and impromptu.</li>
        <li><b>Grammar & Writing module</b> - Here, the main objective is to improve and equip the students with the basic grammar concepts that is useful in everyday life and help them write emails, letters, SoPs and other things.</li>
        <li><b>Book club</b> - This club helps students inculcate a habit of reading books and gives them an essence of how to read and understand a book</li>
    </ol>
<p className="mb-4">
    ELP’s other initiatives include:
</p>
    <ol className="list-decimal ml-4">

        <li><b>Demystifying Interviews</b>- A series of internship and placement preparatory webinars by seniors from relevent fields and experts from industry covering topics to help the students prepare better for the recruitement drive.</li>
        <li><b>Session on GRE & TOEFL</b>- This session is taken by an expert from ETS (the body that conducts GRE & TOEFL) covering the the key concepts of these exams and sharing tips and tricks.</li>
    </ol>

    {/* Add the section for ELP Heads */}
        <div className="mt-8">
                <h2 className="text-3xl font-bold mb-8 text-center">Meet the ELP Heads</h2>
                
                {/* Flex container to place cards side-by-side and center them */}
                <div className="flex flex-wrap justify-center items-center gap-8">
                    
                    {/* Render Head 1 if found in the data */}
                    {head1 && (
                        <div className="box-content shrink-0 md:w-[22rem] w-[16rem] h-[25rem] md:p-6 p-2">
                            <TeamCard member={head1} />
                        </div>
                    )}

                    {/* Render Head 2 if found in the data */}
                    {head2 && (
                        <div className="box-content shrink-0 md:w-[22rem] w-[16rem] h-[25rem] md:p-6 p-2">
                            <TeamCard member={head2} />
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

export default ELP;