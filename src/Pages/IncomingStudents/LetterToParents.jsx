import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const LetterToParents = () => {
    const content = (<>LetterToParents</>);
    const sidebar = navData["Incoming Students"];

    return (
        <Page content={content} sidebar={sidebar}/>
    )
}

export default LetterToParents;