import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const Curriculum = () => {
    const content = (<><div>Curriculum</div></>);
    const sidebar = navData["Academics"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="Academics"/>
    )
}

export default Curriculum;