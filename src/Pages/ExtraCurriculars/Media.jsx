import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const Media = () => {
    const content = (<>
        <h1 className="text-4xl font-bold mb-5">Media</h1>
        <p className="mb-4">
            The Institute has a very active media scene in terms of Newsletters, Magazines, Video coverage and IITB Radio. While Insight, the media body of IIT Bombay, releases newsletters specifically for freshmen, amongst others, several departments and institute bodies also put out their own newsletters. IIT BBC pioneers the video content scene in the campus, and to cater to those who enjoy radio, we also have the IITB radio.
        </p>
        <h2 className="text-xl font-bold mb-2">Newsletters and Magazines</h2>
        <p className="mb-4">
            Insight is currently the only active media body in the institute run voluntarily by students. Aawaaz was the media body for Hindi but is now dissolved.
        </p>
        <h2 className="text-xl font-bold mb-2">Insight</h2>
        <p className="mb-4">
            If you like writing, have a flair for journalism and you want to work on high impact pieces that usher changes in the institute or simply want to publish a few leisure pieces for light reading and humour you would like to work with the student media body Insight. Insight publishes online content on their website along with offline newsletters which are delivered door to door. Watch out for their Freshmen specific newsletter, started from 2013, which you will be receiving in August!
        </p>
        <h2 className="text-xl font-bold mb-2">IIT Bombay Broadcasting Channel</h2>
        <p className="mb-4">
            IITBBC is a specific wing of Insight focussing on video coverage of events happening in the institute. If you are interested in real time coverage of news in the institute and working on video editing you should definitely work with IITBBC.
        </p>
        <h2 className="text-xl font-bold mb-2">EnSpace</h2>
        <p className="mb-4">
            E-Cell publishes a magazine EnSpace which aims to promote entrepreneurial awareness through an interesting mix of articles, interviews and informative pieces. You can find the EnSpace publications <a href="https://ecell.in/enspace" className="text-blue-600 hover:underline p-0!">here</a>.
        </p>
    </>);

    const contentHi = (<>
        <h1 className="text-4xl font-bold mb-5">मीडिया</h1>
        <p className="mb-4">
            संस्थान में न्यूज़लेटर, पत्रिकाओं, वीडियो कवरेज और IITB रेडियो के रूप में एक बहुत सक्रिय मीडिया दृश्य है। Insight, IIT बॉम्बे की मीडिया संस्था, विशेष रूप से नए छात्रों के लिए न्यूज़लेटर जारी करती है। IIT BBC कैंपस में वीडियो सामग्री के क्षेत्र में अग्रणी है।
        </p>
        <h2 className="text-xl font-bold mb-2">न्यूज़लेटर और पत्रिकाएँ</h2>
        <p className="mb-4">
            Insight वर्तमान में संस्थान में स्वेच्छा से छात्रों द्वारा संचालित एकमात्र सक्रिय मीडिया संस्था है।
        </p>
        <h2 className="text-xl font-bold mb-2">Insight</h2>
        <p className="mb-4">
            यदि आपको लेखन पसंद है, पत्रकारिता में रुचि है, और आप ऐसे लेख लिखना चाहते हैं जो संस्थान में बदलाव लाएँ या केवल हल्के पढ़ने के लिए कुछ लिखना चाहते हैं, तो आप Insight के साथ काम करना पसंद करेंगे। Insight अपनी वेबसाइट पर ऑनलाइन सामग्री और ऑफलाइन न्यूज़लेटर प्रकाशित करता है। अगस्त में आने वाले नए छात्रों के लिए विशेष न्यूज़लेटर देखें!
        </p>
        <h2 className="text-xl font-bold mb-2">IIT बॉम्बे ब्रॉडकास्टिंग चैनल</h2>
        <p className="mb-4">
            IITBBC, Insight का एक विशेष विभाग है जो संस्थान में होने वाली घटनाओं की वीडियो कवरेज पर केंद्रित है। यदि आप संस्थान की खबरों की रियल-टाइम कवरेज और वीडियो एडिटिंग में रुचि रखते हैं तो IITBBC के साथ जुड़ें।
        </p>
        <h2 className="text-xl font-bold mb-2">EnSpace</h2>
        <p className="mb-4">
            E-Cell एक पत्रिका EnSpace प्रकाशित करता है जो लेखों, साक्षात्कारों और जानकारीपूर्ण टुकड़ों के माध्यम से उद्यमशीलता जागरूकता को बढ़ावा देती है। EnSpace प्रकाशन <a href="https://ecell.in/enspace" className="text-blue-600 hover:underline p-0!">यहाँ</a> देखें।
        </p>
    </>);

    const sidebar = navData["Extra Curriculars"];

    return (
        <Page content={content} contentHi={contentHi} sidebar={sidebar} sideHeading="Extra Curriculars" />
    )
}

export default Media;
