import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import RHFTextField from '../hook-form/RHFTextField';
import RHFSelectField from '../hook-form/RHFSelect';
import { RHFMultiSelectField } from '../hook-form/RHFMultiSelect';
import FormModal from '../ui/FormModal';
import { type JobFormValues, type Props } from '../../constants/jobs';
import { statusOptions } from '../../constants/status';
import { categoryOptions } from '../../constants/categories';
import Zod from 'zod';


export default function JobFormModal({ open, onClose, onSubmit, initialData }: Props) {    
  
    const jobFormSchema = Zod.object({
        name: Zod.string().min(1, 'Name is required'),
        category: Zod.array(Zod.string()).optional(),
        status: Zod.enum(['In Progress', 'Completed', 'On Hold'], {
            errorMap: () => ({ message: 'Status is required' }),
        })
        .default('In Progress'),
        services: Zod.array(Zod.string()).optional(),   
    });
    const methods = useForm({
        resolver: zodResolver(jobFormSchema),
      defaultValues: {
            name: '',
            category: [],
            status: 'In Progress',
            services: [],
            ...(initialData || {})
        },
    });const {
        reset,
        formState: { isSubmitting },
    } = methods;

    useEffect(() => {
        if (initialData) {
            reset(initialData);
        }
    }, [initialData, reset]);

    const handleSave = async (data: JobFormValues) => {
        await onSubmit(data);
        reset();
        onClose();
    };    return (
        <FormModal
            open={open}
            onClose={onClose}
            title={initialData ? 'Edit Job' : 'Create New Job'}
            description={initialData ? 'Edit the job details below' : 'Fill in the details to create a new job'}
            methods={methods}
            onSubmit={handleSave}
            isSubmitting={isSubmitting}
        >
            <Grid container spacing={1} sx={{ mb: 4 }}>
                <Grid size={12}>
            <RHFTextField
                label="Name"
                placeholder="Type the jobsite's name"
                name="name"
                required
                fullWidth
                variant="outlined"
                sx={{
                    mb: 4,
                    '& .MuiOutlinedInput-root': {
                        bgcolor: '#F3F4F7',
                        borderRadius: 1,
                        '& fieldset': { border: 'none' },
                    },
                }}
            />
            </Grid>
                <Grid size={8}>
                    <RHFMultiSelectField
                        name="category"
                        label="Categories"
                        options={categoryOptions}
                       
                    />
                </Grid>

                <Grid size={4}>
                    <RHFSelectField
                        label="Status"
                        name="status"
                        options={statusOptions}
                    />
                </Grid>
         </Grid>
        </FormModal>
    );
}
