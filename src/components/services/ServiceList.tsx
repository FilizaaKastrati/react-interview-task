import { List, ListItemButton, ListItemText, Box } from '@mui/material';
import { alpha } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';
import { categoryOptions } from '../../constants/categories';

interface Props {
    services: string[];
    selected?: string | null;
    onSelect: (svc: string) => void;
}

export default function ServiceList({ services, selected, onSelect }: Props) {
    const getServiceColor = (service: string) => {
        const category = categoryOptions.find(cat => cat.value === service);
        return category?.color || '#1976d2'; 
    };

    return (
        <List dense disablePadding sx={{ flexGrow: 1 }}>
            {services.map((s) => {
                const serviceColor = getServiceColor(s);
                return (
                    <ListItemButton
                        key={s}
                        selected={selected === s}
                        onClick={() => onSelect(s)}                      
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: 1,
                            pl: 1.5,
                            mb: 1,
                            borderRadius: 1,
                            backgroundColor: selected === s ? serviceColor : '#F8F8FA',
                            color: selected === s ? 'white' : 'inherit',
                            '&:hover': {
                                backgroundColor: selected === s ? serviceColor : alpha(serviceColor, 0.15),
                            },
                            '&.Mui-selected': {
                                backgroundColor: serviceColor,
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: serviceColor,
                                },
                            },
                        }}
                    >                    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <ListItemText
                                primary={s}
                                primaryTypographyProps={{ 
                                    sx: { 
                                        fontWeight: selected === s ? 600 : 400,
                                        fontSize: '14px',
                                        textAlign: 'center'
                                    }
                                }}
                            />
                        </Box>
                        {selected === s && <CheckIcon sx={{ color: 'white' }} />}
                    </ListItemButton>
                );
            })}
        </List>
    );
}
