import InternshipCard from "./InternshipCard";
import internshipList from "../assets/internshipList";


function Internship() {
    return (
        <section id='internship' className="bg-gray-900 text-white pb-20 ">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-10 text-green-300">code<span className="text-purple-300"> : </span><span className=' text-cyan-300'>internships</span></h2>
                {internshipList.map((internship, index) => (
                    <InternshipCard
                        key={index}
                        avatar={internship.avatar}
                        username={internship.username}
                        projectName={internship.projectName}
                        location={internship.location}
                        duration={internship.duration}
                        company={internship.company}
                        description={internship.description}
                        technologies={internship.technologies}
                    />
                ))}
            </div>
        </section>
    );
}

export default Internship;