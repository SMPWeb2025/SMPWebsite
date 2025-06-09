import Announcements from '../../Components/Annoucements/Announcements'
import Dropdown from '../../Components/NavigationDropdown/Dropdown'
import TabNavigator from '../../Components/NavigationDropdown/TabNavigator'
import PageLayout from '../../Components/PageLayout/PageLayout'

function Academics() {
    const subPages = ["Introduction",
        "Curriculum",
        "Departments",
        "CPI Calculation",
        "Branch Change",
        "IDDDP",
        "Semester Exchange"
    ]

    const content = `Welcome to the website of the Student Mentor Program, IIT Bombay! The main aim of this website is to acquaint you with the different facets of this college which you might be curious about. We hope this helps in making the difficult choice ahead of you and gives insight into the culture at IIT Bombay from a student’s perspective!

We are the Student Mentor Programme (SMP), a program within IIT Bombay, with the primary objective of enabling constructive and positive interaction, guidance, and mentorship of junior students by senior students. We provide a reliable and comprehensive support system to the student community to motivate them to excel in both academic and non-academic fields, making the most of their life at IIT Bombay.

This website has a lot of carefully curated information relevant to you. Take your time to go through different sections covering various aspects of life at IITB - from academics to extracurriculars.

Before you begin exploring, we urge you to visit the official website of IIT Bombay, which covers important official information for prospective students: Information for Prospective Students | Indian Institute of Technology Bombay.

We hope this website gives you some clarity. In case of any doubts or concerns, feel free to email us at ismp@iitb.ac.in, and we will reply as soon as possible. Our team is always there to assist you, and you can visit this page to access our contact information.

Happy exploring!

Warm Regards,
Jainesh Mehta | Ananya Srivastava | Vaibhavi Shinde
Overall Coordinators, Student Mentor Program, IIT Bombay`

    return (
        <div className='lg:p-30 lg:pt-15 md:p-15 p-5 bg-gray-700'>
            <PageLayout navItems={subPages} content={content} title="Introduction"/>
        </div>
    )
}

export default Academics
