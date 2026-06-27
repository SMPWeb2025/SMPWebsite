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
                    {isHindi ? 'SMP टीम 2026-27' : 'SMP Team 2026-27'}
                </h1>
                <p className='md:text-lg text-sm mb-8 text-center'>
                    {isHindi
                        ? <>स्टूडेंट मेंटर प्रोग्राम (SMP) एक व्यापक संस्थान संस्था है जिसमें DAMP, ELP और CTO जैसे कई वर्टिकल हैं, जिन्हें एक बड़ी टीम का समर्थन प्राप्त है। इसका नेतृत्व संस्थान स्तर पर Overall Coordinators द्वारा किया जाता है, और Cabinet Heads प्रत्येक वर्टिकल की देखरेख करते हैं। Department Academic Mentorship Program (DAMP) लगभग <b>20</b> DAMP Coordinators और Academic एवं DAMP Cabinet Heads के मार्गदर्शन में कार्य करता है। ELP और CTO वर्टिकल भी अपने-अपने cabinet heads द्वारा सक्रिय रूप से प्रबंधित किए जाते हैं। कुल मिलाकर SMP टीम में लगभग <b>150</b> Institute Student Mentors और लगभग <b>300</b> Department Academic Mentors हैं, जो विभिन्न विभागों और शैक्षणिक वर्षों के छात्रों के लिए एक मजबूत सहायता प्रणाली बनाते हैं।</>
                        : <>The Student Mentor Program (SMP) is a comprehensive institute body consisting of multiple verticals such as DAMP, ELP, and CTO, supported by a large team. It is led by the Overall Coordinators at the institute level, with Cabinet Heads overseeing each vertical. The Department Academic Mentorship Program (DAMP) functions under the guidance of approximately<b>20</b> DAMP Coordinators and Academic and DAMP Cabinet Heads. The ELP and CTO verticals are also actively managed by their respective cabinet heads. In total, the SMP team comprises approximately <b>150</b> Institute Student Mentors and approximately <b>300</b> Department Academic Mentors, forming a strong support system for students across various departments and academic years.</>
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