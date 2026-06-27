import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const Gymkhana = () => {
    const content = (<>
        <h1 className="text-4xl font-bold mb-5">Sports</h1>
        <p className="mb-4">
            The student community at IITB is an active and thriving one. The development and management of all student activities comes under the purview of Students' Gymkhana. It is instrumental in identifying student issues and promoting discussion on them. It functions as the office for all elections and nominations of students for gymkhana activities. There are several student bodies that work under the aegis of the Gymkhana.
        </p>
        
        <h2 className="text-xl font-bold mb-2">Introduction</h2>
        <p className="mb-4">
            Excellence in sports is a direct index of the stature and intellectual maturity of an institute. IIT Bombay has always aimed to set a precedent for other institutions by laying utmost emphasis on the multifaceted development of its students and pushing them to raise the bar by striving to be ‘Citius, Altius, Fortius’. With a deeply ingrained sports culture and the ‘Right of Sports for all’ as a cornerstone of its Sports policy, the institute has, over the years, channelized its resources towards the development of a state of the art sporting complex that caters to over fourteen sports. All the facilities are helmed by seasoned training staff so that even beginners have a beautiful chance to learn the craft and their more experienced counterparts can receive the requisite guidance.
        </p>

        <h2 className="text-xl font-bold mb-2">Facilities</h2>
        <p className="mb-4">
            IITB offers its students sports facilities of an international level with fully-furnished courts and high-quality equipment.
        </p>
        <p className="mb-4">
            <div className="grid grid-cols-2">
                <span className="border-t-1 border-gray-400 p-1">AQUATICS</span>
                <span className="border-t-1 border-gray-400 p-1">ATHLETICS</span>
                <span className="border-t-1 border-gray-400 p-1">BADMINTON</span>
                <span className="border-t-1 border-gray-400 p-1">BASKETBALL</span>
                <span className="border-t-1 border-gray-400 p-1">BOARD GAMES</span>
                <span className="border-t-1 border-gray-400 p-1">CRICKET</span>
                <span className="border-t-1 border-gray-400 p-1">FOOTBALL</span>
                <span className="border-t-1 border-gray-400 p-1">HOCKEY</span>
                <span className="border-t-1 border-gray-400 p-1">INDIAN GAMES</span>
                <span className="border-t-1 border-gray-400 p-1">LAWN TENNIS</span>
                <span className="border-t-1 border-gray-400 p-1">SQUASH</span>
                <span className="border-t-1 border-gray-400 p-1">TABLE TENNIS</span>
                <span className="border-t-1 border-gray-400 p-1">VOLLEYBALL</span>
                <span className="border-t-1 border-gray-400 p-1">WEIGHTLIFTING</span>
                <span className="border-t-1 border-gray-400 p-1">ADVENTURE CLUB</span>
                <span className="border-t-1 border-gray-400 
                p-1">DARK KNIGHT (CHESS CLUB)</span>
                <span className="border-t-1 border-gray-400 p-1">RUBIK'S CLUB</span>
                <span className="border-t-1 border-gray-400 p-1">ULTIMATE FRISBEE CLUB</span>
                <span className="border-t-1 border-b-1 border-gray-400 p-1">YOGASTHA (YOGA CLUB)</span>
                <span className="border-t-1 border-gray-400 p-1"></span>
            </div>
            
        </p>
        <p className="mb-4">
            Besides, every hostel has dedicated volleyball, badminton and basketball courts, cricket pitches and football fields, snooker, table tennis and foosball tables and is completely decked with various equipments which can be issued by students.
        </p>

        <h2 className="text-xl font-bold mb-2">Sports for everyone</h2>
        <p className="mb-4">
           A passion for sports has always been a part of the very fabric of the institute. To ensure a healthy continuity of this tradition the Sports Council organises a multitude of sports and fitness camps that vary in the degree of professionalism (amateur, intermediate or advanced) as well as the rigour of instruction. 
        </p>
        <p className="mb-4">
            Moreover, to keep with dynamically evolving exercise regimens, workshops on modern forms like Zumba, Mixed Martial Arts and AquaYoga and target specific weight loss camps are conducted. And to satisfy the cravings of the adventure streak in all of us, there are regular excursions to the Himalayas, daunting treks and adrenaline pumping sports like rafting, rock climbing and mountaineering, with scuba diving plans in the pipeline.
        </p>

        <p className="mb-4">
            The Government of India, through the National Sports Organisation, mandates that all incoming freshmen must undergo a structured training in a sport of their choice. At IIT Bombay, NSO forms an integral part of the curriculum and classes are offered in sports with biweekly instruction.
        </p>

        <h2 className="text-xl font-bold mb-2">Aavhan</h2>
        <p className="mb-4">
          Aavhan is a three day extravaganza that brought together participants to combine the thrill of competition with the joy of sports. The state-of- the-art facilities at the institute played host to over three thousand sportspersons representing universities, clubs and organizations across the nation. Tough battles were waged across courts, fields and the pool in a bid to bring home the glittering trophies that were at stake in thirteen different sports.  
        </p>
        <p className="mb-4">
            The inaugural edition of Aavhan, IIT Bombay’s sports festival, which was held from 24 th May 2017 to 26 th May 2017,The fever that had engulfed the campus was tangible as all events witnessed large spectator turnout. Despite there being some of the finest talent from across the country for display, the IIT Bombay contingent refused to give any quarter and ensured that all their opponents had to toil and prove their mettle to emerge champions.
        </p>
        <p className="mb-4">
            The extensive planning and relentless work that was put in by the Sports Council, the support staff and other authorities to get the sponsors on board and translate this long standing dream into a reality was evident from the flawless execution of the event. The grand success of the festival can be attributed to the way it managed to capture the passion to conquer and the quest for glory- the very essence of all sporting activity. Now that Aavhan is set to be an annual fixture, it only promises to get bigger, better and more entertaining and we couldn’t be more excited!
        </p>

        <h2 className="text-xl font-bold mb-2">The Council</h2>
        <p className="mb-4">
           The responsibility for the efficient management of all issues pertaining to sports at the institute level rests with the Sports Council, an annually elected body. Helmed by the General Secretary, the council comprises 4 nominees, 14 sport-specific secretaries, 1 Technical Head, 1 Media Head, 1 Creatives Head. 
        </p>

        <h2 className="text-xl font-bold mb-2">Championships</h2>
        <p className="mb-4">
            At the institute level itself, a steady string of competitive events is organised throughout the year with tournaments on conventional sports, upcoming games as well as their modern improvisations. The General Championships are keenly contested as they bring budding talent into the spotlight besides resting on a traditional yet healthy inter-hostel rivalry as its bedrock. The ever increasing participation among girls has prompted the advent of a separate Girls GC which is now a permanent fixture. Outside of the mainstream GC framework, leagues and events are also organised periodically to allow players to hone and display their skills and to instil a sporting ethic among all students. For fostering a spirit of fraternity in the hostels, the Hostel Council holds multiple events to promote interaction across batches and departments.
        </p>

        <h2 className="text-xl font-bold mb-2">Inter IIT Championships</h2>
        <p className="mb-4">
            Touted as the ‘Holy Grail’ amongst all the sports events, representing IITB at the Inter IIT Sports meet is the ultimate honour for any student at the institute. Each year, one of the seven older IITs plays host to contingents from the other campuses, with players in their quest for glory competing fiercely to lift the coveted trophy.
        </p>

        <p className="mb-4">
Moreover, considering the level at which the competition operates and the fact that it is the highest stature that can be associated with a sportsperson at the institute, getting to represent IITB at this event in the first year itself ought to be a matter of great honour and pride for any freshman.
        </p>

        <p className="mb-4">
            In recent years, IITB won the Overall General Championships for 3 consecutive years 2007- 2009, then again in 2012 and the last time in 2016. The 50th Inter IIT Sport Meet was hosted rather magnificently by the institute and 56th Inter IIT Sports Meet will also be hosted by IIT Bombay in 2023. That there have been several instances of individuals being crowned champions at the meet in sports they learnt only after joining the institute speaks volumes of how IIT Bombay provides ample opportunities to cultivate talent and nurture it.

        </p>

        <p className="mb-4">
            The championship is held in December every year, with a separate aquatics meet in October. For the main meet, selection trials commence in October. Those selected become a part of the Inter IIT Training Camp which begins from last week of November, continuing until the date of departure.
        </p>

        <p className="mb-4">
            To know more about Sports at IIT Bombay, visit <a href="https://gymkhana.iitb.ac.in/sports/" className="text-blue-600 hover:underline p-0! inline" target="_blank">https://gymkhana.iitb.ac.in/sports/.</a>
        </p>
    </>);
    const contentHi = (<>
        <h1 className="text-4xl font-bold mb-5">जिमखाना</h1>
        <p className="mb-4">
            IIT बॉम्बे में छात्र समुदाय सक्रिय और जीवंत है। सभी छात्र गतिविधियों का विकास और प्रबंधन स्टूडेंट्स जिमखाना के अधीन आता है। यह छात्र मुद्दों की पहचान करने और उन पर चर्चा बढ़ावा देने में महत्वपूर्ण भूमिका निभाता है।
        </p>
        <h1 className="text-4xl font-bold mb-5">खेल</h1>
        <h2 className="text-xl font-bold mb-2">परिचय</h2>
        <p className="mb-4">
            खेल में उत्कृष्टता किसी संस्थान की प्रतिष्ठा और बौद्धिक परिपक्वता का प्रत्यक्ष सूचक है। IIT बॉम्बे ने हमेशा अपने छात्रों के बहुआयामी विकास पर अत्यधिक जोर देकर अन्य संस्थानों के लिए एक मानक स्थापित करने का प्रयास किया है। 'सभी के लिए खेल का अधिकार' को मूलनीति मानते हुए संस्थान ने 14 से अधिक खेलों के लिए विश्वस्तरीय खेल परिसर विकसित किया है।
        </p>
        <h2 className="text-xl font-bold mb-2">सुविधाएँ</h2>
        <p className="mb-4">IIT बॉम्बे अपने छात्रों को पूरी तरह से सुसज्जित कोर्ट और उच्च गुणवत्ता वाले उपकरणों के साथ अंतरराष्ट्रीय स्तर की खेल सुविधाएँ प्रदान करता है।</p>
        <p className="mb-4">
            <div className="grid grid-cols-2">
                <span className="border-t-1 border-gray-400 p-1">जलक्रीड़ा</span>
                <span className="border-t-1 border-gray-400 p-1">एथलेटिक्स</span>
                <span className="border-t-1 border-gray-400 p-1">बैडमिंटन</span>
                <span className="border-t-1 border-gray-400 p-1">बास्केटबॉल</span>
                <span className="border-t-1 border-gray-400 p-1">बोर्ड गेम्स</span>
                <span className="border-t-1 border-gray-400 p-1">क्रिकेट</span>
                <span className="border-t-1 border-gray-400 p-1">फुटबॉल</span>
                <span className="border-t-1 border-gray-400 p-1">हॉकी</span>
                <span className="border-t-1 border-gray-400 p-1">खो-खो</span>
                <span className="border-t-1 border-gray-400 p-1">लॉन टेनिस</span>
                <span className="border-t-1 border-gray-400 p-1">स्क्वैश</span>
                <span className="border-t-1 border-gray-400 p-1">टेबल टेनिस</span>
                <span className="border-t-1 border-gray-400 p-1">वॉलीबॉल</span>
                <span className="border-t-1 border-gray-400 p-1">वेटलिफ्टिंग</span>
                <span className="border-t-1 border-gray-400 p-1">एडवेंचर स्पोर्ट्स</span>
                <span className="border-t-1 border-gray-400 p-1">शतरंज</span>
                <span className="border-t-1 border-b-1 border-gray-400 p-1">फिटनेस क्लब</span>
                <span className="border-t-1 border-gray-400 p-1"></span>
            </div>
        </p>
        <h2 className="text-xl font-bold mb-2">सभी के लिए खेल</h2>
        <p className="mb-4">
            स्पोर्ट्स काउंसिल विभिन्न स्तरों के खेल और फिटनेस शिविर आयोजित करती है। Zumba, मिक्स्ड मार्शल आर्ट्स और AquaYoga जैसे आधुनिक कार्यशालाएँ और हिमालय ट्रेक, रॉक क्लाइंबिंग और पर्वतारोहण जैसी रोमांचकारी गतिविधियाँ भी आयोजित की जाती हैं।
        </p>
        <h2 className="text-xl font-bold mb-2">आव्हान</h2>
        <p className="mb-4">
            आव्हान एक तीन दिवसीय खेल महोत्सव है जो प्रतिस्पर्धा की रोमांच और खेल के आनंद को एक साथ लाता है। इसका पहला संस्करण 24-26 मई 2017 को आयोजित हुआ था।
        </p>
        <h2 className="text-xl font-bold mb-2">इंटर IIT चैम्पियनशिप</h2>
        <p className="mb-4">
            सभी खेल आयोजनों में 'पवित्र ग्रेल' के रूप में प्रसिद्ध, इंटर IIT स्पोर्ट्स मीट में IITB का प्रतिनिधित्व करना किसी भी छात्र के लिए सर्वोच्च सम्मान है। यह चैम्पियनशिप हर वर्ष दिसंबर में आयोजित होती है। अधिक जानकारी के लिए देखें: <a href="https://gymkhana.iitb.ac.in/sports/" className="text-blue-600 hover:underline p-0! inline" target="_blank">https://gymkhana.iitb.ac.in/sports/</a>
        </p>
    </>);

    const sidebar = navData["Extra Curriculars"];

    return (
        <Page content={content} contentHi={contentHi} sidebar={sidebar} sideHeading="Extra Curriculars" />
    )
}

export default Gymkhana;