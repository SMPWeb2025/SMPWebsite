import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";
import { useTranslation } from "react-i18next";

const TechnicalAffairs = () => {
    const { t } = useTranslation("technicalaffairs");
    const content = (<>
        <h1 className="text-4xl font-bold mb-5">{t("text.0")}</h1>
        <p className="mb-4">{t("text.1")}</p>
        <p className="mb-4">{t("text.2")}</p>

        <h2 className="text-xl font-bold mb-2">{t("text.3")}</h2>
        <p className="mb-4">{t("text.4")}</p>
        <p className="mb-4">{t("text.5")}<ul className="ml-6 list-disc">
                <li className="mb-2"><b>{t("text.xlr8.label")}: </b>{t("text.xlr8.body")}</li>
                <li className="mb-2"><b>{t("text.8")}</b>{t("text.9")}</li>
                <li className="mb-2"><b>{t("text.10")}</b>{t("text.11")}</li>
                <li className="mb-2"><b>{t("text.12")}</b>{t("text.13")}</li>
                <li className="mb-2"><b>{t("text.14")}</b>{t("text.15")}</li>
                <li className="mb-2"><b>{t("text.16")}</b>{t("text.17")}</li>
                <li className="mb-2"><b>{t("text.18")}</b>{t("text.19")}</li>
                <li className="mb-2"><b>{t("text.20")}</b>{t("text.21")}</li>
                <li className="mb-2"><b>{t("text.22")}</b>{t("text.23")}</li>
            </ul>
        </p>

        <p className="mb-6">{t("text.24")}</p>

        <h2 className="text-3xl font-bold mb-3">{t("text.25")}</h2>

        <h2 className="text-xl font-bold mb-2">{t("text.26")}</h2>
        <p className="mb-4">{t("text.27")}</p>
        <p className="mb-4">{t("text.28")}</p>
        <p className="mb-4">{t("text.29")}<a href="https://wncc.tech-iitb.org/." className="text-blue-600 hover:underline p-0!">https://wncc.tech-iitb.org/.</a>
        </p>
        <p className="mb-4">{t("text.30")}</p>


        <h2 className="text-xl font-bold mb-2">{t("text.31")}</h2>
        <p className="mb-4">{t("text.32")}</p>
        <p className="mb-4">{t("text.33")}<a href="https://erc.tech-iitb.org" className="text-blue-600 hover:underline p-0!">https://erc.tech-iitb.org</a>
        </p>


        <h2 className="text-xl font-bold mb-2">{t("text.34")}</h2>
        <p className="mb-4">{t("text.35")}</p>
        <p className="mb-4">{t("text.36")}<a href="http://mnp-club.github.io/." className="text-blue-600 hover:underline p-0!">http://mnp-club.github.io/.</a>
        </p>


        <h2 className="text-xl font-bold mb-2">{t("text.37")}</h2>
        <p className="mb-4">{t("text.38")}</p>
        <p className="mb-4">{t("text.39")}<a href="https://quant.tech-iitb.org" className="text-blue-600 hover:underline p-0!">https://quant.tech-iitb.org</a>
        </p>

        <h2 className="text-xl font-bold mb-2">{t("text.40")}</h2>
        <p className="mb-4">{t("text.41")}</p>
        <p className="mb-4">{t("text.42")}<a href="https://krittikaiitb.github.io" className="text-blue-600 hover:underline p-0!">https://krittikaiitb.github.io/.</a>
        </p>


        <h2 className="text-xl font-bold mb-2">{t("text.43")}</h2>
        <p className="mb-4">{t("text.44")}</p>
        <p className="mb-4">{t("text.45")}<a href="https://energy.tech-iitb.org" className="text-blue-600 hover:underline p-0!">https://energy.tech-iitb.org</a>
        </p>

        <h2 className="text-xl font-bold mb-2">{t("text.46")}</h2>
        <p className="mb-4">{t("text.47")}</p>
        <p className="mb-4">{t("text.48")}<a href="https://biox.tech-iitb.org" className="text-blue-600 hover:underline p-0!">https://biox.tech-iitb.org</a>
        </p>


        <h2 className="text-xl font-bold mb-2">{t("text.49")}</h2>
        <p className="mb-4">{t("text.50")}</p>

        <h2 className="text-xl font-bold mb-2">{t("text.51")}</h2>
        <p className="mb-4">{t("text.52")}</p> 
        

        <h2 className="text-xl font-bold mb-2">{t("text.53")}</h2>
        <p className="mb-4">{t("text.54")}</p>
        <p className="mb-6">{t("text.55")}<a href="https://itc.gymkhana.iitb.ac.in/TL/" className="text-blue-600 hover:underline p-0!">https://itc.gymkhana.iitb.ac.in/TL/</a></p>

        <h2 className="text-3xl font-bold mb-3">{t("text.57")}</h2>

        <h2 className="text-xl font-bold mb-2">{t("text.58")}</h2>
        <p className="mb-4">{t("text.59")}</p>
        <p className="mb-4">{t("text.60")}<a href="https://www.auv-iitb.org" className="text-blue-600 hover:underline p-0!">https://www.auv-iitb.org</a>
        </p>


        <h2 className="text-xl font-bold mb-2">{t("text.61")}</h2>
        <p className="mb-4">{t("text.62")}</p>
        <p className="mb-4">{t("text.63")}<a href="https://www.iitbracing.org" className="text-blue-600 hover:underline p-0!">https://www.iitbracing.org</a>
        </p>

        <h2 className="text-xl font-bold mb-2">{t("text.64")}</h2>
        <p className="mb-4">{t("text.65")}</p>
        <p className="mb-4">{t("text.66")}<a href="https://iitbrocketteam.in" className="text-blue-600 hover:underline p-0!">https://iitbrocketteam.in</a>
        </p>


        <h2 className="text-xl font-bold mb-2">{t("text.67")}</h2>
        <p className="mb-4">{t("text.68")}</p>
        <p className="mb-4">{t("text.69")}<a href="https://iitbmartian.github.io" className="text-blue-600 hover:underline p-0!">https://iitbmartian.github.io</a>
        </p>


        <h2 className="text-xl font-bold mb-2">{t("text.70")}</h2>
        <p className="mb-4">{t("text.71")}</p>
        <p className="mb-4">{t("text.72")}<a href="https://www.aero.iitb.ac.in/satlab/" className="text-blue-600 hover:underline p-0!">https://www.aero.iitb.ac.in/satlab/</a>
        </p>

        <h2 className="text-xl font-bold mb-2">{t("text.73")}</h2>
        <p className="mb-4">{t("text.74")}</p>
        <p className="mb-4">{t("text.75")}<a href="https://chemecaiitb.github.io/ChemEca/" className="text-blue-600 hover:underline p-0!">https://chemecaiitb.github.io/ChemEca/</a>
        </p>


        <h2 className="text-xl font-bold mb-2">{t("text.76")}</h2>
        <p className="mb-4">{t("text.77")}</p>
        <p className="mb-4">{t("text.78")}<a href="https://www.igem-iitb.in" className="text-blue-600 hover:underline p-0!">https://www.igem-iitb.in</a>
        </p>


        <h2 className="text-xl font-bold mb-2">{t("text.79")}</h2>
        <p className="mb-4">{t("text.80")}</p>
        <p className="mb-4">{t("text.81")}<a href="https://exofly-iitb.github.io" className="text-blue-600 hover:underline p-0!">https://exofly-iitb.github.io</a>
        </p>

        <h2 className="text-xl font-bold mb-2">{t("text.82")}</h2>
        <p className="mb-4">{t("text.83")}</p>
        <p className="mb-4">{t("text.84")}<a href="https://teamgensus.github.io/" className="text-blue-600 hover:underline p-0!">https://teamgensus.github.io/</a>
        </p>


        <h2 className="text-xl font-bold mb-2">{t("text.85")}</h2>
        <p className="mb-4">{t("text.86")}</p>
        <p className="mb-4">{t("text.87")}<a href="https://rakshakiitb.in/" className="text-blue-600 hover:underline p-0!">https://rakshakiitb.in/</a>
        </p>

        <h2 className="text-xl font-bold mb-2">{t("text.88")}</h2>
        <p className="mb-4">{t("text.89")}</p>
        <p className="mb-4">{t("text.90")}<a href="https://umiciitb.org" className="text-blue-600 hover:underline p-0!">https://umiciitb.org</a>
        </p>

        <h2 className="text-xl font-bold mb-2">{t("text.91")}</h2>
        <p className="mb-4">{t("text.92")}</p>
        <p className="mb-4">{t("text.93")}<a href="https://umiciitb.github.io" className="text-blue-600 hover:underline p-0!">https://umiciitb.github.io</a>
        </p>


        <h2 className="text-xl font-bold mb-2">{t("text.94")}</h2>
        <p className="mb-4">{t("text.95")}</p>
        <p className="mb-6">{t("text.96")}<a href="https://teamshunya.com" className="text-blue-600 hover:underline p-0!">https://teamshunya.com</a>
        </p>



        <h2 className="text-xl font-bold mb-2">{t("text.97")}</h2>
        <p className="mb-4">{t("text.98")}</p>
        <p className="mb-4">{t("text.99")}</p>
        <p className="mb-4">{t("text.100")}</p>
        <p className="mb-4">
            <b>{t("text.101")}</b>{t("text.102")}</p>
    </>);

    const sidebar = navData["Extra Curriculars"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="Extra Curriculars" />
    )
}

export default TechnicalAffairs;
