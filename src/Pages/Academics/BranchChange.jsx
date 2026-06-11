import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";
import { Link } from 'react-router-dom';

const BranchChange = () => {
  const content = (
    <>
      <h1 className="text-4xl font-bold mb-5">Branch Change</h1>
      <p className="mb-4">
        <b>Update:</b> The option for branch change has been removed for the academic year 2024-25. Please refer to <a className="text-blue-600 hover:underline" style={{padding: '0'}} target="_blank" href="https://youtu.be/F8XGjwg41p0">this</a> video
        and <Link to="/academics/departments" className="text-blue-600 hover:underline" style={{ padding: '0' }}>this</Link> page to know more about the branches at IITB and make an informed choice.
      </p>
    </>
  );

  const contentHi = (
    <>
      <h1 className="text-4xl font-bold mb-5">विभाग परिवर्तन</h1>
      <p className="mb-4">
        <b>अपडेट:</b> शैक्षणिक वर्ष 2024-25 के लिए विभाग परिवर्तन का विकल्प हटा दिया गया है। IIT बॉम्बे के विभागों के बारे में अधिक जानने और एक सूचित विकल्प बनाने के लिए <a className="text-blue-600 hover:underline" style={{padding: '0'}} target="_blank" href="https://youtu.be/F8XGjwg41p0">यह</a> वीडियो और <Link to="/academics/departments" className="text-blue-600 hover:underline" style={{ padding: '0' }}>यह</Link> पृष्ठ देखें।
      </p>
    </>
  );

  const sidebar = navData["Academics"];

  return (
    <Page content={content} contentHi={contentHi} sidebar={sidebar} sideHeading="Academics" />
  );
}
export default BranchChange;
