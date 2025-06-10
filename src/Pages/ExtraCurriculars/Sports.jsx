import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const Sports = () => {
    const content = (<>Sports</>);
    const sidebar = navData["Extra Curriculars"];

    return (
        <Page content={content} sidebar={sidebar}/>
    )
}

export default Sports;