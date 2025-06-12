import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const Onboarding = () => {
    const content = (<>
    <h1 className="text-4xl font-bold mb-5">Onboarding</h1>
    <p className="mb-4">
        This page mentions the absolute essentials that you need to bring/or do once onboarded.
    </p>
    <h2 className="text-xl font-bold mb-2">
       Orientations 
    </h2>
    <p className="mb-4">
      All students would assemble in the Convocation Hall for an orientation programme aimed at introducing them to IIT Bombay. All institute functionaries would be present there to greet you and welcome you to the campus!  
    </p>
    <h2 className="text-xl font-bold mb-2">
        Registration
    </h2>
    <p className="mb-4">
        On day 1, students are supposed to bring documents specified on their admission letter. Once the document verification is done on the first day, registration for courses is done in different slots. Students are segregated according to their department and the process of online registration is carried out.
    </p>
    <h2 className="text-xl font-bold mb-2">Fee Payment</h2>
    <p className="mb-4">As far as fee payment is concerned, incoming students are advised to open a bank account in either SBI or Canara Bank, Powai. The fee can be paid online using net banking.</p>
    <h2 className="text-xl font-bold mb-2">Shifting to your room</h2>
    <p className="mb-4">
        There would be a notice board with some lists to inform you where you need to shift with your roommate’s name mentioned. Usually, female students are allotted Hostel 16C and male students are allotted Hostel 16A, 16B and hostel 1. However, this might be subject to change and you will be informed of exact details upon arrival.
    </p>
    <h2 className="text-xl font-bold mb-2">IIT Bombay Hospital</h2>
    <p className="mb-4">
        All students are entitled to free treatment at the IITB Hospital. The students are first supposed to submit a few documents containing their previous medical record and their vaccination record. If one hasn't been administered with the specified vaccinations, the institute has regular vaccination drives where one can get this done. On submission of the documents, students will get a file which they can use whenever they need to access treatment at the Hospital.
    </p>
    <h2 className="text-xl font-bold mb-2">
        Meeting Your Institute Student Mentor
    </h2>
    <p className="mb-4">
        helpful mechanism of respected and accomplished senior students in their fourth or fifth-year of study guiding the first-year students through their formative years here. Together they constitute the ISMP (Institute Student Mentor Program) team and the mentors help the first-year students make a smooth transition from life at home to life at the Institute. It is highly advised for you to meet the mentor assigned to you when you arrive on campus for the orientation. They will help clear all queries that you and your parents might have and would be there to assist you throughout your first-year!
    </p>
    <h2 className="text-xl font-bold mb-2">
        Cell Phone Connections
    </h2>
    <p className="mb-4">
       There will be multiple temporary stalls inside the institute for the first few days of the session, otherwise, Airtel and Vodafone connections are easily available at the Main Gate. Reliance has a store in Hiranandani as well. Vodafone has a store near the Delphi Building. For more information on recharge etc, please visit in and around campus. 
    </p>
    <h2 className="text-xl font-bold mb-2">
        Exploring the Institute
    </h2>
    <p className="mb-4">
        There are many places to go around the insti, including the Boathouse, Sameer Hill, Lakeside, etc. We don’t want to give away too many of these here for curiosity’s sake. We hope you explore the beautiful campus yourself or ask your mentor to help with a tour! :)
    </p>
    </>);
    const sidebar = navData["Incoming Students"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="Incoming Students"/>
    )
}

export default Onboarding;