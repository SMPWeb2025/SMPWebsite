import React from 'react';
import PixelTransition from './PixelTransition';

const TeamCard = ({ member }) => {
    return (
        <div className="card rounded-2xl shadow-lg shadow-gray-500 w-full h-full border-2 border-black">
            <PixelTransition
                firstContent={
                    <figure className="h-full">
                        <img
                            loading='lazy'
                            src={member.link}
                            alt={member.name}
                            className="object-cover w-full h-full"
                        />
                    </figure>
                }
                secondContent={
                    <div className="w-full h-full grid place-items-center bg-[#111]">
                        <p className="text-center md:text-sm h-full text-white p-4 flex items-center text-[12px] italic">
                            "{member.caption}"
                        </p>
                    </div>
                }
                gridSize={12}
                pixelColor='#ffffff'
                animationStepDuration={0.2}
            />
            <div className="card-body">
                <h2 className="card-title text-center justify-center">{member.name}</h2>
                <p className="text-center">{member.designation}</p>
            </div>
        </div>
    );
};

export default TeamCard;