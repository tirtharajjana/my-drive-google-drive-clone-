import React, { useState } from 'react'
import { Button } from '@mui/material'
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';
import { useDispatch, useSelector } from 'react-redux';
import { ERROR, NOERROR, SUCCESS, NOSUCCESS } from '../../../../constants/actionTypes'


const AddFileBtn = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

    const dispatch = useDispatch();
    const SingleFileChange = (e) => {
        console.log(e.target.files);
        if (e.target.files.length !== 1) {
            dispatch({ type: NOERROR });
            dispatch({ type: ERROR, error: 'Please select one file' })
            return;
        }
        if (e.target.files[0].size > 1024 * 1024 * 100) {
            dispatch({ type: NOERROR });
            dispatch({ type: ERROR, error: 'file size must be less than 100mb' })
            // alert("file size must be less than 100mb")
            return;
        }
        dispatch({ type: NOSUCCESS });
        dispatch({ type: SUCCESS, success: 'you are good to go' })
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        formData.append('userId', user.result._id);

    }
    return (
        <>
            <Button color='success' component="label" style={{ margin: "10px" }} variant='outlined' >
                <UploadFileRoundedIcon /> Upload file
                <input type="file" hidden onChange={(e) => SingleFileChange(e)} />
            </Button>
        </>
    )
}

export default AddFileBtn
