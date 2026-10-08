import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";
import { useTranslation } from "react-i18next";

const Onboarding = () => {
    const { t } = useTranslation("onboarding");
    const content = (<>
    <h1 className="text-4xl font-bold mb-5">{t("text.0")}</h1>
    <p className="mb-4">{t("text.1")}</p>
    <h2 className="text-xl font-bold mb-2">{t("text.2")}</h2>
    <p className="mb-4">{t("text.3")}</p>
    <h2 className="text-xl font-bold mb-2">{t("text.4")}</h2>
    <p className="mb-4">{t("text.5")}</p>
    <h2 className="text-xl font-bold mb-2">{t("text.6")}</h2>
    <p className="mb-4">{t("text.7")}</p>
    <h2 className="text-xl font-bold mb-2">{t("text.8")}</h2>
    <p className="mb-4">{t("text.9")}</p>
    <h2 className="text-xl font-bold mb-2">{t("text.10")}</h2>
    <p className="mb-4">{t("text.11")}</p>
    <h2 className="text-xl font-bold mb-2">{t("text.12")}</h2>
    <p className="mb-4">{t("text.13")}</p>
    <h2 className="text-xl font-bold mb-2">{t("text.14")}</h2>
    <p className="mb-4">{t("text.15")}</p>
    <h2 className="text-xl font-bold mb-2">{t("text.16")}</h2>
    <p className="mb-4">{t("text.17")}</p>
    </>);

    const sidebar = navData["Incoming Students"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="Incoming Students"/>
    )
}

export default Onboarding;
