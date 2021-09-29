import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useSelector } from 'react-redux';
import Slide from '@mui/material/Slide';

function TransitionUp(props) {
    return <Slide {...props} direction="up" />;
}

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const SnackBarJs = ({ error, type = 'success' }) => {
    const [open, setOpen] = React.useState(true);
    // const { authData, error } = useSelector((state) => state.auth);

    // const handleClick = () => {
    //     setOpen(true);
    // }; 
    if (error == null) {
        return "";
    }
    // console.log("err " + error);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    return (

        <Stack>
            <Snackbar open={open} anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }} TransitionComponent={TransitionUp} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
                    {error}
                </Alert>
            </Snackbar>

        </Stack >
    )
}

export default SnackBarJs;
