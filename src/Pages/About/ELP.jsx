import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";
import TeamCard from "../../Components/TeamPage/TeamCard";
import { teamData } from "../../Components/TeamPage/teamData";

const ELP = () => {
    const head1 = teamData.find(member => member.name === "Mann Gabani");
    const head2 = teamData.find(member => member.name === "Samriddhi Kedia");

    const headsSection = (heading) => (
        <div className="mt-8">
            <h2 className="text-3xl font-bold mb-8 text-center">{heading}</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
                {head1 && (
                    <div className="box-content shrink-0 md:w-[22rem] w-[16rem] h-[25rem] md:p-6 p-2">
                        <TeamCard member={head1} />
                    </div>
                )}

                {head2 && (
                    <div className="box-content shrink-0 md:w-[22rem] w-[16rem] h-[25rem] md:p-6 p-2">
                        <TeamCard member={head2} />
                    </div>
                )}
            </div>
        </div>
    );

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
            ELP's other initiatives include:
        </p>
        <ol className="list-decimal ml-4">
            <li><b>Demystifying Interviews</b>- A series of internship and placement preparatory webinars by seniors from relevent fields and experts from industry covering topics to help the students prepare better for the recruitement drive.</li>
            <li><b>Session on GRE & TOEFL</b>- This session is taken by an expert from ETS (the body that conducts GRE & TOEFL) covering the the key concepts of these exams and sharing tips and tricks.</li>
        </ol>

        {headsSection("Meet the ELP Heads")}
    </>);

    const contentHi = (<>
        <h1 className="text-4xl font-bold mb-5">अंग्रेजी शिक्षण कार्यक्रम (ELP)</h1>
        <p className="mb-4">
            IIT बॉम्बे में निर्देश की प्राथमिक भाषा अंग्रेजी है, जो वैश्विक अवसरों और सामाजिक एकीकरण के लिए अत्यंत महत्वपूर्ण है। इस भाषा को समझना जरूरी है। अंग्रेजी शिक्षण कार्यक्रम (ELP), स्टूडेंट मेंटर प्रोग्राम का एक अन्य विभाग है, जो अपनी पहलों, कक्षाओं और गतिविधियों के माध्यम से उन छात्रों की सहायता करता है जो अपनी अंग्रेजी सुधारना चाहते हैं। यह पूरा कार्यक्रम निःशुल्क है और सभी के लिए खुला है!
        </p>
        <p className="mb-4">
            ELP पूरे सेमेस्टर में अपनी कक्षाएं चलाता है — जिन्हें English Language Improvement Training (ELIT) कक्षाएं कहा जाता है। ये कक्षाएं मुख्यतः गतिविधि-आधारित होती हैं। हम जिन मुख्य मॉड्यूल्स को कवर करते हैं:
        </p>
        <ol className="list-decimal ml-4 mb-4">
            <li><b>1-on-1</b> - यहाँ हम छात्रों को व्यक्तिगत सहायता प्रदान करते हैं और उनकी विशिष्ट समस्याओं — पढ़ना, लिखना, बोलना और सुनना — को हल करते हैं।</li>
            <li><b>Conversations Club</b> - इसका उद्देश्य बहस, प्रस्तुतियाँ और तात्कालिक भाषण जैसी गतिविधियों के माध्यम से छात्रों की संवाद कौशल में सुधार करना है।</li>
            <li><b>Grammar & Writing Module</b> - इसका मुख्य उद्देश्य छात्रों को बुनियादी व्याकरण अवधारणाओं से लैस करना है जो दैनिक जीवन में उपयोगी हों और उन्हें ईमेल, पत्र, SoP आदि लिखने में मदद करें।</li>
            <li><b>Book Club</b> - यह क्लब छात्रों में किताबें पढ़ने की आदत डालने में मदद करता है।</li>
        </ol>
        <p className="mb-4">
            ELP की अन्य पहलों में शामिल हैं:
        </p>
        <ol className="list-decimal ml-4">
            <li><b>Demystifying Interviews</b> - इंटर्नशिप और प्लेसमेंट की तैयारी के लिए वरिष्ठ छात्रों और उद्योग विशेषज्ञों द्वारा वेबिनार की एक श्रृंखला।</li>
            <li><b>GRE & TOEFL पर सत्र</b> - यह सत्र ETS (जो GRE और TOEFL आयोजित करता है) के एक विशेषज्ञ द्वारा लिया जाता है जो परीक्षाओं की प्रमुख अवधारणाओं और टिप्स साझा करते हैं।</li>
        </ol>

        {headsSection("ELP Heads से मिलें")}
    </>);

    const sidebar = navData["About Us"];

    return (
        <Page content={content} contentHi={contentHi} sidebar={sidebar} sideHeading="About Us"/>
    )
}

export default ELP;
