import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const OurObjective = () => {
    const content = (<>OurObjective</>);
    const sidebar = navData["About Us"];

    return (
        <Page content={content} sidebar={sidebar}/>
    )
}

export default OurObjective;