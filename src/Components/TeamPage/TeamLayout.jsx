import teamData from "./teamData.json";

function TeamLayout() {
    return (
        <div className='flex flex-col justify-center items-center w-full'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='md:text-4xl text-2xl font-bold mb-5 text-center'>SMP Team 2025-26</h1>
                <p className='md:text-lg text-sm mb-8 text-center'>
                    The Student Mentor Program (SMP) is a comprehensive institute body consisting of multiple verticals such as DAMP, ELP, and CTO, supported by a large team. It is led by the Overall Coordinators at the institute level, with Cabinet Heads overseeing each vertical. The Department Academic Mentorship Program (DAMP) functions under the guidance of 20 Departmental DAMP Coordinators and DAMP Cabinet Heads. The ELP and CTO verticals are also actively managed by their respective cabinet heads. In total, the SMP team comprises 144 Institute Student Mentors and 316 Department Academic Mentors, forming a strong support system for students across various departments and academic years.
                </p>
            </div>

            <div className="carousel rounded-box md:w-4/5 w-full">
                {teamData.map((member) => (
                    <div className="carousel-item md:w-60 w-50 p-6" key={member.name}>
                        <div className="card shadow-sm w-full">
                            <figure>
                                <img
                                    src={member.link}
                                    alt={member.name}
                                    className="object-cover w-full md:h-64 h-40"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-center">{member.name}</h2>
                                <p className="text-center">{member.designation}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default TeamLayout;