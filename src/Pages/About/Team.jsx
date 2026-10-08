import Page from "../../Components/BlogPage/Page";
import TeamLayout from "../../Components/TeamPage/TeamLayout";
import navData from "../sideNavData.json";
import { useTranslation } from "react-i18next";

const Team = () => {
    useTranslation("team");
    const content = (<>
        <TeamLayout />
    </>);
    const sidebar = navData["About Us"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="About Us"/>
    )
}

export default Team;
