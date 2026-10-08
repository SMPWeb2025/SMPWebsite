import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import './ThingsToBring.css'; 
const ThingsToBring = () => {
    const { t } = useTranslation("thingstobring");
    const content = (<>
        <h1 className="text-4xl font-bold mb-5">{t("text.0")}</h1>
        <p className="mb-4">{t("text.1")}<ol className="list-decimal ml-6 mt-2 mb-2">
                <li>{t("text.2")}</li>
                <li>{t("text.3")}</li>
            </ol>
            <br/>{t("text.4")}<br/>{t("text.5")}<ol style={{listStyleType: 'lower-alpha'}} className="ml-6 mt-2 mb-2">
                <li><Trans i18nKey="text.redDescription" t={t} components={{ red: <span className="red" />, bold: <b /> }} /></li>
                <li><span className="blue">{t("text.10")}</span> - {t("text.11")}  </li>
                <li><span className="green">{t("text.12")}</span> - {t("text.13")}</li>
            </ol>{t("text.14")}</p>
        <h2 className="text-xl font-bold mb-2">{t("text.15")}</h2>
        <p className="mb-4">{t("text.16")}<ol className="list-decimal ml-6 mt-2 mb-2">
                <li className="mt-3"><Trans i18nKey="text.clothingRaingear" t={t} components={{ redBold: <span className="red b" />, blue: <span className="blue" /> }} /><br/><Trans i18nKey="text.umbrellas" t={t} components={{ red: <span className="red" /> }} /></li>
                <li className="mt-3"><span className="red b">{t("text.24")}</span>: <Trans i18nKey="text.footwear" t={t} components={{ red: <span className="red" />, blue: <span className="blue" /> }} /></li>
                <li className="mt-3"><span className="blue b">{t("text.34")}</span> :{t("text.books")}</li>
                <li className="mt-3"><span className="green b">{t("text.36")}</span>: <Trans i18nKey="text.clotheslines" t={t} components={{ red: <span className="red" /> }} /></li>
                <li className="mt-3"><Trans i18nKey="text.bedding" t={t} components={{ redBold: <span className="red b" />, greenBold: <span className="green b" /> }} /></li>
                <li className="mt-3"><span className="green b">{t("text.46")}</span>: {t("text.47")}</li>
                <li className="mt-3"><span className="red b">{t("text.48")}</span> <span className="b">{t("text.49")}</span>: {t("text.50")}</li>
                <li className="mt-3"><Trans i18nKey="text.antiInsect" t={t} components={{ greenBold: <span className="green b" />, redBold: <span className="red b" />, blueBold: <span className="blue b" />, allOut: <>All Out</>, odomos: <>Odomos</> }} /></li>
                <li className="mt-3"><span className="blue b">{t("text.56")}</span>: {t("text.57")}</li>
                <li className="mt-3"><span className="green b">{t("text.58")}</span>: {t("text.59")}</li>
                <li className="mt-3"><span className="b">{t("text.60")}</span>: <Trans i18nKey="text.miscellaneous" t={t} components={{ redBold: <span className="red b" /> }} /></li>
            </ol>
            <br/>{t("text.64")}<br/><br/>{t("text.65")}</p>
        <h1 className="text-4xl font-bold mb-5">{t("text.66")}</h1>
        <p className="mb-4">{t("text.67")}</p>
        <h2 className="text-xl font-bold mb-2">{t("text.68")}</h2>
        <p className="mb-4">{t("text.69")}</p>

        <h2 className="text-xl font-bold mb-2">{t("text.70")}</h2>
        <p className="mb-4">{t("text.71")}</p>

        <h2 className="text-xl font-bold mb-2">{t("text.72")}</h2>
        <p className="mb-4">{t("text.73")}</p>

        <h2 className="text-xl font-bold mb-2">{t("text.74")}</h2>
        <p className="mb-4">{t("text.75")}</p>

        <h2 className="text-xl font-bold mb-2">{t("text.76")}</h2>
        <p className="mb-4"><Trans i18nKey="text.cellPhoneConnections" t={t} components={{ link: <Link className="text-blue-600 hover:underline p-0!" to='/life-at-iitb/in-and-around-the-campus' /> }} /></p>

        <h2 className="text-xl font-bold mb-2">{t("text.80")}</h2>
        <p className="mb-4">{t("text.81")}</p>
    </>);

    const sidebar = navData["Incoming Students"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="Incoming Students" />
    )
}

export default ThingsToBring;
