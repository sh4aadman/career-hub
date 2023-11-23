import PropTypes from 'prop-types'
import { FaMapLocation, FaMoneyBills } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const FeaturedJob = ({ featuredJob }) => {

    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = featuredJob

    return (
        <div className='border border-[#E8E8E8] rounded-lg p-10'>
            <div>
                <img src={logo} alt="" />
            </div>
            <h2 className='text-2xl font-extrabold text-[#474747] mt-8'>{job_title}</h2>
            <p className='text-xl font-semibold text-[#757575] mt-2'>{company_name}</p>
            <div className='mt-4'>
                <button className='text-transparent bg-gradient-to-t from-[#7E90FE] to-[#9873FF] bg-clip-text py-2 px-5 border border-[#7E90FE] rounded mr-4'>{remote_or_onsite}</button>
                <button className='text-transparent bg-gradient-to-t from-[#7E90FE] to-[#9873FF] bg-clip-text py-2 px-5 border border-[#7E90FE] rounded'>{job_type}</button>
            </div>
            <div className='mt-4 flex gap-6'>
                <div className='flex gap-2 items-center text-[#757575] text-xl font-semibold'>
                    <FaMapLocation></FaMapLocation>
                    <h4 >{location}</h4>
                </div>
                <div className='text-[#757575] text-xl font-semibold flex gap-2 items-center'>
                    <FaMoneyBills></FaMoneyBills>
                    <h4>Salary : {salary}</h4>
                </div>
            </div>
            <Link to={`/jobs/${id}`}>
                <button className='text-xl font-extrabold bg-gradient-to-t from-[#7E90FE] to-[#9873FF] text-white rounded py-2 px-4 mt-6'>View Details</button></Link>
        </div>
    );
};

FeaturedJob.propTypes = {
    featuredJob: PropTypes.object
}

export default FeaturedJob;