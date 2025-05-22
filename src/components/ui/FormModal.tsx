import {
    Dialog,
    Box,
    Typography,
    DialogContent,
    IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';
import { FormProvider } from 'react-hook-form';
import TitleText from './TitleText';
import { ActionButton } from './ActionButton';
import type { ReactNode } from 'react';


interface FormModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    description: string;
    children: ReactNode;
    methods: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSubmit: (data: any) => Promise<void>;
    isSubmitting?: boolean;
}

export default function FormModal({ 
    open, 
    onClose, 
    title, 
    description,
    children,
    methods,
    onSubmit,
    isSubmitting
}: FormModalProps) {
    const handleClose = () => {
        methods.reset();
        onClose();
    };

    return (
        <Dialog
            fullWidth
            maxWidth="md"
            open={open}
            onClose={handleClose}
            PaperProps={{
                sx: { borderRadius: 2, p: 0 }, 
            }}
        >
            <Box
                sx={{
                    bgcolor: '#F8F8FA',
                    px: 3,
                    py: 0.5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                }}
            >
                <TitleText>
                    {title}
                </TitleText>

                <IconButton edge="end" onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <DialogContent sx={{ pt: 3 }}>
                        <Box display="flex" alignItems="center" mb={3}>
                            <InfoIcon fontSize="medium" color="primary" sx={{ mr: 1 }} />
                            <Typography variant="body1">
                                {description}
                            </Typography>
                        </Box>
                        
                        {children}

                    </DialogContent>
                    <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'flex-end', 
                        gap: 2,
                        p: 3,
                    }}>
                        <ActionButton
                            actionVariant="cancel"
                            onClick={handleClose}
                            type="button"
                        />
                        <ActionButton
                            type="submit"
                            actionVariant="save"
                            loading={isSubmitting}
                        />
                    </Box>
                </form>
            </FormProvider>
        </Dialog>
    );
}
