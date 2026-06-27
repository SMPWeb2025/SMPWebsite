import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const SupportAvailable = () => {
  const content = (
    <>
      <h1 className="text-4xl font-bold mb-5">Gender Cell</h1>
      <p className="mb-4">
        IIT Bombay's Women's Cell has been in existence since 2002. With the enactment of the Institute's policy on sexual harassment, the Cell has been renamed the Gender Cell (GC). The Cell works proactively towards developing a safe and secure environment for employees, and to ensure that all students may gain their education without fear of prejudice, gender bias, hostility or sexual harassment.
      </p>
      <p className="mb-4">
        All prospective women students can click <a className="text-blue-600 hover:underline" style={{padding: '0'}} target="_blank" href="https://www.iitb.ac.in/resources/gendercell">here</a> to know more details.
      </p>
      <h1 className="text-4xl font-bold mb-5">SCST Cell</h1>
      <p className="mb-4">
        The SC/ST Students Cell addresses academic and non-academic issues and complaints received from students belonging to the SC and ST communities. The Institute strives to ensure an environment where all communities can participate without any sort of caste-based discrimination. Students can click <a className="text-blue-600 hover:underline" style={{padding: '0'}} target="_blank" href="https://www.scstcell.iitb.ac.in/">here</a> to know more details.
      </p>
      <h1 className="text-4xl font-bold mb-5">PWD Cell</h1>
      <p className="mb-4">
        The PwD Student Cell at IIT Bombay is dedicated to promoting inclusion and accessibility for individuals with disabilities in all aspects of campus life. Students can click <a className="text-blue-600 hover:underline" style={{padding: '0'}} target="_blank" href="https://pwdcell.iitb.ac.in/">here</a> to know more about PwD Cell and its Contributors.
      </p>
      <h1 className="text-4xl font-bold mb-5">IIT Bombay Hospital</h1>
      <p className="mb-4">
        Treatment and consultation services at IIT Bombay hospital are available for free for registered bonafide students. There are 14 medical officers available for consultation and 30 Visiting specialists available for referral.
      </p>
      <p className="mb-4">
        Ambulance facility can be availed 24×7 within the campus. For ambulance, call internal number 1110 (full: 022 2576 1110).
      </p>
    </>
  );

  const contentHi = (
    <>
      <h1 className="text-4xl font-bold mb-5">जेंडर सेल</h1>
      <p className="mb-4">
        IIT बॉम्बे की महिला सेल 2002 से अस्तित्व में है। यौन उत्पीड़न पर संस्थान की नीति के लागू होने के साथ, इसका नाम बदलकर जेंडर सेल (GC) कर दिया गया। यह सेल कर्मचारियों के लिए एक सुरक्षित वातावरण विकसित करने और यह सुनिश्चित करने के लिए काम करता है कि सभी छात्र बिना किसी पूर्वाग्रह, लैंगिक भेदभाव या यौन उत्पीड़न के डर के अपनी शिक्षा प्राप्त कर सकें।
      </p>
      <p className="mb-4">
        सभी इच्छुक महिला छात्र अधिक जानकारी के लिए <a className="text-blue-600 hover:underline" style={{padding: '0'}} target="_blank" href="https://www.iitb.ac.in/resources/gendercell">यहाँ</a> क्लिक कर सकती हैं।
      </p>
      <h1 className="text-4xl font-bold mb-5">SC/ST सेल</h1>
      <p className="mb-4">
        SC/ST छात्र सेल SC और ST समुदायों के छात्रों की शैक्षणिक और गैर-शैक्षणिक शिकायतों को संबोधित करता है। संस्थान एक ऐसा वातावरण सुनिश्चित करने का प्रयास करता है जहाँ सभी समुदाय बिना किसी जातिगत भेदभाव के भाग ले सकें। छात्र अधिक जानकारी के लिए <a className="text-blue-600 hover:underline" style={{padding: '0'}} target="_blank" href="https://www.scstcell.iitb.ac.in/">यहाँ</a> क्लिक कर सकते हैं।
      </p>
      <h1 className="text-4xl font-bold mb-5">PwD सेल</h1>
      <p className="mb-4">
        IIT बॉम्बे का PwD छात्र सेल कैंपस जीवन के सभी पहलुओं में विकलांग व्यक्तियों के लिए समावेश और सुलभता को बढ़ावा देने के लिए समर्पित है। छात्र <a className="text-blue-600 hover:underline" style={{padding: '0'}} target="_blank" href="https://pwdcell.iitb.ac.in/">यहाँ</a> PwD सेल के बारे में अधिक जान सकते हैं।
      </p>
      <h1 className="text-4xl font-bold mb-5">IIT बॉम्बे अस्पताल</h1>
      <p className="mb-4">
        IIT बॉम्बे अस्पताल में पंजीकृत बोनाफाइड छात्रों के लिए उपचार और परामर्श सेवाएँ निःशुल्क उपलब्ध हैं। परामर्श के लिए 14 चिकित्सा अधिकारी और रेफरल के लिए 30 विजिटिंग विशेषज्ञ उपलब्ध हैं।
      </p>
      <p className="mb-4">
        एम्बुलेंस सेवा कैंपस के भीतर 24×7 उपलब्ध है। एम्बुलेंस के लिए आंतरिक नंबर 1110 (पूरा: 022 2576 1110) पर कॉल करें।
      </p>
    </>
  );

  const sidebar = navData["Life at IITB"];

  return (
    <Page content={content} contentHi={contentHi} sidebar={sidebar} sideHeading="Life at IITB" />
  );
}
export default SupportAvailable;
