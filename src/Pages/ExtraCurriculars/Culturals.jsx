import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons"
import instiiAppLogo from "../../assets/img/extra_curricular/favicon-32x32.png"

const Culturals = () => {
    const content = (<>
        <h1 className="text-4xl font-bold mb-5">Culturals</h1>
        <p className="mb-4">
            So you thought it was all about academics? Wrong! IITB is privileged to have one of the best cultural (or 'cult') scenes among engineering colleges in India. Apart from hosting Mood Indigo, India's biggest college cultural festival, we have a very active intra-college scene, with genre specific clubs and plenty of hostel and insti-level events all year round. The scene is basically split into 10 genres: Music, Photography & Fine Arts, Speaking/Debating, Literary Arts, Photography & Fine Arts, Dance, Dramatics, Film & Media, Design and Lifestyle.
        </p>
        <p className="mb-4">
            Follow all the updates here: <br />
            Webpage: <a className="text-blue-600 hover:underline" style={{ padding: '0' }} target="_blank" href="https://gymkhana.iitb.ac.in/~cultural">https://gymkhana.iitb.ac.in/~cultural</a><br />
            Facebook Page : <a className="text-blue-600 hover:underline" style={{ padding: '0' }} target="_blank" href="https://facebook.com/IITBCult">https://facebook.com/IITBCult</a>
        </p>
        <h2 className="text-xl font-bold mb-2">Structure</h2>
        <p className="mb-4">
            At the Institute level, the scene is governed by the Institute Cultural Council, headed by the General Secretary of Cultural Affairs. Working with him are 8 Institute Secretaries, for the aforementioned 10 genres. Each secretary is the head of the club(s) under his/her domain. Also, at the hostel level, each hostel has a Cultural Councilor along with a secretary for each of the genres. The incoming freshers are pre allocated to the hostels they are going into the next year and they represent their senior hostels throughout the year.
        </p>
        <h2 className="text-lg font-medium mb-2 p-0">Freshizza</h2>
        <p className="mb-4">
            The most important cultural event of your first semester here is Freshiezza, the inter-hostel freshmen cultural competition. Usually held in 2 phases over the first semester, Freshiezza is where you battle it out for hostel glory in a host of events from all areas of the cult sphere and explore what insti ‘cult’ has to offer for you. Do participate, if you can, or else at least come and cheer your hostel on. Stay back that weekend, we guarantee you won't regret it.
        </p>
        <h2 className="text-xl font-bold mb-2">Cultural Clubs</h2>
        <h2 className="text-lg font-semibold mb-2 p-0">Literary Arts: Literati</h2>
        <p className="mb-4">Quizzes, Creative writing, Rebuses, Blogs and Word Games all fall under the reign of Literati. GC Event: General quiz, Mixed Bag GC, Word Games GC, Wolf Pack GC <br /><br />

            <span className="font-medium">Connect to Literati:</span>
            <div className="flex items-center">
                <a href="https://www.instagram.com/literati_iitb/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                <a href="https://www.insti.app/org/literati" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} size="lg" /></a>
                <a href="https://www.insti.app/org/literati" target="_blank"><img src={instiiAppLogo} alt="Literati" /></a>
            </div>

        </p>
        <h2 className="text-lg font-semibold mb-2 p-0">Dramatics: Fourth Wall</h2>
        <p className="mb-4">
            Comedy plays, street plays and mono-acting are the strengths of the club. The spotlight is grabbed by the Annual Theatre Festival and Sophie Production. GC event: Dramatics Main Championship <br /><br />
            <span className="font-medium">Connect to Fourth Wall:</span>
            <div className="flex items-center">
                <a href="https://fourthwalliitb.wordpress.com/" target="_blank"><FontAwesomeIcon icon={faSquareArrowUpRight} size="lg" /></a>
                <a href="https://www.facebook.com/IITBombay.fourthwall/" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} size="lg" /></a>
                <a href="https://www.insti.app/org/fourthwall" target="_blank"><img src={instiiAppLogo} alt="Fourthwall" /></a>
            </div>
        </p>
        <h2 className="text-lg font-semibold mb-2 p-0">Music: Symphony</h2>
        <p className="mb-4">
            The Music Club of IIT Bombay has one of the most active communities in insti. They organise large scale music events, music learning programs and represents IIT Bombay in multiple intercollege competitions. Watch out for Surbahaar - the biggest musical showcase in insti, and Battle of the Bands. GC Event - Goonj <br /><br />
            <span className="font-medium">Connect to Symphony:</span>
            <div className="flex items-center">
                <a href="https://www.instagram.com/symphonyiitb/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                <a href="https://www.facebook.com/symphony.iitb" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} size="lg" /></a>
                <a href="https://www.youtube.com/channel/UC5UrEXoJe-xoVgkIlECTMcA" target="_blank"><FontAwesomeIcon icon={faYoutube} size="lg" /></a>
            </div>
        </p>

        <h2 className="text-lg font-semibold mb-2 p-0">Film and Media: Silverscreen</h2>
        <p className="mb-4">
            The youngest club on the campus, Silverscreen has already scaled great heights with the introduction of the IIT Bombay Film Festival, showcasing student-made films along with celebrated international movies. We have had the likes of Aamir Khan, Anurag Kashyap, Shekhar Kapoor, Nandita Das and many others who have graced IITB Filmfest. GC Event: Film Making <br /><br />
            <span className="font-medium">Connect to Silverscreen:</span>
            <div className="flex items-center">
                <a href="https://www.instagram.com/silverscreen_iitb/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                <a href="https://www.youtube.com/user/silverscreeniitb" target="_blank"><FontAwesomeIcon icon={faYoutube} size="lg" /></a>
                <a href="https://www.insti.app/org/silverscreen" target="_blank"><img src={instiiAppLogo} alt="Fourthwall" /></a>
            </div>
        </p>

        <h2 className="text-lg font-semibold mb-2 p-0">Dance: In-Sync</h2>
        <p className="mb-4">
            Classical, hip-hop, folk or contemporary, In Sync has it all. The Annual Insync Dance Show (AIDS) held in January is a must watch. Probably the largest cultural club of IIT Bombay. GC Event: Gyrations <br /><br />
            <span className="font-medium">Connect to In-Sync:</span>
            <div className="flex items-center">
                <a href="https://www.instagram.com/insync_iitb/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                <a href="https://www.facebook.com/groups/insynciitb/" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} size="lg" /></a>
                <a href="https://www.youtube.com/channel/UCp0-MwKqWJgJNY81nwLrW0w" target="_blank"><FontAwesomeIcon icon={faYoutube} size="lg" /></a>
                <a href="https://www.insti.app/org/insync" target="_blank"><img src={instiiAppLogo} alt="Fourthwall" /></a>
            </div>
        </p>

        <h2 className="text-lg font-semibold mb-2 p-0">Debating: We-Speak and Vaani</h2>
        <p className="mb-4">
            Speak your mind! Panel debates, JAMs, extempore, radioplays... you name it. Host to the IIT Bombay National Debate. GC Event: Debate GC, Jam GC, KavyaSandhya <br /><br />
            <span className="font-medium">Connect to We-Speak:</span>
            <div className="flex items-center">
                <a href="https://www.instagram.com/wespeakiitb/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                <a href="https://www.facebook.com/groups/wespeak.iitb/" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} size="lg" /></a>
                <a href="https://www.insti.app/org/we-speak" target="_blank"><img src={instiiAppLogo} alt="Fourthwall" /></a>
            </div>
            <br />
            <span className="font-medium">Connect to Vaani:</span>
            <div className="flex items-center">
                <a href="https://www.instagram.com/vaani_iitb/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                <a href="https://www.facebook.com/vaani.iitb/" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} size="lg" /></a>
                <a href="https://www.youtube.com/c/VaaniIITBombay" target="_blank"><FontAwesomeIcon icon={faYoutube} size="lg" /></a>
                <a href="https://vaani380.wordpress.com/" target="_blank"><img src={instiiAppLogo} alt="Fourthwall" /></a>
                <a href="https://www.insti.app/org/vaani" target="_blank"><FontAwesomeIcon icon={faSquareArrowUpRight} size="lg" /></a>
            </div>
        </p>

        <h2 className="text-lg font-semibold mb-2 p-0">Photography and Fine Arts - Rang and Pixels</h2>
        <p className="mb-4">
            Rang is the Fine Arts Club and Pixels, the photography club conduct competitions and workshops for everything from sponge modelling to comic strip writing to Adobe Photoshop. They showcase the institute talent in the the annual exhibition Kaladarshan. GC Event: Photography GC, Fine Arts GC, Wall Painting GC etc <br /><br />
            <span className="font-medium">Connect to Rang:</span>
            <div className="flex items-center">
                <a href="https://www.instagram.com/rang_iitb/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                <a href="https://www.facebook.com/RANG.IITB/" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} size="lg" /></a>
                <a href="https://www.insti.app/org/rang" target="_blank"><img src={instiiAppLogo} alt="Fourthwall" /></a>
                <a href="https://rang-iitb.blogspot.com/" target="_blank"><FontAwesomeIcon icon={faSquareArrowUpRight} size="lg" /></a>
            </div>
            <br />
            <span className="font-medium">Connect to Vaani:</span>
            <div className="flex items-center">
                <a href="https://www.instagram.com/pixels_iitb/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                <a href="https://www.facebook.com/PixelsIITB/" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} size="lg" /></a>
                <a href="https://www.insti.app/org/pixels" target="_blank"><img src={instiiAppLogo} alt="Fourthwall" /></a>
                <a href="https://www.pixelsiitbombay.com/" target="_blank"><FontAwesomeIcon icon={faSquareArrowUpRight} size="lg" /></a>
            </div>
        </p>

        <h2 className="text-lg font-semibold mb-2 p-0">Design Club</h2>
        <p className="mb-4">
            When creativity meets passion, design happens. Design is thoughts given shape; to put together the pieces of a puzzle, not knowing of what would unfold. Have an idea? Give it shape and bring it into existence; scribble it out or express yourself digitally. The Design team came into existence in 2014, with the motive of creating a culture of design in the institute, bringing together aspects from all genres of art. The amazing response we got has encouraged us to go further and expand across the genres, to have infrastructure set aside for enthusiastic people. Designers showcase their talent in Vision, the institute's annual design festival. GC Event: Design GC
            <br /><br />
            <span className="font-medium">Connect to Design Club:</span>
            <div className="flex items-center">
                <a href="https://www.youtube.com/channel/UCT-H_0-ai4YaReSqboTiXPA" target="_blank"><FontAwesomeIcon icon={faYoutube} size="lg" /></a>
                <a href="https://www.facebook.com/thedesignclubiitb/" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} size="lg" /></a>
                <a href="https://www.insti.app/org/the-design-club" target="_blank"><img src={instiiAppLogo} alt="Fourthwall" /></a>
            </div>
        </p>

        <h2 className="text-lg font-semibold mb-2 p-0">Classical & Folk Arts - Roots</h2>
        <p className="mb-4">
            So, ‘Roots’ -The Classical and Folk Arts Club of IIT Bombay , as its name suggests, aims to replenish the art form- Classical and Folk arts that had taken birth decades before. A place where dance , music and arts can be enjoyed together in a traditional way! Roots provides you all the sugar candies that’ll simply tempt you to evolve the classical artist within, be it learning , expressing or listening and viewing the maestros! Roots conducts the biggest classical concerts in insti in the event- Virasat.
            <br /><br />
            <span className="font-medium">Connect to Roots:</span>
            <div className="flex items-center">
                <a href="https://www.instagram.com/roots_iitb/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                <a href="https://www.facebook.com/groups/RootsIITB/" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} size="lg" /></a>
                <a href="https://www.youtube.com/channel/UCYOtCVjIqR9_PoulDX_3goQ" target="_blank"><FontAwesomeIcon icon={faYoutube} size="lg" /></a>
                <a href="https://www.insti.app/org/roots" target="_blank"><img src={instiiAppLogo} alt="Fourthwall" /></a>
            </div>
        </p>

        <h2 className="text-lg font-semibold mb-2 p-0">Fashion Club – Style Up</h2>
        <p className="mb-4">
            Lifestyle Club, IIT Bombay is an initiative of the Institute Cultural Council of IIT Bombay. This club caters to various 'topics' related to 'Lifestyle' of people in IIT Bombay. Everyone from IIT Bombay can be a part of this club as a member, moderator or active follower, without any bar of knowledge, credentials and skills. This is a club of people who want to explore more. Presently the club has Fashion as its major sub-genre, Cuisine and Spirituality would be launched shortly this year. The club gives you an opportunity to be a part of workshops of walking the ramp, photoshoots, designing costumes and also the club would be coming up with Halloween Party for the institute this year.

            <br /><br />
            <span className="font-medium">Connect to Style Up:</span>
            <div className="flex items-center">
                <a href="https://www.instagram.com/styleup_iitb/?hl=en" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                <a href="https://www.facebook.com/styleup.iitb/" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} size="lg" /></a>
                <a href="https://www.youtube.com/channel/UCLB_Gh4fQQohPGdw-G-Bavg" target="_blank"><FontAwesomeIcon icon={faYoutube} size="lg" /></a>
                <a href="https://www.insti.app/org/lifestyle-club" target="_blank"><img src={instiiAppLogo} alt="Fourthwall" /></a>
            </div>

            <br />
            So, now you have a good idea about the different clubs and the different genres. Too much information? No worries, there will be an orientation (with a fundae session) for each club separately too. Just make it a habit to have a look at the notice-boards daily. For details visit the Cult Homepage.
        </p>

        <h2 className="text-lg font-semibold mb-2 p-0">Intra College events</h2>
        <p className="mb-4">
            Intra-hostel General Championship (GC) events that are held throughout the year decide your hostel's position in the Cultural GC, winning which is very prestigious. Recently, even freshies have been allowed to represent their senior year hostels in GCs. In addition, the cultural council organizes a huge number of open events spread across the year. These events have no restrictions; some, on the contrary, have freshmen reservations.
        </p>

        <h2 className="text-lg font-semibold mb-2 p-0">Inter College events</h2>
        <p className="mb-4">
            Every December, IITB hosts India's biggest cult fest, Mood Indigo. MI is a 4 day long cultural extravaganza that sees participation by thousands of students from all over the country. Apart from formal and informal competitions and workshops, it also organizes concerts and performances by international artistes. IITB students attend numerous college cult fests but we only send official contingents to two, St. Xavier's Malhar (around 15th Aug) in Mumbai and IIM-B's Unmaad (around 29th Jan). Freshies generally attend Unmaad in large numbers.
        </p>

        <h2 className="text-lg font-semibold mb-2 p-0">Performing Arts Festival (PAF)</h2>
        <p className="mb-4">
            PAF is also known as the 'Baap of all cultural events’. Typically, three or four hostels (out of fourteen) are grouped together to battle against one another. From script to dance, music to dram, every damn thing is handled by the students. PAF is renowned for its 'Prod work' which involves the making of sets and backdrops. A tremendous mixture of art and cultural skills combined with life sized sets, is what makes PAF an event to remember.
        </p>
        <p className="mb-4">
            By that time, you will be allotted your 'permanent' hostels and hence will be a good time to make new friends and get acquainted with the hostel culture.
        </p>
        <p className="mb-4">
            At the end of the academic year, the institute hands out awards to those who have excelled in cultural activities, along with the inter-hostel GC and PAF trophies.
        </p>
        <p className="mb-4">
            So there you have it. Cult at IITB is truly in a league of its own, so please do grab every opportunity to be a part of it. And remember, never be hesitant to join a club or attend a meeting just because you feel you're not good enough - most of us knew nothing about our current cult interests/passions when we first started out, back in our first years. The institute clubs welcome students of all levels, from noobs to pros.
        </p>

        <p className="mb-4">
            A mandatory word of caution though: do not sacrifice your academics for the sake of extra- curricular activities; prioritize your interests and allocate your time wisely. That being said, we do hope you enjoy every bit of your 4/5 years here, and hopefully the cultural scene would be a major part of your college lives.
        </p>

        <h2 className="text-lg font-semibold mb-2 p-0">InterIIT Cult</h2>
        <p className="mb-4">
            Each and every IIT is different from the other in most of the aspects from the academic valuation to various clubs and their activities.To bridge this gap among all IITs and to enable knowledge sharing and cultural distribution Inter IIT cultural meet was started in 2016 with IIT Bombay organising it for the first time.
        </p>
        <p className="mb-4">
            IIT Bombay won the overall championship in 2016 and were 1st runner up in 2017. All the club secretaries and club people look forward to participating and competing in this ultimate cultural championship. It is an honor to get a chance to represent IIT Bombay and selections are based on the various auditions conducted across different genres.
        </p>
        <p className="mb-4">
            The 4th edition of Inter IIT Cultural Meet will be held in December 2019 and it will include competitions covering all the cultural genres.
        </p>
    </>);
    const sidebar = navData["Extra Curriculars"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="Extra Curriculars" />
    )
}

export default Culturals;