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
// import Typography from '@mui/material/Typography';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';

const Profile = () => {
    const history = useHistory();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const dispatch = useDispatch();
    const { userDetails } = useSelector(state => state.userDetails);
    const classes = useStyles();
    const theme = useTheme();
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

    console.log(userDetails);
    return (
        <Container component="main" maxWidth='md' >
            {userDetails ? (<div className={classes.paper}>
                <Card sx={{ display: 'flex' }} elevation={5}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', padding: '15px' }}  >
                        {userDetails &&
                            <Typography variant="h3" gutterBottom component="div">
                                {userDetails.firstName} {userDetails.lastName}
                            </Typography>}

                        {userDetails &&
                            <Typography variant="h6" gutterBottom component="div">
                                {userDetails.email}
                            </Typography>}
                        <Button variant="contained" component="label" >
                            Upload File
                            <input type="file" hidden/>
                        </Button>
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: 400 }}
                        image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                        alt="Live from space album cover"
                    />
                </Card>
            </div>) : <CircularProgress />}
        </Container>
    )
}

export default Profile
