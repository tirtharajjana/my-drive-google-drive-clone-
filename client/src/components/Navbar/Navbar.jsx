import React, { useEffect, useState } from 'react'
import { AppBar, IconButton, Menu, MenuItem } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle'
import useStyles from './styles';
import { Link } from 'react-router-dom';
import myDriveLogo from '../../images/mydriveLogo.jpg';
import { ReactReduxContext, useSelector } from 'react-redux';
import SnackBarJs from '../SnackBar/SnackBar';


const Navbar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { authData, error } = useSelector((state) => state.auth);

    
    const handleChange = (event) => {
        // setAuth(event.target.checked);
    };

    const Notification = () => {
        if (error) {
            return <SnackBarJs error={error} type="error" />
        }
        else {
            return null
        }
    }

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (

        <AppBar position='sticky' color='inherit' className={classes.appBar} >
            <Link to='/' >
                <img src={myDriveLogo} alt="logo" height="35px" />
            </Link>

            <div>
                <IconButton size='medium' aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color='primary'>
                    <AccountCircle />
                </IconButton>
                <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right', }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right', }} open={Boolean(anchorEl)} onClose={handleClose}>
                    <MenuItem onClick={() => { }}>Profile</MenuItem>
                    <MenuItem onClick={() => { }}>Log out</MenuItem>
                </Menu>
                {/* {error && <SnackBarJs error={error} />} */}
                <Notification />
            </div>
        </AppBar>

    )
}

export default Navbar
