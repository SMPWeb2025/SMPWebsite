import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ScholarshipTable from "../../Components/ScholarshipTable/ScholarshipTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons"

const linkClass = "text-blue-600 hover:underline p-0!";

const Scholarships = () => {
    const { t } = useTranslation("scholarships");
    const content = (<>
        <h1 className="text-4xl font-bold mb-5">{t("text.0")}</h1>
        <h2 className="text-xl font-bold mb-2">{t("text.1")}</h2>
        <p className="mb-4">{t("text.2")}</p>
        <h2 className="text-xl font-bold mb-2">{t("text.3")}</h2>
        <p className="mb-4">{t("text.4")}</p>
        <p className="mb-4">{t("text.5")}</p>

        <h2 className="text-xl font-bold mb-2">{t("text.6")}</h2>
        <p className="mb-4">{t("text.7")}</p>
        <p className="mb-4">{t("text.8")}<br />{t("text.9")}<br />{t("text.10")}</p>

        <h2 className="text-xl font-bold mb-2">{t("text.11")}</h2>
        <ScholarshipTable />
        <p className="mt-8 mb-4">
            <b>{t("text.12")}: </b><br />{t("text.13")}<br />
            <b>{t("text.14")}</b>
        </p>

        <h2 className="text-xl font-bold mb-2">{t("text.15")}</h2>
        <p className="mb-4">{t("text.16")}</p>
        <ul className="list-disc ml-4 mb-4">
            <li>
                <b>{t("text.17")}: </b>{t("text.18")}</li>
            <li><b>{t("text.19")}: </b>{t("text.20")}</li>
        </ul>

        <p className="mb-4">{t("text.21")}<br />
            <a href="https://acad.iitb.ac.in/academics/scholarship" target="_blank" rel="noreferrer" className={linkClass}>{t("text.22")}</a>
        </p>
        <p className="mb-4">
            {t("text.24")} {" "}
            <a href="mailto:acrscholarship@iitb.ac.in" target="_blank" className={linkClass}>acrscholarship@iitb.ac.in</a>
        </p>

        <h2 className="text-xl font-bold mb-2">{t("text.27")}</h2>
        <p className="mb-4">{t("text.28")}</p>
        <h2 className="text-xl font-bold mb-2">{t("text.29")}</h2>
        <h2 className="text-lg font-semibold mb-2">{t("text.30")}</h2>
        <p className="mb-4">{t("text.31")}{" "}
            <a href="https://sbi.co.in/web/personal-banking/loans/education-loans/student-loan-scheme" target="_blank" rel="noreferrer" className={linkClass}>https://sbi.co.in/web/personal-banking/loans/education-loans/student-loan-scheme</a>
        </p>

        <h2 className="text-lg font-semibold mb-2">{t("text.32")}</h2>
        <p className="mb-4">{t("text.33")}</p>
        <p className="mb-4">{t("text.34")}</p>
        <p className="mb-4">{t("text.35")}{" "}
            <a href="https://static.investindia.gov.in/s3fs-public/2025-03/pm_vidyalaxmi_scheme_guidelines.pdf" target="_blank" rel="noreferrer" className="text-red-600 hover:underline p-0!"><FontAwesomeIcon icon={faFilePdf} size="lg"></FontAwesomeIcon></a>
        </p>
        <h2 className="text-lg font-semibold mb-2">{t("text.36")}</h2>
        <p className="mb-4">{t("text.37")}</p>
        <p className="mb-4">{t("text.38")}</p>
        {/* <p className="mb-4">{t("text.39")}</p>
        <p className="mb-4">{t("text.40")}</p> */}
        <h2 className="text-lg font-semibold mb-2">{t("text.42")}</h2>
        <p className="mb-4">{t("text.43")}</p>
        <p className="mb-4">{t("text.44")}</p>
        <p className="mb-4">{t("text.45")}</p>
        <p className="mb-4">
            <b>{t("text.46")}: </b>{t("text.47")}<br />
            <b>{t("text.48")}: </b><a href="https://fap-iitbaa.org/Webcontent/FAQ" target="_blank" rel="noreferrer" className={linkClass}>https://fap-iitbaa.org/Webcontent/FAQ</a><br />
            <b>{t("text.49")}: </b>
            <a href="mailto:rama.iitbaa@gmail.com" className={linkClass}>rama.iitbaa@gmail.com</a>
            <br /> 
            <b>{t("text.51")}: </b>022-25767086/7019
            </p>
    </>);

    const sidebar = navData["Incoming Students"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="Incoming Students" />
    )
}

export default Scholarships;
