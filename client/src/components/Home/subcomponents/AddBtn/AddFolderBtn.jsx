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
import { useDispatch, useSelector } from 'react-redux';
import { createFolder, getFolders } from '../../../../actions/userAction';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='down' ref={ref} {...props} />;
});


const AddFolderBtn = () => {

    const [open, setOpen] = React.useState(false);
    const [name, setName] = useState('');
    const { id } = useParams();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const dispatch = useDispatch();
    const parentId = id;
    const { folderDetails, currentFolder } = useSelector(state => state.folderDetails);



    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // if (currentFolder?.path) {
    // const path = [...currentFolder?.path];
    // }
    const path = [];

    if (currentFolder?.path) {
        currentFolder?.path.map((mp) => { path.push(mp) })
    }

    // const path = [...currentFolder?.path, { name: currentFolder?.name, id: currentFolder?._id }]
    // path.push([currentFolder?.path])
    path.push({ name: currentFolder?.name, id: currentFolder?._id })
    // console.log(path);
    const handleSubmit = (e) => {
        e.preventDefault();
        const userId = user.result._id;
        // console.log(path);
        dispatch(createFolder({ name, parentId, userId, path }));
        setName('');
        handleClose();
    }

    return (
        <>
            <Button color='success' style={{ margin: "10px" }} variant='outlined' onClick={handleClickOpen} >
                <CreateNewFolderIcon /> Create folder
            </Button>
            <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} aria-describedby="alert-dialog-slide-description">
                <form onSubmit={handleSubmit} >
                    <DialogTitle>Folder Name</DialogTitle>
                    <DialogContent>
                        <TextField value={name} inputProps={{ maxLength: 20 }} onChange={(e) => setName(e.target.value)} autoFocus margin="dense" id="folder" label="Add Folder" type="text" fullWidth variant="standard" required />
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
