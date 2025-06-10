import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const BranchChange = () => {
    const content = (<>Branch Change</>);
    const sidebar = navData["Academics"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="Academics"/>
    )
}

export default BranchChange;