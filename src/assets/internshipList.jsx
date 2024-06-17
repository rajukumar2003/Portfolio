// avatar, username, projectName, location, duration, company, description, technologies --> internshipList
import { FaJs, FaReact, FaNodeJs, FaPython, } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress, SiFirebase, SiNextdotjs, SiTailwindcss, SiGithub } from 'react-icons/si';

const internshipList = [
    {
        avatar: "https://avatars.githubusercontent.com/u/77429473?v=4",
        username: "rajukumar2003",
        projectName: "Backend Developer Intern",
        location: "Onsite, Delhi, India",
        duration: "March 2023 - May 2023",
        company: "Upedd",
        description: "Developed functionality for a PDF annotation tool using the PyPDF2 library, enabling users to add comments, text, and other modifications directly to PDF documents.",
        technologies: [
            { name: 'Python', icon: <FaPython className="text-yellow-400" /> },
            { name: 'Firebase', icon: <SiFirebase className="text-yellow-400" /> },
            { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-blue-400" /> },
        ]
    },
    {
        avatar: "https://media.licdn.com/dms/image/C4D0BAQHoxcs1do56qA/company-logo_200_200/0/1630577825461/remotestate_logo?e=2147483647&v=beta&t=Y40IwtxNBH6lnNbjtQ3EZBLk9ns_pjmJd3g8Oq_sCWw",
        username: "rajukumar2003",
        projectName: "Software Developer Intern",
        location: "Onsite, Delhi, India",
        duration: "May 2024 - July 2024",
        company: "Remote State",
        description: "Undergoing React training to prepare for upcoming development tasks.",
        technologies: [
            { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
            { name: 'React', icon: <FaReact className="text-blue-400" /> },
            { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
        ]
    },
    
];

export default internshipList;