import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { FormProvider, useForm } from 'react-hook-form';
import RHFTextField from '../hook-form/RHFTextField';

interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    sx?: object;
    name: string;
}

export default function SearchInput({ 
    value, 
    onChange, 
    placeholder = "Search...",
    name,
    sx
}: SearchInputProps) {
    const methods = useForm({
        defaultValues: {
            [name]: value
        }
    });    return (
        <FormProvider {...methods}>
            <RHFTextField
            variant='outlined'
                name={name}
                size="small"
                placeholder={placeholder}
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon fontSize="small" />
                        </InputAdornment>
                    ),
                }}
                sx={{
                    mb: 4,
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 1,
                        '& fieldset': { border: 'none' },
                    },
                    ...sx 
                }}
            />
        </FormProvider>
    );
}
