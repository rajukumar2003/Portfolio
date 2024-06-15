import profilePic from '../assets/profile.jpg'


function Introduction(){
    return (
        <div className="bg-gray-900 text-white py-6">
            <div className="container mx-auto md:text-left flex flex-col md:flex-row items-center">
                <div className="rounded-lg overflow-hidden w-28 h-28 hidden sm:block">  {/* hidden sm:block -- img hidden on small screen*/}
                    <img src={profilePic} alt="raju" className="w-full h-full object-cover " />
                </div>
                <div className="ml-0 md:ml-4 flex flex-wrap flex-col justify-center items-center md:items-start">
                    {/* <h2 className="text-blue-300 text-2xl font-bold pb-3 md:pb-0">@raju_kumar_12003</h2>
                    <p className="text-yellow-500">Offline</p>
                    <p className='text-green-300'>11:09:28 PM</p> */}

                    <span className='mt-3 p-8 md:p-0 '>
                        <p className=' sm:hidden pb-4 text-[#b3dcf2] text-2xl font-bold'>bio</p>
                        <p className=" text-purple-300 text-wrap font-bold leading-8">
                            Hey, I'm Raju Kumar I'm a <span className="text-yellow-500">20</span> year old full stack developer and freelancer based in India,
                            I enhance my proficiency in emerging technologies through hands-on projects that address challenges I believe have the potential to
                            <span className="text-yellow-500"> benefit </span> millions of users.
                        </p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Introduction;