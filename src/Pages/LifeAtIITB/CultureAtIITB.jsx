import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const CultureAtIITB = () => {
  const content = (
    <>
      <h1 className="text-4xl font-bold mb-5">Hostel Culture</h1>
      <h2 className="text-xl font-bold mb-2">Hostel Allocation</h2>
      <p className="mb-4">
        For Boys – Students will be allotted either Hostel 1 or Hostel 16.
        For Girls – A separate wing of Hostel 16 (Hostel 16C) is allotted to girls, on a twin-sharing basis.
        You get the room right when you reach IIT Bombay on the day of registrations.
      </p>
      <h2 className="text-xl font-bold mb-2">Basic Amenities</h2>
      <p className="mb-4">
        Each room has beds, tables, chairs, ceiling fans, tube lights, cupboards and 24x7 high speed internet. There are 2 washrooms per 6 rooms with 24x7 running water. Each Hostel has a mess, a computer room, a gym, a TV, sports grounds and indoor games.
      </p>
      <h2 className="text-xl font-bold mb-2">Hostel Activities</h2>
      <p className="mb-4">
        There are a plethora of activities in the hostel — intra-hostel events, inter-hostel sports and cultural competitions, and festivals like Lohri, Holi, Ganesh Chaturthi, Diwali etc. celebrated throughout the year.
      </p>
      <h2 className="text-xl font-bold mb-2">Hostel Spirit and Wing Culture</h2>
      <p className="mb-4">
        With time, all hostel residents become part of one big family. Your wingmates (wingies) will be your immediate support group. You would go with your wingies on matches, birthday treats, treks and hang-outs all the time.
      </p>
      <h1 className="text-4xl font-bold mb-5">Lingo</h1>
      <p className="mb-1"><b>Arbit</b> - Short for arbitrary. Something you say when you can't think of anything else.</p>
      <p className="mb-1"><b>enthu</b> - Enthusiastic. Eg "Kaun hai enthu?"</p>
      <p className="mb-1"><b>Freshie</b> - First Year student.</p>
      <p className="mb-1"><b>Funda(e)</b> - Very important tricks of the trade, passed on from seniors to juniors.</p>
      <p className="mb-1"><b>insti</b> - Our Beloved Institute.</p>
      <p className="mb-1"><b>junta</b> - A group of people. Even some profs use it!</p>
      <p className="mb-1"><b>mug</b> - To study (or pretend to study).</p>
      <p className="mb-1"><b>nightout</b> - Staying awake all night to study, watch a movie, or for nothing in particular.</p>
      <p className="mb-4"><b>YP</b> - Y-Point gate. Your one-stop solution for stationery, books, haircuts and more.</p>
      <h1 className="text-4xl font-bold mb-5">Internet Usage in IIT Bombay</h1>
      <h2 className="text-xl font-bold mb-2">WiFi Access (recommended)</h2>
      <p className="mb-4">
        Almost all areas on campus are equipped with high-speed WiFi. Connect to IITB-Wireless or eduroam using your LDAP ID and password.
      </p>
      <h2 className="text-xl font-bold mb-2">Hostel LAN Access</h2>
      <p className="mb-4">
        All hostel rooms have a LAN Port. Connect your computer and go to <a className="text-blue-600 hover:underline" style={{padding: '0'}} target="_blank" href="https://internet.iitb.ac.in">https://internet.iitb.ac.in</a> to login with your LDAP ID.
      </p>
    </>
  );

  const contentHi = (
    <>
      <h1 className="text-4xl font-bold mb-5">हॉस्टल संस्कृति</h1>
      <h2 className="text-xl font-bold mb-2">हॉस्टल आवंटन</h2>
      <p className="mb-4">
        लड़कों के लिए — छात्रों को हॉस्टल 1 या हॉस्टल 16 आवंटित किया जाएगा।
        लड़कियों के लिए — हॉस्टल 16 (हॉस्टल 16C) का एक अलग विंग लड़कियों को दो-साझा आधार पर आवंटित किया जाता है।
        पंजीकरण के दिन IIT बॉम्बे पहुँचते ही आपको कमरा मिल जाएगा।
      </p>
      <h2 className="text-xl font-bold mb-2">बुनियादी सुविधाएँ</h2>
      <p className="mb-4">
        प्रत्येक कमरे में बिस्तर, मेज, कुर्सियाँ, छत पंखे, ट्यूब लाइट, अलमारियाँ और 24x7 हाई-स्पीड इंटरनेट है। प्रत्येक 6 कमरों पर 2 वॉशरूम हैं। प्रत्येक हॉस्टल में मेस, कंप्यूटर रूम, जिम, TV, खेल मैदान और इनडोर खेल सुविधाएँ हैं।
      </p>
      <h2 className="text-xl font-bold mb-2">हॉस्टल गतिविधियाँ</h2>
      <p className="mb-4">
        हॉस्टल में वर्ष भर अनेक गतिविधियाँ होती हैं — इंट्रा-हॉस्टल आयोजन, इंटर-हॉस्टल खेल और सांस्कृतिक प्रतियोगिताएँ, और लोहड़ी, होली, गणेश चतुर्थी, दीवाली जैसे त्योहार।
      </p>
      <h2 className="text-xl font-bold mb-2">हॉस्टल भावना और विंग संस्कृति</h2>
      <p className="mb-4">
        समय के साथ, सभी हॉस्टल निवासी एक बड़े परिवार का हिस्सा बन जाते हैं। आपके विंगमेट्स (विंगीज़) आपका तत्काल समर्थन समूह होंगे। आप अपने विंगीज़ के साथ मैच, जन्मदिन की पार्टियाँ, ट्रेक और घूमने-फिरने में समय बिताएंगे।
      </p>
      <h1 className="text-4xl font-bold mb-5">IIT बॉम्बे की भाषा (Lingo)</h1>
      <p className="mb-1"><b>Arbit</b> - 'arbitrary' का संक्षिप्त रूप। जब कुछ और न सूझे तब कहते हैं।</p>
      <p className="mb-1"><b>enthu</b> - उत्साहित। जैसे "कौन है enthu?"</p>
      <p className="mb-1"><b>Freshie</b> - प्रथम वर्ष का छात्र।</p>
      <p className="mb-1"><b>Funda(e)</b> - महत्वपूर्ण टिप्स, जो वरिष्ठ छात्र जूनियर को देते हैं।</p>
      <p className="mb-1"><b>insti</b> - हमारा प्रिय संस्थान।</p>
      <p className="mb-1"><b>junta</b> - लोगों का समूह। कुछ प्रोफेसर भी इसका उपयोग करते हैं!</p>
      <p className="mb-1"><b>mug</b> - पढ़ाई करना (या पढ़ाई का नाटक करना)।</p>
      <p className="mb-1"><b>nightout</b> - पूरी रात जागना — पढ़ने के लिए, फिल्म देखने के लिए, या बस ऐसे ही।</p>
      <p className="mb-4"><b>YP</b> - Y-Point गेट। स्टेशनरी, किताबें, हेयरकट और बहुत कुछ के लिए।</p>
      <h1 className="text-4xl font-bold mb-5">IIT बॉम्बे में इंटरनेट उपयोग</h1>
      <h2 className="text-xl font-bold mb-2">WiFi (अनुशंसित)</h2>
      <p className="mb-4">
        कैंपस के लगभग सभी क्षेत्रों में हाई-स्पीड WiFi उपलब्ध है। IITB-Wireless या eduroam से अपने LDAP ID और पासवर्ड से कनेक्ट करें।
      </p>
      <h2 className="text-xl font-bold mb-2">हॉस्टल LAN</h2>
      <p className="mb-4">
        सभी हॉस्टल कमरों में LAN पोर्ट है। अपना कंप्यूटर कनेक्ट करें और <a className="text-blue-600 hover:underline" style={{padding: '0'}} target="_blank" href="https://internet.iitb.ac.in">https://internet.iitb.ac.in</a> पर अपने LDAP ID से लॉगिन करें।
      </p>
    </>
  );

  const sidebar = navData["Life at IITB"];

  return (
    <Page content={content} contentHi={contentHi} sidebar={sidebar} sideHeading="Life at IITB" />
  );
}
export default CultureAtIITB;
