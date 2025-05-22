import { Box, type BoxProps } from '@mui/material';
import TitleText from './TitleText';

interface ContainerWithHeaderProps {
    title: string;
    headerRight?: React.ReactNode;
    children?: React.ReactNode;
    containerSx?: BoxProps['sx'];
    size?: number;
}

export default function ContainerWithHeader({ 
    title, 
    headerRight,
    children,
    containerSx,
    size = 12
}: ContainerWithHeaderProps) {
    return (
        <Box 
            sx={{
                width: size === 4 ? '300px' : 'auto',
                flex: size === 8 ? 1 : 'none',
                height: '100%',
                ...containerSx
            }}
        >
            <Box
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: 'white',
                    borderRadius: 2,
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                    overflow: 'hidden'
                }}
            >                <Box 
                    sx={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 2,
                        px: 2,
                        height: '56px', // Fixed height for header
                        bgcolor: '#F8F8FA',
                        borderBottom: 'none'
                    }}
                >
                    <TitleText>
                        {title}
                    </TitleText>
                    {headerRight}
                </Box>
                <Box 
                    sx={{ 
                        flexGrow: 1, 
                        display: 'flex', 
                        flexDirection: 'column',
                        height: '100%',
                        overflow: 'hidden'
                    }}
                >
                    {children}
                </Box>
            </Box>
        </Box>
    );
}
