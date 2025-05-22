import { Typography, type TypographyProps } from '@mui/material';

interface TitleTextProps extends Omit<TypographyProps, 'variant'> {
    children: React.ReactNode;
}

export default function TitleText({ children, sx, ...props }: TitleTextProps) {
    return (
        <Typography
            sx={{
                fontSize: '14px',
                fontWeight: 600,
                ...sx,
                // fontFamily: 'open sans',
            }}
            {...props}
        >
            {children}
        </Typography>
    );
}
