import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const Scholarships = () => {
    const content = (<>Scholarships</>);
    const sidebar = navData["Incoming Students"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="Incoming Students"/>
    )
}

export default Scholarships;