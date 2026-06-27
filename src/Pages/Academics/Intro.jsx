import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const Intro = () => {
  const content = (
    <>
      <h1 className="text-4xl font-bold mb-5">Introduction</h1>
      <p className="mb-4">
        Message from the <b>General Secretary, Academic Affairs (UG):</b>
      </p>
      <p className="mb-4">
        Dear IITB 2026 Admits,
        <br/>
        On behalf of the Academic Council, I would like to extend a very warm welcome to all of you to IIT Bombay.
        <br/><br/>
        Academics is something that has always been central to your lives. It is what has brought you here, and it will continue to be the defining aspect of this journey as well as the journey beyond. At the same time, IIT Bombay will offer you much more than academics alone. Over the next few years, you will be exposed to new experiences, opportunities and decisions that will help you unearth your valueset and who you truly are as a person.
        <br/><br/>
        And at times, this journey may feel overwhelming. When that happens, having a few strong pillars to lean on makes all the difference. Finding people you resonate with, learning from those around you, discovering what excites you, and working towards the kind of person you aspire to be is what leads and sustains this journey.
        <br/><br/>
        Most importantly, remember that you are never alone in this journey. One of the greatest strengths of this institute is its people. Whether you need help with academics, guidance, or simply someone to talk to, your seniors, ISMP mentors and the Academic Council will always be willing to support you.
        <br/><br/>
        Congratulations on earning your place here. I hope you make the most of every opportunity, stay true to your values, and leave this institute not only with knowledge, but as a better version of yourself.
        <br/>
        Welcome to IIT Bombay, and I wish you all the very best for the journey ahead.
        <br/><br/>
        All the best, and may you have a memorable journey.
        <br/><br/>
        <b>To Be of Service | सेवा परमो धर्म: <br/>
        Siddhant Sumit Gupta <br/>
        General Secretary, Academic Affairs (UG)<br/>
        Indian Institute of Technology, Bombay<br/>
        Powai, Mumbai - 400076<br/></b>
        <b>Email : </b><a style={{padding: '0'}} href="mailto:gsecaaug@iitb.ac.in" className="text-blue-600 underline">gsecaaug@iitb.ac.in</a>
        <br/>
        <b>UGAC Website : </b><a style={{padding: '0'}} href="https://ugac-iitb.github.io/UGAC-IITB/" target="_blank" rel="noreferrer" className="text-blue-600 underline">ugac-iitb.github.io</a>
        <br/>
        <b>Instagram : </b><a style={{padding: '0'}} href="https://www.instagram.com/ugac.iitb/" target="_blank" rel="noreferrer" className="text-blue-600 underline">insta/ugac.iitb</a>
        <br/>
      </p>
    </>
  );

  const contentHi = (
    <>
      <h1 className="text-4xl font-bold mb-5">परिचय</h1>
      <p className="mb-4">
        <b>महासचिव, शैक्षणिक मामले (UG)</b> का संदेश:
      </p>
      <p className="mb-4">
        प्रिय IITB 2026 प्रवेशार्थियों,
        <br/>
        अकादमिक परिषद की ओर से, मैं आप सभी का IIT बॉम्बे में हार्दिक स्वागत करता हूँ।
        <br/><br/>
        शैक्षणिक जीवन हमेशा से आपके जीवन का एक केंद्रीय हिस्सा रहा है। यही आपको यहाँ तक लेकर आया है, और यही इस यात्रा तथा आगे की यात्रा का भी एक महत्वपूर्ण हिस्सा बना रहेगा। साथ ही, IIT बॉम्बे आपको केवल शैक्षणिक अनुभवों से कहीं अधिक प्रदान करेगा। आने वाले वर्षों में आप नए अनुभवों, अवसरों और निर्णयों से गुजरेंगे, जो आपको अपने मूल्यों और अपने वास्तविक व्यक्तित्व को समझने में मदद करेंगे।
        <br/><br/>
        कभी-कभी यह यात्रा भारी भी लग सकती है। ऐसे समय में सहारा देने वाले कुछ मजबूत स्तंभ बहुत मायने रखते हैं। ऐसे लोगों को ढूँढना जिनसे आप जुड़ाव महसूस करें, आसपास के लोगों से सीखना, यह समझना कि आपको क्या उत्साहित करता है, और उस व्यक्ति की ओर बढ़ना जैसा आप बनना चाहते हैं, यही इस यात्रा को दिशा देता है और उसे बनाए रखता है।
        <br/><br/>
        सबसे महत्वपूर्ण बात, याद रखें कि आप इस यात्रा में कभी अकेले नहीं हैं। इस संस्थान की सबसे बड़ी ताकत इसके लोग हैं। चाहे आपको शैक्षणिक मदद चाहिए हो, मार्गदर्शन चाहिए हो, या केवल किसी से बात करनी हो, आपके सीनियर्स, ISMP मेंटर्स और अकादमिक परिषद हमेशा आपका समर्थन करने के लिए तैयार रहेंगे।
        <br/><br/>
        यहाँ अपनी जगह बनाने के लिए आपको हार्दिक बधाई। मुझे आशा है कि आप हर अवसर का पूरा लाभ उठाएँगे, अपने मूल्यों के प्रति सच्चे रहेंगे, और इस संस्थान से केवल ज्ञान लेकर नहीं, बल्कि अपने बेहतर रूप में निकलेंगे।
        <br/>
        IIT बॉम्बे में आपका स्वागत है, और आगे की यात्रा के लिए मेरी ओर से आप सभी को ढेरों शुभकामनाएँ।
        <br/><br/>
        शुभकामनाएँ, और आशा है कि आपकी यात्रा यादगार रहे।
        <br/><br/>
        <b>To Be of Service | सेवा परमो धर्म: <br/>
        Siddhant Sumit Gupta <br/>
        महासचिव, शैक्षणिक मामले (UG)<br/>
        भारतीय प्रौद्योगिकी संस्थान, बॉम्बे<br/>
        पवई, मुंबई - 400076<br/></b>
        <b>ईमेल : </b><a style={{padding: '0'}} href="mailto:gsecaaug@iitb.ac.in" className="text-blue-600 underline">gsecaaug@iitb.ac.in</a>
        <br/>
        <b>UGAC वेबसाइट : </b><a style={{padding: '0'}} href="https://ugac-iitb.github.io/UGAC-IITB/" target="_blank" rel="noreferrer" className="text-blue-600 underline">ugac-iitb.github.io</a>
        <br/>
        <b>इंस्टाग्राम : </b><a style={{padding: '0'}} href="https://www.instagram.com/ugac.iitb/" target="_blank" rel="noreferrer" className="text-blue-600 underline">insta/ugac.iitb</a>
        <br/>
      </p>
    </>
  );

  const sidebar = navData["Academics"];

  return (
    <Page content={content} contentHi={contentHi} sidebar={sidebar} sideHeading="Academics" />
  );
}
export default Intro;
