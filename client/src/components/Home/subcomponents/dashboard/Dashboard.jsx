import React, { useState, useEffect } from 'react'
import useStyles from './styles';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core'
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import { getUserDetails } from '../../../../actions/userAction';
import AddFolderBtn from '../AddBtn/AddFolderBtn';
import AddFileBtn from '../AddBtn/AddFileBtn';


const Dashboard = () => {
    const classes = useStyles();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

    const dispatch = useDispatch();
    if (user) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            dispatch(getUserDetails(user.result._id))
        }, [dispatch, user.result._id]);
    }
    const { userDetails } = useSelector(state => state.userDetails);
    const percentage = Math.floor(((userDetails?.totalStorage - userDetails?.acquiredStorage) * 100) / userDetails?.totalStorage);
    const avalibleStorage = (userDetails?.totalStorage - userDetails?.acquiredStorage) / 1024 / 1024;




    return (
        <div>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Box>
                    <Box sx={{ width: '100%', mr: 1 }}>
                        <LinearProgress variant="determinate" value={percentage} />
                    </Box>
                    <Box sx={{}}>
                        <Typography variant="body2" color='secondary'>{`${Math.floor(avalibleStorage)
                            } mb Avalible`}</Typography>
                    </Box>
                </Box>
                <Toolbar className={classes.toolbar} >
                    <AddFileBtn />
                    <AddFolderBtn />
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Dashboard
