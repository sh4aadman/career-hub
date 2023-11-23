import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";

const JobDetails = () => {

    const jobs = useLoaderData()

    const { id } = useParams()
    const idInt = parseInt(id)

    const job = jobs.find(job => job.id === idInt)

    const handleApplyNow = () => {
        saveJobApplication(idInt)
        toast('Application has been successfully dropped!')
    }

    return (
        <div>
            <h2 className="text-5xl text-center">Job Details</h2>
            <div className="grid grid-cols-3 text-3xl m-10">
                <div className="col-span-2 w-full">
                    <h2>Job Description: </h2>
                    <p className="text-sm">{job.job_description}</p>
                </div>
                <div className="w-full">
                    <h2>Job Details: </h2>
                    <p className="text-lg">{job.contact_information.email}</p>
                    <button onClick={handleApplyNow} className="btn btn-primary my-5 w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;