import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const AppliedJob = ({ job }) => {

    const { id, logo, job_title, company_name, remote_or_onsite, job_type } = job

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className='p-4' src={logo} alt="job-image" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className='space-x-4'>
                    <button className='p-3 border border-blue-700 rounded'>{remote_or_onsite}</button>
                    <button className='p-3 border border-blue-700 rounded'>{job_type}</button>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/jobs/${id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

AppliedJob.propTypes = {
    job: PropTypes.object
}

export default AppliedJob;