import {
    Controller,
    useFormContext,
} from 'react-hook-form';
import {
    TextField,
    useTheme,
    Box,
    type TextFieldProps,
} from '@mui/material';
import TitleText from '../ui/TitleText';

type IProps = {
    name: string;
    variant?: 'outlined' | 'standard' | 'filled';
    label?: string;
};

type Props = IProps & TextFieldProps;

export default function RHFTextField({
    name,
    helperText,
    variant = 'filled',
    label,
    ...other
}: Props) {
    const { control } = useFormContext();
    const theme = useTheme();

    return (
        <Box>
            {label && <TitleText>{label}</TitleText>}
            <Controller
                name={name}
                control={control}
                render={({ field, fieldState: { error } }) => (
                    <TextField
                        {...field}
                        size="small"
                        fullWidth
                        variant={variant}
                        value={
                            typeof field.value === 'number' && field.value === 0
                                ? ''
                                : field.value
                        }
                        onChange={e => field.onChange(e)}
                        error={!!error}
                        helperText={error ? (error.message as string) : helperText}
                        InputProps={{
                            disableUnderline: true,
                            ...other.InputProps,
                        }}
                        {...other}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                backgroundColor: '#F3F4F7',
                                borderRadius: '10px',
                                '& fieldset': {
                                    border: 'none'
                                },
                                '&:hover fieldset': {
                                    border: 'none'
                                },
                                '&.Mui-focused fieldset': {
                                    border: 'none'
                                }
                            },
                            '& .MuiFilledInput-root': {
                                backgroundColor: '#F3F4F7',
                                borderRadius: '10px',
                                paddingTop: 1,
                                paddingBottom: 1,
                                '&:hover': {
                                    backgroundColor: '#F3F4F7',
                                },
                                '&.Mui-focused': {
                                    backgroundColor: '#F3F4F7',
                                },
                                '&.Mui-error': {
                                    backgroundColor: '#F3F4F7',
                                },
                            },
                            '& .MuiFilledInput-underline:before, & .MuiFilledInput-underline:after': {
                                display: 'none',
                            },
                            '& input::placeholder': {
                                color: theme.palette.text.disabled,
                                opacity: 1,
                            },
                        }}
                    />
                )}
            />
        </Box>
    );
}
