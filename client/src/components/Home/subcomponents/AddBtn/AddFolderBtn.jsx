import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createFolder } from '../../../../actions/userAction';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='down' ref={ref} {...props} />;
});


const AddFolderBtn = () => {

    const [open, setOpen] = React.useState(false);
    const [name, setName] = useState('');
    const { id } = useParams();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const dispatch = useDispatch();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userId = user.result._id;
        const parentId = id;
        // const formData = new FormData();
        // formData.append('name', name);
        // formData.append('parentId', id);
        // formData.append('userId', user.result._id);
        // console.log(formData);
        dispatch(createFolder({ name, parentId, userId }));
        handleClose();
    }

    return (
        <>
            <Button color='success' style={{ margin: "10px" }} variant='outlined' onClick={handleClickOpen} >
                <CreateNewFolderIcon />
            </Button>
            <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} aria-describedby="alert-dialog-slide-description">
                <form onSubmit={handleSubmit} >
                    <DialogTitle>Folder Name</DialogTitle>
                    <DialogContent>
                        <TextField value={name} onChange={(e) => setName(e.target.value)} autoFocus margin="dense" id="folder" label="Add Folder" type="text" fullWidth variant="standard" required />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit">Add</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    )
}

export default AddFolderBtn
