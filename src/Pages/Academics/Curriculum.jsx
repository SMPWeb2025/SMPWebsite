import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const Content = () => {
  const content = (
    <>
      <h1 className="text-4xl font-bold mb-5">Curriculum</h1>
      <p className="mb-4">
        The undergraduate curriculum at IIT Bombay is modelled after the curricula of the best universities in the world, and is truly one of the most exciting and versatile in India. It blends flexibility with academic rigor, allowing students to take up courses of their own choice, both within and outside their departments, apart from completing a certain minimum requirement of "core" courses.
        <br/><br/>
        Here at IITB, the academic year is divided into two semesters, each lasting about 16 weeks. Each semester, you have to complete a certain number of credits/courses. Based on your performance, you are assigned a grade at the end of each course. The weighted average of your grade points for all the courses in a particular semester gives your Semester Performance Index (SPI). The weighted average of these SPIs gives your Cumulative Performance Index (CPI).
        <br/><br/>
        The institute expects a minimum attendance requirement from the students (80%) for the courses. So make sure to be regular for classes!
        <br/><br/>
        The B.Tech students have the option of completing a certain number of these elective courses in their own department and earn a 'B.Tech. with Honors' degree.
        <br/><br/>
        The most exciting part of the system is the concept of Minors and IDDDP. Starting from third semester, you will be allowed to take up courses in any discipline through their Minor courses. You can earn a Minor in a specific discipline by doing a fixed number of extra courses in that discipline.
        <br/><br/>
        If you want to pursue a Master's level worth of education in another discipline, IIT Bombay also allows you to pursue the IDDDP option to get an MTech/MS degree in your desired department, with an extra year of thesis and course work post your BTech/BS degree.
      </p>
    </>
  );

  const contentHi = (
    <>
      <h1 className="text-4xl font-bold mb-5">पाठ्यक्रम</h1>
      <p className="mb-4">
        IIT बॉम्बे का स्नातक पाठ्यक्रम विश्व के सर्वश्रेष्ठ विश्वविद्यालयों के पाठ्यक्रमों पर आधारित है और यह वास्तव में भारत में सबसे रोमांचक और बहुमुखी में से एक है। यह लचीलेपन और शैक्षणिक कठोरता को मिलाता है, जिससे छात्र अपने विभाग के अंदर और बाहर दोनों से अपनी पसंद के कोर्स ले सकते हैं।
        <br/><br/>
        IIT बॉम्बे में शैक्षणिक वर्ष दो सेमेस्टर में विभाजित होता है, प्रत्येक लगभग 16 सप्ताह का। प्रत्येक सेमेस्टर में आपको एक निश्चित संख्या में क्रेडिट/कोर्स पूरे करने होते हैं। आपके प्रदर्शन के आधार पर प्रत्येक कोर्स के अंत में आपको ग्रेड दिया जाता है। सेमेस्टर के सभी कोर्सों के ग्रेड पॉइंट का भारांकित औसत आपका SPI (सेमेस्टर परफॉर्मेंस इंडेक्स) देता है। इन SPIs का भारांकित औसत आपका CPI (संचयी प्रदर्शन सूचकांक) देता है।
        <br/><br/>
        संस्थान छात्रों से कोर्सों में न्यूनतम उपस्थिति (80%) की अपेक्षा करता है। इसलिए कक्षाओं में नियमित रहें!
        <br/><br/>
        B.Tech छात्रों के पास अपने विभाग में कुछ वैकल्पिक कोर्स पूरे करके 'B.Tech. with Honors' की डिग्री अर्जित करने का विकल्प है।
        <br/><br/>
        इस प्रणाली का सबसे रोमांचक हिस्सा Minors और IDDDP की अवधारणा है। तीसरे सेमेस्टर से आप किसी भी विषय में Minor कोर्स ले सकते हैं और उस विषय में Minor की उपाधि अर्जित कर सकते हैं।
        <br/><br/>
        यदि आप किसी अन्य विभाग में मास्टर्स स्तर की शिक्षा प्राप्त करना चाहते हैं, तो IIT बॉम्बे IDDDP विकल्प भी प्रदान करता है जिससे आप BTech/BS के बाद एक अतिरिक्त वर्ष में MTech/MS की डिग्री प्राप्त कर सकते हैं।
      </p>
    </>
  );

  const sidebar = navData["Academics"];

  return (
    <Page content={content} contentHi={contentHi} sidebar={sidebar} sideHeading="Academics" />
  );
}
export default Content;
