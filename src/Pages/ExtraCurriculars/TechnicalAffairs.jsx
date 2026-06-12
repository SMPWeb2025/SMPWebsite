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
                <li className="mb-2"><b>Bazinga: </b>Go beyond usual problems in physics and maths and put your thinking abilities to test as you answer interesting conceptual questions in this team based quiz contest. If you are a fan of pure thought and imagination, this event is for you.</li>
                <li className="mb-2"><b>RC Plane Competition: </b>Held in September and October, this competition involves designing, building and flying a radio-controlled airplane. You will be introduced to the basics of what makes an airplane fly (hint: not magic), including Aerodynamics and Flight Dynamics.</li>
                <li className="mb-2"><b>General Astronomy Quiz (August):  </b>An open institute quiz where all the astro enthusiasts gather and showcase their ‘dexterity’ in the fields of Observational, Theoretical Astronomy. Usually takes place in the first month of the Odd semester, the General Astronomy Quiz comprises of fun, tricky, puzzling questions which require rather simple concepts in Astronomy, Physics but indeed a lot of common sense. Loads of interesting prizes at stake!</li>
                <li className="mb-2"><b>Institute Technical Summer Projects (ITSP): </b>Over the summers, several freshmen and seniors alike stay back in the Institute for some heavy-duty tech action. It is a platform for you to test your tech mettle and build uber-cool stuff you have always thought should exist. The Technical Council gives you everything you need to give wings to your dream ideas be it a Humanoid Robot or a Quadcoptor like in movie 3 Idiots. Anythings is possible!</li>
                <li className="mb-2"><b>Summer of Science (SOS): </b>SoS is an initiative to help you explore those fields in science that you always wanted to learn, but couldn't, due to lack of proper guidance or resources. If you have an idea; anything ranging from particles to galaxies, from algebra to geometry, we’ll find you a mentor, with sufficient experience on the topic, to guide you on your quest, for the whole duration of summer. At the end of the summer, you can share your knowledge, via a report with the entire scientific community at IITB to learn from. As with most things MnP, curiosity and enthusiasm are the only pre-requisites.</li>
            </ul>
        </p>

        <p className="mb-6">
            Apart from these major events, several others keep going on throughout the year under the different technical clubs mentioned below. The clubs listed below come under the umbrella of the Institute Technical Council (ITC) called Students’ Technical Activities Body (STAB) earlier.
        </p>

        <h2 className="text-3xl font-bold mb-3">Techincal Clubs</h2>

        <h2 className="text-xl font-bold mb-2">Web and Coding Club (WnCC)</h2>
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


        <h2 className="text-xl font-bold mb-2">Electronics and Robotics Club</h2>
        <p className="mb-4">
            The Electronics & Robotics Club (ERC) is IIT Bombay’s community for students interested in electronics, robotics, and embedded systems. The club promotes hands-on learning and technical innovation through workshops, competitions, projects, and interactive sessions covering a wide range of topics in modern electronics and robotics. By fostering a collaborative environment for experimentation and problem-solving, ERC provides a platform for students to develop practical skills, explore emerging technologies, and work on engineering challenges beyond the classroom.
        </p>
        <p className="mb-4">
            To know more about us, visit our website <a href="https://erc.tech-iitb.org" className="text-blue-600 hover:underline p-0!">https://erc.tech-iitb.org</a>
        </p>


        <h2 className="text-xl font-bold mb-2">Math & Physics (MnP) Club</h2>
        <p className="mb-4">
            The Maths and Physics Club (MnP) is IIT Bombay’s community for students interested in the fundamental sciences and their applications. The club promotes scientific curiosity through lectures, quizzes, symposiums, group discussions, documentary screenings, lab visits, and flagship events such as Bazinga!, Mathathon, and LogicQ. By bringing together students, researchers, and faculty across disciplines, MnP provides a platform to explore concepts beyond the classroom, engage in scientific projects, and participate in discussions that celebrate the depth and beauty of mathematics and physics.
        </p>
        <p className="mb-4">
            To know more about us, visit our website <a href="http://mnp-club.github.io/." className="text-blue-600 hover:underline p-0!">http://mnp-club.github.io/.</a>
        </p>


        <h2 className="text-xl font-bold mb-2">Quant Club</h2>
        <p className="mb-4">
            The Quant Community at IIT Bombay is a student-led initiative focused on quantitative finance, algorithmic trading, data science, and mathematical modelling. Operating at the intersection of mathematics, computer science, and finance, the club aims to bridge academic concepts with real-world applications through research and hands-on projects. It regularly conducts workshops, competitions, and collaborative activities to develop quantitative and analytical skills while fostering a community interested in data-driven finance. By providing opportunities to explore modern quantitative methods and industry practices, the Quant Community serves as a platform for learning, innovation, and interdisciplinary collaboration at IIT Bombay.
        </p>
        <p className="mb-4">
            To know more about us, visit our website <a href="https://quant.tech-iitb.org" className="text-blue-600 hover:underline p-0!">https://quant.tech-iitb.org</a>
        </p>

        <h2 className="text-xl font-bold mb-2">Krittika: The Astronomy Club</h2>
        <p className="mb-4">
            The Astronomy Club, Krittika, is IIT Bombay’s community for students interested in astronomy, astrophysics, and space science. The club aims to make the wonders of the universe accessible through a wide range of activities, including stargazing sessions, astrophotography, quizzes, group discussions, project opportunities, and visits to astronomical facilities such as the Giant Metrewave Radio Telescope (GMRT). By combining observational astronomy with scientific exploration and outreach, Krittika provides a platform for students to deepen their understanding of the cosmos and engage with the fascinating world of space science.
        </p>
        <p className="mb-4">
            To know more about us, visit our website <a href="https://krittikaiitb.github.io" className="text-blue-600 hover:underline p-0!">https://krittikaiitb.github.io/.</a>
        </p>


        <h2 className="text-xl font-bold mb-2">Energy and Sustainability Club</h2>
        <p className="mb-4">
            The Energy & Sustainability Club is IIT Bombay’s community for students interested in clean energy, sustainable technologies, and the global energy transition. The club explores a broad range of topics, including renewable energy, electric mobility, energy storage, green buildings, energy policy, circular economy, and climate change. Through lectures, workshops, competitions, field visits, symposiums, and collaborations with industry and academia, the club provides opportunities to engage with contemporary challenges in the energy sector and promotes informed discussions on building a more sustainable future.
        </p>
        <p className="mb-4">
            To know more about us, visit our website <a href="https://energy.tech-iitb.org" className="text-blue-600 hover:underline p-0!">https://energy.tech-iitb.org</a>
        </p>

        <h2 className="text-xl font-bold mb-2">BioX Club</h2>
        <p className="mb-4">
            The BioX Club is IIT Bombay’s community for students interested in the intersection of biology, engineering, and technology. The club aims to make biotechnology accessible and engaging by fostering an interdisciplinary culture where ideas from the life sciences and engineering come together. Through workshops, expert talks, projects, discussions, and interactive events, BioX provides opportunities to explore diverse topics ranging from molecular biology and genetics to bioengineering and emerging biotechnologies. By encouraging collaboration across disciplines, the club serves as a platform for learning, innovation, and exploring the growing role of biotechnology in science and society.
        </p>
        <p className="mb-4">
            To know more about us, visit our website <a href="https://biox.tech-iitb.org" className="text-blue-600 hover:underline p-0!">https://biox.tech-iitb.org</a>
        </p>


        <h2 className="text-xl font-bold mb-2">Chemistry Club and ChemE TL</h2>
        <p className="mb-4">
            Chemistry is the central science, which deals with anything from micro to macro, and the Chemical Industry is present everywhere, in all the things we use. We, The Chemistry Club and ChemE Tinkerer’s Laboratory, aim to bring to you the magic and fun of Chemistry and Chemical Engineering at its fullest. Our major focus is to build an institute-wide community of Chemistry and Chemical engineering enthusiasts and create a space for healthy and mind-boggling discussions suitable to all levels of expertise in the subject.
        </p>

        <h2 className="text-xl font-bold mb-2">Aeromodelling Club</h2>
        <p className="mb-4">
            The Aeromodelling Club is IIT Bombay’s community for students interested in aviation, flight, and aerial technologies. The club promotes a hands-on approach to aeromodelling through projects involving drones, RC aircraft, rockets, quadcopters, and other flying systems, while encouraging innovation across diverse areas of aerospace engineering. Its activities include the flagship RC Plane Competition, airshows, flying sessions, drone hackathons, water rocket competitions, technical workshops, quizzes, and expert lectures, providing opportunities to learn the fundamentals of flight and develop practical engineering skills. With a strong culture of experimentation and a history of success in national aeromodelling competitions, the club serves as a platform for exploring the science and technology of flight at IIT Bombay.
        </p> 
        

        <h2 className="text-xl font-bold mb-2">Tinkerers’ Lab</h2>
        <p className="mb-4">
            Tinkerers’ Laboratory (TL) is IIT Bombay’s student-run, alumni-funded 24×7 makerspace dedicated to promoting hands-on learning, innovation, and product development. The lab provides students with access to technical resources, tools, and a collaborative workspace to design, prototype, and build engineering projects beyond the classroom. Through workshops, hobby projects, and practical experimentation, TL encourages a culture of creativity and problem-solving while fostering the spirit of making and technological innovation within the institute. 
        </p>
        <p className="mb-6">
            To know more about us, visit our website <a href="https://itc.gymkhana.iitb.ac.in/TL/" className="text-blue-600 hover:underline p-0!">https://itc.gymkhana.iitb.ac.in/TL/</a>.
        </p>

        <h2 className="text-3xl font-bold mb-3">Tech Teams</h2>

        <h2 className="text-xl font-bold mb-2">Autonomous Underwater Vehicle (AUV) IIT Bombay</h2>
        <p className="mb-4">
            AUV-IITB is IIT Bombay’s autonomous underwater robotics team, dedicated to the design and development of the Matsya series of Autonomous Underwater Vehicles (AUVs). The team works on a range of technologies, including underwater navigation, localization, perception, control systems, and autonomous decision-making, with the aim of building advanced underwater robots capable of performing complex tasks in challenging environments. AUV-IITB represents the institute at the prestigious AUVSI RoboSub competition, where student-built autonomous vehicles compete in a series of underwater missions, while fostering innovation and research in the field of marine robotics and autonomous systems.
        </p>
        <p className="mb-4">
            To know more about us, visit our website <a href="https://www.auv-iitb.org" className="text-blue-600 hover:underline p-0!">https://www.auv-iitb.org</a>
        </p>


        <h2 className="text-xl font-bold mb-2">IIT Bombay Racing</h2>
        <p className="mb-4">
            IIT Bombay Racing is the institute’s Formula Student Electric team, dedicated to the design, development, and manufacture of high-performance electric race cars for international Formula Student competitions. Since its inception in 2007, the team has represented IIT Bombay on global platforms, including the Formula Student event at Silverstone, while working across diverse domains such as vehicle dynamics, powertrain, electrical systems, autonomous technologies, aerodynamics, and manufacturing. As the first Formula Student team in India to transition to electric vehicles and develop driverless technology, IIT Bombay Racing has played a pioneering role in sustainable and autonomous mobility, fostering innovation in automotive engineering through hands-on design and competition.
        </p>
        <p className="mb-4">
            To know more about us, visit our website <a href="https://www.iitbracing.org" className="text-blue-600 hover:underline p-0!">https://www.iitbracing.org</a>
        </p>

        <h2 className="text-xl font-bold mb-2">IITB Rocket Team</h2>
        <p className="mb-4">
            The IIT Bombay Rocket Team is the institute’s student-led rocketry team, focused on the design, development, and testing of high-performance rockets and related aerospace technologies. Guided by mentors from IIT Bombay and ISRO, the team works across domains such as aerodynamics, propulsion, avionics, structures, and payload systems, integrating theoretical knowledge with practical engineering. The team represents the institute at national and international competitions, including the Intercollegiate Rocket Engineering Competition (IREC) and IN-SPACe’s rocketry challenges, and has established a strong record of performance, including being India’s top-ranked collegiate rocketry team and achieving notable success at the Spaceport America Cup.
        </p>
        <p className="mb-4">
            To know more about us, visit our website <a href="https://iitbrocketteam.in" className="text-blue-600 hover:underline p-0!">https://iitbrocketteam.in</a>
        </p>


        <h2 className="text-xl font-bold mb-2">Mars Rover Team (MRT) - IITB</h2>
        <p className="mb-4">
            The IITB Mars Rover Team is a student-led team under the Mars Society India (MSI) dedicated to the design and development of rover technologies for future planetary exploration. The team builds robust, all-terrain, remotely operated rovers capable of performing tasks relevant to Mars missions, including autonomous navigation, terrain traversal, astronaut assistance, and soil sampling and analysis. Since 2014, the team has been developing rover prototypes for participation in the University Rover Challenge (URC), an international competition held in Utah, USA, while advancing research and innovation in space robotics and exploring potential terrestrial applications in areas such as agriculture and autonomous surveillance.
        </p>
        <p className="mb-4">
            To know more about us, visit our website <a href="https://iitbmartian.github.io" className="text-blue-600 hover:underline p-0!">https://iitbmartian.github.io</a>
        </p>


        <h2 className="text-xl font-bold mb-2">Student Satellite Program (SSP) IIT Bombay</h2>
        <p className="mb-4">
            The IIT Bombay Student Satellite Program (IITBSSP) is the institute’s flagship space technology team, dedicated to the design, development, and operation of satellites and related space systems. Bringing together students from diverse disciplines, the team achieved a historic milestone with Pratham, one of the few student-built satellites to be successfully launched by ISRO, and is currently working on its successor, Advitiy, along with an autonomous ground station for satellite communication. Guided by IIT Bombay and ISRO mentors, IITBSSP works across domains such as aerospace, electronics, software, communication, and systems engineering, fostering innovation and research in satellite and space technologies.
        </p>
        <p className="mb-4">
            To know more about us, visit our website <a href="https://www.aero.iitb.ac.in/satlab/" className="text-blue-600 hover:underline p-0!">https://www.aero.iitb.ac.in/satlab/</a>
        </p>

        <h2 className="text-xl font-bold mb-2">Team ChemEca</h2>
        <p className="mb-4">
            Team ChemEca is IIT Bombay’s student-led initiative focused on developing innovative chemical engineering solutions for sustainability and climate-related challenges. The team works on projects spanning areas such as carbon capture, fuel cells, and clean energy technologies, with an emphasis on translating scientific concepts into practical applications. Its current work involves integrating carbon capture technology with HVAC systems to enable simultaneous air conditioning and CO₂ removal, aiming to improve indoor air quality while supporting decarbonization efforts. Through interdisciplinary research and engineering, the team contributes to the development of sustainable technologies for a greener future.
        </p>
        <p className="mb-4">
            To know more about us, visit our website <a href="https://chemecaiitb.github.io/ChemEca/" className="text-blue-600 hover:underline p-0!">https://chemecaiitb.github.io/ChemEca/</a>
        </p>


        <h2 className="text-xl font-bold mb-2">iGEM - IIT Bombay</h2>
        <p className="mb-4">
            The IIT Bombay iGEM Team is a multidisciplinary student team working at the intersection of biology and engineering to develop innovative solutions through synthetic biology. Representing the institute at the prestigious International Genetically Engineered Machine (iGEM) competition, the team undertakes projects spanning genetic engineering, computational biology, biotechnology, and healthcare applications. Its 2025 project focused on combating antimicrobial resistance by engineering an extracellular serine protease to disrupt bacterial biofilms, earning a Silver Medal at the iGEM Grand Jamboree. Through research-driven projects and international competition, the team fosters innovation in synthetic biology and its applications to real-world challenges.
        </p>
        <p className="mb-4">
            To know more about us, visit our website <a href="https://www.igem-iitb.in" className="text-blue-600 hover:underline p-0!">https://www.igem-iitb.in</a>
        </p>


        <h2 className="text-xl font-bold mb-2">Team ExoFly</h2>
        <p className="mb-4">
            The ExoFly Team is a multidisciplinary student team at IIT Bombay focused on the design and development of personal aerial mobility systems. The team works towards building a safe, quiet, ultra-compact vertical take-off and landing (VTOL) vehicle capable of carrying a single occupant, while exploring technologies at the intersection of aerospace, robotics, control systems, and mechanical design. Through research, prototyping, and engineering innovation, ExoFly aims to advance the development of next-generation personal flight and contribute to emerging technologies in autonomous and sustainable aerial transportation.
        </p>
        <p className="mb-4">
            To know more about us, visit our website <a href="https://exofly-iitb.github.io" className="text-blue-600 hover:underline p-0!">https://exofly-iitb.github.io</a>
        </p>

        <h2 className="text-xl font-bold mb-2">Team GenSUS</h2>
        <p className="mb-4">
            Team GenSUS is a student-led robotics team at IIT Bombay focused on the design, development, and prototyping of innovative robotic systems. Formed by a multidisciplinary group of technology enthusiasts, the team undertakes a variety of robotics projects spanning mechanical design, electronics, and control systems, with the flexibility to explore ideas driven by the interests of its members. Building on a culture of hands-on learning and experimentation, Team GenSUS provides a platform for collaborative engineering and the development of practical robotic solutions through project-based innovation.
        </p>
        <p className="mb-4">
            To know more about us, visit our website <a href="https://teamgensus.github.io/" className="text-blue-600 hover:underline p-0!">https://teamgensus.github.io/</a>
        </p>


        <h2 className="text-xl font-bold mb-2">Team Rakshak - IIT Bombay</h2>
        <p className="mb-4">
            Rakshak IITB is the institute’s student-led unmanned aerial systems team, dedicated to the design and development of Unmanned Aerial Vehicles (UAVs) for search and rescue and disaster response applications. Founded in 2015, the team works on building robust fixed-wing aircraft and related aerial technologies capable of supporting missions such as disaster relief, surveying and mapping, and wildlife conservation. Bringing together students from diverse disciplines, Rakshak IITB integrates expertise in aerodynamics, structures, electronics, control systems, and autonomous flight, while advancing practical UAV solutions through engineering innovation and iterative design.
        </p>
        <p className="mb-4">
            To know more about us, visit our website <a href="https://rakshakiitb.in/" className="text-blue-600 hover:underline p-0!">https://rakshakiitb.in/</a>
        </p>

        <h2 className="text-xl font-bold mb-2">Team SeDriCa - UMIC</h2>
        <p className="mb-4">
            Team SeDriCa is IIT Bombay’s autonomous driving team, dedicated to the development of self-driving vehicle technologies for Indian road conditions. Originating from the Unmesh Mashruwala Innovation Cell (UMIC), the team works on the design and integration of autonomous systems spanning robotics, computer vision, artificial intelligence, mechatronics, localization, motion planning, and control. Through the development of advanced autonomous vehicles and related technologies, Team SeDriCa contributes to research and innovation in intelligent transportation and autonomous mobility.
        </p>
        <p className="mb-4">
            To know more about us, visit our website <a href="https://umiciitb.org" className="text-blue-600 hover:underline p-0!">https://umiciitb.org</a>
        </p>

        <h2 className="text-xl font-bold mb-2">Team AeRoVe - UMIC</h2>
        <p className="mb-4">
            Team AeRoVe is IIT Bombay’s autonomous aerial robotics team, dedicated to the design and development of fixed-wing and multirotor unmanned aerial vehicles (UAVs) for autonomous flight applications. As a part of the Unmesh Mashruwala Innovation Cell (UMIC), the team works across domains such as mechatronics, control systems, machine learning, perception, path planning, and localization to develop advanced autonomous aerial platforms. The team represents the institute at international competitions, including the International Aerial Robotics Competition (IARC), while fostering innovation and research in autonomous aerial systems and robotics.
        </p>
        <p className="mb-4">
            To know more about us, visit our website <a href="https://umiciitb.github.io" className="text-blue-600 hover:underline p-0!">https://umiciitb.github.io</a>
        </p>


        <h2 className="text-xl font-bold mb-2">Team SHUNYA - IITB</h2>
        <p className="mb-4">
            Team Shunya is IIT Bombay’s sustainable housing team, dedicated to the design and development of affordable, prefabricated, net-zero energy homes powered by renewable technologies. Bringing together students from diverse engineering and architectural disciplines, the team works on innovative solutions for sustainable construction, energy efficiency, and climate-responsive design. As the only Indian team to represent the country at the prestigious Solar Decathlon, Team Shunya has earned multiple international accolades, including second-place finishes in the 2021 and 2023 US competitions, while advancing research and innovation in sustainable housing and the built environment.
        </p>
        <p className="mb-6">
            To know more about us, visit our website <a href="https://teamshunya.com" className="text-blue-600 hover:underline p-0!">https://teamshunya.com</a>
        </p>



        <h2 className="text-xl font-bold mb-2">
           Where to Begin ??
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
