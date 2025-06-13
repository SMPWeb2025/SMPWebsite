import React from 'react';
import teamData from "./teamData2.json";

function TeamLayout() {
    return (
        <div className='flex flex-col justify-center items-center w-full'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='md:text-4xl text-2xl font-bold mb-5 text-center'>SMP Team 2025-26</h1>
                <p className='md:text-lg text-sm mb-8'>
                    The Student Mentor Program (SMP) is a comprehensive institute body consisting of multiple verticals such as DAMP, ELP, and CTO, supported by a large team. It is led by the Overall Coordinators at the institute level, with Cabinet Heads overseeing each vertical. The Department Academic Mentorship Program (DAMP) functions under the guidance of 20 Departmental DAMP Coordinators and DAMP Cabinet Heads. The ELP and CTO verticals are also actively managed by their respective cabinet heads. In total, the SMP team comprises 144 Institute Student Mentors and 316 Department Academic Mentors, forming a strong support system for students across various departments and academic years.
                </p>
            </div>

            {/* <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 lg:gap-5 md:gap-2 place-items-center gap-5 px-10">
                {teamData.map((member) => (
                    <div className="card shadow-xl w-full border-black border-1" key={member.name}>
                        <figure>
                            <img
                                src={member.link || 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'}
                                alt={member.name}
                                className="object-cover w-full h-40"
                            />
                        </figure>
                        <div className="card-body p-0">
                            <h2 className="card-title justify-center lg:text-xl text-lg pt-2">{member.name}</h2>
                            <h3 className="text-center lg:text-md text-sm bg-amber-400">{member.designation}</h3>
                            <p className="lg:text-sm text-xs text-center pb-2">smaple caption</p>
                        </div>
                    </div>
                ))}
            </div> */}
            <div className="carousel rounded-box md:w-4/5 w-full">
                {teamData.map((member) => (
                    <div className="carousel-item md:w-60 w-50 p-6" key={member.name}>
                        <div className="card shadow-sm w-full">
                            <figure>
                                <img
                                    src={member.link || 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'}
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

//  <div className='flex flex-col justify-center items-center gap-5'>
//                 {teamData.map((dept) => (
//                     <div key={dept.designation} className='flex flex-col text-3xl font-bold gap-5 justify-center items-center'>
//                         <h1 className='text-center'>{dept.designation}</h1>
//                         <div className='grid md:grid-cols-2 grid-cols-1 gap-5 place-items-center'>
//                             {dept.members.map((member) => (
//                                 <div className="card max-w-[250px] shadow-sm" key={member.name}>
//                                     <figure>
//                                         <img
//                                             src={member.link}
//                                             alt={member.name}
//                                             className='aspect-square object-cover w-full'
//                                         />
//                                     </figure>
//                                     <div className="card-body">
//                                         <h2 className="card-title text-center justify-center">{member.name}</h2>
//                                         <p className='text-center'>{member.caption}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </div>