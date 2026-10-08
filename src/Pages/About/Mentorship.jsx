import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";
import { useTranslation } from "react-i18next";

const Mentorship = () => {
    const { t } = useTranslation("mentorship");
    const content = (<>
    <h1 className="text-4xl font-bold mb-5">{t("title")}</h1>
    <p className="mb-4">
        {t("introduction.body")}
    </p>
    <h2 className="text-xl font-bold mb-2">{t("ismp.heading")}</h2>
    <p className="mb-4">
        {t("ismp.body")}
    </p>
    <h2 className="text-xl font-bold mb-2">
        {t("damp.heading")}
    </h2>
    <p className="mb-4">
        {t("damp.body")}
    </p>
    </>);

    const sidebar = navData["About Us"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="About Us"/>
    )
}

export default Mentorship;
