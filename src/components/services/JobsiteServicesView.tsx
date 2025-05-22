import { useState } from 'react';
import { Box } from '@mui/material';
import ServiceList from './ServiceList';
import type { Job } from '../../constants/jobs';
import { ActionButton } from '../ui/ActionButton';
import SearchInput from '../ui/SearchInput';
import DriverGrid from './DriverGrid';
import { services as initialServices } from '../../constants/services';
import type { RowData } from '../../constants/services';
import ContainerWithHeader from '../ui/Container';

interface Props {
    job: Job;
    onBack: () => void;
}

export default function JobsiteServicesView({ job, onBack }: Props) {
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [search, setSearch] = useState('');
    const [services, setServices] = useState<RowData[]>(initialServices);

    const servicesList = job.services?.length ? job.services : job.category || [];

    const handleUpdateService = async (updatedData: RowData) => {
        setServices(prevServices => 
            prevServices.map(service => 
                service.id === updatedData.id ? updatedData : service
            )
        );
    };

    return (
        <Box sx={{ 
            display: 'flex',
            gap: 2,
            p: 2,
            height: '100%',
            width: '100%'
        }}>
            <ContainerWithHeader 
                title={job.name}
                size={4}
            >
                <Box sx={{ mt:2, display: 'flex', justifyContent: 'center', mb: 2 }}>
                    <ServiceList
                        services={servicesList}
                        selected={selectedService}
                        onSelect={(s) => {
                            setSelectedService(s);
                            setSearch('');
                        }}
                    />
                    </Box>
                    <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'center', mb:2 }}>
                        <ActionButton
                            actionVariant="back"
                            showIcon={true}
                            sx={{ maxWidth: "160px" }}
                            onClick={onBack}
                        />
                    </Box>
            </ContainerWithHeader>
            <ContainerWithHeader
                size={8}
                title={selectedService || 'Data Grid'}
                headerRight={
                    <SearchInput
                        value={search}
                        onChange={setSearch}                placeholder="Search item"
                        name={search}
                        sx={{ mb: 0 }}     
                    />
                }
            >
                <Box sx={{ flexGrow: 1, position: 'relative', height: '100%' }}>
                    <DriverGrid
                        rows={services}
                        search={search}
                        show={!!selectedService}
                        onUpdateService={handleUpdateService}
                    />
                </Box>
            </ContainerWithHeader>
        </Box>
    );
}
