import React, { useEffect, useState } from 'react';


import Snackbar from '@mui/material/Snackbar';
import { RootState, useAppSelector } from '../../store';
import Alert from '@mui/material/Alert';

interface ISNACKBARCHILDREN {
    children: React.ReactNode
}

const SnackbarWrapper = ({ children }: ISNACKBARCHILDREN) => {
    const { successMessage, errorMessage } = useAppSelector(
        (state: RootState) => state.snackbar
    );

    const [isSnackbarOpen, setIsSnackbarOpen] = useState<boolean>(false);

    useEffect(() => {
        if (successMessage || errorMessage) {
            setIsSnackbarOpen(true);
        }
    }, [successMessage, errorMessage]);

    const handleClose = () => {
        setIsSnackbarOpen(false);
    };

    return (
        <>
            {/* why children here, because we have wrapped our App component with it */}
            {children}
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isSnackbarOpen}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <Alert severity={`${successMessage ? 'success' : 'error'}`} sx={{ width: '100%' }}>
                    {successMessage || errorMessage}
                </Alert>
            </Snackbar>
        </>
    );
};


export default SnackbarWrapper;