import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const Gymkhana = () => {
    const content = (<>
        <h1 className="text-4xl font-bold mb-5">Gymkhana</h1>
        <p className="mb-4">
            The student community at IITB is an active and thriving one. The development and management of all student activities comes under the purview of Students' Gymkhana. It is instrumental in identifying student issues and promoting discussion on them.
        </p>
        <h1 className="text-4xl font-bold mb-5">Sports</h1>
        <h2 className="text-xl font-bold mb-2">Introduction</h2>
        <p className="mb-4">
            Excellence in sports is a direct index of the stature and intellectual maturity of an institute. IIT Bombay has always aimed to set a precedent for other institutions by laying utmost emphasis on the multifaceted development of its students. With a deeply ingrained sports culture and the 'Right of Sports for all' as a cornerstone, the institute has channelized its resources towards a state-of-the-art sporting complex catering to over fourteen sports.
        </p>
        <h2 className="text-xl font-bold mb-2">Facilities</h2>
        <p className="mb-4">IITB offers its students sports facilities of an international level with fully-furnished courts and high-quality equipment.</p>
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
                <span className="border-t-1 border-gray-400 p-1">KHO KHO</span>
                <span className="border-t-1 border-gray-400 p-1">LAWN TENNIS</span>
                <span className="border-t-1 border-gray-400 p-1">SQUASH</span>
                <span className="border-t-1 border-gray-400 p-1">TABLE TENNIS</span>
                <span className="border-t-1 border-gray-400 p-1">VOLLEYBALL</span>
                <span className="border-t-1 border-gray-400 p-1">WEIGHTLIFTING</span>
                <span className="border-t-1 border-gray-400 p-1">ADVENTURE SPORTS</span>
                <span className="border-t-1 border-gray-400 p-1">DARK KNIGHT (CHESS)</span>
                <span className="border-t-1 border-b-1 border-gray-400 p-1">FITNESS CLUB</span>
                <span className="border-t-1 border-gray-400 p-1"></span>
            </div>
        </p>
        <h2 className="text-xl font-bold mb-2">Sports for everyone</h2>
        <p className="mb-4">
            The Sports Council organises a multitude of sports and fitness camps that vary in professionalism. Workshops on modern forms like Zumba, Mixed Martial Arts and AquaYoga and adventure activities like Himalayan treks, rafting, rock climbing and mountaineering are also conducted.
        </p>
        <h2 className="text-xl font-bold mb-2">Aavhan</h2>
        <p className="mb-4">
            Aavhan is a three day extravaganza that brought together participants to combine the thrill of competition with the joy of sports. The inaugural edition was held from 24th–26th May 2017.
        </p>
        <h2 className="text-xl font-bold mb-2">Inter IIT Championships</h2>
        <p className="mb-4">
            Touted as the 'Holy Grail' amongst all sports events, representing IITB at the Inter IIT Sports meet is the ultimate honour. The championship is held in December every year. To know more, visit <a href="https://gymkhana.iitb.ac.in/sports/" className="text-blue-600 hover:underline p-0! inline" target="_blank">https://gymkhana.iitb.ac.in/sports/</a>.
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
