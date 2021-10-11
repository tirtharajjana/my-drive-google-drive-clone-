import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField, CircularProgress } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useHistory } from 'react-router';
import { getUserDetails } from '../../actions/userAction';
import useStyles from './styles';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import { uploadLogo } from '../../actions/userAction';
import ChangePassword from './ChangePassword';
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Profile = () => {
    const history = useHistory();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const [singleFile, setSingleFile] = useState('');
    const dispatch = useDispatch();
    const { userDetails } = useSelector(state => state.userDetails);
    const classes = useStyles();
    // const theme = useTheme();
    const percentage = Math.floor(((userDetails?.totalStorage - userDetails?.acquiredStorage) * 100) / userDetails?.totalStorage);
    useEffect(() => {
        if (!user)
            history.push('/auth');
    }, [history])

    if (user) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            dispatch(getUserDetails(user.result._id))
        }, [dispatch, user.result._id]);
    }

    const SingleFileChange = (e) => {
        if (e.target.files.length !== 1) {

            return;
        }
        if (e.target.files[0].size > 1024 * 1024 * 100) {
            alert("file size must be less than 100mb")
            return;
        }
        const formData = new FormData();
        formData.append('logo', e.target.files[0]);
        formData.append('id', user.result._id)
        // console.log(singleFile);
        dispatch(uploadLogo(formData));
    }

    // console.log(userDetails);
    return (
        <Container component="main" maxWidth='md' >
            {userDetails ? (
                <div className={classes.paper}>
                    <Card className={classes.card} sx={{ display: 'flex' }} elevation={5}  >
                        <CardMedia
                            // className={classes.cardMedia}
                            component="img"
                            sx={{ maxWidth: 300, maxHeight: 400, objectFit: 'contain' }}
                            image={userDetails.path ? `http://localhost:5000/${userDetails.path}` : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"}
                            alt={userDetails?.logoName}
                            draggable="false"
                        // width="200px"

                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column', padding: '15px' }}  >
                            {userDetails &&
                                <Typography variant="h4" gutterBottom component="div">
                                    {userDetails.firstName} {userDetails.lastName}
                                </Typography>}

                            {userDetails &&
                                <Typography variant="subtitle2" gutterBottom component="div">
                                    {userDetails.email}
                                </Typography>}
                            <Button variant="contained" component="label" style={{ marginBottom: '10px' }} >
                                {userDetails.path ? 'Change' : "Upload"} profile picture
                                <input type="file" accept="image/*" hidden onChange={(e) => SingleFileChange(e)} />
                            </Button>

                            {/* <ChangePassword /> */}
                            <Typography align="center" variant="h6" >Avalible Storage</Typography>
                            <Box sx={{ margin: 'auto', width: '100px', height: '200px' }}   >

                                <CircularProgressbar value={percentage} text={`${percentage}%`} />
                            </Box>


                        </Box>

                    </Card>
                </div>
            ) : <CircularProgress />}
        </Container>
    )
}

export default Profile
