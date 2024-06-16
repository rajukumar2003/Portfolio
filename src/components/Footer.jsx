import { FaEnvelope, FaInstagram, FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <div className=" bg-gray-900 text-white text-center pb-12">
            <hr className=" border-t w-3/5 border-gray-600 mx-auto mb-5" /> 
            <div className=" pt-6 flex flex-col md:flex-row justify-between items-center w-3/5 mx-auto space-y-4 md:space-y-0">
                <div className=' flex space-x-8 text-orange-300'>
                    <a href="https://github.com/rajukumar2003/" target='_blank'><FaGithub className="text-orange-300 text-xl hover:text-orange-200" /></a>
                    <a href="https://www.instagram.com/rajukumarsingh2003/" target='_blank'><FaInstagram className=" text-xl hover:text-orange-200" /></a>
                    <a href="mailto:dev.rajukumarsingh@gmail.com"><FaEnvelope className="text-orange-300 text-xl hover:text-orange-200" /></a>
                </div>
                <div className=" md:font-bold text-purple-300">Made with <span className=" text-orange-300">{'<'}3,</span> Thank you! </div>
            </div>
        </div>
    )
}

export default Footer;