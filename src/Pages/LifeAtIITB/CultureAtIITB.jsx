import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const CultureAtIITB = () => {
  const content = (
    <>
      <h1 className="text-4xl font-bold mb-5">Hostel Culture</h1>
      <h2 className="text-xl font-bold mb-2">Hostel Allocation</h2>
      <p className="mb-4">
        Room allotment for first year students will be done in following manner this year :
      </p>
      <p className="mb-4">
        For Boys – Students will be allotted either Hostel 15 or Hostel 16. <br/>
        For Girls – A separate wing of Hostel 16 (Hostel 16C) is allotted to girls. 
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Hostel structure: On each floor, there are three subsections (called wings) – each wing has 6 rooms, each of which will be shared by 2 students.</li>
      </ul>
      <p className="mb-4">
        You get the room right when you reach IIT Bombay (on the day of registrations i.e. 20th July 2026), after arriving and noting down your details in the hostel warden’s office.
      </p>
        <h2 className="text-xl font-bold mb-2">Basic Amenities</h2>
      <p className="mb-4">
        Each room has a pair of beds, tables, chairs, ceiling fans, tube lights, cupboards and are equipped with 24x7 high speed internet connectivity. There are 2 washrooms per 6 rooms with 24x7 running water (both hot and cold). Each Hostel has a mess (dining hall), a computer room, a gym, a TV, sports grounds and indoor games like Table Tennis, Carrom, Chess, the equipment for which can be availed against your ID Card. Also, stationery and xerox shops are present in Hostel 15 and 16 for fulfilling basic requirements.
      </p>
      <h2 className="text-xl font-bold mb-2">Hostel/Room Change</h2>
      <p className="mb-4">
        The procedure of shifting rooms basically goes through the warden of the hostel through a written application citing the reasons for the change. It will be a great experience to have a new person as a roommate which will eventually help you in making new friends which you'll cherish for your life. Though, definitely if both of you agree, it will make things easier.
      </p>
      <h2 className="text-xl font-bold mb-2">Rules for visitors</h2>
      <p className="mb-4">
        Parents are not allowed to stay in the hostels without prior permission from the Hostel Coordinating Unit (HCU). Till 10 PM, female visitors to boys hostels and boys wings and male visitors to girls hostel and girls wing in Hostel 16 are allowed, after entering details in a register kept with the security at the hostel entrance and after depositing the host's I-Card. After 10PM, entry is restricted only to the common areas — Mess, Lounge and Canteen.
      </p>
        <h2 className="text-xl font-bold mb-2">Hostel Activities</h2>
      <p className="mb-4">
        There are a plethora of activities that go around in the hostel which makes life fun. Lot of intra hostel events and competitions (among your hostel inmates) or practice for inter hostel (with other hostels) competitions in sports and cultural activities take place all year round. Also, a variety of festivals like Lohri, Holi, Ganesh Chaturthi, Janmashtami, Dussehra, Diwali etc. are celebrated in the hostels, along with flag hoisting on Republic Day and Independence Day, keeping the atmosphere in the hostels vibrant and full of life all year round. Do participate in whatever interests you, of course after having devoted enough time to academics. It helps in breaking the ice and socializing with your batchmates and seniors.
      </p>
      <h2 className="text-xl font-bold mb-2">Hostel Council</h2>
      <p className="mb-4">
        The hostel council is divided into Cultural (Cult), Maintenance (Maint), Mess and Sports. Each of these councils is headed by Hostel Councillors (or Cos - generally third year students or thirdies) with Hostel Secretaries (Secys - second year students or sophies) assisting them in the administration of the hostels. All cultural programs and activities are the responsibility of the Cult Council; likewise all sports events are managed by the Sports Council. The Mess Council looks after mess and canteen while the Maint Council ensures proper working of the common areas and the hostel maintenance. All the councils are supervised by the Hostel General Secretary (GSec - a fourthie or fifthie = big daddies). To oversee hostel funds and the Student Council, every hostel has a Hall Manager and a Warden and to assist them, there are Warden Nominees. Every hostel also has an Alumni Secretary to maintain cordial relations with the hostel alumni. Computer Secretary (Comp Secy) takes care of the Computer Room and Internet connection problems while Technical Secretary (Tech Secy) manages the Technical Events at hostel and institute level. More details on the specific functions of each council member would be conveyed to you once you reach here
      </p>
      <h2 className="text-xl font-bold mb-2">Hostel Spirit and Wing Culture</h2>
      <p className="mb-4">
        This is the best part of the whole year. With time, all hostel residents become part of one big family. For nothing else but the sense of belonging, you are expected to support and cheer for your hostel and other residents in inter hostel events (this includes hooting for your hostel during the freshman orientation programmes for various clubs, of which you will come to know in due time :P). Blocks of some 10-15 rooms constitute a wing in each hostel and your wingmates (wingies) will be your immediate support group in more ways than one. We cherish the time we have spent with our wingies and we hope you do so too. Your wingies might be people from very diverse backgrounds but do not let that hinder interaction in any way. In fact, use it to your advantage. You would go with your wingies on intra hostel volley and cricket matches, treats (birthdays, crack acads, mentor's placement et al), treks, tours, hang-outs etc all the time. At the same time, socialize with other hostelers - batchmates and seniors alike - all the time. Also, ragging, simply, is a strict no no! Strict actions (expulsion from IITB) are taken against those found guilty.
      </p>

        {/* Lingo! */}
        <h1 className="text-4xl font-bold mb-5">Lingo</h1>
        <p className="mb-1">
            <b>Arbit</b> - /ar-bit/ - adj - Short for arbitrary. Something you say when you can’t think of anything else to say.
        </p>
        <p className="mb-1">
            <b>Bandi</b> - /bun-dee/ noun - A word used for all girls, which is generally a rare species in IITB
        </p>
        <p className="mb-1">
            <b>Chamka</b> - chum-ka/ - verb - Used to specify understanding anything be it a new word, a joke or any abstract concept
        </p>
        <p className="mb-1">
            <b>Craxxxx</b> - /craks-ks-ks-ks-ks-ks/ - verb - Any achievement (Big or Small) is the activity of “Craxx”. In text, the number of suffix x’s denote the level of achievement
        </p>
        <p className="mb-1">
            <b>DAC</b> - /dack/ - noun - Disciplinary Action Committee. Something that you don’t want, it’s a committee to decide the punishment for a person who breaks the rules.
        </p>
        <p className="mb-1">
            <b>Dadda</b> - /dudd-AA/ - noun - Dual Degree students
        </p>
        <p className="mb-1">
            <b>Ditch</b> - /d-ich/ - excl. – Like the literal meaning, it signifies dropping the old plan (and starting to work on a new one!)
        </p>
        <p className="mb-1">
            <b>DoSA</b> - /dosa/ - noun - Dean of Student Affairs. (Almost) Everything under the sun comes under his discretion.
        </p>
        <p className="mb-1">
            <b>enthu</b> - /enthu/ - verb - One of the Most famous words of IITB Lingo - Enthusiastic. Eg "Kaun hai enthu"
        </p>
        <p className="mb-1">
            <b>Farra</b>  /fu’r-rah/ - noun. – FR. A grade you totally, desperately, insanely want to avoid
        </p>
        <p className="mb-1">
            <b>Fight</b> - /fite/ - verb, also noun - Inspired from its literal sense - To try very hard for something. Eg "Bahut fight hai" "Fight maar. Give up mat maar."
        </p>
        <p className="mb-1">
            <b>Freshie</b> - /fresh-ee/ - noun - First Year student.
        </p>
        <p className="mb-1">
            <b>Funda(e)</b> - /fund-aa OR fund-ay/ - noun -Very important tricks of the trade, usually passed on from the seniors to the juniors
        </p>
        <p className="mb-1">
            <b>God</b> - /gawd/ - adj. - as in Tu God hai (meaning, you are awesome, or you are The One)
        </p>
        <p className="mb-1">
            <b>Infi</b>  - /in-fee/ - adjective - This word is used INFI (Okay, this is meta now :P) - Short for infinite. An overused prefix. e.g. infidayamax. (See infinite, daya, -max)
        </p>
        <p className="mb-1">
            <b>insti</b> - /in-stee/ - noun – Our Beloved Institute ❤. Yes, this one.
        </p>
        <p className="mb-1">
            <b>junta</b> - /jun-taa/ - noun - You want to address a group of people and don’t know how? No issues - call them junta (Fun Fact - Even some profs do :P )
        </p>
        <p className="mb-1">
            <b>Kat</b> - /cut/ - verb - Lose out (esp. sarcastic usage). E.g. "Kat raha hai be" "Kat le!"
        </p>
        <p className="mb-1">
            <b>Lukkha</b> - /look-kha/ - verb – To do some time-pass that takes you somewhere. Anywhere. On second thoughts, even nowhere. Especially Nowhere!
        </p>
        <p className="mb-1">
            <b>Macha</b> - /Much-AA/ - excla. - often followed by any number of x’s (as in “MACHAXX!”, “MACHAXXXX!”, “MACHAXXXXXXXXX!”) – to infinitely crack something (See infinite. See craxx)
        </p>
        <p className="mb-1">
            <b>Matka</b> - /mutt-kaa/ - noun - MTech student (also, matki) or for any generaal PG (see Generaal). Not to be confused with dadda or daddi (See dadda)
        </p>
        <p className="mb-1">
            <b>Max</b> - /maex/ - adj. - suff. - also, maxx or maxxxx, superlative degree of anything, as in "CRACKMAXX!"
        </p>
        <p className="mb-1">
            <b>mug</b> - /mug/ - verb – To study or to pretend to study :P
        </p>
        <p className="mb-1">
            <b>nightout</b> - /nie-tout/ - noun – A very intuitive word - avoiding sleep throughout a night in a bid to mug, watch a movie, or for nothing in particular. Lukkha is often cited as both the cause and effect of nightouts
        </p>
        <p className="mb-1">
            <b>PAF</b> - /pahf/ - noun - Short for Performing Arts Festival - A festival where all students put in huge amounts of effort for enacting plays (including making the sets themselves). Very widely known as “PAF GOD Hota hai” (See God)
        </p>
        <p className="mb-1">
            <b>Pain</b> - /payn/ - noun - Anything bad (Literally anything) - Something that makes you give-up (See give-up)
        </p>
        <p className="mb-1">
            <b>Polt</b> - /polt/ - noun - Politics. Also, poltu.
        </p>
        <p className="mb-1">
            <b>RG</b> - /ar-jee/ - noun - Short for ‘One who tries to improve his grades, taking unjust advantage of ‘Relative Grading’
        </p>
        <p className="mb-1">
            <b>SAC</b> - /sack/ - noun - Student Activity Center
        </p>
        <p className="mb-1">
            <b>Scope</b> - /sko-p/ - excl. - A very counter intuitive word (No one knows how it got adopted in the lingo) - No chance in hell!
        </p>
        <p className="mb-1">
            <b>Sophie</b> - /so-fee/ - noun - Sophomore or Second Year student.
        </p>
        <p className="mb-1">
            <b>Sorry rahega</b> - jury still out on it being a verb or noun, it means something will not get done. Used stand alone or in conjunction with "nahi ho payega"
        </p>
        <p className="mb-1">
            <b>Valfi</b> - /val-fee/ - noun - Valedictory Function. A time in April when the beans are spilled on each and everyone passing out.
        </p>
        <p className="mb-1">
            <b>YP</b> - /why-pee/ - noun - Nothing to do with calls of nature. It’s actually short for the Y-Point gate. Your one-stop solution for everything from stationery, books, bicycles to hair-cuts
        </p>
        <p className="mb-4"></p>
        <h1 className="text-4xl font-bold mb-5">Internet Usage in IIT Bombay</h1>
      <p className="mb-4">
        <b>“There’s life without the Internet? Really? Send me the link.”</b>
      </p>
      <p className="mb-4">
        The Internet is one of the first things you want to get sorted out once you are on campus, be it to upload your stories on Snapchat, Facebook and Instagram, or to get your lecture notes and books, and get down to studying. So how and where can I access the Internet?  
      </p>
      <h2 className="text-xl font-bold mb-2">WiFi Access (recommended)</h2>
      <p className="mb-4">
        Almost all areas on campus, including hostels, the Library, and classrooms in the Lecture Hall Complex (LHs, LCs, and LTs), are equipped with high-speed WiFi. Students can connect using their LDAP ID and password.
        <br/>
        Simply turn on your WiFi and connect to either IITB-Wireless or eduroam. Some devices may ask for an “anonymous identity” while connecting — this field can be left blank.
        <br/>
        This WiFi system is the most convenient way to stay connected, offering seamless internet access without any physical cables.
        <br/>
        For short-term visitors, the IITB-Guest WiFi network is available, which also requires LDAP authentication through a separate login portal.
<br/><br/>
        For Configuration Settings, follow this link: <br/>
        <a className="text-blue-600 hover:underline" style={{padding: '0'}} target="_blank" href="https://www.cc.iitb.ac.in/#v-pills-howto-wireless">https://www.cc.iitb.ac.in/#v-pills-howto-wireless</a>  <br/>
        (CC IITB Website → How To’s → Wireless)

      </p>
        <h2 className="text-xl font-bold mb-2">Hostel LAN Access</h2>
      <p className="mb-4">
        All hostel rooms have a LAN Port which you can use to connect to the IIT Bombay network and to the Internet, provided you have a computer. Just hook your computer up to the LAN port with a cable, and you should be connected to the network. Once that’s done, to access internet,
        go 
        to <a className="text-blue-600 hover:underline" style={{padding: '0'}} target="_blank" href="https://internet.iitb.ac.in">https://internet.iitb.ac.in</a>,
        log in your LDAP ID (Roll number) and password, and you're good to go. <br/>
        For more details, please 
        visit <a className="text-blue-600 hover:underline" style={{padding: '0'}} target="_blank" href="https://www.cc.iitb.ac.in/">https://www.cc.iitb.ac.in/</a>. 
      </p>
        
    <h2 className="text-xl font-bold mb-2">Other Hostel Facilities</h2>
      <p className="mb-4">
        You can use the Hostel Computer Room for accessing the Internet. The Hostel Xerox shop owner also sometimes lets you surf the Internet for a small fee. Check with the respective shopkeeper for details.
      </p>
      <h2 className="text-xl font-bold mb-2">OSL (Old Software Lab)</h2>
      <p className="mb-4">
        The CS101 course labs will be held here. Apart from the few hours per week that you get as part of your lab timings, this lab is not accessible. It also closes after the last running lab course and is not accessible 24x7. Your lab timings would be just enough for you to finish your lab assignments. You will rarely have time to do anything apart from your CS assignment in the OSL.
      </p>
      <h2 className="text-xl font-bold mb-2">Department Software Labs</h2>
      <p className="mb-4">
        Depending on which department you're in, you may have access to a mediocre to excellent computer lab facility. The NSL (New Software Lab) is the department lab of the Department of CSE. It is accessible 24X7 and is WiFi enabled. The Department of Mechanical Engineering also has a Software Lab that is accessible to all its students any time of the day or night. The Department labs are very good places to study as they are air-conditioned and quiet. Depending on your department, you may or may not have a WiFi network accessible to students. Some departments either have too few computers or irregular lab timings. So this option may not work for you if you happen to be among the unlucky ones. This option also has the disadvantage of being far away from campus
      </p>
      <h2 className="text-xl font-bold mb-2">Library</h2>
      <p className="mb-4">
        The entire library complex is WiFi enabled. There are also a few PCs distributed across the library. These are, however, intended to be used to look for books and you should refrain from using them for other purposes.
      </p>
    </>
  )
  const contentHi = (
    <>
      <h1 className="text-4xl font-bold mb-5">हॉस्टल संस्कृति</h1>
      <h2 className="text-xl font-bold mb-2">हॉस्टल आवंटन</h2>
      <p className="mb-4">
        इस वर्ष प्रथम वर्ष के छात्रों को कमरों का आवंटन निम्न प्रकार से किया जाएगा:
      </p>
      <p className="mb-4">
        लड़कों के लिए — छात्रों को हॉस्टल 15 या हॉस्टल 16 आवंटित किया जाएगा। <br/>
        लड़कियों के लिए — हॉस्टल 16 का एक अलग विंग, हॉस्टल 16C, लड़कियों को आवंटित किया जाएगा।
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>हॉस्टल संरचना: प्रत्येक मंज़िल पर तीन उपखंड होते हैं जिन्हें विंग कहा जाता है। प्रत्येक विंग में 6 कमरे होते हैं, और प्रत्येक कमरा 2 छात्रों द्वारा साझा किया जाएगा।</li>
      </ul>
      <p className="mb-4">
        IIT बॉम्बे पहुँचने पर, पंजीकरण के दिन यानी 20 जुलाई 2026 को, हॉस्टल वार्डन के कार्यालय में अपने विवरण दर्ज कराने के बाद आपको कमरा मिल जाएगा।
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
  )
  const sidebar = navData["Life at IITB"];
  
  return (
    <Page content={content} contentHi={contentHi} sidebar={sidebar} sideHeading="Life at IITB" />
  )
}
export default CultureAtIITB
