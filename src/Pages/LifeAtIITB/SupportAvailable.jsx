import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const SupportAvailable = () => {
    const content = (<>SupportAvailable</>);
    const sidebar = navData["Life at IITB"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="Life At IITB" />
    )
}

export default SupportAvailable;