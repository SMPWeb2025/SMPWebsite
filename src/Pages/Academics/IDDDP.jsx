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
      <a className="text-blue-600 hover:underline" style={{padding: '0'}} target="_blank" href="https://www.iitb.ac.in/newacadhome/GuidelinesDDDprg.pdf">https://www.iitb.ac.in/newacadhome/GuidelinesDDDprg.pdf</a> <br/>
      <a className="text-blue-600 hover:underline" style={{padding: '0'}} target="_blank" href="https://www.iitb.ac.in/newacadhome/IDDDPProcessGuidelines.pdf">https://www.iitb.ac.in/newacadhome/IDDDPProcessGuidelines.pdf</a>
    </>
  )
  const sidebar = navData["Academics"];
  
  return (
    <Page content={content} sidebar={sidebar} sideHeading="Academics" />
  )
}
export default IDDDP

