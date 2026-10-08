import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";
import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";

const FeeStructure = () => {
    const { t } = useTranslation("feestructure");
    const content = (<>
         <h1 className="text-4xl font-bold mb-5">{t("text.0")}</h1>
        <p className="mb-4">
            {t("text.1")}
            <br />
            <a target="_blank" rel = "noreferrer" className="text-blue-600 hover:underline" style={{padding: 0}} href="https://acad.iitb.ac.in/sites/default/files/Fee%20cirular_24.06.26.pdf">{t("text.2")}</a>
        </p>
    </>);

    const sidebar = navData["Incoming Students"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="Incoming Students"/>
    )
}

export default FeeStructure;