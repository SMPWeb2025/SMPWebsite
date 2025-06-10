import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const InAndAroundCampus = () => {
    const content = (<>InAndAroundCampus</>);
    const sidebar = navData["Life at IITB"];

    return (
        <Page content={content} sidebar={sidebar}/>
    )
}

export default InAndAroundCampus;