import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const OurObjective = () => {
    const { t } = useTranslation("ourobjective");
    const content = (<>
    <h1 className="text-4xl font-bold mb-5">{t("about.heading")}</h1>
    <p className="mb-8">
        {t("about.introBeforeEmail")}{" "}<Link to="mailto:smpcs2026@gmail.com" className="text-blue-600 hover:underline p-0!" target="_blank">smpcs2026@gmail.com</Link>{" "}{t("about.introAfterEmail")}
    </p>
    <h1 className="text-4xl font-bold mb-5">{t("objective.heading")}</h1>
    <p className="mb-4">
        {t("objective.body")}
    </p>

    <p className="mb-2">{t("signoff.greeting")}</p>
    <p className="mb-4"><b>{t("signoff.names")}</b><br /><b>{t("signoff.role")}</b></p>
    </>);

    const sidebar = navData["About Us"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="About Us"/>
    )
}

export default OurObjective;
