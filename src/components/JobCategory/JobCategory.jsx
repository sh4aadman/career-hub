import PropTypes from 'prop-types'

const JobCategory = ({job}) => {

    const { logo, category_name, availability } = job;

    return (
        <div className="bg-gradient-to-t from-[#7e90fe0d] to-[#9873ff0d] rounded-lg p-10 box-border">
            <img className="mb-8 h-10 w-10 bg-gradient-to-t from-[#7e90fe1a] to-[#9873ff1a] p-3 box-content rounded-lg" src={logo} alt={`photo of ${category_name}`} />
            <div>
                <h2 className="text-xl font-extrabold text-[#474747]">{category_name}</h2>
                <p className="text-[#A3A3A3] mt-2">{availability}</p>
            </div>
        </div>
    );
};

JobCategory.propTypes = {
    job: PropTypes.object
}

export default JobCategory;