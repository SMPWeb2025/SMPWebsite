import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const IDDDP = () => {
  const content = (
    <>
      <h1 className="text-4xl font-bold mb-5">IDDDP</h1>
      <p className="mb-4">
        IIT Bombay offers an interesting opportunity under the Interdisciplinary Dual Degree Programme. Students interested in pursuing a Masters in a department different from their undergraduate parent department can avail the option of doing so towards the end of their 3rd year.
      </p>
      <p className="mb-4">
        All BS, Btech or Dual Degree students can convert from their 4-year undergraduate degree into a 5-year Undergraduate + Masters degree. IDDDP is offered in several departments and centres including Data Science (under CMInDS), Systems and Controls, Digital Health (under Koita Centre for Digital Health) and Management (under Shailesh J Mehta School of Management) to name a few. The CPI cutoffs for the coveted IDDDP programmes are usually high; this truly goes to show the importance of CPI in your institute life. For further details regarding the program, it’s eligibility criteria and application process, you can visit the following links -
      </p>
      <a className="text-blue-600 hover:underline" style={{padding: '0'}} target="_blank" href="https://www.iitb.ac.in/newacadhome/GuidelinesDDDprg.pdf">https://www.iitb.ac.in/newacadhome/GuidelinesDDDprg.pdf</a><br/>
      {/* <a className="text-blue-600 hover:underline" style={{padding: '0'}} target="_blank" href="https://sss-iitb.github.io/idddp/booklet2022.html">https://sss-iitb.github.io/idddp/booklet2022.html</a> <br/> */}
    </>
  )
  const contentHi = (
    <>
      <h1 className="text-4xl font-bold mb-5">IDDDP</h1>
      <p className="mb-4">
        IIT बॉम्बे अंतःविषय दोहरी डिग्री कार्यक्रम (IDDDP) के तहत एक रोचक अवसर प्रदान करता है। जो छात्र अपने मूल स्नातक विभाग से अलग किसी विभाग में मास्टर्स करना चाहते हैं, वे तीसरे वर्ष के अंत में इस विकल्प का लाभ उठा सकते हैं।
      </p>
      <p className="mb-4">
        सभी BS, BTech या Dual Degree छात्र अपनी 4-वर्षीय डिग्री को 5-वर्षीय स्नातक + मास्टर्स डिग्री में बदल सकते हैं। IDDDP कई विभागों में उपलब्ध है — Data Science (CMInDS), Systems and Controls, Digital Health (Koita Centre) और Management (Shailesh J Mehta School of Management) सहित। प्रतिष्ठित IDDDP कार्यक्रमों के लिए CPI कट-ऑफ सामान्यतः उच्च होते हैं। अधिक जानकारी के लिए:
      </p>
      <a className="text-blue-600 hover:underline" style={{padding: '0'}} target="_blank" href="https://acad.iitb.ac.in/files/IDDDP_Guidelines_2025.pdf">https://acad.iitb.ac.in/files/IDDDP_Guidelines_2025.pdf</a> <br/>
      <a className="text-blue-600 hover:underline" style={{padding: '0'}} target="_blank" href="https://acad.iitb.ac.in/files/IDDP%20Guidelines.pdf">https://acad.iitb.ac.in/files/IDDP%20Guidelines.pdf</a><br/>
    </>
  )
  const sidebar = navData["Academics"];

  return (
    <Page content={content} contentHi={contentHi} sidebar={sidebar} sideHeading="Academics" />
  )
}
export default IDDDP

