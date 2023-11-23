import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../../utility/localstorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {

    const jobs = useLoaderData()

    const [applied, setApplied] = useState([])
    const [display, setDisplay] = useState([])

    const handleFilter = filter => {
        if (filter === 'All') {
            setDisplay(applied)
        } else if (filter === 'Remote') {
            const remote = applied.filter(job => job.remote_or_onsite === 'Remote')
            setDisplay(remote)
        } else if (filter === 'Onsite') {
            const onsite = applied.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplay(onsite)
        }
    }

    useEffect(() => {
        const storedJobIds = getStoredApplication();
        if (jobs.length > 0) {

            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))

            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id)
                jobsApplied.push(job)
            }

            setApplied(jobsApplied)
            setDisplay(jobsApplied)
        }
    }, [jobs])

    return (
        <div>
            <h2 className="text-5xl text-center m-10">Applied Jobs</h2>
            <div className="flex justify-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn m-1">Filter By</label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => {handleFilter('All')}}><a>All</a></li>
                        <li onClick={() => {handleFilter('Remote')}}><a>Remote</a></li>
                        <li onClick={() => {handleFilter('Onsite')}}><a>Onsite</a></li>
                    </ul>
                </div>
            </div>
            <div className="space-y-4 m-10">
                {
                    display.map((job, idx) => <AppliedJob key={idx} job={job}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;