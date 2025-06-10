import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const TechnicalAffairs = () => {
    const content = (<>TechnicalAffairs</>);
    const sidebar = navData["Extra Curriculars"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="Extra Curriculars" />
    )
}

export default TechnicalAffairs;