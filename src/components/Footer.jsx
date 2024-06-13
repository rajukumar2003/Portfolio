import { FaEnvelope, FaDiscord, FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <div className=" bg-gray-900 text-white text-center pb-12">
            <hr class=" border-t w-3/5 border-gray-600 mx-auto mb-5" /> 
            <div className=" pt-6 flex flex-col md:flex-row justify-between items-center w-3/5 mx-auto space-y-4 md:space-y-0">
                <div className=' flex space-x-4'>
                    <FaEnvelope className="text-orange-300  hover:text-orange-200" />
                    <FaDiscord className="  text-orange-300 text-xl hover:text-orange-200" />
                    <FaGithub className="text-orange-300 text-xl hover:text-orange-200" />
                </div>
                <div className=" md:font-bold text-purple-300">Made with <span className=" text-orange-300">{'<'}3,</span> Thank you! </div>
            </div>
        </div>
    )
}

export default Footer;