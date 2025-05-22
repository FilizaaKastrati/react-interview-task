import { Box, Autocomplete } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useEffect } from 'react';
import RHFTextField from '../hook-form/RHFTextField';
import FormModal from '../ui/FormModal';
import { FORM_FIELDS, type Props, type RowData, SELECT_OPTIONS } from '../../constants/services';

export default function ServiceItemModal({ open, onClose, onSubmit, initialData }: Props) {
    const methods = useForm<RowData>({
        defaultValues: {
            id: 0,
            item: '',
            quantity: 0,
            description: '',
            notes: ''
        },
    });    const {
        reset,
        formState: { isSubmitting },
    } = methods;

    useEffect(() => {
        if (open && initialData) {
            reset(initialData);
        }
    }, [initialData, open, reset]);

    const handleSave = async (data: RowData) => {
        await onSubmit(data);
        onClose();
    };return (
        <FormModal
            open={open}
            onClose={onClose}
            title={`Edit Service Item ${initialData?.item}`}
            description={`Update the details for service item ${initialData?.item}`}
            methods={methods}
            onSubmit={handleSave}
            isSubmitting={isSubmitting}
        >
            <Box display="grid" gap={3}>
                <Box display="grid" gridTemplateColumns="1fr 1fr" gap={1}>                    
                    {FORM_FIELDS.topRow.map((field) => 
                        field.name === 'item' ? (
                            <Box key={field.name} sx={{ width: '100%' }}>
                        
                                <Controller
                                    name={field.name}
                                    control={methods.control}
                                    render={({ field: { onChange, value } }) => (
                                        <Autocomplete
                                            options={SELECT_OPTIONS}
                                            value={SELECT_OPTIONS.find(option => option.value === value) || null}
                                            onChange={(_, newValue) => onChange(newValue?.value || '')}
                                            fullWidth
                                            size="small"
                                            isOptionEqualToValue={(option, value) => 
                                                option?.value === (typeof value === 'string' ? value : value?.value)
                                            }
                                            renderInput={(params) => (                                               
                                                 <RHFTextField
                                                    {...field}
                                                    {...params}
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
                                            )}
                                            popupIcon={null}
                                            sx={{
                                                width: '100%'
                                            }}
                                        />
                                    )}
                                />
                            </Box>
                        ) : (
                            <RHFTextField
                                key={field.name}
                                {...field}
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
                        )
                    )}
                </Box>
                {FORM_FIELDS.fullWidth.map((field) => (
                    <RHFTextField
                        key={field.name}
                        {...field}
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
                ))}
            </Box>
        </FormModal>
    );
}
