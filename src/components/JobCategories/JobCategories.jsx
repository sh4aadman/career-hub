import { useEffect, useState } from "react";
import JobCategory from "../JobCategory/JobCategory";

const JobCategories = () => {

    const [jobCategories, setJobCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(response => response.json())
            .then(data => setJobCategories(data))
    }, [])

    return (
        <div>
            <div className="text-center mt-32">
                <h2 className="text-5xl font-extrabold text-black">Job Category List</h2>
                <p className="text-[#757575] mt-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-4 gap-6 mt-8">
                {
                    jobCategories.map(job =><JobCategory key={job.id} job={job}></JobCategory>)
                }
            </div>
        </div>
    );
};

export default JobCategories;