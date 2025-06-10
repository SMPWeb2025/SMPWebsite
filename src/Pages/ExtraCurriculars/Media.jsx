import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const Media = () => {
    const content = (<>Media</>);
    const sidebar = navData["Extra Curriculars"];

    return (
        <Page content={content} sidebar={sidebar}/>
    )
}

export default Media;