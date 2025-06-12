import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";
import { Link } from "react-router-dom";

const LetterToParents = () => {
    const content = (<>
        <h1 className="text-4xl font-bold mb-5">Letter to Parents</h1>
        <p className="mb-4">Dear Parent/Guardian,</p>
        <p className="mb-4">
            Congratulations! The Institute Student Mentorship Program (ISMP) would like to welcome you and your ward to one of the most prestigious institutes in the country, the Indian Institute of Technology Bombay (IITB). As you may know, this institute is the alma-mater to some of the most distinguished personalities, globally. The institute aims, and strives to produce citizens who shall serve for the betterment of the society, country and above all, mankind.
        </p>
        <p className="mb-4">
            We believe that, as well-informed parents, you should become familiar with both the academic and extra-curricular lifestyle of the students on this campus, and get an idea about the opportunities that your ward will have here, as well as the underlying responsibilities that would be expected of him/her.
        </p>

        <h2 className="text-xl font-bold mb-2">Institute Student Mentor Programme (ISMP)</h2>
        <p className="mb-4">
            In the Institute, we have a group of credible senior students motivated to help guide the first year students with respect to all aspects of college life. The Institute Student Mentor Programme, aims at providing guidance and help to all the first-year students. The mentors help the new entrants make a smooth transition from their life at home to life on campus. It would be advisable for you to talk to the mentors on the day of the orientation. Moreover, it would be beneficial if you could also stay in touch with mentors during the course of the semester.
        </p>
        <h2 className="text-xl font-bold mb-2">
            Academic Structure
        </h2>
        <p className="mb-4">
            A typical academic year at IIT Bombay is divided into two semesters – Autumn Semester (July-November) and Spring Semester (January-May). The curriculum at IIT Bombay is based on the credit system. Each course is allotted credits based on the number of lectures, tutorials and lab hours per week.
        </p>
        <p className="mb-4">
            There is a continuous evaluation by means of quizzes, assignments, mid-semester, end-semester examinations and lab work throughout the semester. At the end of each semester, the student gets an SPI (Semester Performance Index) which is an average of the grades in each of the courses he/she had registered for in that semester, weighted with the credits of those courses respectively. CPI (Cumulative Performance Index) is a weighted average of all the SPIs (till date) weighted on the number of total credits each semester.
        </p>
        <p className="mb-4">
            It is advised that students do not miss classes due to trips home or otherwise. Also, it is important for all students to attend classes during the first week of each semester, except for genuine medical reasons. When medical problems arise, the student is advised to inform the mentor and the professors concerned if he/she is missing classes. Professors might require medical certificates issued or authenticated by the IITB Hospital or other supporting documents in such cases.
        </p>
        <p className="mb-4">
            Students who enter this institute every year are some of the best students in the country. Due to the competitive environment here, we have often seen students, who have until now always topped their class, find it difficult to obtain grades that meet their expectations. This has often led to students experiencing excessive pressure or students adopting an indifferent attitude which further reduces their academic performance. We hope that you would encourage your ward to put his/ her best foot forward - put in the best effort from his/her side.
        </p>

        <h2 className="text-xl font-bold mb-2">Hostel Life</h2>
        <p className="mb-4">
            At this institute, we believe in the overall development of our students. The general lifestyle of students includes a lot of extracurricular activities in the fields of sports, cultural and technical activities, at intra-hostel, inter-hostel and inter-college events. The environment here is very conducive to growth and our institute has some of the best facilities across all other colleges/institutes in India. So, we encourage students to take up whatever interests them, and we request you to support them in their choices. There is enough time in a normal IIT student’s day to fit in both academics and extracurricular activities without much stress. But, at the same time, it is advised that care must be taken to ensure proper time management such that academics are not neglected because of such activities.
        </p>
        <p className="mb-4">
            Hostels are an integral part of every IIT students’ life. The hostels are well equipped with the necessary infrastructure and mess facilities. First-year students stay in double-sharing hostel rooms with their batchmates.
        </p>
        <p className="mb-4">
            The transition of your ward, from your loving and caring hands to a completely new and competitive environment of IIT, could occasionally cause adjustment problems in the initial period of their stay. Many students find it difficult getting used to a roommate and hostel life for the first time. Sometimes, cultural, social and language differences further delay the settling in process. As mentors, we help the freshmen have a smooth transition so that this settling-in process is as short as possible and your ward feels comfortable in this new setting quickly.
        </p>
        <h2 className="text-xl font-bold mb-2">
            Financial Help
        </h2>
        <p className="mb-4">
            In case you are worried about the financial expenses, please note that help is available. Merit-Cum-Means Scholarship, Facility for Free Messing, Named Scholarships and Remission of Fee are some of the ways through which the students in need can be provided with financial help. The details are available at the following link: <Link to="http://www.iitb.ac.in/newacadhome/scholar.jsp" className="text-blue-600 hover:underline p-0!" target="_blank">http://www.iitb.ac.in/newacadhome/scholar.jsp</Link>
        </p>
        <h2 className="text-xl font-bold mb-2">Language Help</h2>
        <p className="mb-4">
            English is used for all official purposes and is the medium of instruction during classes. We understand that learning to speak and grasping english might prove to be a challenge for some students. We try to fulfil this need via our British Council program where trained professionals come and teach students the language from its very basics. Apart from that, students enthusiastic to learn english, can also benefit from student-run ELIT Classes which can help your wards improve their English language.
        </p>
        <h2 className="text-xl font-bold mb-2">
            Some important issues
        </h2>
        <p className="mb-4">
            Ragging in any form is strictly banned in the campus. The student should report any such untoward incident to his/her mentor immediately. We assure you that it will be dealt with confidentiality and with the highest priority. We believe that you will be reassured by the steps that have been taken by the Institute to prevent ragging. Interaction of the freshmen with seniors (other than the appointed mentors) is also regulated during their initial stay, so they get time to adjust. Strict penalties are very much in place, and mentors are always available to resolve any situations promptly. Rest assured, ragging has vanished from the IIT-Bombay campus.
        </p>
        <p className="mb-4">
            However, it is expected that the freshmen also develop a healthy rapport with their seniors who are amongst the brightest in the country and excel in various activities. In fact, a healthy senior junior interaction has been the hallmark of this institute and we would like to maintain it in that way.
        </p>

        <p className="mb-4">
            It is important to note, IIT Bombay considers the health of its students to be of ultimate importance. Considering the current pandemic, IIT Bombay is trying to make sure the onboarding is done smoothly.
        </p>
        <p className="mb-4">
            IIT Bombay is committed to provide appropriate support to all students in need. We also want to assure you that students will be called to the institute by the administration only when the institute is deemed safe to return.
        </p>
        <p className="mb-4">
            We hope that this gives you a fair idea about the life here on campus. This institute offers a wide range of opportunities and we hope that your ward shall have a productive and memorable time in the institute. In case you have any doubts or need to know more about any aspect of the life of a student at IITB, feel free to reach out to us using the information provided on the official Student Mentorship Program (SMP) website or via our official facebook page and we will be happy to answer all your questions.
        </p>

        <p className="mb-4">
            Best Wishes,<br />
            Student Mentorship Program
        </p>
        <br /><br />
        <h1 className="text-4xl font-bold mb-5">अभिभावक को पत्र</h1>
        <h2 className="text-xl font-bold mb-2">प्रिय माता-पिता / अभिभावक,</h2>
        <p className="mb-4">
            हमें आपको और आपके वार्ड को आईआईटीजेईई एडवांस्ड 2020 में अनुकरणीय सफलता के लिए बधाई देने में बहुत खुशी हो रही है | इंस्टीट्यूट छात्र मंथन कार्यक्रम (आईएसएमपी ) आपका और आपके वार्ड का स्वागत भारत में सबसे प्रतिष्ठित संस्थानों में से एक, आईआईटी बॉम्बे (आईआईटीबी ) में करता है । जैसा कि आप जानते हैं, यह संस्थान वैश्विक मानचित्र के कुछ विशिष्ट व्यक्तियों का गढ़ रहा है। हम ऐसे दिमागों को विकसित करने की आशा करते हैं जो हमारे समाज, हमारे देश और सम्पूर्ण मानव जाति के उन्नयन के लिए काम करेंगे।
        </p>
        <p className="mb-4">
            हम मानते हैं कि, अच्छी तरह से ज्ञात माता-पिता के रूप में, आपको इस संस्थान में छात्रों के शैक्षिक और अतिरिक्त पाठ्यचर्या दोनों की जीवन शैली के साथ परिचित होना चाहिए और अपने बच्चे के साथ-साथ अंतर्निहित जिम्मेदारियों के विभिन्न अवसरों के बारे में जानकारी होनी चाहिए ।
        </p>
        <p className="mb-4">
            इस संसथान के अध्यापक यह सुनिश्चित करने में कड़ी मेहनत करते है की यहाँ पढ़ रहे हर विद्यार्थी की अकादमिक जरूरतों और शैक्षणिक आवश्यकताओं का अच्छे से ध्यान रखा जाये और उसका यहाँ का समय लाभदायक बने । हालांकि, कई बार हो सकता है जब छात्रों को मदद, अकादमिक या अन्यथा की आवश्यकता होती है, और हम, आईएसएमपी में यह सुनिश्चित करते है की यह जरूरतें समय पर और सबसे अच्छी तरह पूरी हो रही है । हम आपको यह सुनिश्चित करने के लिए अपनी सहायता का विस्तार करना चाहते हैं कि आप इस संस्थान के बारे में कुछ चीजें जानते हैं, यहां सामान्य ज्ञान प्राप्त करने के लिए कि कैसे चीजें यहाँ काम करती हैं यह पत्र आपको उसी को समझने में मदद करने के उद्देश्य से लिखा गया है |
        </p>
        <h2 className="text-xl font-bold mb-2">
            इंस्टीट्यूट छात्र मंथन कार्यक्रम (आईएसएमपी )
        </h2>
        <p className="mb-4">
            इस संस्थान में सभी प्रथम वर्ष के छात्रों के परामर्शदाता (मेंटर) के रूप में सम्मानीय और वरिष्ठ चौथे / पाँचवे वर्ष में पढ़ रहे छात्र हैं। इन सलाहकारों ने एक साथ छात्र परामर्शदाता (मेंटर) कार्यक्रम का गठन किया है जिसका उद्देश्य प्रथम वर्ष के छात्रों को मार्गदर्शन और सहायता प्रदान करना है। यह मेंटर पहले साल के छात्रों का घर से कॉलेज के एक कष्टरहित संक्रमण बनाने में और अपने रास्ते में बाधाओं को दूर करने में मदद करते हैं। जब आप अपने वार्ड के साथ अभिविन्यास के लिए कॉलेज परिसर आयेंगे हैं तो आपका मेंटर्स से मिलना उचित रहेगा। यदि आप सेमेस्टर के दौरान मेंटर्स के साथ संपर्क में रहें तो यह फायदेमंद रहेगा।
        </p>
        <h2 className="text-lg font-semibold mb-2">शैक्षणिक संरचना</h2>
        <p className="mb-4">
            आईआईटी बॉम्बे में एक शैक्षणिक वर्ष दो सेमेस्टर में विभाजित है - शरद ऋतु सेमेस्टर (जुलाई-नवंबर) और वसंत सेमेस्टर (जनवरी-अप्रैल)। आईआईटी मुंबई में पाठ्यक्रम क्रेडिट प्रणाली पर आधारित है। हर कोर्स में प्रति सप्ताह व्याख्यान, ट्यूटोरियल और प्रयोगशाला घंटे की संख्या के आधार पर क्रेडिट आवंटित किया जाता है।
            क्विज़, असाइनमेंट, मिड सेमेस्टर, एंड-सेमेस्टर परीक्षाओं और प्रयोगशाला सेमेस्टर के माध्यम से छात्रों का निरंतर मूल्यांकन किया जाता है। प्रत्येक सेमेस्टर के अंत में, छात्र एक एसपीआई (सेमेस्टर परफॉर्मेंस इंडेक्स) प्राप्त करता है, जो उस सेमेस्टर पाठ्यक्रमों के क्रेडिट के साथ क्रमशः प्रत्येक पाठ्यक्रम में ग्रेड की औसत है। सीपीआई (संचयी प्रदर्शन सूचकांक) सभी एसपीआई के एक भारित औसत (आज तक) कुल क्रेडिट की संख्या पर प्रत्येक सेमेस्टर भारित है।
        </p>

        <p className="mb-4">
            कक्षाओं में एक स्थिर उपस्थिति बनाए रखने के महत्व को कम नहीं आँका जा सकता है। यह सलाह दी जाती है कि छात्र घर की यात्राएं या अन्यथा के कारण कक्षाएं ना छोड़े। इसके अलावा, सभी छात्रों के लिए प्रत्येक सेमेस्टर के पहले सप्ताह के दौरान कक्षाओं में उपस्थित होना अनिवार्य है, समुचित चिकित्सा कारणों को छोड़कर। अगर चिकित्सकीय समस्याएं पैदा होती हैं, तो छात्र को सलाह दी जाती है कि वह मेंटर और प्रोफेसरों को सूचित करे कि क्या वह कक्षाएं में अनुपस्थित रह रहा है। प्रोफेसरों को ऐसे मामलों में आईआईटीबी अस्पताल या अन्य सहायक दस्तावेजों द्वारा जारी या प्रमाणित मेडिकल प्रमाण पत्रों की आवश्यकता हो सकती है।
        </p>
        <p className="mb-4">
            हर साल इस संस्थान में प्रवेश करने वाले छात्र देश के कुछ बेहतरीन दिमाग वाले होते है । यहां प्रतिस्पर्धी माहौल के कारण, हम अक्सर ऐसे मामलों का अनुभव करते हैं, जहां छात्रों ने हमेशा विद्यालय में अपनी कक्षा में प्रथम स्थान प्राप्त किया था, और यहाँ उन्हें अपनी उम्मीदों से अनुसार ग्रेड प्राप्त करना मुश्किल हो गया। यह अक्सर दो चरम सीमाओं में से एक की तरफ चले जाता है: कुछ छात्र अत्यधिक माता-पिता के दबाव का सामना करते हैं, जबकि अन्य केवल एक उदासीन रवैया अपनाते हैं जो आगे उनके शैक्षणिक प्रदर्शन को कम करता है। हम आशा करते हैं कि आप अपने वार्ड को अपने सर्वश्रेष्ठ कदम को आगे बढ़ाने के लिए प्रोत्साहित करेंगे - परिणामों के बजाय, उद्देश्य के रूप में अपनी ओर से सर्वोत्तम प्रयास का इलाज करें।
        </p>
        <h2 className="text-xl font-bold mb-2">छात्रावास जीवन</h2>
        <p className="mb-4">
            इस संस्थान में हम अपने छात्रों के समग्र विकास में विश्वास करते हैं। विद्यार्थियों की सामान्य जीवन शैली में खेल-कूद, सांस्कृतिक और तकनीकी गतिविधियों के क्षेत्रों में इंट्रा हॉस्टल, इंटर होस्टेल और इंटर कॉलेज कार्यक्रमों में बहुत से गतिविधियों को शामिल किया गया है। पर्यावरण विकास के लिए बहुत अनुकूल है और हमारे संस्थान में देश भर में कुछ बेहतरीन सुविधाएं हैं। इसलिए, हम विद्यार्थियों को उन हितों को उठाने के लिए प्रोत्साहित करते हैं जो उन्हें पसंद हैं और आपसे अनुरोध करते हैं कि आप उनके विकल्पों में सहायता करें। एक सामान्य आईआईटी छात्र के जीवनशैली में एक दिन में पर्याप्त शिक्षा के साथ साथ पाठ्येतर गतिविधियों के लिए पर्याप्त समय होता है। लेकिन, साथ में यह सलाह भी दी जाती है कि उचित समय प्रबंधन सुनिश्चित करने के लिए देखभाल की जानी चाहिए ताकि ऐसी गतिविधियों के कारण शैक्षणिक कामों की उपेक्षा न हो।
        </p>
        <p className="mb-4">
            हॉस्टल प्रत्येक आईआईटी छात्रों के जीवन का अभिन्न अंग बनाते हैं। हॉस्टल अच्छी तरह से आवश्यक बुनियादी सुविधाओं और मैस सुविधाओं से लैस हैं | प्रथम वर्ष के छात्र अपने बैचसमेट्स के साथ दो - साझा कमरों में रहते हैं।
            आईआईटी के पूरी तरह से नए प्रतिस्पर्धी माहौल में अपने प्रेम और देखभाल वाले हाथों से आपके वार्ड का संक्रमण, कभी-कभी अपने प्रवास के शुरुआती दौर में समायोजन समस्याओं का कारण हो सकता है। कई छात्रों को यह पता चलता है कि पहली बार रूममेट और हॉस्टल जीवन मुश्किल हो रहा है। कभी-कभी, सांस्कृतिक, सामाजिक और भाषा मतभेद छात्र को संस्थान के माहौल से अनुकूलित होने की प्रक्रिया में देरी करते हैं। मेंटर्स के रूप में, हम नए लोगों को एक कष्टरहित संक्रमण करने में मदद करते हैं ताकि यह प्रक्रिया का समय जितना कम हो सके उतना हो और आपके वार्ड इस नए वातावरण में आसानी से सहज महसूस करें।
        </p>

        <h2 className="text-xl font-bold mb-2">
            वित्तीय सहायता
        </h2>
        <p className="mb-4">
            अगर आप अपने वार्ड को कॉलेज में रखने के लिए चिंतित है की वह कितना महंगा हो, तो आप चिंतित न हो। आईआईटीबी में उन लोगों को सहायता दी जाती है जिनके लिए इसकी आवश्यकता होती है, चाहे वह शैक्षिक, वित्तीय या किसी अन्य प्रकार का हो। मेरिट कम अर्थ के रूप में छात्रवृत्ति और निशुल्क मेसिंग पात्र छात्रों को प्रदान की जाती है जो ट्यूशन फीस और मेस फीस को क्रमशः छूट देते हैं। आप इन के बारे में अधिक जानकारी छात्रवृत्ति पर दी गई पुस्तिका में देख सकते हैं जो आपको शीघ्र ही मिलेगी या अपने वार्ड के मेंटर से पूछें।
        </p>
        <h2 className="text-xl font-bold mb-2">
            कुछ महत्वपूर्ण मुद्दे
        </h2>
        <p className="mb-4">
            <b>
                किसी भी रूप में रैगिंग को कैंपस में प्रतिबंधित किया गया है। विद्यार्थी को सलाह है कि उसे तुरंत इस तरह के अप्रिय घटना को अपने / उसके मेंटर को रिपोर्ट करना चाहिए। हम आपको आश्वस्त करते हैं कि इसे गोपनीयता और उच्चतम प्राथमिकता के साथ पेश किया जाएगा। हम मानते हैं कि आपको रैगिंग को रोकने के लिए संस्थान द्वारा उठाए गए कदमों के लिए आश्वस्त किया जाएगा। वरिष्ठों (नियुक्त सलाहकारों के अलावा) के साथ नए विद्यार्थियों का इंटरेक्शन पहले महीने के दौरान कड़ी निगरानी में रक्षा जाता है, इसलिए उन्हें समायोजित होने का समय मिलता है। सख्त दंड का नियम हैं, और मेंटर हमेशा किसी भी स्थिति को तुरंत हल करने के लिए उपलब्ध हैं। आश्वस्त रहें, आईआईटी-बॉम्बे परिसर में रैगिंग गायब हो गई है।
            </b>
        </p>
        <p className="mb-4">
            हालांकि, उम्मीद की जाती है कि नए विद्यार्थी वरिष्ठ विद्यार्थियों के साथ स्वस्थ तालमेल विकसित करेंगे क्योंकि वे खुद देश में प्रतिभाशाली और विभिन्न गतिविधियों में उत्कृष्टता रखते हैं। वास्तव में, एक स्वस्थ सीनियर जूनियर इंटरैक्शन इस संस्थान की पहचान है और हम उसे बनाए रखना चाहते हैं। आपके साथ उपर्युक्त समस्याओं को साझा करने का हमारा उद्देश्य आपको उन्हें अवगत करना है। माता-पिता के रूप में, आपको चिंता की जरूरत नहीं है, लेकिन मानसिक तैयारी और एहतियाती उपाय निश्चित रूप से मदद करेंगे।
        </p>
        <p className="mb-4">
            यह ध्यान देने वाली बात है कि आईआईटीबी अपने छात्रों के स्वास्थ को सबसे उच्च महत्व देता है। अभी चल रही महामारी को मद्देनजर रखते हुए, संस्थान के बिना किसी अड़चन के छात्रों को बुलाने की प्रक्रिया जारी है। आइआइटीबी सभी जरूरतमंद छात्रों को उचित सहायता देने के लिए प्रतिबद्ध है और आपको आश्वासन देता है कि छात्रों को तभी बुलाया जाएगा जब कैंपस लौटने के लिए सुरक्षित होगा।
        </p>
        <p className="mb-4">
            आपको संदेह है या आपको आईआईटीबी के किसी भी पहलू के बारे में अधिक जानने की आवश्यकता है, तो कृपया अपने फेसबुक अकाउंट का इस्तेमाल करके नीचे टिप्पणी करें और हम आपके सवालों के जवाब देने में प्रसन्न होंगे। हमें उम्मीद है कि यह जानकारी आपको अगले कुछ वर्षों में अपने वार्ड के जीवन के बारे में एक उचित विचार देती है। यह संस्थान सभी के लिए अवसरों की एक विस्तृत श्रृंखला प्रदान करती है जो जीवन के विभिन्न क्षेत्रों में सीखना चाहते हैं और हमें उम्मीद है कि संस्थान में उन्हें एक उत्पादक और यादगार समय होगा।
        </p>
        <p className="mb-4">
            <b>
                शुभकामनाएँ सहित, <br />
                विद्यार्थी परामर्शदाता कार्यक्रम</b>
        </p>
    </>);

    const sidebar = navData["Incoming Students"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="Incoming Students" />
    )
}

export default LetterToParents;