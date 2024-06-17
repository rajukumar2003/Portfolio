import { FaJs, FaReact, FaNodeJs, FaPython,  } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress, SiFirebase, SiNextdotjs, SiTailwindcss, SiGithub} from 'react-icons/si';

const projectsList = [
    {
        gitLink: "https://uniblind-fd882.web.app/",
        liveLink: "https://uniblind-fd882.web.app/",
        username: "rajukumar2003",
        projectName: "UniBlind",
        location: "Remote, India",
        duration: "April 2024 - Present",
        role: "Team Lead",
        description: "Led a 4-person team in developing UniBlind, a platform for open university discussions, focused on anonymity to promote candid conversations.",
        technologies: [
            { name: 'Firebase', icon: <SiFirebase className="text-yellow-400" /> },
            { name: 'React', icon: <FaReact className="text-blue-400" /> },
            { name: 'Tailwind', icon: <SiTailwindcss className="text-blue-400" /> },
        ]
    },
    {
        gitLink: "https://github.com/rajukumar2003/Paytm-backend",
        liveLink: "https://paytm-rk.onrender.com",
        username: "rajukumar2003",
        projectName: "Paytm Clone",
        location: "Remote, India",
        duration: "February 2024",
        role: "Full Stack Developer",
        description: "Successfully deployed a Paytm clone with secure authentication on Render.com, showcasing initiative, deployment proficiency, and a commitment to accessibility.",
        technologies: [
            { name: 'React', icon: <FaReact className="text-blue-400" /> },
            { name: 'Express', icon: <SiExpress className="text-black-400" /> },
            { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
        ]
    },
    {
        gitLink: "https://github.com/rajukumar2003/Flask-Higher-Lower",
        liveLink: "https://higher-lower-game-g4ay.onrender.com",
        username: "rajukumar2003",
        projectName: "Higher Lower Game",
        location: "Remote, India",
        duration: "October 2023",
        role: "Backend Developer",
        description: "Implemented dynamic routing in a Flask application, where user input determines the route and subsequent content (GIF display).",
        technologies: [
            { name: 'Flask', icon: <FaPython className="text-blue-400" /> },
        ]
    },
    {
        gitLink: "https://github.com/rajukumar2003/snake-o-game",
        liveLink: null,
        username: "rajukumar2003",
        projectName: "Snake Game",
        location: "Remote, India",
        duration: "July 2023",
        role: "Software Developer",
        description: "Developed a Snake game using object-oriented principles in Python, creating a Snake class with methods for movement, growth, and reset functionality.",
        technologies: [
            { name: 'Python', icon: <FaPython className="text-blue-400" /> },
            { name: 'Tkinter', icon: <FaPython className="text-blue-400" /> },
        ]
    },
    {
        gitLink: "https://github.com/rajukumar2003/Guess-Indian-States-Game",
        liveLink: null,
        username: "rajukumar2003",
        projectName: "Guess-Indian-States Educational Game",
        location: "Remote, India",
        duration: "August 2023",
        role: "Software Developer",
        description: "Developed an interactive game that combines Indian geography knowledge with visual mapping, enhancing state recognition and location learning.",
        technologies: [
            { name: 'Python', icon: <FaPython className="text-blue-400" /> },
            { name: 'Pandas', icon: <FaPython className="text-blue-400" /> },
            { name: 'Tkinter', icon: <FaPython className="text-blue-400" /> },
        ]
    },
    {
        gitLink: "https://github.com/rajukumar2003/Pomodoro-Timer",
        liveLink: null,
        username: "rajukumar2003",
        projectName: "Pomodoro Timer",
        location: "Remote, India",
        duration: "October 2023",
        role: "Software Developer",
        description: "Constructed a graphical user interface (GUI) using Python’s Tkinter library, including elements like buttons, labels, and a canvas for visual feedback.",
        technologies: [
            { name: 'Python', icon: <FaPython className="text-blue-400" /> },
            { name: 'Tkinter', icon: <FaPython className="text-blue-400" /> },
        ]
    }
];

export default projectsList;