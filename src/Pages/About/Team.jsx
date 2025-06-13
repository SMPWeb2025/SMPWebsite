import Page from "../../Components/BlogPage/Page";
import TeamLayout from "../../Components/TeamPage/TeamLayout";
import navData from "../sideNavData.json";

const Team = () => {
    const content = (<>
        <TeamLayout />
    </>);
    const sidebar = navData["About Us"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="About Us"/>
    )
}

export default Team;