import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const CPI_Calculation = () => {
    const content = (<>CPI_Calculation</>);
    const sidebar = navData["Academics"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="Academics"/>
    )
}

export default CPI_Calculation;