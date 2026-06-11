import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";
import { Link } from "react-router-dom";

const OurObjective = () => {
    const content = (<>
    <h1 className="text-4xl font-bold mb-5">About Us</h1>
    <p className="mb-8">
        Welcome! This website has been created by the Student Mentor Program to introduce incoming freshers to life at IIT Bombay. We encourage you to browse through the various sections and make an informed choice about your college and department. Though we've tried to cover most questions on this website, feel free to mail us at <Link to="mailto:smpcs2025@gmail.com" className="text-blue-600 hover:underline p-0!" target="_blank">smpcs2025@gmail.com</Link> for any queries you may have.
    </p>
    <h1 className="text-4xl font-bold mb-5">Our Objective</h1>
    <p className="mb-4">
        Student Mentor Programme (SMP), is a program within IIT Bombay, with the primary objective of enabling constructive and positive interaction, guidance and mentorship of junior students by senior students. We aim at providing a reliable and comprehensive support system to the student community to motivate them to excel in both academic and non-academic fields, and to make the most of their life at IIT Bombay.
    </p>
    </>);

    const contentHi = (<>
    <h1 className="text-4xl font-bold mb-5">हमारे बारे में</h1>
    <p className="mb-8">
        स्वागत है! यह वेबसाइट स्टूडेंट मेंटर प्रोग्राम द्वारा IIT बॉम्बे में आने वाले नए छात्रों को यहाँ के जीवन से परिचित कराने के लिए बनाई गई है। हम आपसे आग्रह करते हैं कि आप विभिन्न अनुभागों को देखें और अपने कॉलेज तथा विभाग के बारे में सूचित निर्णय लें। यदि आपके कोई प्रश्न हों, तो हमें <Link to="mailto:smpcs2025@gmail.com" className="text-blue-600 hover:underline p-0!" target="_blank">smpcs2025@gmail.com</Link> पर ईमेल करें।
    </p>
    <h1 className="text-4xl font-bold mb-5">हमारा उद्देश्य</h1>
    <p className="mb-4">
        स्टूडेंट मेंटर प्रोग्राम (SMP), IIT बॉम्बे के भीतर एक कार्यक्रम है, जिसका प्राथमिक उद्देश्य वरिष्ठ छात्रों द्वारा कनिष्ठ छात्रों के साथ रचनात्मक और सकारात्मक संवाद, मार्गदर्शन तथा परामर्श को सक्षम बनाना है। हम छात्र समुदाय को एक विश्वसनीय और व्यापक सहायता प्रणाली प्रदान करने का लक्ष्य रखते हैं, जो उन्हें शैक्षणिक और गैर-शैक्षणिक दोनों क्षेत्रों में उत्कृष्टता प्राप्त करने और IIT बॉम्बे में अपने जीवन का अधिकतम लाभ उठाने के लिए प्रेरित करे।
    </p>
    </>);

    const sidebar = navData["About Us"];

    return (
        <Page content={content} contentHi={contentHi} sidebar={sidebar} sideHeading="About Us"/>
    )
}

export default OurObjective;
