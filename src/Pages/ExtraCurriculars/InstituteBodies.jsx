import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const InstituteBodies = () => {
    const content = (<>
        <h1 className="text-4xl font-bold mb-5">Institute Bodies(IBs)</h1>
        <h2 className="text-xl font-bold mb-2">NSS</h2>
        <h2 className="text-lg font-semibold mb-2">NSS IIT Bombay</h2>
        <p className="mb-4">
            How many times have you thought that you wish to give something back to society and country? How many times have you thought that I will surely start when the right time comes? Well, as they say, the best time to start was yesterday and the next best time is now! NSS IIT Bombay gives you an opportunity of contributing to Community service while the time you invest also contributes towards fulfilling your academic requirements.
        </p>

        <h2 className="text-lg font-semibold mb-2">What is NSS?</h2>
        <p className="mb-4">
            As part of NOCS01 and NOCS02 (Compulsory courses for passing out of IIT Bombay), you can opt for NSS, NSO or NCC. Thus NSS (National Service Scheme) becomes part of your curriculum during your first year where you invest your time for the betterment of society around you. NSS IIT Bombay is the largest volunteer group inside campus working in the field of Community service and has been working in various fields. Education of underprivileged kids, improving their lifestyle, maintaining the biodiversity, using engineering knowledge to improve the innovations by uneducated, sustainable development are a few of the areas.
        </p>
        <p className="mb-4">
            NSS organises sessions on daily basis. First year students have the responsibilities like teaching school subjects and other extra curricular activities to the children, planting tree saplings for specific purposes and maintaining them, innovating different activities like how can we reuse the trash, making something useful from trash, surveying and suggesting improvements in innovations by grassroot innovators, meeting underprivileged people like construction workers, understanding their problems and working towards solving them, creating content for NSS YouTube channels (Open Learning Initiative -an initiative to make educational content available in regional language and Voice for Purpose - an initiative for making audiobooks available for visually challenged). These are just a few activities among the many activities you can participate.
        </p>
        <p className="mb-4">
            First year students, when selected in NSS, are allotted a department inside NSS according to their preferences and the team guides them regarding all the activities. If you have never experienced the joy of giving and want to explore the ecstasy of doing something selflessly, this is the right place to invest your time in!
        </p>
        <p className="mb-4">

        For more details, you may visit <a href="https://nss.gymkhana.iitb.ac.in/home/" className="text-blue-600 hover:underline p-0!">NSS IIT Bombay website</a> or facebook page.
        </p>

        <h2 className="text-xl font-bold mb-2">SARC</h2>
        <p className="mb-4">
           What distinguishes this college from many others & makes it renowned all over the world? It is our alumni who have achieved great heights in myriad fields and made a mark for themselves in this super-competitive world. But how do we effectively utilize this wealth of knowledge, success and fame that our alumni have achieved? That is where SARC comes in. 
        </p>
        <p className="mb-4">
           Student Alumni Relations Cell (SARC) is an organization run by the students of IIT Bombay. Unlike other student bodies, it is an Institute Body (which means that it is officially supported and formed by the college) which works with the Dean ACR Office & IITB Alumni Association. It is dedicated to strengthening the bond between students and alumni. SARC has been able to gather donations from our alumni for the last many years, which include scholarships, funds for construction and research, allowances for workers, and many other programmes! 
        </p>
        <p className="mb-4">
            SARC conducts several initiatives in its flagship event, Alumination, like Mock Interviews, Group Discussions, Speed Mentoring, Workshops, etc. which help students to interact with alumni in person & get both career & general life guidance. SARC has also launched Alumni Student Mentorship Program (ASMP), whose aim is to allot alumni mentors to students to help them make crucial life-changing decisions. Phonathon allows students to have one-on-one telephonic conversations with alumni. We conduct Reunions as well, where alumni revisit old memories and cherish their everlasting bonds. Anyone involved with SARC gets the golden chance of duologues with eminent and distinguished alumni like Nandan Nilekani, Jairam Ramesh, Pranav Mistry, Bhavish Aggarwal and several others. By executing alumni-driven initiatives for the benefit of students and enabling a mutually fruitful relationship between students and alumni, SARC volunteers get an insider’s view into the alumni’s world. Everyone is encouraged to be a member of the SARC family and get the invaluable experience of fraternizing with alumni and learning from them!
        </p>
        <p className="mb-4">
        To know more visit us at:<br /> 
        <a href="https://acr.iitbombay.org/sarc/" className="text-blue-600 hover:underline p-0!">https://acr.iitbombay.org/sarc/</a><br />
        <a href="www.facebook.com/SARC.IITB/" className="text-blue-600 hover:underline p-0!">www.facebook.com/SARC.IITB/</a>
        </p>

        <h2 className="text-xl font-bold mb-2">
           Saathi 
        </h2>
        <p className="mb-4">
            With the onset of puberty, one grows more conscious of the changes happening in their own body as well as their feelings towards others. Unlike others, some of us may not feel comfortable with the gender assigned to us at birth. Similarly, not everyone is attracted only to people of the opposite sex. Some labels commonly used by people to describe themselves are lesbian, gay, bisexual, asexual, transgender, intersex, and queer. Collectively, people who lie outside the typical gender identity and sexuality are known as the LGBTQ+ community. Being a minority, they feel alone, confused and excluded from the mainstream. They may also face discrimination and bullying on revealing their preferences. At IIT Bombay, however, no student needs to feel alone.
        </p>
        <p className="mb-4">
            Saathi (‘companion’) at IIT Bombay is an LGBTQ+ support and resource group. We are committed to providing a community for LGBTQ+ individuals on campus. We organize events all through the year such as workshops, awareness days, movie screenings and informal meetups. Most of these events are open to all, irrespective of gender identity or sexual orientation. Even if you identify as straight (as many of our members do), these events will be a great place to know more about the community and learn how to be great allies and support your LGBTQ+ friends.
        </p>
        <p className="mb-4">
            All our events are safe spaces wherein we even do not ask anyone their sexuality or gender identity. However, we understand that you may be apprehensive of your identity being disclosed outside the group. You can still get in touch with us via e-mail or Facebook. To remain up-to-date with our events and other information, join our Google group, look up ‘Saathi, IIT Bombay’ on Google Groups or send an email at <a href="saathi-iitb+subscribe@googlegroups.com" className="text-blue-600 hover:underline p-0!">saathi-iitb+subscribe@googlegroups.com</a>. If required, you can also contact us on +91-7738452988, with your anonymity completely assured.
        </p>
        <p className="mb-4">
        We invite you to be a part of Saathi, irrespective of your gender or orientation. We hope that your stay at IIT Bombay will be as bright and vibrant as the colours of the rainbow!<br /> 
        <a href="http://www.facebook.com/saathi.iitb" className="text-blue-600 hover:underline p-0!">http://www.facebook.com/saathi.iitb</a><br />
        <a href="saathi.iitbombay@gmail.com" className="text-blue-600 hover:underline p-0!">saathi.iitbombay@gmail.com</a>
        </p>

        <h2 className="text-xl font-bold mb-2">NCC</h2>
        <p className="mb-4">NCC IIT Bombay intends at developing patriotism, brotherhood and discipline in the cadets, thereby creating dynamic and visionary leaders of future India.</p>
        <p className="mb-4">
            NCC IIT Bombay strives to fulfil the following aims:
        </p>
        <h2 className="text-lg font-semibold mb-2">Leadership qualities</h2>
        <p className="mb-4">
          Create a human resource of organized, trained and motivated youth, to provide leadership in all walks of life and be always available for the service of the nation. 
        </p>
        <h2 className="text-lg font-semibold mb-2">
            Personality development
        </h2>
        <p className="mb-4">
           Develop character, comradeship, discipline, leadership, secular outlook, the spirit of adventure, and ideals of selfless service amongst the youth of the country. 
        </p>
        <h2 className="text-lg font-semibold mb-2">
          Motivation  
        </h2>
        <p className="mb-4">
           Provide a suitable environment to motivate the youth to take up a career in the armed forces. 
        </p>

        <h2 className="text-xl font-bold mb-2">
           E-Cell 
        </h2>
        <p className="mb-4">
            IIT Bombay is the Institute which not only creates Best Engineers but also contributes predominantly in the creation of India’s Silicon Valley. E-Cell has been consistently working in enhancing the entrepreneurial ecosystem both inside and outside IIT Bombay. They aim at encouraging students to rise above the job-centric culture and become frontline entrepreneurs, thereby also help the motivated ones by giving them most of the resources they need. E-Cell's main initiatives include Eureka! and E-Summit which has been glorified by the presence of Nandan Nilekani, Sachin Bansal, Travis Kalanick, Kiran Shaw, Aman Gupta, and many more successful entrepreneurs and leaders from across the globe. At E-Cell, you will not only see your ideas come to life but will also be empowered to make those ideas seen by the best and get rewarded.
        </p>
        <p className="mb-4">
        To know more about ongoing events please visit <a href="https://www.instagram.com/iitbombay_ecell/" className="text-blue-600 hover:underline p-0!">here</a>.
        </p>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe
        border="0"
          src="https://www.youtube.com/embed/P8orgejheRE?si=La5ATj4fHfrgziA-"
          title="ESummit'20 Official Aftermovie"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '85%',
            height: '90%',
            border: '0',
          }}
        />
      </div>

      <h2 className="text-xl font-bold mb-2">
        Mood Indigo
      </h2>
      <p className="mb-4">
        Held in December every year, with a footfall of over 1.4 Lakh pouring in- Mood Indigo or Mood I (as we lovingly call it) is the largest college cultural festival in Asia! It is IIT Bombay's very own 'Chaar Din Ka Sapna' with the ideology to bring the entire world to one place, providing opportunities to all enthusiasts and making the 4 days the best days of the year for the audience and workforce alike! Mood I caters to the most talented students from 1600 colleges across the world through magnificent competitions and provides exposure to an unending list of international artists like Mike Portnoy, Porcupine Tree, Katatonia, Sander Van Doorn and Indian legends and Bollywood heartthrobs like Deepika Padukone, Shankar-Ehsaan-Loy, Aamir Khan, Asha Bhosle, Ustad Zakir Hussain, Jagjit Singh etc.
      </p>
      <p className="mb-4">
        At Mood Indigo, you will see your ideas come to life, live your dreams, handle professional artists, organize entire events and make the memories of a lifetime- A must for your freshie year!
      </p>
      <p className="mb-4">
        To know more about ongoing events please visit <a href="https://instagram.com/iitbombay.moodi?igshid=ZDc4ODBmNjlmNQ==" className="text-blue-600 hover:underline p-0!">here</a>.
        </p>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe
        border="0"
          src="https://www.youtube.com/embed/qmOxHKe6f6Y?si=02Ws-rJSdTh7c5ed"
          title="Mood Indigo, IIT Bombay 2019 Official Aftermovie"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '85%',
            height: '90%',
            border: '0',
          }}
        />
      </div>
      <h2 className="text-xl font-bold mb-2">Techfest</h2> 
      <p className="mb-4">
        Techfest welcomes you all to IIT Bombay! Techfest is Asia's largest annual science and technology festival. Started in 1998, with the motto of promoting science and technology, Techfest has surpassed 23 golden years of creating an unmatched aura of a science and technology spectacle year after year.
        </p>

        <p className="mb-4">
            Attracting a footfall of more than 1,75,000 and with a reach of over 2500 national and 500 international colleges, Techfest provides an international platform to the youth to showcase their talents and expertise in fierce competitions, display cutting edge technology and research from all over the globe, as well as interact with world-renowned personalities like Dr. A.P.J. Abdul Kalam, His Holiness The Dalai Lama, Jimmy Wales, Amartya Sen. The grandeur of the international night shows, along with its fun setups keep the spirit of the festive feel alive throughout the 3 days, and this is what makes it so different, so mighty.
            </p> 

        <p className="mb-4">
            Techfest also takes up numerous social initiatives throughout the year, which have been supported by the likes of Sonakshi Sinha, Arjun Kapoor, Prachi Desai, Taapsee Pannu, Yami Gautam, and many others.
            </p>

        <p className="mb-4">
            Techfest is all about the concept of “One Team ”. You don’t need to be a tech enthusiast to be a part of the Techfest. Come and be a part of the integral Techfest family and, in the process, meet your idols, have fun, get your ideas implemented, create a global social impact, and make new lifelong friends.
            </p>

    
            <p className="mb-4">
        To know more visit us at:<br/> <a href="https://www.techfest.org" className="text-blue-600 hover:underline p-0!">www.techfest.org</a><br/><a href="http://www.facebook.com/techfest.iitb" className="text-blue-600 hover:underline p-0!">www.facebook.com/techfest.iitb</a>
        </p>

        <h2 className="text-xl font-bold mb-2">Abhyuday</h2> 
        <p className="mb-4">
            We can do no great things; only small things with great love. Rooted in the belief that, in a gentle way you can shake the world, Abhyuday is an initiative taken by the socially conscious students of IIT Bombay, looking to sensitize the youth regarding the problems plaguing our society. With our endeavours we aim to provide sustainable and practically feasible solutions to such challenges. Working for a social cause does not require an expertise or experience, it just requires a true intention to bring a change, and surprisingly though , for that you do not need to go out of your way, you can do your bit, by doing what you are best at. Our initiatives enable the volunteers to interact with various sections of the society and feel their problems, only to come back with a fire to change the way it is. Our two day Social-Festival, the largest organized by any student body in the country, focuses on fostering leadership and social impact. We organize a plethora of activities to bring the entire 360 degree view of the problem on the table. We, then move on to building solutions by connecting to various NGOs and enterprises. Apart from this, Abhyuday also works on building collaborations with like-minded organizations such as Satyamev Jayate & The Gates Foundation. At Abhyuday, IIT Bombay you can see your ideas to change the society get a platform. An opportunity to interact one on one with the leaders of today, who have brought a change upon us, will help you develop all the necessary skills a future leader needs to have. Anyone can join Abhyuday, IIT Bombay - only pre-requisite is the passion to bring about a positive change in our society!
        </p>

        <p className="mb-4">
            To know more about Abhyuday, do visit <a href="https://www.facebook.com/abhyuday.iitb/" className="text-blue-600 hover:underline p-0!" target="_blank">https://www.facebook.com/abhyuday.iitb/e</a>.
        </p>
      </>);
    const sidebar = navData["Extra Curriculars"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="Extra Curriculars" />
    )
}

export default InstituteBodies;