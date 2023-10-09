import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {

    const [featuredJobs, setFeaturedJobs] = useState([])

    const [defaultJobs, setDefaultJobs] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(response => response.json())
            .then(data => setFeaturedJobs(data))
    }, [])

    const handleSeeAllJobs = () => {
        setDefaultJobs()
    }

    return (
        <div>
            <div className="text-center mt-32">
                <h2 className="text-5xl font-extrabold text-black">Featured Jobs</h2>
                <p className="text-[#757575] mt-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-8">
                {
                    featuredJobs.map(featuredJob => <FeaturedJob key={featuredJob.id} featuredJob={featuredJob}></FeaturedJob>)
                }
            </div>
            <div className="text-center mt-10 mb-32">
                <button onClick={handleSeeAllJobs} className="text-xl font-extrabold text-white bg-gradient-to-t from-[#7E90FE] to-[#9873FF] py-5 px-7 rounded-lg">See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;