import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const ELP = () => {
    const content = (<>ELP</>);
    const sidebar = navData["About Us"];

    return (
        <Page content={content} sidebar={sidebar}/>
    )
}

export default ELP;