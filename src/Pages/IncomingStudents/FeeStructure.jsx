import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";
import { Link } from "react-router-dom";

const FeeStructure = () => {
    const content = (<>
         <h1 className="text-4xl font-bold mb-5">
            Fee Structure
        </h1>
        {/*<p className="mb-4">
            Click <Link to="https://www.iitb.ac.in/newacadhome/FeesStructure.jsp" target="_blank" className="text-blue-600 hover:underline p-0!">here</Link> is the website with links to all relevant fee structures. Click <Link to="https://acad.iitb.ac.in/admissions/fees-structure" target="_blank" className="text-blue-600 hover:underline p-0!">here</Link> to access the fee structure of the incoming UG new entrants 2024 .
        </p> */}
        <p className="mb-4">The detailed fee structure for the Incoming batch of 2025 can be found <a target="_blank" className="text-blue-600 hover:underline" style={{padding: 0}} href="https://acad.iitb.ac.in/ug-new-entrants-fees">
                here
              </a></p>
    </>);
    const sidebar = navData["Incoming Students"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="Incoming Students"/>
    )
}

export default FeeStructure;