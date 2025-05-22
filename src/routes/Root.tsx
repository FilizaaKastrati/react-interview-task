import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

export default function Root() {
    return (
        <Box sx={{ margin: 0, padding: 0, height: '100vh', overflow: 'hidden' }}>
            <Outlet />
        </Box>
    );
}
