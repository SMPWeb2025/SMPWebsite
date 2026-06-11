import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const CTO = () => {
    const content = (<>
    <h1 className="text-4xl font-bold mb-5">Counseling, Training, and Outreach (CTO)</h1>
    <p className="mb-4">
        The Counseling, Training, and Outreach (CTO) Cabinet of IIT Bombay's Student Mentorship Programme (SMP) is dedicated to enhancing student well-being and development. It actively engages with the institute's counseling and wellness support structures, plans and executes comprehensive training of SMP mentor along with SMPCs and DAMP cabinet. It also curates the mentorship handbooks in collaboration with the SMP Team. The CTO Cabinet also develops initiatives to promote mental well-being awareness and maintains SMP's social media presence to effectively communicate its core values through its new content. These efforts ensure a supportive and well-informed environment for all students.
    </p>
    </>);

    const contentHi = (<>
    <h1 className="text-4xl font-bold mb-5">परामर्श, प्रशिक्षण और आउटरीच (CTO)</h1>
    <p className="mb-4">
        IIT बॉम्बे के स्टूडेंट मेंटरशिप प्रोग्राम (SMP) का परामर्श, प्रशिक्षण और आउटरीच (CTO) कैबिनेट छात्रों की भलाई और विकास को बढ़ाने के लिए समर्पित है। यह संस्थान की काउंसलिंग और वेलनेस सपोर्ट संरचनाओं के साथ सक्रिय रूप से जुड़ता है, SMP मेंटर्स के साथ-साथ SMPCs और DAMP कैबिनेट के व्यापक प्रशिक्षण की योजना बनाता और उसे क्रियान्वित करता है। यह SMP टीम के सहयोग से मेंटरशिप हैंडबुक भी तैयार करता है। CTO कैबिनेट मानसिक स्वास्थ्य जागरूकता को बढ़ावा देने की पहल भी विकसित करता है और अपनी नई सामग्री के माध्यम से SMP के मूल मूल्यों को प्रभावी ढंग से संप्रेषित करने के लिए SMP की सोशल मीडिया उपस्थिति बनाए रखता है। ये प्रयास सभी छात्रों के लिए एक सहायक और सुविज्ञ वातावरण सुनिश्चित करते हैं।
    </p>
    </>);

    const sidebar = navData["About Us"];

    return (
        <Page content={content} contentHi={contentHi} sidebar={sidebar} sideHeading="About Us"/>
    )
}

export default CTO;
