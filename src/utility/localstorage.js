const getStoredApplication = () => {
    const storedApplication = localStorage.getItem('job-applications');
    if(storedApplication){
        return JSON.parse(storedApplication);
    }
    return [];
}

const saveJobApplication = id => {
    const storedJobApplication = getStoredApplication();
    const exists = storedJobApplication.find(jobId => jobId === id)
    if(!exists){
        storedJobApplication.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplication));
    }
    
}

export { getStoredApplication, saveJobApplication }
