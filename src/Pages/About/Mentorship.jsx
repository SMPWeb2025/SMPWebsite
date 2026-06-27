import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const Mentorship = () => {
    const content = (<>
    <h1 className="text-4xl font-bold mb-5">Mentorship</h1>
    <p className="mb-4">
        Mentoring is a particular form of relationship designed to provide personal and professional support to an individual. The mentor is more experienced than the mentee and makes use of that experience in a facilitative way to support the development of the mentee. The mentoring relationship provides a developmental opportunity for both parties and is of mutual benefit. In a nutshell, a student mentor's role may be perceived to be facilitative, supportive and developmental for the student community in general. The SMP has two mentorship-related wings: ISMP and DAMP.
    </p>
    <h2 className="text-xl font-bold mb-2">Institute Student Mentorship Program(ISMP)</h2>
    <p className="mb-4">
The Institute Student Mentorship Program (ISMP) aims at developing a smooth transition to campus life for every new entrant to an academic program at IIT Bombay. It is an initiative of the SMP within the student community which primarily deals with mentorship for the first-year undergraduate students. Selected senior students, called Institute Student Mentors (ISMs), are responsible for helping a group of first-year students adjust to the new environment. They subsequently monitor their progress throughout the year. Mentors help solve students' academic and personal problems while on campus, and guide them through the first year of college life away from home.
    </p>
    <h2 className="text-xl font-bold mb-2">
        Department Academic Mentorship Program(DAMP)
    </h2>
    <p className="mb-4">
        DAMP or Department Academic Mentorship Program, is a student-run support program primarily for students at the sophomores level and above. Apart from mentorship for sophomores, the DAMP program hosts many sessions and has compiled various resources to guide you through all your years at the institute. All of this is handled by the DAMP Coordinators at the department level and by the Academic and DAMP Cabinet Heads at the Institute level.
    </p>
    </>);

    const contentHi = (<>
    <h1 className="text-4xl font-bold mb-5">मार्गदर्शन</h1>
    <p className="mb-4">
        मेंटरिंग एक विशेष प्रकार का संबंध है जिसे किसी व्यक्ति को व्यक्तिगत और पेशेवर सहायता प्रदान करने के लिए डिज़ाइन किया गया है। मेंटर, मेंटी की तुलना में अधिक अनुभवी होता है और उस अनुभव का उपयोग मेंटी के विकास में सहायक तरीके से करता है। मेंटरिंग संबंध दोनों पक्षों के लिए विकास का अवसर प्रदान करता है। संक्षेप में, एक छात्र मेंटर की भूमिका सामान्य रूप से छात्र समुदाय के लिए सहायक और विकासशील मानी जा सकती है। SMP के दो मेंटरशिप-संबंधित विभाग हैं: ISMP और DAMP।
    </p>
    <h2 className="text-xl font-bold mb-2">संस्थान छात्र मेंटरशिप प्रोग्राम (ISMP)</h2>
    <p className="mb-4">
        इंस्टीट्यूट स्टूडेंट मेंटरशिप प्रोग्राम (ISMP) का लक्ष्य IIT बॉम्बे में किसी शैक्षणिक कार्यक्रम में नए प्रवेश पाने वाले प्रत्येक छात्र के लिए कैंपस जीवन में सहज संक्रमण विकसित करना है। यह SMP की एक पहल है जो मुख्य रूप से प्रथम वर्ष के स्नातक छात्रों के लिए मेंटरशिप का काम करती है। चुने हुए वरिष्ठ छात्र, जिन्हें इंस्टीट्यूट स्टूडेंट मेंटर्स (ISMs) कहा जाता है, प्रथम वर्ष के छात्रों के एक समूह को नए वातावरण में ढलने में मदद करने के लिए जिम्मेदार होते हैं। वे पूरे वर्ष उनकी प्रगति की निगरानी करते हैं। मेंटर्स कैंपस में छात्रों की शैक्षणिक और व्यक्तिगत समस्याओं को सुलझाने में मदद करते हैं और कॉलेज जीवन के पहले वर्ष में उनका मार्गदर्शन करते हैं।
    </p>
    <h2 className="text-xl font-bold mb-2">
        विभागीय शैक्षणिक मेंटरशिप प्रोग्राम (DAMP)
    </h2>
    <p className="mb-4">
        DAMP या डिपार्टमेंट एकेडमिक मेंटरशिप प्रोग्राम, मुख्य रूप से द्वितीय वर्ष और उससे ऊपर के छात्रों के लिए एक छात्र-संचालित सहायता कार्यक्रम है। सोफोमोर छात्रों के लिए मेंटरशिप के अलावा, DAMP प्रोग्राम कई सत्र आयोजित करता है और संस्थान में आपके सभी वर्षों के दौरान मार्गदर्शन के लिए विभिन्न संसाधन संकलित किए हैं। यह सब विभाग स्तर पर DAMP कोऑर्डिनेटर्स द्वारा और संस्थान स्तर पर एकेडमिक और DAMP कैबिनेट प्रमुखों द्वारा संभाला जाता है।
    </p>
    </>);

    const sidebar = navData["About Us"];

    return (
        <Page content={content} contentHi={contentHi} sidebar={sidebar} sideHeading="About Us"/>
    )
}

export default Mentorship;
