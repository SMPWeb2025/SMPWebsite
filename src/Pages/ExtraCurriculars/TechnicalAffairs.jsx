import Page from "../../Components/BlogPage/Page";
import navData from "../sideNavData.json";

const TechnicalAffairs = () => {
    const content = (<>
        <h1 className="text-4xl font-bold mb-5">Technical Affairs</h1>
        <p className="mb-4">
            Broken that toy to see how that spring worked? Unscrewed that FM receiver trying to make sense of how it works? Remember the sense of elation reading 'Hello World' on the screen? You are not alone. From circuit benders to stargazers, we have them all!
        </p>
        <p className="mb-4">
            Technical Activities (or Tech) will provide you with an opportunity to put the theoretical knowledge gained in classrooms into practical use. Tech@IITB will enthrall and excite, and enthuse you to build, to create something of your own. After all, isn’t that why most of you are here?
        </p>

        <h2 className="text-xl font-bold mb-2">The Tech Scene</h2>
        <p className="mb-4">
            The current scene at the institute provides a world of opportunity to excel in wide range of activities, ranging from funded personal projects to collaborative projects with premier institutions like the ISRO. Tech at the institute also involves a more exciting, competitive side including not only the Institute Tech GC but also winning participation in various Inter Collegiate Technical Festivals including our very own Techfest.
        </p>
        <p className="mb-4">
            Events to look out for in freshman year:
            <ul className="ml-6 list-disc">
                <li className="mb-2"><b>XLR8: </b> is your first hand at tinkering and building something on your own. You get your hands dirty to make a bluetooth operated robotic car for a competition with attractive prizes which is held late in August. But we warn you - the feeling you get in seeing something that you have made actually work is enthralling as hell!</li>
                <li className="mb-2"><b>Scratch Day: </b>  Dive head first into programming with a fun game building competition held among all freshmen. Scratch is a visual programming language that provides an easy way to start coding even if you haven’t done any before. Watch out for pizzas and prizes to be won!</li>
                <li className="mb-2"><b>Mathathon: </b>Show off your mathematical prowess; level up as you pass through multiple stages of difficulty in this marathon math problem solving contest. This is the ultimate showdown for all you math lovers.</li>
                <li className="mb-2"><b>Bazinga: </b>Go beyond usual problems in physics and maths and put your thinking abilities to test as you answer interesting conceptual questions in this team based quiz contest. If you are a fan of pure thought and imagination, this event is for you.</li>
                <li className="mb-2"><b>Line Following Bot competition: </b>Held in the first week of January, it will introduce you to more advance electronics stuff like control algorithms, microcontrollers and sensors. It is not only a platform to automate but to innovate as well.</li>
                <li className="mb-2"><b>Web Designing: </b>Be ready to unleash your creativity and your coding prowess to design awesome websites. Get a chance to feature on the WnCC website zone this October with your website design.</li>
                <li className="mb-2"><b>RC Plane Competition: </b>Held in September and October, this competition involves designing, building and flying a radio-controlled airplane. You will be introduced to the basics of what makes an airplane fly (hint: not magic), including Aerodynamics and Flight Dynamics.</li>
                <li className="mb-2"><b>Trip to Giant Metrewave Radio Telescope (GMRT): </b>Watching the night sky and the stars slowly changing position as the earth revolves is a wondrous experience and observing this at GMRT, Pune is a once in a lifetime opportunity. We will be taking more than 10 telescopes so all of you can learn to handle a telescope and enjoy the night sky. Also, you might get an opportunity to attend lectures of great astrophysicists at NCRA, Pune.</li>
                <li className="mb-2"><b>General Astronomy Quiz (August):  </b>An open institute quiz where all the astro enthusiasts gather and showcase their ‘dexterity’ in the fields of Observational, Theoretical Astronomy. Usually takes place in the first month of the Odd semester, the General Astronomy Quiz comprises of fun, tricky, puzzling questions which require rather simple concepts in Astronomy, Physics but indeed a lot of common sense. Loads of interesting prizes at stake!</li>
                <li className="mb-2"><b>Tech Weekend: </b>In the beginning of February, be prepared for some heavy Tech action as a slew of workshops and competitions over a weekend put you in a state of Tech nirvana.</li>
                <li className="mb-2"><b>Institute Technical Summer Projects: </b>Over the summers, several freshmen and seniors alike stay back in the Institute for some heavy-duty tech action. It is a platform for you to test your tech mettle and build uber-cool stuff you have always thought should exist. The Technical Council gives you everything you need to give wings to your dream ideas be it a Humanoid Robot or a Quadcoptor like in movie 3 Idiots. Anythings is possible!</li>
                <li className="mb-2"><b>Summer of Science: </b>SoS is an initiative to help you explore those fields in science that you always wanted to learn, but couldn't, due to lack of proper guidance or resources.
                    If you have an idea; anything ranging from particles to galaxies, from algebra to geometry, we’ll find you a mentor, with sufficient experience on the topic, to guide you on your quest, for the whole duration of summer. At the end of the summer, you can share your knowledge, via a report with the entire scientific community at IITB to learn from.
                    As with most things MnP, curiosity and enthusiasm are the only pre-requisites.</li>
                <li className="mb-2"><b>Crime Scene Investigation: </b>The Crime scene where you become the detectives. Show away your investigating skills in the forensics. This is your first encounter with biotechnological application!</li>
            </ul>
        </p>

        <p className="mb-4">
            Apart from these major events, several others keep going on throughout the year under the different technical clubs mentioned below. The clubs listed below come under the umbrella of the Institute Technical Council (ITC) called Students’ Technical Activities Body (STAB) earlier.
        </p>

        <h2 className="text-xl font-bold mb-2">Aeromodelling Club</h2>
        <p className="mb-4">
            The Aeromodelling Club is a vibrant Community of aerospace enthusiasts who wish to incite a passion for flying and the science of flying in institute junta, and celebrate more than a century of mankind’s advances into the third dimension. By organising a plethora of events ranging from lectures to Workshops and Flying competitions, we hope to see more people understanding, and fascinated by, the wonders of flight.
        </p>
        <p className="mb-4">
            To know more about us, visit our website <a href="https://sites.google.com/view/biox-iitb/home." className="text-blue-600 hover:underline p-0!">https://sites.google.com/view/biox-iitb/home.</a>
        </p>

        <h2 className="text-xl font-bold mb-2">Electronics and Robotics Club</h2>
        <p className="mb-4">
            We are a student club of IIT-B who introduce all the new minds and beginners in IIT to the amazing world of Electronics and Robotics. We also provide a knowledge and resource sharing platform for enthusiastic student Community. If you have an idea and are not worried about getting your hands dirty, come to us. We provide whatever you need to help you fuel your imagination. It ain’t about what you know but about your will and guts to learn something new.
        </p>
        <p className="mb-4">
            To know more about us, visit our website <a href="https://erciitb.github.io/." className="text-blue-600 hover:underline p-0!">https://erciitb.github.io/.</a>
        </p>

        <h2 className="text-xl font-bold mb-2">Energy Club</h2>
        <p className="mb-4">
            Energy is all around us, it’s everywhere, Ever wondered how your phone is powered all day? or what is it that makes electric cars so efficient? Ever wondered how you can manage your house power consumption, why there are so many types of batteries, how solar cells work, what are green buildings, how the energy policies affect us and the environment?
        </p>
        <p className="mb-4">
            If you are an energy enthusiast or environment lover or just a curious being, the Energy club welcomes you. We discuss everything from climate to cars, from batteries to economics, from power to policies to possibilities. We conduct lectures, workshops, documentary screening and informal discussions on non-conventional technologies. Come, join us, the future is counting on you.
        </p>
        <p className="mb-4">
            To know more about us, visit our website <a href="https://enclub.github.io/home/." className="text-blue-600 hover:underline p-0!">https://enclub.github.io/home/.</a>
        </p>

        <h2 className="text-xl font-bold mb-2">Krittika</h2>
        <p className="mb-4">
            IIT Bombay’s focal point for amateur astronomers and stargazers, Krittika (ASTRONOMY CLUB, IIT BOMBAY), organizes weekly lectures on various domains of Astronomy, Astrophysics along with observation sessions, organizes observational trips to Observational sites and Planetariums which prove to be a once in a lifetime experience for many. The club boasts of a few telescopes which are used during the observations like comet sightings, messier marathons, etc.
        </p>
        <p className="mb-4">
            To know more about us, visit our website <a href="https://krittikaiitb.github.io/." className="text-blue-600 hover:underline p-0!">https://krittikaiitb.github.io/.</a>
        </p>

        <h2 className="text-xl font-bold mb-2">Math & Physics Club</h2>
        <p className="mb-4">
            The Maths and Physics Club of IIT Bombay, is a Community to celebrate the sciences we revere in their purest of forms, undiluted and in all their grandeur. We cater to stimulate your brains with the best intellectual events, quizzes, symposiums, lectures & to keep the streak of curiosity level with knowledge by introducing you to labs in and off the campus with exquisite research work and setting you off to build your own experimental setups, funded by us. The best fodder to develop oneself is a perseverant thought process, our fortnightly group discussion sessions (popularly abbreviated to GDs) and exclusive documentary screenings leave you with ancillary knowledge and questions to let in those science loving bees in your bonnet. And for those dulled by methodical cakewalk problems, we have a purely conceptual flagship quiz event, Bazinga!, followed by our very own Mathematics Olympiad and Logic General Championship to the delight of connoisseurs of pure reason.
        </p>
        <p className="mb-4">
            All in all, we are a self-sustaining Community of intellectuals, students & professors, across ages and departments, who enjoy sharing knowledge through platforms provided by our club and if you talk Physics and Maths, there is no better place for you than the Maths and Physics Club, IIT Bombay.
        </p>
        <p className="mb-4">
            To know more about us, visit our website <a href="http://mnp-club.github.io/." className="text-blue-600 hover:underline p-0!">http://mnp-club.github.io/.</a>
        </p>

        <h2 className="text-xl font-bold mb-2">WnCC - Web and Coding Club</h2>
        <p className="mb-4">
            Web and Coding Club is one of the biggest clubs of IIT Bombay. As a part of the Institute Technical Council, we aim to provide a gateway for the people in our institute to join the coding Community. We create a platform which allows students to gain assistance and mentorship to enhance their coding ability. Our aim is to propagate the enthusiasm for coding in the institute and especially amongst freshmen. We believe that every student here at IITB should have an opportunity to learn how to code and develop a passion for it. The secret of getting ahead is getting started and we aim to provide every student with the right start.
        </p>
        <p className="mb-4">
            We conduct sessions and workshops, hold lectures and talks, and even host coding competitions and hackathons. There is something for everyone. Whether you want to learn, participate in hackathons and win big prizes, or prepare for the ACM-ICPC and GSoC, you can do it all here. We have a list of events planned up for the coming year. Keep watching this space to know more.
        </p>
        <p className="mb-4">
            To know more about us, visit our website <a href="https://wncc.tech-iitb.org/." className="text-blue-600 hover:underline p-0!">https://wncc.tech-iitb.org/.</a>
        </p>
        <p className="mb-4">
            We also have an educational wiki, meant to help beginners get started with programming. It’s got a large number of tutorials, on various programming topics. All tutorials are hand-tailored by students of IIT Bombay. However, unlike conventional programming tutorials, these take a slightly different approach. Rather than reinventing the wheel, Grundy aims at bringing together a number of online tutorials and resources along with a set of pre-requisites and motivation to learn a programming skill. We also have exhaustive lists of our community resources, projects and GSoC recommendations.
        </p>
        <p className="mb-4">
            Here’s a detailed summary about how the wiki was built.Check it out here <a href="https://wncc.tech-iitb.org/" className="text-blue-600 hover:underline p-0!">https://wncc.tech-iitb.org/</a>
        </p>

        <h2 className="text-xl font-bold mb-2">Tinkerers’ Lab</h2>
        <p className="mb-4">
            A tinkerer is one who enjoys experimenting with machines. If you are a tinkerer who loves to work, who wants limitless hands-on experience or is turned on by machines and technology, this lab is just the right place for you. Tinkerers’ Lab was established with the vision to provide hands on experience to help students become innovators so that creative ideas get converted into actual engineering products. It has been equipped with the latest workstations of electrical and mechanical tools including power mechanical machines, electronic test instruments, 3D modelling software,several basic electronic equipment etc. This Lab is open to all students of the Institute, irrespective of their discipline, and is accessible 24×7.
        </p>
        <p className="mb-4">
            To know more about us, visit our website <a href="https://sites.google.com/view/tinkererslaboratory/home" className="text-blue-600 hover:underline p-0!">https://sites.google.com/view/tinkererslaboratory/home</a>.
        </p>

        <h2 className="text-xl font-bold mb-2">Technovation</h2>
        <p className="mb-4">
            Technovation is a unique Innovation Program at IIT Bombay. The term innovation derives from the Latin innovatio, "to renew or change" from (in- "into" + novus"new"). The program aims at providing you the platform to work on fascinating engineering projects, fully funded and mentored by senior students. It’s a unique opportunity for every innovative person out there to leave his mark on the technical scene. Have you ever wondered whether your school could have its own Marauder’s Map or have you felt the need for your very own Remembrall? Well we think it is indeed possible and we are working to make that possible. Technovation offers a wide range of challenging and innovation driven projects.Some of the past successful projects are Book Keeping Robot, Parinat (Humanoid).
        </p>

        <h2 className="text-xl font-bold mb-2">Exo-Fly</h2>
        <p className="mb-4">
            Exofly is a group of specialized students from multiple disciplines working together as a technical team. ExoFly means Exoskeleton for flight. The team aims to foster the development of a safe, quiet, ultra-compact, near VToL personal flying device, which is capable of flying 20 miles in one go. The device is designed to fly at an altitude of ~200 meters from the ground with a cruising speed of ~70 kmph, to accommodate a single person and function safely to fly at all locations all over the globe. The device ought to be lightweight and maneuverable enough with the goal that anybody can fly it around and quiet enough for user and the general population.
        </p>

        <h2 className="text-xl font-bold mb-2">UMIC</h2>
        <p className="mb-4">Unmesh Mashruwala Innovation Cell is a student run team comprised of tech enthusiasts who believe that innovation can help make the world a better place. UMIC is the only team in the insti to work on multiple fronts, from autonomous drones and driverless cars to robowars bots and all terrain vehicles.</p>
        <p className="mb-4">
            UMIC represents IIT Bombay in various national and international competitions. In the past, we have won the Intelligent Ground Vehicle Competition (USA, 2016), ASME Student Design Competition-World Finals (USA, 2017). We also won the best paper award in IARC (2018, China) and secured first position in ASME-SDC Asia-Pacific recently in 2019.
        </p>
        <p className="mb-4">
           Currently, we have focused our attention on one of the most glittering topic of technological innovation i.e. using artificial intelligence for making fully autonomous car and drones! We are among the 11 top teams out of the original 256 to have received a Mahindra E2O car for Mahindra Rise Driverless Car Challenge. Apart from Rise, we are working on self flying drones for participating in Mission 8 of International Aerial Robotics Competition(IARC). 
        </p>
        <p className="mb-4">
            We look forward to having enthusiastic and smart working people in the team! The only prerequisite is the thirst for doing something that has never been done before!
        </p>
        <p className="mb-4">
            Please visit our website <a href="http://www.umiciitb.org" className="text-blue-600 hover:underline p-0!">http://www.umiciitb.org</a> for more information.
        </p>

        <h2 className="text-xl font-bold mb-2">Advitiy - The IIT Bombay Student Satellite (Previously, known as Pratham)</h2>
        <p className="mb-4">
            IIT Bombay can now boast of the rare privilege of being one of the very few universities world wide to have successfully launched its own satellite. Christened Pratham, being IIT Bombay's first foray into space technology, the satellite's payload was to produce data on the total electron count in the atmosphere, used for applications like GPS correction. Planned, designed, built and tested exclusively by the students, with guidance from Indian Space Research Organization (ISRO) and IITB faculty, the completely autonomous satellite Pratham took IIT Bombay into the elite space club on 26th September 2016, when it was launched by ISRO on board the PSLV C-35. The team has now begun the next chapter in the Student Satellite Project of IITB and work has begun on Advitiy, the second satellite. The team has also built an autonomous groundstation at IIT Bombay for tracking and communicating with satellites. With groundstation workshops, HAM Club and various other related activities, the Project also aims to involve other universities across India and spread the knowledge accumulated by the team over the years as a part of the social goal. The current teams looks forward to having curious, industrious and enthusiastic freshmen from the new batch join in the efforts on both Advitiy and the other satellites to be developed at the institute and also help achieve the social goal of the Project.
        </p>

        <h2 className="text-xl font-bold mb-2">IIT Bombay Racing</h2>
        <p className="mb-4">
            The IIT Bombay Racing Team builds electric race cars that are the entries of the institute in international student competitions like Formula Student, a breeding ground for future race-car engineers, designers and managers. The event is held at the legendary Silverstone Formula 1 race circuit in the UK.The car they have built is not a beast, it's 400 V of sheer elegance, that goes 0-100 before you can finish saying 3.47 seconds. But do you have what it takes to make one which can make every previous car look like an old jalopy, to build an engineering marvel, a piece of art. Your dream to build a true engineer's car awaits you at IIT Bombay Racing!
        </p>
        <p className="mb-4">
            You will get to learn technical skills with practical experience to boost your knowledge, in addition to that skills in marketing, sales and project management.
        </p>
        <p className="mb-4">
            To know more about us, visit our website <a href="http://www.iitbracing.org" className="text-blue-600 hover:underline p-0!">http://www.iitbracing.org</a>!
        </p>

        <h2 className="text-xl font-bold mb-2">IIT Team Shunya</h2>
        <p className="mb-4">
            The team comprises of students from various disciplines like Energy, Mechanical, Civil, Electrical and Architecture with a vision to sustainably meet the growing demand and need for urban housing in India. The team participates in the Solar Decathlon competition, an international student competition that takes place every two years. The Solar Decathlon challenges 20 collegiate teams to design, build, and operate the most attractive, effective, and energy-efficient solar-powered house. The winner of the competition is the team that best blends affordability, consumer appeal, and design excellence with optimal energy production.
        </p>
        <p className="mb-4">
            You can find more details at <a href="https://teamshunya.com/" className="text-blue-600 hover:underline p-0!">https://teamshunya.com/</a>
        </p>

        <h2 className="text-xl font-bold mb-2">IIT IIT-B Mars Rover Team</h2>
        <p className="mb-4">
            The IITB Mars Rover Team, a part of the Mars Society India (MSI), is a team of space enthusiasts looking to build space grade technologies for future manned missions to Mars. Our primary goal is to build a robust, all terrain and remotely operated rover for Martian exploration. We are a relatively young tech team, and have been working on rover prototypes for participation into URC (University Rover Challenge), an annual competition held in Utah, USA, since 2014. We are currently building a rover prototype (pic shown below) to perform all the necessary tasks on a Mars mission such as terrain traversing, astronaut assistance, autonomous navigation and soil sampling & analysis. Apart from this, our rover can have many earthly applications such as in agriculture and defence for unmanned surveillance.

        </p>
        <p className="mb-4">
            Have a look at <a href="https://iitbmartian.github.io/" className="text-blue-600 hover:underline p-0!">https://iitbmartian.github.io/</a> for further information and latest updates about the team.
        </p>

        <h2 className="text-xl font-bold mb-2">Autonomous Underwater Vehicle</h2>
        <p className="mb-4">
            The team works towards participating at AUVSI Robosub Competition, which is held annually in July at San Diego, California. The competition is a platform for students to display their skills in underwater robotics and build a connection with industries working along similar verticals. The competition demands designing and manufacturing of an unmanned autonomous underwater vehicle that can perform predefined tasks. This draws upon expertise of the areas of engineering provided by multifaceted team
        </p>
        <p className="mb-4">
            To know more about us, visit our website <a href="http://www.auv-iitb.org" className="text-blue-600 hover:underline p-0!">http://www.auv-iitb.org</a>.
        </p>

        <h2 className="text-xl font-bold mb-2">Inter College Festivals</h2>
        <p className="mb-4">
            There are a lot of local college festivals which are very accessible to freshman teams from the Institute. More details on these will be available through their specific website and through the STAB website. IIT Bombay also has a strong tradition of winning participation at Techfest. Some problem statements at Techfest are again very accessible to freshman. More details about these are available on the Techfest website and through various sessions held at both the hostel and institute level.
        </p>

        <h2 className="text-xl font-bold mb-2">
           Where to Begin
        </h2>
        <p className="mb-4">
           Apart from Technical Orientation at the start of the year, most clubs and teams will have their individual orientations and beginner level events. Keep an eye out for posters on the Hostel Notice Boards. In addition all the clubs have dedicated web-pages, facebook pages and online discussion boards where activities are discussed in great detail. It would be a great idea to sign up for these. In addition feel free to contact the individual club conveners to help you out with your queries. 
        </p>
        <p className="mb-4">
            Most hostels also have Tech Rooms which are accessible through contact with Technical Secretary. Finally, some of the Institute labs may be made accessible for personal use after contacting the person in-charge.
        </p>
        <p className="mb-4">
            Another great idea to stay in touch with Tech is to engage yourself in one of the various projects running through the Institute. Apart from these one can also float personal projects which can be coordinated with either UMIC or one of the hobby clubs depending upon the exact idea in question.
        </p>
        <p className="mb-4">
            <b>Note:</b> Most of the newsgroups are Google groups and it would be a nice idea to sign up for a Google account if you don't have one yet. Here we have barely scratched the surface of the scope of Tech at IITB. More detailed information is readily available on the club web pages and newsgroups.
        </p>
    </>);
    const sidebar = navData["Extra Curriculars"];

    return (
        <Page content={content} sidebar={sidebar} sideHeading="Extra Curriculars" />
    )
}

export default TechnicalAffairs;
