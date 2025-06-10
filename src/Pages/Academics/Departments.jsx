import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const Departments = () => {
    const content = (<>Departments</>);
    const sidebar = navData["Academics"];

    return (
        <Page content={content} sidebar={sidebar}/>
    )
}

export default Departments;