import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const IDDP = () => {
    const content = (<>IDDP</>);
    const sidebar = navData["Academics"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="Academics"/>
    )
}

export default IDDP;