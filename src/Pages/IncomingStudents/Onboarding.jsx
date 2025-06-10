import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const Onboarding = () => {
    const content = (<>Onboarding</>);
    const sidebar = navData["Incoming Students"];

    return (
        <Page content={content} sidebar={sidebar}/>
    )
}

export default Onboarding;