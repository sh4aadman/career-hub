import PropTypes from 'prop-types'
import { BiCurrentLocation, BiDollarCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Job = ({ job }) => {

    const { id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure className='p-5'><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className='space-x-4'>
                    <button className='p-3 border border-blue-700 rounded'>{remote_or_onsite}</button>
                    <button className='p-3 border border-blue-700 rounded'>{job_type}</button>
                </div>
                <div className='flex gap-3'>
                    <h2 className='flex items-center gap-1'><BiCurrentLocation></BiCurrentLocation> {location}</h2>
                    <h2 className='flex items-center gap-1'><BiDollarCircle></BiDollarCircle> {salary}</h2>
                </div>
                <div className="card-actions">
                    <Link to={`/jobs/${id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object
}

export default Job;