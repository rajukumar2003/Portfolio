import profilePic from '../assets/profile.jpg'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

function Profile() {

    return (
        <section className="bg-gray-900 text-white h-auto md:p-20 p-10">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
                <div className=" md:text-left text-purple-300">
                    <h1 className=" text-5xl md:text-6xl font-bold mb-4 text-[#b3dcf2]">Raju k</h1>
                    <p className=" text-lg md:text-xl mb-2">Developer</p>
                    <p className="text-lg md:text-xl mb-2">Freelancer</p>
                    <p className="text-lg md:text-xl mb-4"><span className="text-green-300">Building</span> something <span className="text-green-300">Big</span>.</p>
                    <div className="flex md:justify-start space-x-9 mb-4 pt-5 text-xl text-orange-300">
                        <a href="https://github.com/rajukumar2003/" className="  hover:text-orange-200" target='_blank'><i className="fab fa-github"><FaGithub/></i></a>
                        <a href="https://www.linkedin.com/in/raju-kumar-39477b235" className=" hover:text-orange-200" target="_blank"><i className="fab fa-linkedin"><FaLinkedin/></i></a>
                        <a href="https://x.com/KumarRaju12003" className=" hover:text-orange-200" target="_blank"><i className="fas fa-envelope"><FaTwitter /></i></a>
                        <a href="mailto:dev.rajukumarsingh@gmail.com" className=" hover:text-orange-200" target="_blank"><i className="fas fa-envelope"><FaEnvelope /></i></a>
                    </div>
                </div>
                <div className=" rounded-lg overflow-hidden w-48 h-48 ">
                    <img src={profilePic} alt="raju" className="w-full h-full object-cover" />
                </div>
            </div>
        </section>
    );
};

export default Profile;