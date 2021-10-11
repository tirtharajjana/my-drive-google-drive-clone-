import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material'
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';
import { useDispatch, useSelector } from 'react-redux';
import { ERROR, NOERROR, SUCCESS, NOSUCCESS } from '../../../../constants/actionTypes'
import { createFile } from '../../../../actions/userAction';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='down' ref={ref} {...props} />;
});

const AddFileBtn = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const [open, setOpen] = React.useState(false);

    const [progress, setProgress] = useState(0)
    const { folderDetails, currentFolder } = useSelector(state => state.folderDetails);

    // console.log(currentFolder);
    const dispatch = useDispatch();


    const FileOptions = {
        onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent;
            const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
            console.log(percentage);
            setProgress(percentage);
        }
    }

    useEffect(() => {
        if (progress === Number(100))
            setOpen(false);
    }, [progress])



    const SingleFileChange = (e) => {
        // console.log(e.target.files);
        setProgress(0);

        if (e.target.files.length !== 1) {
            dispatch({ type: NOERROR });
            dispatch({ type: ERROR, error: 'Please select one file' })
            return;
        }
        // if (e.target.files[0].size > 1024 * 1024 * 100) {
        //     dispatch({ type: NOERROR });
        //     dispatch({ type: ERROR, error: 'file size must be less than 100mb' })
        //     return;
        // }
        dispatch({ type: NOSUCCESS });
        dispatch({ type: SUCCESS, success: 'you are good to go' })
        var formData = new FormData();
        formData.append('file', e.target.files[0]);
        formData.append('userId', user.result._id);
        formData.append('parentId', currentFolder._id);
        dispatch(createFile(formData, FileOptions))
        setOpen(true);
    }
    return (
        <>
            <Button color='success' component="label" style={{ margin: "10px" }} variant='outlined' >
                <UploadFileRoundedIcon /> Upload file
                <input type="file" hidden onChange={(e) => SingleFileChange(e)} />
            </Button>
            <Dialog open={open} keepMounted aria-describedby="alert-dialog-slide-description">
                {/* <Box sx={{ display: 'flex', alignItems: 'center' }}> */}
                <DialogContent sx={{ width: '200px', mr: 1 }}>
                    <Box sx={{ width: '100%', mr: 1 }}>
                        <LinearProgress variant="determinate" value={progress} />
                    </Box>
                    <Box sx={{ minWidth: 35 }}>
                        <Typography align='center' variant="body2" color="text.secondary">{`${progress}%`}</Typography>
                    </Box>
                </DialogContent>

                {/* </Box> */}
            </Dialog>
        </>
    )
}

export default AddFileBtn
