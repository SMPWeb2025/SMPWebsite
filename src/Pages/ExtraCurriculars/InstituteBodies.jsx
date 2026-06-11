import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const InstituteBodies = () => {
    const content = (<>
        <h1 className="text-4xl font-bold mb-5">Institute Bodies (IBs)</h1>
        <h2 className="text-xl font-bold mb-2">NSS — NSS IIT Bombay</h2>
        <p className="mb-4">
            NSS IIT Bombay gives you an opportunity of contributing to community service while the time you invest also contributes towards fulfilling your academic requirements. As part of NOCS01 and NOCS02 (Compulsory courses), you can opt for NSS, NSO or NCC.
        </p>
        <h2 className="text-xl font-bold mb-2">SARC</h2>
        <p className="mb-4">
            Student Alumni Relations Cell (SARC) is dedicated to strengthening the bond between students and alumni. SARC conducts several initiatives in its flagship event, Alumination, like Mock Interviews, Group Discussions, Speed Mentoring and Workshops.
        </p>
        <h2 className="text-xl font-bold mb-2">Saathi</h2>
        <p className="mb-4">
            Saathi ('companion') at IIT Bombay is an LGBTQ+ support and resource group. We are committed to providing a community for LGBTQ+ individuals on campus. We organize events all through the year such as workshops, awareness days, movie screenings and informal meetups.
        </p>
        <h2 className="text-xl font-bold mb-2">NCC</h2>
        <p className="mb-4">NCC IIT Bombay intends at developing patriotism, brotherhood and discipline in the cadets, thereby creating dynamic and visionary leaders of future India.</p>
        <h2 className="text-xl font-bold mb-2">E-Cell</h2>
        <p className="mb-4">
            E-Cell has been consistently working in enhancing the entrepreneurial ecosystem both inside and outside IIT Bombay. Their main initiatives include Eureka! and E-Summit. To know more visit <a href="https://www.instagram.com/iitbombay_ecell/" className="text-blue-600 hover:underline p-0!">here</a>.
        </p>
        <h2 className="text-xl font-bold mb-2">Mood Indigo</h2>
        <p className="mb-4">
            Held in December every year, with a footfall of over 1.4 Lakh — Mood Indigo is the largest college cultural festival in Asia! To know more visit <a href="https://instagram.com/iitbombay.moodi?igshid=ZDc4ODBmNjlmNQ==" className="text-blue-600 hover:underline p-0!">here</a>.
        </p>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
            <iframe border="0" src="https://www.youtube.com/embed/qmOxHKe6f6Y?si=02Ws-rJSdTh7c5ed" title="Mood Indigo Official Aftermovie" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '85%', height: '90%', border: '0' }} />
        </div>
        <h2 className="text-xl font-bold mb-2">Techfest</h2>
        <p className="mb-4">
            Techfest is Asia's largest annual science and technology festival. Started in 1998, attracting a footfall of more than 1,75,000 and with a reach of over 2500 national and 500 international colleges. Visit <a href="https://www.techfest.org" className="text-blue-600 hover:underline p-0!">www.techfest.org</a>.
        </p>
        <h2 className="text-xl font-bold mb-2">Abhyuday</h2>
        <p className="mb-4">
            Abhyuday is an initiative taken by the socially conscious students of IIT Bombay, looking to sensitize the youth regarding the problems plaguing our society. Their two-day Social Festival is the largest organized by any student body in the country. Visit <a href="https://www.facebook.com/abhyuday.iitb/" className="text-blue-600 hover:underline p-0!" target="_blank">here</a>.
        </p>
    </>);

    const contentHi = (<>
        <h1 className="text-4xl font-bold mb-5">संस्थान की संस्थाएँ</h1>
        <h2 className="text-xl font-bold mb-2">NSS — NSS IIT बॉम्बे</h2>
        <p className="mb-4">
            NSS IIT बॉम्बे आपको समाज सेवा में योगदान देने का अवसर देता है, साथ ही यह आपकी शैक्षणिक आवश्यकताओं को भी पूरा करता है। NOCS01 और NOCS02 (अनिवार्य कोर्स) के भाग के रूप में आप NSS, NSO या NCC का चयन कर सकते हैं।
        </p>
        <h2 className="text-xl font-bold mb-2">SARC</h2>
        <p className="mb-4">
            स्टूडेंट एलुमनी रिलेशंस सेल (SARC) छात्रों और पूर्व छात्रों के बीच के बंधन को मजबूत करने के लिए समर्पित है। SARC अपने प्रमुख आयोजन Alumination में मॉक इंटरव्यू, ग्रुप डिस्कशन, स्पीड मेंटरिंग और कार्यशालाएँ आयोजित करता है।
        </p>
        <h2 className="text-xl font-bold mb-2">साथी</h2>
        <p className="mb-4">
            साथी IIT बॉम्बे में एक LGBTQ+ सहायता और संसाधन समूह है। यह कैंपस पर LGBTQ+ व्यक्तियों के लिए एक समुदाय प्रदान करने के लिए प्रतिबद्ध है। वे कार्यशालाओं, जागरूकता दिवसों, फिल्म प्रदर्शनियों और अनौपचारिक बैठकों जैसे वर्ष भर कार्यक्रम आयोजित करते हैं।
        </p>
        <h2 className="text-xl font-bold mb-2">NCC</h2>
        <p className="mb-4">NCC IIT बॉम्बे कैडेटों में देशभक्ति, भाईचारा और अनुशासन विकसित करने का लक्ष्य रखता है, जिससे भविष्य के गतिशील और दूरदर्शी नेता तैयार हो सकें।</p>
        <h2 className="text-xl font-bold mb-2">E-Cell</h2>
        <p className="mb-4">
            E-Cell IIT बॉम्बे के अंदर और बाहर उद्यमशीलता पारिस्थितिकी तंत्र को बढ़ाने में निरंतर काम कर रहा है। उनकी प्रमुख पहलों में Eureka! और E-Summit शामिल हैं। अधिक जानने के लिए <a href="https://www.instagram.com/iitbombay_ecell/" className="text-blue-600 hover:underline p-0!">यहाँ</a> देखें।
        </p>
        <h2 className="text-xl font-bold mb-2">Mood Indigo</h2>
        <p className="mb-4">
            हर वर्ष दिसंबर में आयोजित, 1.4 लाख से अधिक लोगों की भागीदारी के साथ — Mood Indigo एशिया का सबसे बड़ा कॉलेज सांस्कृतिक उत्सव है! अधिक जानने के लिए <a href="https://instagram.com/iitbombay.moodi?igshid=ZDc4ODBmNjlmNQ==" className="text-blue-600 hover:underline p-0!">यहाँ</a> देखें।
        </p>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
            <iframe border="0" src="https://www.youtube.com/embed/qmOxHKe6f6Y?si=02Ws-rJSdTh7c5ed" title="Mood Indigo आधिकारिक आफ्टरमूवी" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '85%', height: '90%', border: '0' }} />
        </div>
        <h2 className="text-xl font-bold mb-2">Techfest</h2>
        <p className="mb-4">
            Techfest एशिया का सबसे बड़ा वार्षिक विज्ञान और प्रौद्योगिकी महोत्सव है। 1998 में शुरू हुआ, 1,75,000 से अधिक की भागीदारी और 2500 राष्ट्रीय व 500 अंतरराष्ट्रीय कॉलेजों तक पहुँच। देखें: <a href="https://www.techfest.org" className="text-blue-600 hover:underline p-0!">www.techfest.org</a>
        </p>
        <h2 className="text-xl font-bold mb-2">अभ्युदय</h2>
        <p className="mb-4">
            अभ्युदय IIT बॉम्बे के सामाजिक रूप से जागरूक छात्रों की एक पहल है, जो युवाओं को समाज की समस्याओं के प्रति संवेदनशील बनाने का प्रयास करती है। उनका दो दिवसीय सामाजिक महोत्सव देश में किसी भी छात्र संस्था द्वारा आयोजित सबसे बड़ा है। <a href="https://www.facebook.com/abhyuday.iitb/" className="text-blue-600 hover:underline p-0!" target="_blank">यहाँ</a> देखें।
        </p>
    </>);

    const sidebar = navData["Extra Curriculars"];

    return (
        <Page content={content} contentHi={contentHi} sidebar={sidebar} sideHeading="Extra Curriculars" />
    )
}

export default InstituteBodies;
