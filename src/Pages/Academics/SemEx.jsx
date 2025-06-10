import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const SemEx = () => {
    const content = (<>SemEx</>);
    const sidebar = navData["Academics"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="Academics"/>
    )
}

export default SemEx;