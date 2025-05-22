import { Typography, type TypographyProps } from '@mui/material';

interface LabelTextProps extends Omit<TypographyProps, 'variant'> {
    children: React.ReactNode;
}

export default function LabelText({ children, sx, ...props }: LabelTextProps) {
    return (
        <Typography
            variant="body2"
            sx={{
                fontSize: '14px',
                fontWeight: 500,
                mb: 1,
                ...sx
            }}
            {...props}
        >
            {children}
        </Typography>
    );
}
