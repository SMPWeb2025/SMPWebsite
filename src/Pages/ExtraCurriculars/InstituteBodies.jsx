import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";
import { useTranslation } from "react-i18next";

const InstituteBodies = () => {
    const { t } = useTranslation("institutebodies");
    const content = (<>
        <h1 className="text-4xl font-bold mb-5">{t("text.0")}</h1>
        <h2 className="text-xl font-bold mb-2">{t("text.1")}</h2>
        <h2 className="text-lg font-semibold mb-2">{t("text.2")}</h2>
        <p className="mb-4">{t("text.3")}</p>

        <h2 className="text-lg font-semibold mb-2">{t("text.4")}</h2>
        <p className="mb-4">{t("text.5")}</p>
        <p className="mb-4">{t("text.6")}</p>
        <p className="mb-4">{t("text.7")}</p>
        <p className="mb-4">{t("text.8")}<br/>
        <a href="https://nss.gymkhana.iitb.ac.in/home/" className="text-blue-600 hover:underline p-0!">{t("text.9")}</a>{t("text.10")}<a href="https://www.instagram.com/nssiitb/?hl=en" className="text-blue-600 hover:underline p-0!">{t("text.11")}</a>
        </p>


        <h2 className="text-xl font-bold mb-2">{t("text.12")}</h2>
        <p className="mb-4">{t("text.13")}</p>
        <p className="mb-4">{t("text.14")}</p>
        <ul className="ml-6 list-disc">
            <li className="mb-2"><b>{t("text.15")}</b>{t("text.16")}</li>
            <li className="mb-2"><b>{t("text.17")}</b>{t("text.18")}</li>
            <li className="mb-2"><b>{t("text.19")}</b>{t("text.20")}</li>
        </ul>
        <p className="mb-4">{t("text.21")}<br/>
            <a href="https://gymkhana.iitb.ac.in/~ncc/home/" className="text-blue-600 hover:underline p-0!">{t("text.22")}</a>{t("text.23")}<a href="https://www.facebook.com/2MahaEngReg/" className="text-blue-600 hover:underline p-0!">{t("text.24")}</a>{t("text.25")}<a href="https://www.instagram.com/ncc_iit_bombay/?hl=en" className="text-blue-600 hover:underline p-0!">{t("text.26")}</a>
        </p>


        <h2 className="text-xl font-bold mb-2">{t("text.27")}</h2>
        <p className="mb-4">{t("text.28")}</p>
        <p className="mb-4">{t("text.29")}</p>
        <p className="mb-4">{t("text.30")}</p>
        <p className="mb-4">{t("text.31")}<br /> 
            <a href="https://acr.iitbombay.org/sarc/" className="text-blue-600 hover:underline p-0!">{t("text.32")}</a>{t("text.33")}<a href="https://www.facebook.com/SARC.IITB/" className="text-blue-600 hover:underline p-0!">{t("text.34")}</a>{t("text.35")}<a href="https://www.instagram.com/sarc_iitb/?hl=en" className="text-blue-600 hover:underline p-0!">{t("text.36")}</a>
        </p>


        <h2 className="text-xl font-bold mb-2">{t("text.37")}</h2>
        <p className="mb-4">{t("text.38")}</p>
        <p className="mb-4">{t("text.39")}</p>
        <p className="mb-4">
            {t("text.40")}
            <a href="mailto:saathi-iitb+subscribe@googlegroups.com" className="text-blue-600 hover:underline p-0!">saathi-iitb+subscribe@googlegroups.com</a>. {t("text.42")}
        </p>
        <p className="mb-4">{t("text.43")}</p>
        <p className="mb-4">
            {t("text.44")}{" "}<a href="mailto:saathi.iitbombay@gmail.com" className="text-blue-600 hover:underline p-0!">saathi.iitbombay@gmail.com</a>
            <br/>
            {t("text.46")}<a href="https://www.saathiiitb.com" className="text-blue-600 hover:underline p-0!">{t("text.47")}</a>{t("text.48")}<a href="https://www.facebook.com/saathi.iitb/" className="text-blue-600 hover:underline p-0!">{t("text.49")}</a>{t("text.50")}<a href="https://www.instagram.com/saathi.iitb/?hl=en" className="text-blue-600 hover:underline p-0!">{t("text.51")}</a>
        </p>



        <h2 className="text-xl font-bold mb-2">{t("text.52")}</h2>
        <p className="mb-4">{t("text.53")}</p>
        <p className="mb-4">{t("text.54")}<br /> 
            <a href="https://www.ecell.in" className="text-blue-600 hover:underline p-0!">{t("text.55")}</a>{t("text.56")}<a href="https://www.facebook.com/ecell.in/" className="text-blue-600 hover:underline p-0!">{t("text.57")}</a>{t("text.58")}<a href="https://www.instagram.com/iitbombay_ecell/?hl=en" className="text-blue-600 hover:underline p-0!">{t("text.59")}</a>
        </p>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginBottom: '2rem' }}>
        <iframe
        border="0"
          src="https://youtube.com/embed/9LYhKUEh6yI?si=YUUqSqvEoDr6h3cs"
          title="ESummit'25 Official Aftermovie"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: '0',
          }}
        />
        </div>


        <h2 className="text-xl font-bold mb-2">{t("text.60")}</h2>
        <p className="mb-4">{t("text.61")}</p>
        <p className="mb-4">{t("text.62")}</p>
        <p className="mb-4">{t("text.63")}<br /> 
            <a href="https://moodi.org" className="text-blue-600 hover:underline p-0!">{t("text.64")}</a>{t("text.65")}<a href="https://www.facebook.com/iitbombay.moodi/" className="text-blue-600 hover:underline p-0!">{t("text.66")}</a>{t("text.67")}<a href="https://www.instagram.com/iitbombay.moodi/?hl=en" className="text-blue-600 hover:underline p-0!">{t("text.68")}</a>
        </p>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginBottom: '2rem' }}>
            <iframe
            border="0"
            src="https://youtube.com/embed/WeKGUKuqWaY?si=L4-OkuWHCiqSRj6w"
            title="Mood Indigo, IIT Bombay 2024 Official Aftermovie"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: '0',
            }}
            />
        </div>


        <h2 className="text-xl font-bold mb-2">{t("text.69")}</h2> 
        <p className="mb-4">{t("text.70")}</p>
        <p className="mb-4">{t("text.71")}</p> 
        <p className="mb-4">{t("text.72")}</p>
        <p className="mb-4">{t("text.73")}</p>
        <p className="mb-4">{t("text.74")}<br /> 
            <a href="https://techfest.org" className="text-blue-600 hover:underline p-0!">{t("text.75")}</a>{t("text.76")}<a href="https://www.facebook.com/iitbombaytechfest/" className="text-blue-600 hover:underline p-0!">{t("text.77")}</a>{t("text.78")}<a href="https://www.instagram.com/techfest_iitbombay/?hl=en" className="text-blue-600 hover:underline p-0!">{t("text.79")}</a>
        </p>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', marginBottom: '2rem' }}>
            <iframe
            border="0"
            src="https://www.youtube.com/embed/PjlBNAS7l60?si=T3J5ShGYzKu_Bi8V"
            title="Techfest, IIT Bombay 2024-25 Official Aftermovie"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: '0',
            }}
            />
        </div>


        <h2 className="text-xl font-bold mb-2">{t("text.80")}</h2> 
        <p className="mb-4">{t("text.81")}</p>

        <p className="mb-4">{t("text.82")}<br /> 
            <a href="https://www.abhyudayiitb.org" className="text-blue-600 hover:underline p-0!">{t("text.83")}</a>{t("text.84")}<a href="https://www.facebook.com/abhyuday.iitb/" className="text-blue-600 hover:underline p-0!">{t("text.85")}</a>{t("text.86")}<a href="https://www.instagram.com/iitbombay_abhyuday/?hl=en" className="text-blue-600 hover:underline p-0!">{t("text.87")}</a>
        </p>


        <h2 className="text-xl font-bold mb-2">{t("text.88")}</h2> 
        <p className="mb-4">{t("text.89")}</p>

        <p className="mb-4">{t("text.90")}<br /> 
            <a href="https://gymkhana.iitb.ac.in/~sustainabilitycell/" className="text-blue-600 hover:underline p-0!">{t("text.91")}</a>{t("text.92")}<a href="https://www.facebook.com/SustainabilityCell/" className="text-blue-600 hover:underline p-0!">{t("text.93")}</a>{t("text.94")}<a href="https://www.instagram.com/sustainabilitycell/" className="text-blue-600 hover:underline p-0!">{t("text.95")}</a>
        </p>
      </>);

    const sidebar = navData["Extra Curriculars"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="Extra Curriculars" />
    )
}

export default InstituteBodies;