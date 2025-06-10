import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const Culturals = () => {
    const content = (<>Culturals</>);
    const sidebar = navData["Extra Curriculars"];

    return (
        <Page content={content} sidebar={sidebar}/>
    )
}

export default Culturals;