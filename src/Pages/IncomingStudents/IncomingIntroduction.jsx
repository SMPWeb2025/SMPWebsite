import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";
import { Link } from "react-router-dom";

const IncomingIntroduction = () => {
    const content = (<><h1 className="text-4xl font-bold mb-5">Introduction</h1>
    <p className="mb-4">
        Welcome to the website of Student Mentor Program, IIT Bombay!
    </p>
    <p className="mb-4">
        The main aim of this website is to acquaint you with the different facets of this college which you might be curious about. We hope this will help in making the difficult choice ahead of you and give you some insight into the culture at IIT Bombay from a student's perspective!
    </p>
    <p className="mb-4">
        We are the <b>Student Mentor Programme</b> (SMP), a programme within IIT Bombay, with the primary objective of enabling constructive and positive interaction, guidance and mentorship of junior students by senior students. We aim at providing a reliable and comprehensive support system to the student community to motivate them to excel in both academic and non-academic fields, and to make the most of their life at IIT Bombay.
    </p>
    <p className="mb-4">
        This website has a lot of carefully curated information that we believe is relevant to you. Take your time to go through the different sections, we've covered various aspects of <Link to="/life-at-iitb/introduction" className="text-blue-600 hover:underline p-0!">life at IITB</Link> - from academics to <Link to="/extra-curriculars/gymkhana" className="text-blue-600 hover:underline p-0!">extracurriculars</Link>.
    </p>
    <p className="mb-4">
        Before you begin exploring, we urge you to visit the official website of IIT Bombay which covers important official information for prospective students: <Link to="https://www.iitb.ac.in/admissions/why-iitb" className="text-blue-600 hover:underline p-0!" target="_blank">Why IITB?</Link>
    </p>
    <p className="mb-4">
        We hope this website gives you some clarity. In case of any doubts or concerns, feel free to email us on <Link to="mailto:smpcs2026@gmail.com" className="text-blue-600 hover:underline p-0!" target="_blank">smpcs2026@gmail.com</Link> and we will reply to you as soon as possible. Our team is always there to assist you and you can visit <Link to="/about/team" className="text-blue-600 hover:underline p-0!">this page</Link> to access our contact information.
    </p>
    <p className="mb-4">Happy exploring!</p>
    <p className="mb-4">Warm Regards</p>
    <p className="mb-4"><b>Ojas Joshi | Dev Arora</b><br /><b>Overall Coordinators, Student Mentor Program, IIT Bombay</b>
    </p>
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
    <iframe
        border="0"
        src="https://www.youtube.com/embed/1jYlB0xrbUw?si=h0sL-SnSkhe2Ae1P"
        title="IIT Bombay from the Air"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ position: 'absolute', top: 0, left: 0, width: '85%', height: '90%', border: '0' }}
    />
    </div>
    </>);

    const contentHi = (<><h1 className="text-4xl font-bold mb-5">परिचय</h1>
    <p className="mb-4">
        IIT बॉम्बे के स्टूडेंट मेंटर प्रोग्राम की वेबसाइट में आपका स्वागत है!
    </p>
    <p className="mb-4">
        इस वेबसाइट का मुख्य उद्देश्य आपको इस कॉलेज के विभिन्न पहलुओं से परिचित कराना है, जिनके बारे में आप जानना चाहते होंगे। हम आशा करते हैं कि यह आपके सामने आने वाले कठिन विकल्प को बनाने में सहायक होगी और एक छात्र के दृष्टिकोण से IIT बॉम्बे की संस्कृति की झलक देगी!
    </p>
    <p className="mb-4">
        हम <b>स्टूडेंट मेंटर प्रोग्राम</b> (SMP) हैं, IIT बॉम्बे के भीतर एक कार्यक्रम, जिसका प्राथमिक उद्देश्य वरिष्ठ छात्रों द्वारा कनिष्ठ छात्रों के साथ रचनात्मक और सकारात्मक संवाद, मार्गदर्शन तथा परामर्श को सक्षम बनाना है। हम छात्र समुदाय को एक विश्वसनीय और व्यापक सहायता प्रणाली प्रदान करने का लक्ष्य रखते हैं।
    </p>
    <p className="mb-4">
        इस वेबसाइट में ध्यानपूर्वक संकलित जानकारी है जो हमें लगती है आपके लिए प्रासंगिक है। विभिन्न अनुभागों को देखने के लिए समय लें — हमने <Link to="/life-at-iitb/introduction" className="text-blue-600 hover:underline p-0!">IIT बॉम्बे में जीवन</Link> के विभिन्न पहलुओं को शामिल किया है — शिक्षा से लेकर <Link to="/extra-curriculars/gymkhana" className="text-blue-600 hover:underline p-0!">पाठ्येतर गतिविधियों</Link> तक।
    </p>
    <p className="mb-4">
        अन्वेषण शुरू करने से पहले, हम आपसे आग्रह करते हैं कि IIT बॉम्बे की आधिकारिक वेबसाइट देखें: <Link to="https://www.iitb.ac.in/admissions/why-iitb" className="text-blue-600 hover:underline p-0!" target="_blank">IIT बॉम्बे क्यों?</Link>
    </p>
    <p className="mb-4">
        हम आशा करते हैं कि यह वेबसाइट आपको कुछ स्पष्टता देगी। किसी भी संदेह या चिंता के मामले में, हमें <Link to="mailto:smpcs2026@gmail.com" className="text-blue-600 hover:underline p-0!" target="_blank">smpcs2026@gmail.com</Link> पर ईमेल करें और हम जल्द से जल्द उत्तर देंगे। हमारी टीम हमेशा आपकी सहायता के लिए उपलब्ध है और हमारी संपर्क जानकारी के लिए <Link to="/about/team" className="text-blue-600 hover:underline p-0!">यह पृष्ठ</Link> देखें।
    </p>
    <p className="mb-4">खुशी से अन्वेषण करें!</p>
    <p className="mb-4">सादर,</p>
    <p className="mb-4"><b>Ojas Joshi | Dev Arora</b><br /><b>समग्र समन्वयक, स्टूडेंट मेंटर प्रोग्राम, IIT बॉम्बे</b>
    </p>
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
    <iframe
        border="0"
        src="https://www.youtube.com/embed/1jYlB0xrbUw?si=h0sL-SnSkhe2Ae1P"
        title="IIT बॉम्बे हवाई दृश्य"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ position: 'absolute', top: 0, left: 0, width: '85%', height: '90%', border: '0' }}
    />
    </div>
    </>);

    const sidebar = navData["Incoming Students"];

    return (
        <Page content={content} contentHi={contentHi} sidebar={sidebar} sideHeading="Incoming Students"/>
    )
}

export default IncomingIntroduction;
