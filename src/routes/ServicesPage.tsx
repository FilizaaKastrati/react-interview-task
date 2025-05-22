import JobsiteServicesView from '../components/services/JobsiteServicesView';
import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { JobsContext } from '../contexts/JobsContext';

export default function ServicesPage() {
    const { jobId } = useParams();
    const navigate = useNavigate();
    const { jobs } = useContext(JobsContext);
    
    const job = jobs.find(j => j.id === jobId);
    
    if (!job) {
        return <div>Job not found</div>;
    }

    return (
        <JobsiteServicesView 
            job={job} 
            onBack={() => navigate('/jobs')} 
        />
    );
}
