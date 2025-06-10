import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const Team = () => {
    const content = (<>Team</>);
    const sidebar = navData["About Us"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="About Us"/>
    )
}

export default Team;