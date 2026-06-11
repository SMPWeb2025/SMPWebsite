import "./header.css";
import video576 from './video-576p.mp4'
import video720 from './video-720p.mp4'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const translations = {
  en: {
    title: "Welcome To IIT Bombay!",
    subtitle: "This website has been created by the Student Mentor Program to introduce incoming freshers to life at IIT Bombay. We encourage you to browse through the various sections and make an informed choice about your college and department. Though we've tried to cover most questions on this website, feel free to mail us at",
    learnMore: "Learn more",
  },
  hi: {
    title: "IIT बॉम्बे में आपका स्वागत है!",
    subtitle: "यह वेबसाइट स्टूडेंट मेंटर प्रोग्राम द्वारा IIT बॉम्बे में आने वाले नए छात्रों को यहाँ के जीवन से परिचित कराने के लिए बनाई गई है। हम आपसे आग्रह करते हैं कि आप विभिन्न अनुभागों को देखें और अपने कॉलेज तथा विभाग के बारे में एक सूचित निर्णय लें। हालांकि हमने इस वेबसाइट पर अधिकतर प्रश्नों को कवर करने की कोशिश की है, फिर भी आप हमें यहाँ मेल कर सकते हैं:",
    learnMore: "और जानें",
  },
};

function Header() {
  const { language } = useLanguage();
  const t = translations[language];

  const [videoSrc, setVideoSrc] = useState(video720);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const slowConnection =
      connection &&
      (connection.effectiveType === "2g" || connection.effectiveType === "3g" || connection.saveData);

    if (isMobile || slowConnection) {
      setVideoSrc(video576);
    } else {
      setVideoSrc(video720);
    }
  }, []);

  return (
    <div className="headersmp">
      <video src={videoSrc} autoPlay loop muted className="videobg" />
      <div className="headersmpContainer mt-5">
        <div className="headersmpText">
          <h1 className="font-bold mt-10 md:mt-20 lg:text-6xl md:text-6xl text-2xl">{t.title}</h1>
          <h3 className="w-3/4 mx-auto text-sm md:text-2xl">
            {t.subtitle}{" "}
            <a style={{padding: 0, fontWeight: 'bold'}} className="hover-underline text-blue-600" href="mailto:smpcs2025@gmail.com">smpcs2025@gmail.com</a>.
          </h3>
        </div>
        <div className="headersmpBtn">
          <button className="btnsmp" type="button">
            <span className="circlesmp"></span>
            <span className="arrowsmp"></span>
            <span className="textsmp"><Link to="/incoming-students/introduction">{t.learnMore}</Link></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
