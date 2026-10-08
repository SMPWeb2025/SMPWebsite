import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const LetterToParents = () => {
    const { t } = useTranslation("lettertoparents");
    const content = (<>
        <h1 className="text-4xl font-bold mb-5">{t("text.0")}</h1>
        <p className="mb-4">{t("text.1")}</p>
        <p className="mb-4">{t("text.2")}</p>
        <p className="mb-4">{t("text.3")}</p>

        <h2 className="text-xl font-bold mb-2">{t("text.4")}</h2>
        <p className="mb-4">{t("text.5")}</p>
        <h2 className="text-xl font-bold mb-2">{t("text.6")}</h2>
        <p className="mb-4">{t("text.7")}</p>
        <p className="mb-4">{t("text.8")}</p>
        <p className="mb-4">{t("text.9")}</p>
        <p className="mb-4">{t("text.10")}</p>

        <h2 className="text-xl font-bold mb-2">{t("text.11")}</h2>
        <p className="mb-4">{t("text.12")}</p>
        <p className="mb-4">{t("text.13")}</p>
        <p className="mb-4">{t("text.14")}</p>
        <h2 className="text-xl font-bold mb-2">{t("text.15")}</h2>
        <p className="mb-4">{t("text.16")}<Link to="https://acad.iitb.ac.in/academics/scholarship" className="text-blue-600 hover:underline p-0!" target="_blank">https://acad.iitb.ac.in/academics/scholarship</Link>
        </p>
        <h2 className="text-xl font-bold mb-2">{t("text.17")}</h2>
        <p className="mb-4">{t("text.18")}</p>
        <h2 className="text-xl font-bold mb-2">{t("text.19")}</h2>
        <p className="mb-4">{t("text.20")}</p>
        <p className="mb-4">{t("text.21")}</p>

        <p className="mb-4">{t("text.22")}</p>
        <p className="mb-4">{t("text.23")}</p>
        <p className="mb-4">{t("text.24")}</p>

        <p className="mb-4">{t("text.25")}<br />{t("text.26")}</p>
    </>);

    const sidebar = navData["Incoming Students"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="Incoming Students" />
    )
}

export default LetterToParents;