import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const Accomodation = () => {
    const content = (<>Accomodation</>);
    const sidebar = navData["Incoming Students"];

    return (
        <Page content={content} sidebar={sidebar}/>
    )
}

export default Accomodation;