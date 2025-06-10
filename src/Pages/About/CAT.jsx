import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const CAT = () => {
    const content = (<>CAT</>);
    const sidebar = navData["About Us"];

    return (
        <Page content={content} sidebar={sidebar}/>
    )
}

export default CAT;