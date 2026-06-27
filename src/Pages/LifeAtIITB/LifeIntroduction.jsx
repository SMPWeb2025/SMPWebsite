import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const LifeIntroduction = () => {
  const content = (
    <>
      <h1 className="text-4xl font-bold mb-5">Introduction</h1>
      <p className="mb-4">
        So once you come to IITB, your address will read something like this:
      </p>
      <p className="mb-4">
        Room # ___, Hostel __ <br/>
        IIT Bombay, Powai<br/>
        Mumbai — 400076<br/>
      </p>
      <p className="mb-4">
        Hostel life at IIT Bombay is quite an integral part of your stay here. Although for some of you, it might seem a little difficult to adjust to at first, you will soon fall in love with your new home. You can find some more information in the section on Hostels.
      </p>
      <p className="mb-4">
        As the hostels are within the campus, your entire life will be usually contained in the campus itself with the occasional outings in search of good food or for treats. Consequently, the campus is well fitted to address all of your needs, be it your daily necessities or your health. We also have a couple of guesthouses which you can avail of (probably) in case you have someone coming over to visit.
      </p>
      <p className="mb-4">
        We hope these pages answer some of your questions and give you a basic picture of the hostel life. We look forward to having you amongst us and hope that you look forward to it too.
      </p>
      <p className="mb-4">For more information, you can contact:</p>
      <p className="mb-4">
        <b>
        Aditya Adinath Joshi<br/>
        General Secretary, Hostel Affairs (GSHA)<br/>
        Indian Institute of Technology, Bombay<br/>
        <a style={{padding: '0'}} href="mailto:gsecha@iitb.ac.in" className="text-blue-600 underline">gsecha@iitb.ac.in</a><br/>
        </b>
      </p>
      <p className="mb-4">Here is a video showing the beautiful campus of our Institute</p>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe
          border="0"
          src="https://www.youtube.com/embed/1jYlB0xrbUw"
          title="IIT Bombay Campus Tour"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0, width: '85%', height: '90%', border: '0' }}
        />
      </div>
    </>
  );

  const contentHi = (
    <>
      <h1 className="text-4xl font-bold mb-5">परिचय</h1>
      <p className="mb-4">
        IIT बॉम्बे आने के बाद आपका पता कुछ इस तरह होगा:
      </p>
      <p className="mb-4">
        कमरा नं. ___, हॉस्टल __ <br/>
        IIT बॉम्बे, पवई<br/>
        मुंबई — 400076<br/>
      </p>
      <p className="mb-4">
        IIT बॉम्बे में हॉस्टल जीवन आपके प्रवास का एक अभिन्न हिस्सा है। हालाँकि शुरुआत में यह थोड़ा कठिन लग सकता है, लेकिन आप जल्द ही अपने नए घर से प्यार करने लगेंगे।
      </p>
      <p className="mb-4">
        चूँकि हॉस्टल कैंपस के भीतर हैं, आपका अधिकतर जीवन कैंपस में ही बीतेगा। कैंपस आपकी सभी दैनिक आवश्यकताओं और स्वास्थ्य सेवाओं को पूरा करने के लिए सुसज्जित है।
      </p>
      <p className="mb-4">
        हम आशा करते हैं कि ये पृष्ठ आपके कुछ प्रश्नों का उत्तर देंगे। हम आपके हमारे बीच आने का इंतजार कर रहे हैं।
      </p>
      <p className="mb-4">अधिक जानकारी के लिए संपर्क करें:</p>
      <p className="mb-4">
        <b>
        आदित्य आदिनाथ जोशी<br/>
        महासचिव, हॉस्टल मामले (GSHA)<br/>
        भारतीय प्रौद्योगिकी संस्थान, बॉम्बे<br/>
        <a style={{padding: '0'}} href="mailto:gsecha@iitb.ac.in" className="text-blue-600 underline">gsecha@iitb.ac.in</a><br/>
        </b>
      </p>
      <p className="mb-4">यहाँ हमारे संस्थान के सुंदर कैंपस का एक वीडियो है</p>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe
          border="0"
          src="https://www.youtube.com/embed/1jYlB0xrbUw"
          title="IIT बॉम्बे कैंपस टूर"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0, width: '85%', height: '90%', border: '0' }}
        />
      </div>
    </>
  );

  const sidebar = navData["Life at IITB"];

  return (
    <Page content={content} contentHi={contentHi} sidebar={sidebar} sideHeading="Life at IITB" />
  );
}
export default LifeIntroduction;
