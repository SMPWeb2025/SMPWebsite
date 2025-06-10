import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const ISMP = () => {
    const content = (<>ISMP</>);
    const sidebar = navData["About Us"];

    return (
        <Page content={content} sidebar={sidebar}/>
    )
}

export default ISMP;