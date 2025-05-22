import { Box, FormControl, FormHelperText, MenuItem, Select } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import type { RHFSelectFieldProps } from '../../constants/select';
import TitleText from '../ui/TitleText';

export default function RHFSelectField<T = string | number>({
    name,
    options,
    label,
    helperText,
    onChange,
}: RHFSelectFieldProps<T>) {
    const { control } = useFormContext();

    return (
        <Box>
            {label && (
                <TitleText>
                    {label}
                </TitleText>
            )}
            <Controller
                name={name}
                control={control}
                render={({ field, fieldState: { error } }) => (
                    <FormControl variant="filled" fullWidth error={!!error}>
                        <Select
                            {...field}
                            value={(field.value ?? '') as unknown as string | number}
                            displayEmpty
                            disableUnderline
                            renderValue={(value) => {
                                const selectedOption = options.find(opt => opt.value === value);
                                return selectedOption ? (                                    <Box sx={{ 
                                        display: 'flex', 
                                        alignItems: 'center',
                                        gap: 1,
                                        height: '36px',
                                        px: 2,
                                    }}>
                                        {selectedOption.color && (
                                            <Box
                                                sx={{
                                                    width: 8,
                                                    height: 8,
                                                    borderRadius: '50%',
                                                    bgcolor: selectedOption.color
                                                }}
                                            />
                                        )}
                                        {selectedOption.label}
                                    </Box>
                                ) : (
                                    <Box sx={{ height: '36px', px: 2, display: 'flex', alignItems: 'center' }}>
                                        Select status
                                    </Box>
                                );
                            }}                            sx={{
                                bgcolor: 'rgba(0, 0, 0, 0.06)',
                                borderRadius: '10px',
                                height: '36px',
                                '& .MuiFilledInput-input': {
                                    p: 0,
                                    height: '36px',
                                },
                                '& .MuiSelect-select': {
                                    p: '0 !important',
                                },
                                '&:hover': {
                                    bgcolor: 'rgba(0, 0, 0, 0.09)',
                                },
                                '&.Mui-focused': {
                                    bgcolor: 'rgba(0, 0, 0, 0.09)',
                                },
                                '&:before, &:after': { 
                                    display: 'none' 
                                }
                            }}
                            MenuProps={{
                                PaperProps: {
                                    sx: {
                                        mt: 1,
                                        '& .MuiMenuItem-root': {
                                            height: '36px',
                                            px: 2,
                                        }
                                    }
                                }
                            }}
                            onChange={(event) => {
                                const val = event.target.value as unknown as T;
                                field.onChange(val);
                                onChange?.(val);
                            }}
                        >
                            {options.map((opt) => (
                                <MenuItem
                                    key={String(opt.value)}
                                    value={opt.value as unknown as string | number}                                    sx={{
                                        bgcolor: 'white',
                                        '&.Mui-selected': {
                                            ...(opt.color && {
                                                bgcolor: `${opt.color} !important`,
                                                color: opt.value === 'In Progress' ? '#000' : '#fff',
                                            }),
                                        },
                                        '&:hover': {
                                            bgcolor: 'rgba(0, 0, 0, 0.04)',
                                        },
                                    }}
                                >
                                    {opt.label}
                                </MenuItem>
                            ))}
                        </Select>

                        {(!!error || helperText) && (
                            <FormHelperText>
                                {error ? error.message : helperText}
                            </FormHelperText>
                        )}
                    </FormControl>
                )}
            />
        </Box>
    );
}
