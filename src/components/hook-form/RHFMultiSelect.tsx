import * as React from 'react';
import {
    Box,
    Select,
    MenuItem,
    FormControl,
    FormHelperText,
    Chip,
    Typography,
    alpha,
} from '@mui/material';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import CheckIcon from '@mui/icons-material/Check';
import { Controller, useController, useFormContext } from 'react-hook-form';
import type { SelectChangeEvent } from '@mui/material';
import { type RHFMultiSelectFieldProps, type Option, chipStyles, selectStyles, } from '../../constants/select';
import TitleText from '../ui/TitleText';


export const RHFMultiSelectField = React.forwardRef<HTMLDivElement, RHFMultiSelectFieldProps>(
    ({ name, label, options, helperText, onChange, renderValue }, ref) => {
        const { control } = useFormContext();
        const {
            field: { value = [], onChange: setValue, onBlur },
            fieldState: { error },
        } = useController({ name, control, defaultValue: [] });

        const handleSelectChange = (e: SelectChangeEvent<(string | number)[]>) => {
            const newValue = Array.isArray(e.target.value) ? e.target.value : [];
            setValue(newValue);
            onChange?.(newValue);
        };

        const handleChipDelete = (id: string | number) => (e: React.MouseEvent) => {
            e.stopPropagation();
            const newSelection = (value as (string | number)[]).filter((x) => x !== id);
            setValue(newSelection);
            onChange?.(newSelection);
        };

        const getOption = (val: string | number) => options.find((o) => o.value === val);

        const defaultRenderValue = (selected: unknown) => {
            const arr = Array.isArray(selected) ? selected : [];
            if (arr.length === 0) return <em style={{ color: '#8c8c8c' }}>Select</em>;
            return <Typography sx={{ color: '#8c8c8c' }}>Selected ({arr.length})</Typography>;
        };

        const renderMenuItem = (opt: Option) => {
            const selected = Array.isArray(value) && value.includes(opt.value);
            
            return (
                <MenuItem
                    key={opt.value}
                    value={opt.value}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: 1,
                        pl: 1.5,
                        bgcolor: selected ? opt.color : 'transparent',
                        color: selected ? 'white' : 'inherit',
                        '&:hover': {
                            bgcolor: selected ? opt.color : alpha(opt.color, 0.15),
                        },
                        '&.Mui-selected': {
                            bgcolor: opt.color,
                            color: 'white',
                            '&:hover': {
                                bgcolor: opt.color,
                            },
                        },
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {opt.label}
                    </Box>
                    {selected && <CheckIcon sx={{ color: 'white' }} />}
                </MenuItem>
            );
        };

        const renderSelectedChip = (val: string | number) => {
            const opt = getOption(val);
            if (!opt) return null;

            return (
                <Chip
                    key={val}
                    size="small"
                    label={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <Box
                                sx={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: '50%',
                                    bgcolor: opt.color,
                                }}
                            />
                            {opt.label}
                        </Box>
                    }
                    onDelete={handleChipDelete(val)}
                    onMouseDown={(e) => e.stopPropagation()}
                    sx={chipStyles}
                    deleteIcon={
                        <DisabledByDefaultIcon
                            fontSize="small"
                            sx={{ fontWeight: 'bold' }}
                            onMouseDown={(e) => e.stopPropagation()}
                        />
                    }
                />
            );
        };

        return (
            <Box ref={ref}>
                {label && (
                    <TitleText>
                        {label}
                    </TitleText>
                )}
                <Controller
                    name={name}
                    control={control}
                    render={() => (
                        <FormControl variant="filled" fullWidth error={!!error} sx={{
                            '& .MuiFilledInput-root': {
                                borderRadius: '10px',
                                bgcolor: '#F3F4F7',
                                '&:hover, &.Mui-focused': { bgcolor: '#F3F4F7' },
                            },
                          }}>
                            <Select
                                multiple
                                disableUnderline
                                value={value}
                                onChange={handleSelectChange}
                                onBlur={onBlur}
                                displayEmpty
                                renderValue={renderValue ?? defaultRenderValue}
                                MenuProps={{
                                    PaperProps: { style: { maxHeight: 250 } },
                                }}
                                sx={selectStyles}
                            >
                                {options.map(renderMenuItem)}
                            </Select>

                            {Array.isArray(value) && value.length > 0 && (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1, px: 1, pb: 1 }}>
                                    {value.map(renderSelectedChip)}
                                </Box>
                            )}

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
);

RHFMultiSelectField.displayName = 'RHFMultiSelectField';
