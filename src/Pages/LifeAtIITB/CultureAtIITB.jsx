import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const CultureAtIITB = () => {
    const content = (<>CultureAtIITB</>);
    const sidebar = navData["Life at IITB"];

    return (
        <Page content={content} sidebar={sidebar}/>
    )
}

export default CultureAtIITB;