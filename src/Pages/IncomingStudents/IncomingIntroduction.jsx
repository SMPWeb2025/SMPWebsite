import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";
import { useTranslation, Trans } from "react-i18next";
import { Link } from "react-router-dom";

const IncomingIntroduction = () => {
    const { t } = useTranslation("incomingintroduction");
    const content = (<>
    <h1 className="text-4xl font-bold mb-5">{t("title")}</h1>
    <p className="mb-4">{t("welcome")}</p>
    <p className="mb-4">{t("intro")}</p>
    <p className="mb-4">
        <Trans i18nKey="aboutSMP" t={t} components={{ bold: <b /> }} />
    </p>
    <p className="mb-4">
        <Trans
            i18nKey="exploreSections"
            t={t}
            components={{
                lifeLink: <Link to="/life-at-iitb/introduction" className="text-blue-600 hover:underline p-0!" />,
                extraLink: <Link to="/extra-curriculars/gymkhana" className="text-blue-600 hover:underline p-0!" />
            }}
        />
    </p>
    <p className="mb-4">
        {t("whyIITBIntro")}{" "}
        <Link to="https://www.iitb.ac.in/admissions/why-iitb" className="text-blue-600 hover:underline p-0!" target="_blank">{t("whyIITBLinkText")}</Link>
    </p>
    <p className="mb-4">
        <Trans
            i18nKey="contact"
            t={t}
            components={{
                emailLink: <Link to="mailto:smpcs2026@gmail.com" className="text-blue-600 hover:underline p-0!" target="_blank" />,
                pageLink: <Link to="/about/team" className="text-blue-600 hover:underline p-0!" />
            }}
        />
    </p>
    <p className="mb-4">{t("closing")}</p>
    <p className="mb-4">{t("regards")}</p>
    <p className="mb-4">
        <b>Ojas Joshi | Dev Arora</b><br />
        <b>{t("coordinatorsTitle")}</b>
    </p>
    
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
    <iframe
        border="0"
        src="https://www.youtube.com/embed/1jYlB0xrbUw?si=h0sL-SnSkhe2Ae1P"
        title="IIT Bombay from the Air"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ position: 'absolute', top: 0, left: 0, width: '85%', height: '90%', border: '0' }}
    />
    </div>
    </>);

    const sidebar = navData["Incoming Students"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="Incoming Students"/>
    )
}

export default IncomingIntroduction;
