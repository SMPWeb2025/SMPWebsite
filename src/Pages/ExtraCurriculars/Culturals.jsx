import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons"
import instiiAppLogo from "../../assets/img/extra_curricular/favicon-32x32.png"

const Culturals = () => {
    const content = (<>
        <h1 className="text-4xl font-bold mb-5">Culturals</h1>
        <p className="mb-4">
            So you thought it was all about academics? Wrong! IITB is privileged to have one of the best cultural scenes among engineering colleges in India. Apart from hosting Mood Indigo, India's biggest college cultural festival, we have a very active intra-college scene with genre-specific clubs and plenty of hostel and insti-level events all year round.
        </p>
        <h2 className="text-xl font-bold mb-2">Structure</h2>
        <p className="mb-4">
            At the Institute level, the scene is governed by the Institute Cultural Council, headed by the General Secretary of Cultural Affairs.
        </p>
        <h2 className="text-lg font-medium mb-2 p-0">Freshizza</h2>
        <p className="mb-4">
            The most important cultural event of your first semester is Freshiezza, the inter-hostel freshmen cultural competition, usually held in 2 phases over the first semester.
        </p>
        <h2 className="text-xl font-bold mb-2">Cultural Clubs</h2>
        <h2 className="text-lg font-semibold mb-2 p-0">Literary Arts: Literati</h2>
        <p className="mb-4">Quizzes, Creative writing, Rebuses, Blogs and Word Games all fall under the reign of Literati.
            <div className="flex items-center mt-1">
                <a href="https://www.instagram.com/literati_iitb/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                <a href="https://www.insti.app/org/literati" target="_blank"><img src={instiiAppLogo} alt="Literati" /></a>
            </div>
        </p>
        <h2 className="text-lg font-semibold mb-2 p-0">Dramatics: Fourth Wall</h2>
        <p className="mb-4">Stage Plays, Streetplays, Mime, monoact and other genres.
            <div className="flex items-center mt-1">
                <a href="https://www.facebook.com/IITBombay.fourthwall/" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} size="lg" /></a>
                <a href="https://www.insti.app/org/fourthwall" target="_blank"><img src={instiiAppLogo} alt="Fourthwall" /></a>
            </div>
        </p>
        <h2 className="text-lg font-semibold mb-2 p-0">Music: Symphony</h2>
        <p className="mb-4">Symphony organises large scale music events, music learning programs and represents IIT Bombay in multiple intercollege competitions.
            <div className="flex items-center mt-1">
                <a href="https://www.instagram.com/symphonyiitb/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                <a href="https://www.youtube.com/channel/UC5UrEXoJe-xoVgkIlECTMcA" target="_blank"><FontAwesomeIcon icon={faYoutube} size="lg" /></a>
            </div>
        </p>
        <h2 className="text-lg font-semibold mb-2 p-0">Dance: In-Sync</h2>
        <p className="mb-4">The Annual InSync Dance Show (AIDS), held every January, is the biggest dance showcase in the institute.
            <div className="flex items-center mt-1">
                <a href="https://www.instagram.com/insync_iitb/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                <a href="https://www.insti.app/org/insync" target="_blank"><img src={instiiAppLogo} alt="InSync" /></a>
            </div>
        </p>
        <h2 className="text-lg font-semibold mb-2 p-0">Vaani</h2>
        <p className="mb-4">Vaani is IIT Bombay's official Indian languages club. They host monthly open mics in different Indian languages and their flagship event IZHAAR is a 3-day event.
            <div className="flex items-center mt-1">
                <a href="https://www.instagram.com/vaani_iitb/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                <a href="https://www.insti.app/org/vaani" target="_blank"><FontAwesomeIcon icon={faSquareArrowUpRight} size="lg" /></a>
            </div>
        </p>
        <h2 className="text-lg font-semibold mb-2 p-0">Photography and Fine Arts - Rang and Pixels</h2>
        <p className="mb-4">Rang and Pixels is the official photography and fine arts club of IIT Bombay — a community of visual storytellers who capture the world through lenses, brushes, and bold imagination.
            <div className="flex items-center mt-1">
                <a href="https://www.instagram.com/rang_iitb/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                <a href="https://www.instagram.com/pixels_iitb/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
            </div>
        </p>
        <h2 className="text-lg font-semibold mb-2 p-0">Intra College events</h2>
        <p className="mb-4">
            Intra-hostel General Championship (GC) events held throughout the year decide your hostel's position in the Cultural GC.
        </p>
        <h2 className="text-lg font-semibold mb-2 p-0">Inter College events</h2>
        <p className="mb-4">
            Every December, IITB hosts India's biggest cult fest, Mood Indigo — a 4 day long cultural extravaganza with participation by thousands of students from all over the country.
        </p>
        <h2 className="text-lg font-semibold mb-2 p-0">Performing Arts Festival (PAF)</h2>
        <p className="mb-4">
            PAF is also known as the 'Baap of all cultural events'. Three or four hostels are grouped together to battle against each other with everything from script to dance, music to drama handled entirely by students.
        </p>
    </>);

    const contentHi = (<>
        <h1 className="text-4xl font-bold mb-5">सांस्कृतिक गतिविधियाँ</h1>
        <p className="mb-4">
            क्या आपको लगा कि यह सब पढ़ाई के बारे में है? गलत! IIT बॉम्बे को भारत के इंजीनियरिंग कॉलेजों में सबसे बेहतरीन सांस्कृतिक दृश्यों में से एक होने का सौभाग्य प्राप्त है। भारत के सबसे बड़े कॉलेज सांस्कृतिक महोत्सव Mood Indigo की मेजबानी के अलावा, यहाँ पूरे वर्ष हॉस्टल और संस्थान स्तरीय कार्यक्रम होते रहते हैं।
        </p>
        <h2 className="text-xl font-bold mb-2">संरचना</h2>
        <p className="mb-4">
            संस्थान स्तर पर, इसे इंस्टीट्यूट कल्चरल काउंसिल द्वारा नियंत्रित किया जाता है, जिसका नेतृत्व सांस्कृतिक मामलों के महासचिव करते हैं।
        </p>
        <h2 className="text-lg font-medium mb-2 p-0">फ्रेशिज्जा</h2>
        <p className="mb-4">
            पहले सेमेस्टर का सबसे महत्वपूर्ण सांस्कृतिक आयोजन Freshiezza है — नए छात्रों की इंटर-हॉस्टल सांस्कृतिक प्रतियोगिता।
        </p>
        <h2 className="text-xl font-bold mb-2">सांस्कृतिक क्लब</h2>
        <h2 className="text-lg font-semibold mb-2 p-0">साहित्यिक कलाएँ: Literati</h2>
        <p className="mb-4">प्रश्नोत्तरी, रचनात्मक लेखन, पहेलियाँ, ब्लॉग और वर्ड गेम्स Literati के अंतर्गत आते हैं।
            <div className="flex items-center mt-1">
                <a href="https://www.instagram.com/literati_iitb/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                <a href="https://www.insti.app/org/literati" target="_blank"><img src={instiiAppLogo} alt="Literati" /></a>
            </div>
        </p>
        <h2 className="text-lg font-semibold mb-2 p-0">नाटक: Fourth Wall</h2>
        <p className="mb-4">मंच नाटक, नुक्कड़ नाटक, माइम, एकल अभिनय और अन्य शैलियाँ।
            <div className="flex items-center mt-1">
                <a href="https://www.facebook.com/IITBombay.fourthwall/" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} size="lg" /></a>
                <a href="https://www.insti.app/org/fourthwall" target="_blank"><img src={instiiAppLogo} alt="Fourthwall" /></a>
            </div>
        </p>
        <h2 className="text-lg font-semibold mb-2 p-0">संगीत: Symphony</h2>
        <p className="mb-4">Symphony बड़े पैमाने पर संगीत कार्यक्रम आयोजित करता है और अंतर-कॉलेज प्रतियोगिताओं में IIT बॉम्बे का प्रतिनिधित्व करता है।
            <div className="flex items-center mt-1">
                <a href="https://www.instagram.com/symphonyiitb/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                <a href="https://www.youtube.com/channel/UC5UrEXoJe-xoVgkIlECTMcA" target="_blank"><FontAwesomeIcon icon={faYoutube} size="lg" /></a>
            </div>
        </p>
        <h2 className="text-lg font-semibold mb-2 p-0">नृत्य: In-Sync</h2>
        <p className="mb-4">वार्षिक InSync डांस शो (AIDS), हर जनवरी में आयोजित, संस्थान का सबसे बड़ा नृत्य प्रदर्शन है।
            <div className="flex items-center mt-1">
                <a href="https://www.instagram.com/insync_iitb/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                <a href="https://www.insti.app/org/insync" target="_blank"><img src={instiiAppLogo} alt="InSync" /></a>
            </div>
        </p>
        <h2 className="text-lg font-semibold mb-2 p-0">वाणी</h2>
        <p className="mb-4">वाणी IIT बॉम्बे का आधिकारिक भारतीय भाषाओं का क्लब है। वे विभिन्न भारतीय भाषाओं में मासिक ओपन माइक और IZHAAR नामक 3-दिवसीय प्रमुख आयोजन करते हैं।
            <div className="flex items-center mt-1">
                <a href="https://www.instagram.com/vaani_iitb/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                <a href="https://www.insti.app/org/vaani" target="_blank"><FontAwesomeIcon icon={faSquareArrowUpRight} size="lg" /></a>
            </div>
        </p>
        <h2 className="text-lg font-semibold mb-2 p-0">फोटोग्राफी और ललित कला - रंग और Pixels</h2>
        <p className="mb-4">रंग और Pixels IIT बॉम्बे का आधिकारिक फोटोग्राफी और ललित कला क्लब है — लेंस, ब्रश और कल्पना के माध्यम से दुनिया को कैद करने वाले दृश्य कहानीकारों का एक समुदाय।
            <div className="flex items-center mt-1">
                <a href="https://www.instagram.com/rang_iitb/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                <a href="https://www.instagram.com/pixels_iitb/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
            </div>
        </p>
        <h2 className="text-lg font-semibold mb-2 p-0">इंट्रा कॉलेज आयोजन</h2>
        <p className="mb-4">
            पूरे वर्ष आयोजित होने वाली इंट्रा-हॉस्टल जनरल चैम्पियनशिप (GC) प्रतियोगिताएँ सांस्कृतिक GC में आपके हॉस्टल की स्थिति निर्धारित करती हैं।
        </p>
        <h2 className="text-lg font-semibold mb-2 p-0">इंटर कॉलेज आयोजन</h2>
        <p className="mb-4">
            हर दिसंबर में, IIT बॉम्बे भारत का सबसे बड़ा सांस्कृतिक उत्सव Mood Indigo की मेजबानी करता है — 4 दिनों का महाउत्सव जिसमें देश भर के हजारों छात्र भाग लेते हैं।
        </p>
        <h2 className="text-lg font-semibold mb-2 p-0">परफॉर्मिंग आर्ट्स फेस्टिवल (PAF)</h2>
        <p className="mb-4">
            PAF को 'सभी सांस्कृतिक आयोजनों का बाप' भी कहा जाता है। तीन-चार हॉस्टल मिलकर एक दूसरे के खिलाफ प्रतिस्पर्धा करते हैं — स्क्रिप्ट से लेकर नृत्य, संगीत से नाटक तक सब कुछ छात्रों द्वारा संभाला जाता है।
        </p>
    </>);

    const sidebar = navData["Extra Curriculars"];

    return (
        <Page content={content} contentHi={contentHi} sidebar={sidebar} sideHeading="Extra Curriculars" />
    )
}

export default Culturals;
