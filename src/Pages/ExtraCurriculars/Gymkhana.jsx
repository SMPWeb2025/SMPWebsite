import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const Gymkhana = () => {
    const content = (<>Gymkhana</>);
    const sidebar = navData["Extra Curriculars"];

    return (
        <Page content={content} sidebar={sidebar}/>
    )
}

export default Gymkhana;