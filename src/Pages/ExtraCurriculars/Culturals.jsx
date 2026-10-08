import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";
import { useTranslation, Trans } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons"
import instiiAppLogo from "../../assets/img/extra_curricular/favicon-32x32.png"

const Culturals = () => {
    const { t } = useTranslation("culturals");
    const content = (<>
        <h1 className="text-4xl font-bold mb-5">{t("text.0")}</h1>
        <p className="mb-4">
            <Trans i18nKey="cultScene.intro" t={t} components={{ bold: <b /> }} />
        </p>
        <p className="mb-4">{t("text.4")}<br />{t("text.5")}<a className="text-blue-600 hover:underline" style={{ padding: '0' }} target="_blank" href="https://gymkhana.iitb.ac.in/~culturals/">https://gymkhana.iitb.ac.in/~culturals/</a><br />{t("text.6")}<a className="text-blue-600 hover:underline" style={{ padding: '0' }} target="_blank" href="https://facebook.com/IITBCult">https://facebook.com/IITBCult</a>
        </p>
        <h2 className="text-xl font-bold mb-2">{t("text.7")}</h2>
        <p className="mb-4">{t("text.8")}</p>
        <h2 className="text-xl font-semibold mb-2 p-0">{t("text.9")}</h2>
        <p className="mb-4">{t("text.10")}</p>
        <h2 className="text-xl font-bold mb-2">{t("text.11")}</h2>
        
        <h2 className="text-lg font-semibold mb-2 p-0">{t("text.12")}</h2>
        <p className="mb-4">{t("text.13")}<br /><br />

            <span className="font-medium">{t("text.14")}</span>
            <div className="flex items-center">
                <a href="https://www.instagram.com/literati_iitb/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                <a href="https://www.insti.app/org/literati" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} size="lg" /></a>
                <a href="https://www.insti.app/org/literati" target="_blank"><img src={instiiAppLogo} alt="Literati" /></a>
            </div>
        </p>

        <h2 className="text-lg font-semibold mb-2 p-0">{t("text.15")}</h2>
        <p className="mb-4">{t("text.16")}<br /><br />
            <span className="font-medium">{t("text.17")}</span>
            <div className="flex items-center">
                <a href="https://www.instagram.com/wespeakiitb/"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                <a href="https://www.facebook.com/groups/wespeak.iitb/"><FontAwesomeIcon icon={faSquareFacebook} size="lg" /></a>
                <a href="https://gymkhana.iitb.ac.in/instiapp/org/we-speak" target="_blank"><img src={instiiAppLogo} alt="Literati" /></a>
            </div>
        </p>

        <h2 className="text-lg font-semibold mb-2 p-0">{t("text.18")}</h2>
        <p className="mb-4">{t("text.19")}<br /><br />
            <span className="font-medium">{t("text.20")}</span>
            <div className="flex items-center">
                <a href="https://fourthwalliitb.wordpress.com/" target="_blank"><FontAwesomeIcon icon={faSquareArrowUpRight} size="lg" /></a>
                <a href="https://www.facebook.com/IITBombay.fourthwall/" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} size="lg" /></a>
                <a href="https://www.insti.app/org/fourthwall" target="_blank"><img src={instiiAppLogo} alt="Fourthwall" /></a>
            </div>
        </p>
        <h2 className="text-lg font-semibold mb-2 p-0">{t("text.21")}</h2>
        <p className="mb-4">{t("text.22")}<br /><br />
            <span className="font-medium">{t("text.23")}</span>
            <div className="flex items-center">
                <a href="https://www.instagram.com/symphonyiitb/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                <a href="https://www.facebook.com/symphony.iitb" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} size="lg" /></a>
                <a href="https://www.youtube.com/channel/UC5UrEXoJe-xoVgkIlECTMcA" target="_blank"><FontAwesomeIcon icon={faYoutube} size="lg" /></a>
            </div>
        </p>

        <h2 className="text-lg font-semibold mb-2 p-0">{t("text.24")}</h2>
        <p className="mb-4">{t("text.25")}<br /><br />
            <span className="font-medium">{t("text.26")}</span>
            <div className="flex items-center">
                <a href="https://www.instagram.com/silverscreen_iitb/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                <a href="https://www.youtube.com/user/silverscreeniitb" target="_blank"><FontAwesomeIcon icon={faYoutube} size="lg" /></a>
                <a href="https://www.insti.app/org/silverscreen" target="_blank"><img src={instiiAppLogo} alt="Fourthwall" /></a>
            </div>
        </p>

        <h2 className="text-lg font-semibold mb-2 p-0">{t("text.27")}</h2>
        <p className="mb-4">{t("text.28")}<br /><br />

            <span className="font-medium">{t("text.29")}</span>
            <div className="flex items-center">
                <a href="https://www.instagram.com/insync_iitb/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                <a href="https://www.facebook.com/groups/insynciitb/" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} size="lg" /></a>
                <a href="https://www.youtube.com/channel/UCp0-MwKqWJgJNY81nwLrW0w" target="_blank"><FontAwesomeIcon icon={faYoutube} size="lg" /></a>
                <a href="https://www.insti.app/org/insync" target="_blank"><img src={instiiAppLogo} alt="Fourthwall" /></a>
            </div>
        </p>

        <h2 className="text-lg font-semibold mb-2 p-0">{t("text.30")}</h2>
        <p className="mb-4">{t("text.31")}<br /><br />
            <span className="font-medium">{t("text.32")}</span>
            <div className="flex items-center">
                <a href="https://www.instagram.com/vaani_iitb/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                <a href="https://www.facebook.com/vaani.iitb/" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} size="lg" /></a>
                <a href="https://www.youtube.com/c/VaaniIITBombay" target="_blank"><FontAwesomeIcon icon={faYoutube} size="lg" /></a>
                <a href="https://vaani380.wordpress.com/" target="_blank"><img src={instiiAppLogo} alt="Fourthwall" /></a>
                <a href="https://www.insti.app/org/vaani" target="_blank"><FontAwesomeIcon icon={faSquareArrowUpRight} size="lg" /></a>
            </div>
        </p>

        <h2 className="text-lg font-semibold mb-2 p-0">{t("text.33")}</h2>
        <p className="mb-4">{t("text.34")}<br /><br />
            <span className="font-medium">{t("text.35")}</span>
            <div className="flex items-center">
                <a href="https://www.instagram.com/culinaryclub_iitb/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                <a href="https://www.facebook.com/culinaryclubIITB/" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} size="lg" /></a>
            </div>
        </p>


        <h2 className="text-lg font-semibold mb-2 p-0">{t("text.36")}</h2>
        <p className="mb-4">{t("text.37")}<br /><br />
            <span className="font-medium">{t("text.38")}</span>
            <div className="flex items-center">
                <a href="https://www.instagram.com/rang_iitb/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                <a href="https://www.facebook.com/RANG.IITB/" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} size="lg" /></a>
                <a href="https://www.insti.app/org/rang" target="_blank"><img src={instiiAppLogo} alt="Fourthwall" /></a>
                <a href="https://rang-iitb.blogspot.com/" target="_blank"><FontAwesomeIcon icon={faSquareArrowUpRight} size="lg" /></a>
            </div>
            <br />
            <span className="font-medium">{t("text.39")}</span>
            <div className="flex items-center">
                <a href="https://www.instagram.com/pixels_iitb/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                <a href="https://www.facebook.com/PixelsIITB/" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} size="lg" /></a>
                <a href="https://www.insti.app/org/pixels" target="_blank"><img src={instiiAppLogo} alt="Fourthwall" /></a>
                <a href="https://www.pixelsiitbombay.com/" target="_blank"><FontAwesomeIcon icon={faSquareArrowUpRight} size="lg" /></a>
            </div>
        </p>


        <h2 className="text-lg font-semibold mb-2 p-0">{t("text.40")}</h2>
        <p className="mb-4">{t("text.41")}<br /><br />
            <span className="font-medium">{t("text.42")}</span>
            <div className="flex items-center">
                <a href="https://www.instagram.com/designiitb/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                <a href="https://www.youtube.com/channel/UCT-H_0-ai4YaReSqboTiXPA" target="_blank"><FontAwesomeIcon icon={faYoutube} size="lg" /></a>
                <a href="https://www.facebook.com/thedesignclubiitb/" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} size="lg" /></a>
                <a href="https://www.insti.app/org/the-design-club" target="_blank"><img src={instiiAppLogo} alt="Fourthwall" /></a>
            </div>
        </p>

        <h2 className="text-lg font-semibold mb-2 p-0">{t("text.43")}</h2>
        <p className="mb-4">{t("text.44")}<br /><br />
            <span className="font-medium">{t("text.45")}</span>
            <div className="flex items-center">
                <a href="https://www.instagram.com/roots_iitb/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                <a href="https://www.facebook.com/groups/RootsIITB/" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} size="lg" /></a>
                <a href="https://www.youtube.com/channel/UCYOtCVjIqR9_PoulDX_3goQ" target="_blank"><FontAwesomeIcon icon={faYoutube} size="lg" /></a>
                <a href="https://www.insti.app/org/roots" target="_blank"><img src={instiiAppLogo} alt="Fourthwall" /></a>
            </div>
        </p>

        <h2 className="text-lg font-semibold mb-2 p-0">{t("text.46")}</h2>
        <p className="mb-4">{t("text.47")}<br /><br />
            <span className="font-medium">{t("text.48")}</span>
            <div className="flex items-center">
                <a href="https://www.instagram.com/styleup_iitb/?hl=en" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                <a href="https://www.facebook.com/styleup.iitb/" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} size="lg" /></a>
                <a href="https://www.youtube.com/channel/UCLB_Gh4fQQohPGdw-G-Bavg" target="_blank"><FontAwesomeIcon icon={faYoutube} size="lg" /></a>
                <a href="https://www.insti.app/org/lifestyle-club" target="_blank"><img src={instiiAppLogo} alt="Fourthwall" /></a>
            </div>
        </p>

        <h2 className="text-lg font-semibold mb-2 p-0">{t("text.49")}</h2>
        <p className="mb-4">{t("text.50")}<br /><br />
            <span className="font-medium">{t("text.51")}</span>
            <div className="flex items-center">
                <a href="https://www.instagram.com/comedycons_iitb/?hl=en"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                <a href="https://www.facebook.com/groups/1957227557682670/" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} size="lg" /></a>
                <a href="https://www.youtube.com/@ComedyCons_IITB/about" target="_blank"><FontAwesomeIcon icon={faYoutube} size="lg" /></a>
                <a href="https://gymkhana.iitb.ac.in/instiapp/org/comedycons" target="_blank"><img src={instiiAppLogo} alt="Fourthwall" /></a>
            </div> 
        </p>

        <h2 className="text-lg font-semibold mb-2 p-0">{t("text.52")}</h2>
        <p className="mb-4">{t("text.53")}<br /><br />
            <span className="font-medium">{t("text.54")}</span>
            <div className="flex items-center">
                <a href="https://www.instagram.com/iitbbc/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                <a href="https://be-by.facebook.com/iitbbc" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} size="lg" /></a>
                <a href="https://www.youtube.com/user/IITBBC" target="_blank"><FontAwesomeIcon icon={faYoutube} size="lg" /></a>
                <a href="https://gymkhana.iitb.ac.in/instiapp/org/iit-bbc" target="_blank"><img src={instiiAppLogo} alt="Fourthwall" /></a>
            </div>
            <br />{t("text.55")}</p>

        <h2 className="text-lg font-semibold mb-2 p-0">{t("text.56")}</h2>
        <p className="mb-4">{t("text.57")}</p>

        <h2 className="text-lg font-semibold mb-2 p-0">{t("text.58")}</h2>
        <p className="mb-4">{t("text.59")}</p>

        <h2 className="text-lg font-semibold mb-2 p-0">{t("text.60")}</h2>
        <p className="mb-4">{t("text.61")}</p>
        <p className="mb-4">{t("text.62")}</p>
        <p className="mb-4">{t("text.63")}</p>
        <p className="mb-4">{t("text.64")}</p>

        <p className="mb-4">{t("text.65")}</p>

        <h2 className="text-lg font-semibold mb-2 p-0">{t("text.66")}</h2>
        <p className="mb-4">{t("text.67")}</p>
        <p className="mb-4">{t("text.68")}</p>
        {/* <p className="mb-4">{t("text.69")}</p> */}
    </>);

    const sidebar = navData["Extra Curriculars"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="Extra Curriculars" />
    )
}

export default Culturals;