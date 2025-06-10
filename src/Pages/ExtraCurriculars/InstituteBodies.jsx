import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const InstituteBodies = () => {
    const content = (<>InstituteBodies</>);
    const sidebar = navData["Extra Curriculars"];

    return (
        <Page content={content} sidebar={sidebar}/>
    )
}

export default InstituteBodies;