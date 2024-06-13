import profilePic from '../assets/profile.jpg'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Profile() {

    return (
        <section className="bg-gray-900 text-white h-auto flex flex-col items-center justify-center p-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
                <div className="text-center md:text-left">
                    <h1 className="text-6xl font-bold mb-4">Raju k</h1>
                    <p className="text-xl mb-2">Developer</p>
                    <p className="text-xl mb-2">Freelancer</p>
                    <p className="text-xl mb-4"><span className="text-green-400">Building</span> something <span className="text-purple-400">Big</span>.</p>
                    <div className="flex justify-center md:justify-start space-x-9 mb-4 pt-5 text-xl text-orange-300">
                        <a href="https://github.com/rajukumar2003/" className="  hover:text-orange-200" target='_blank'><i className="fab fa-github"><FaGithub/></i></a>
                        <a href="https://www.linkedin.com/in/raju-kumar-39477b235" className=" hover:text-orange-200" target="_blank"><i className="fab fa-linkedin"><FaLinkedin/></i></a>
                        <a href="https://x.com/KumarRaju12003" className=" hover:text-orange-200" target="_blank"><i className="fas fa-envelope"><FaTwitter/></i></a>
                    </div>
                </div>
                <div className=" rounded-lg overflow-hidden w-48 h-48">
                    <img src={profilePic} alt="raju" className="w-full h-full object-cover" />
                </div>
            </div>
        </section>
    );
};

export default Profile;