import { teamData } from "./teamData.js";
import TeamCarousel from "./TeamCarausel";
import { useLanguage } from "../../context/LanguageContext";

function TeamLayout() {
    const { language } = useLanguage();
    const isHindi = language === 'hi';

    return (
        <div className='flex flex-col justify-center items-center w-full'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='md:text-4xl text-2xl font-bold mb-5 text-center'>
                    {isHindi ? 'SMP टीम 2025-26' : 'SMP Team 2025-26'}
                </h1>
                <p className='md:text-lg text-sm mb-8 text-center'>
                    {isHindi
                        ? <>स्टूडेंट मेंटर प्रोग्राम (SMP) एक व्यापक संस्थान संस्था है जिसमें DAMP, ELP और CTO जैसे कई वर्टिकल हैं। इसका नेतृत्व समग्र समन्वयकों (Overall Coordinators) द्वारा किया जाता है। DAMP <b>20</b> DAMP समन्वयकों और Academic एवं DAMP Cabinet Heads के मार्गदर्शन में कार्य करता है। कुल मिलाकर SMP टीम में <b>152</b> Institute Student Mentors और <b>294</b> Department Academic Mentors हैं, जो विभिन्न विभागों के छात्रों के लिए एक मजबूत सहायता प्रणाली बनाते हैं।</>
                        : <>The Student Mentor Program (SMP) is a comprehensive institute body consisting of multiple verticals such as DAMP, ELP, and CTO, supported by a large team. It is led by the Overall Coordinators at the institute level, with Cabinet Heads overseeing each vertical. The Department Academic Mentorship Program (DAMP) functions under the guidance of <b>20</b> DAMP Coordinators and Academic and DAMP Cabinet Heads. The ELP and CTO verticals are also actively managed by their respective cabinet heads. In total, the SMP team comprises <b>152</b> Institute Student Mentors and <b>294</b> Department Academic Mentors, forming a strong support system for students across various departments and academic years.</>
                    }
                </p>
            </div>
            <div className="md:text-lg text-sm text-center italic font-bold mb-5">
                {isHindi
                    ? 'हमारे टीम सदस्यों के बारे में अधिक जानने के लिए छवि पर क्लिक करें या होवर करें'
                    : 'Click or hover over image to know more about our team members'
                }
            </div>
            <TeamCarousel teamData={teamData}/>
        </div>
    )
}

export default TeamLayout;