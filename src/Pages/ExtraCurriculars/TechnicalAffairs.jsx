import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const TechnicalAffairs = () => {
    const content = (<>
        <h1 className="text-4xl font-bold mb-5">Technical Affairs</h1>
        <p className="mb-4">
            Broken that toy to see how that spring worked? Unscrewed that FM receiver trying to make sense of how it works? Remember the sense of elation reading 'Hello World' on the screen? You are not alone. From circuit benders to stargazers, we have them all!
        </p>
        <p className="mb-4">
            Technical Activities (or Tech) will provide you with an opportunity to put the theoretical knowledge gained in classrooms into practical use. Tech@IITB will enthrall and excite, and enthuse you to build, to create something of your own.
        </p>
        <h2 className="text-xl font-bold mb-2">The Tech Scene</h2>
        <p className="mb-4">
            The current scene at the institute provides a world of opportunity to excel in a wide range of activities, ranging from funded personal projects to collaborative projects with premier institutions like ISRO.
        </p>
        <p className="mb-4">
            Events to look out for in freshman year:
            <ul className="ml-6 list-disc">
                <li className="mb-2"><b>XLR8:</b> Build a Bluetooth-operated robotic car for a competition held in late August.</li>
                <li className="mb-2"><b>Scratch Day:</b> Dive head first into programming with a fun game-building competition.</li>
                <li className="mb-2"><b>Mathathon:</b> Show off your mathematical prowess in this marathon math problem-solving contest.</li>
                <li className="mb-2"><b>Bazinga:</b> Answer interesting conceptual physics and math questions in a team-based quiz.</li>
                <li className="mb-2"><b>Web Designing:</b> Unleash your creativity and coding skills to design awesome websites.</li>
                <li className="mb-2"><b>Tech Weekend:</b> Heavy tech action with workshops and competitions over a weekend in February.</li>
                <li className="mb-2"><b>Summer of Science:</b> Explore fields you've always wanted to learn with guided mentorship over summer.</li>
            </ul>
        </p>
        <h2 className="text-xl font-bold mb-2">Technical Clubs</h2>
        <p className="mb-4">The institute has several technical clubs including: <b>Aeromodelling Club, Electronics and Robotics Club, Energy Club, Krittika (Astronomy Club), Math & Physics Club, WnCC (Web and Coding Club), Tinkerers' Lab, IIT Bombay Racing, UMIC, Advitiy (Student Satellite), IIT Mars Rover Team,</b> and many more.</p>
    </>);

    const contentHi = (<>
        <h1 className="text-4xl font-bold mb-5">तकनीकी मामले</h1>
        <p className="mb-4">
            क्या आपने कभी किसी खिलौने को तोड़कर देखा कि वह स्प्रिंग कैसे काम करती है? FM रिसीवर को खोलकर देखा? स्क्रीन पर 'Hello World' पढ़कर प्रसन्नता हुई? आप अकेले नहीं हैं — सर्किट तोड़ने वालों से लेकर तारों को देखने वालों तक, सभी यहाँ हैं!
        </p>
        <p className="mb-4">
            तकनीकी गतिविधियाँ (Tech) आपको कक्षाओं में प्राप्त सैद्धांतिक ज्ञान को व्यावहारिक उपयोग में लगाने का अवसर देंगी। Tech@IITB आपको कुछ अपना बनाने के लिए प्रेरित और उत्साहित करेगा।
        </p>
        <h2 className="text-xl font-bold mb-2">तकनीकी दृश्य</h2>
        <p className="mb-4">
            संस्थान में व्यक्तिगत वित्त पोषित परियोजनाओं से लेकर ISRO जैसे प्रतिष्ठित संस्थानों के साथ सहयोगी परियोजनाओं तक, उत्कृष्टता के अनेक अवसर हैं।
        </p>
        <p className="mb-4">
            पहले वर्ष में देखने लायक आयोजन:
            <ul className="ml-6 list-disc">
                <li className="mb-2"><b>XLR8:</b> अगस्त के अंत में प्रतियोगिता के लिए ब्लूटूथ-संचालित रोबोटिक कार बनाएँ।</li>
                <li className="mb-2"><b>Scratch Day:</b> प्रोग्रामिंग की मजेदार गेम-बिल्डिंग प्रतियोगिता।</li>
                <li className="mb-2"><b>Mathathon:</b> गणित प्रेमियों के लिए मैराथन गणित प्रतियोगिता।</li>
                <li className="mb-2"><b>Bazinga:</b> टीम आधारित भौतिकी और गणित की वैचारिक प्रश्नोत्तरी।</li>
                <li className="mb-2"><b>Web Designing:</b> अपनी रचनात्मकता और कोडिंग कौशल का प्रदर्शन करें।</li>
                <li className="mb-2"><b>Tech Weekend:</b> फरवरी में एक सप्ताहांत में कार्यशालाएँ और प्रतियोगिताएँ।</li>
                <li className="mb-2"><b>Summer of Science:</b> गर्मियों में मेंटर के मार्गदर्शन में विज्ञान के क्षेत्रों को खोजें।</li>
            </ul>
        </p>
        <h2 className="text-xl font-bold mb-2">तकनीकी क्लब</h2>
        <p className="mb-4">संस्थान में अनेक तकनीकी क्लब हैं जिनमें शामिल हैं: <b>एयरोमॉडलिंग क्लब, इलेक्ट्रॉनिक्स और रोबोटिक्स क्लब, एनर्जी क्लब, कृत्तिका (खगोल विज्ञान क्लब), गणित और भौतिकी क्लब, WnCC (वेब और कोडिंग क्लब), टिंकरर्स लैब, IIT बॉम्बे रेसिंग, UMIC, Advitiy (छात्र उपग्रह), IIT मार्स रोवर टीम,</b> और भी बहुत कुछ।</p>
    </>);

    const sidebar = navData["Extra Curriculars"];

    return (
        <Page content={content} contentHi={contentHi} sidebar={sidebar} sideHeading="Extra Curriculars" />
    )
}

export default TechnicalAffairs;
