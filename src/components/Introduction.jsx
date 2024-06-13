import profilePic from '../assets/profile.jpg'


function Introduction(){
    return (
        <div className="bg-gray-900 text-white py-6">
            <div className="container mx-auto text-center md:text-left flex flex-col md:flex-row items-center">
                <div className="rounded-full overflow-hidden w-24 h-24 mb-4 md:mb-0">
                    <img src={profilePic} alt="raju" className="w-full h-full object-cover" />
                </div>
                <div className="ml-0 md:ml-4">
                    <h2 className="text-2xl font-bold">@rajuhere</h2>
                    <p className="text-yellow-500">Offline</p>
                    <p>11:09:28 PM</p>

                    <p className="mt-4 text-purple-300">
                        Hey, I'm Raju Kumar I'm a <span className="text-yellow-500">20</span> year old full stack developer and freelancer based in India,
                        I enhance my proficiency in emerging technologies through hands-on projects that address challenges I believe have the potential to
                        <span className="text-yellow-500"> benefit </span> millions of users.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Introduction;