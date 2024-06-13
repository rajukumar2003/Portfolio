import React from 'react';

function ProjectCard({ avatar, username, projectName, location, duration, role, description, technologies }) {
    return (
        <section id='projects' className=" py-5">
            <div className="bg-gray-800 p-6 rounded-lg mb-6 relative border border-r-8 border-b-8 border-violet-600 w-2/4 mx-auto">
                <div className="flex items-center mb-4">
                    <img src={avatar} alt='link' className="w-10 h-10 rounded-full mr-3" />
                    <span className="text-sm text-gray-400">{username}</span>
                    <span className="ml-auto text-sm text-gray-400">{location} • {duration}</span>
                </div>
                <h3 className="text-2xl font-bold text-orange-300 mb-2">{projectName}</h3>
                <h4 className="text-xl font-semibold text-purple-400 mb-4">{role}</h4>
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
