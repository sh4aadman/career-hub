function Banner() {
    return (
        <div className="flex justify-between items-center">
            <div className="my-32">
                <h2 className="text-7xl font-extrabold">One Step Closer To Your <br />
                    <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent">Dream Job</span>
                </h2>
                <p className="text-lg font-medium text-[#757575] mt-6 mb-8">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-7 py-5 text-xl font-extrabold text-white rounded-lg">Get Started</button>
            </div>
            <div className=" w-full">
                <img src="/src/assets/assets/images/user.png" alt="banner-image" />
            </div>
        </div>
    );
}

export default Banner;