import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const SupportAvailable = () => {
  const content = (
    <>
      <h1 className="text-4xl font-bold mb-5">Gender Cell</h1>
      <p className="mb-4">
        IIT Bombay’s Women's Cell has been in existence since 2002. With the enactment of the Institute's policy on sexual harassment, the Cell has been renamed the Gender Cell (GC). In recognition of the Institute’s belief that its employees and students have a right to be treated with dignity and respect, the Cell works proactively towards developing a safe and secure environment for employees, and to ensure that all students may gain their education without fear of prejudice, gender bias, hostility or sexual harassment.
      </p>
      <p className="mb-4">
        The IIT Bombay Gender Cell (GC) inquires into complaints of sexual harassment through its Internal Complaints Committee (GC-ICC). The GC and GC-ICC strive to work towards an egalitarian environment where men and women are afforded equitable treatment and equality of opportunity conducive to their professional growth.
      </p>
      <p className="mb-4">
        All prospective women students can 
        click <a className="text-blue-600 hover:underline" style={{padding: '0'}} target="_blank" href="https://www.iitb.ac.in/resources/gendercell">here</a> to 
        know more details.
      </p>
      <h1 className="text-4xl font-bold mb-5">SCST Cell</h1>
      <p className="mb-4">
        The SC/ST Students Cell addresses academic and non-academic issues and complaints received from students belonging to the SC and ST communities. The Institute strives to ensure an environment where all communities can participate in academic and research activities without any sort of caste-based discrimination, without any sorts of other discrimination. In order to maintain such an atmosphere, the SC/ST Students Cell is also responsible for sensitizing the campus community and freeing up people from caste-biases: either conscious or sub-conscious.The Cell aims to ensure that anti-discrimination laws in the context of caste are followed in letter and in spirit. The Institute is proud to implement reservation schemes as sanctioned by the Indian Constitution and as mandated by the Government.
      </p>
      <p className="mb-4">
        Students can 
        click <a className="text-blue-600 hover:underline" style={{padding: '0'}} target="_blank" href="https://www.scstcell.iitb.ac.in/">here</a> to 
        know more details.
      </p>
        <h1 className="text-4xl font-bold mb-5">PWD Cell</h1>
        <p className="mb-4">
        The PwD Student Cell at IIT Bombay is dedicated to promoting inclusion and accessibility for individuals with disabilities in all aspects of campus life. The Cell provides support and resources to PwD (Person with Disability) students to ensure equal access to education and opportunities. Students 
        click <a className="text-blue-600 hover:underline" style={{padding: '0'}} target="_blank" href="https://pwdcell.iitb.ac.in/">here</a> to 
        to know more about PwD Cell and its Contributors
      </p>
      <p className="mb-4">
        The Institute has appointed Liaison Officers who can be contacted in the event of any incident of discrimination. Particulars of Liaison Officers are 
        listed <a className="text-blue-600 hover:underline" style={{padding: '0'}} target="_blank" href="https://www.iitb.ac.in/about-iit-bombay/obc-and-sc-st-pwd-liaison-cell">here</a>.
      </p>
        <h1 className="text-4xl font-bold mb-5">IIT Bombay Hospital</h1>
      <p className="mb-4">
        Treatment and consultation services at IIT Bombay hospital are available for free for registered bonafide students. There are 14 medical officers​ available for consultation and 30 Visiting​ specialists​ available for referral in hospital.
      </p>
      <p className="mb-4">
        If any treatment is not available in the institute hospital, a referral to any of the empanelled hospitals in Mumbai can be made by medical officers and the expenses of treatment will then be reimbursed from the IIT Hospital.
      </p>
      <p className="mb-4">
        There is also a pharmacy at the hospital to get the medicines referred by a medical officer. Students can get medicines from here for free.
      </p>
      <p className="mb-4">
        Ambulance facility ​can be availed 24​X7 ​within the campus. For ambulance, you can call internal number 1110 (full: 022 2576 1110)
      </p>
      <p className="mb-4">
        You can find all the rules and regulation of IITB 
        Hospital <a className="text-blue-600 hover:underline" style={{padding: '0'}} target="_blank" href="https://www.iitb.ac.in/hospital/hospirules.html">here</a>. 
      </p>
       
      
    </>
  )
  const sidebar = navData["Life at IITB"];
  
  return (
    <Page content={content} sidebar={sidebar} sideHeading="Life at IITB" />
  )
}
export default SupportAvailable

