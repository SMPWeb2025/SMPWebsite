import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";
import { useTranslation } from "react-i18next";

const Media = () => {
    const { t } = useTranslation("media");
    const content = (<>
        <h1 className="text-4xl font-bold mb-5">{t("title")}</h1>
        <p className="mb-4">
            {t("introduction.body")}
        </p>
        <h2 className="text-xl font-bold mb-2">{t("newsletters.heading")}</h2>
        <p className="mb-4">
            {t("newsletters.body")}
        </p>
        <h2 className="text-xl font-bold mb-2">{t("insight.heading")}</h2>
        <p className="mb-4">
            {t("insight.body")}
        </p>
        <h2 className="text-xl font-bold mb-2">{t("broadcasting.heading")}</h2>
        <p className="mb-4">
            {t("broadcasting.body")}
        </p>
        <h2 className="text-xl font-bold mb-2">{t("enspace.heading")}</h2>
        <p className="mb-4">
            {t("enspace.bodyBeforeLink")}{" "}<a href="https://ecell.in/enspace" className="text-blue-600 hover:underline p-0!">{t("enspace.linkText")}</a>{t("enspace.bodyAfterLink")}
        </p>
    </>);

    const sidebar = navData["Extra Curriculars"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="Extra Curriculars" />
    )
}

export default Media;
