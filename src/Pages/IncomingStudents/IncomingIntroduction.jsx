import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const IncomingIntroduction = () => {
    const content = (<>IncomingIntroduction</>);
    const sidebar = navData["Incoming Students"];

    return (
        <Page content={content} sidebar={sidebar}/>
    )
}

export default IncomingIntroduction;