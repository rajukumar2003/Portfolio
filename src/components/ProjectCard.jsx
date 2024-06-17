import React from 'react';
import { FaGithub, FaGlobe} from 'react-icons/fa';


function ProjectCard({ gitLink, liveLink, username, projectName, location, duration, role, description, technologies }) {
    return (
        <section className=" py-5">
            <div className="bg-gray-900 p-6 rounded-lg mb-6 relative border border-r-8 border-b-8 border-indigo-900 w-full md:w-3/5 mx-auto">
                <div className="flex flex-wrap items-center mb-4">
                    <a href={gitLink} className="  hover:text-orange-200 text-orange-300 mr-3" target='_blank' rel="noopener noreferrer" ><FaGithub className=' w-7 h-7' /> </a>
                    <span className="text-sm text-gray-400 ">{username}</span>
                    <span className=" pl-16 mx-auto pt-2 text-sm text-gray-400 "> <span className=' text-green-300'>{duration}</span></span>
                </div>
                <a href={liveLink} target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center mb-2">
                        <h3 className="text-xl md:text-2xl font-bold text-orange-300 mr-2 ">{projectName}</h3>
                        {liveLink != null && <FaGlobe className="text-orange-200" />}
                    </div>
                </a>
                <h4 className="text-base md:text-xl font-semibold text-purple-400 mb-4">{role}</h4>
                <p className="text-gray-300 mb-4">• {description}</p>
                <div className="flex flex-wrap space-x-2 text-green-400">
                    {technologies.map((tech, index) => (
                        <span key={index} className="flex items-center">
                            {tech.icon}
                            <span className="ml-1 text-sm">{tech.name}</span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectCard;
