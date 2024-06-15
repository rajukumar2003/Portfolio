import { FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaAws, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress, SiFirebase, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import ProjectCard from './ProjectCard';
import projectList from '../assets/projectsList';

function Skills() {
    const skills = [
        { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
        { name: 'Typescript', icon: <SiTypescript className="text-blue-400" /> },
        { name: 'Python', icon: <FaPython className="text-blue-400" /> },
        { name: 'Java', icon: <FaJava className="text-red-400" /> },
        { name: 'React', icon: <FaReact className="text-blue-400" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-black-400" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-400" /> },
        { name: 'Express', icon: <SiExpress className="text-black-400" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
        { name: 'AWS', icon: <FaAws className="text-orange-400" /> },
        { name: 'Docker', icon: <FaDocker className="text-blue-400" /> },
        { name: 'Firebase', icon: <SiFirebase className="text-yellow-400" /> },
    ];

    return (
        <section id='skills' className="bg-gray-900 text-white py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-10 text-green-300">code<span className="text-purple-300"> : </span><span className=' text-cyan-300'>skills</span></h2>
                <div className="flex flex-wrap justify-center ">
                    {skills.map((skill, index) => (
                        <div key={index} className="w-1/2 md:w-1/4 py-5">
                            <div className="flex flex-col items-center">
                                <span className="text-2xl mb-1">{skill.icon}</span>
                                <span >{skill.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <h2 id='projects' className="mx-auto m-20 text-3xl font-bold mb-10 text-green-300 text-center">code<span className="text-purple-300"> : </span><span className=' text-cyan-300'>projects</span></h2>

            {projectList.map((project, index) => (
                <ProjectCard
                    key={index}
                    avatar={project.avatar}
                    username={project.username}
                    projectName={project.projectName}
                    location={project.location}
                    duration={project.duration}
                    role={project.role}
                    description={project.description}
                    technologies={project.technologies}
                />
            ))}
        </section>

    );
}

export default Skills;
