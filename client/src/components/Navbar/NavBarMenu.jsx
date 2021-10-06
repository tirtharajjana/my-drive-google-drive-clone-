import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { AppBar, IconButton, Menu, MenuItem, Avatar } from '@material-ui/core';
import { getUserDetails } from '../../actions/userAction';


const NavBarMenu = ({ logout, openHome, openProfile, location }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

    const dispatch = useDispatch();
    if (user) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            dispatch(getUserDetails(user.result._id))
        }, [dispatch, user.result._id]);
    }
    const { userDetails } = useSelector(state => state.userDetails);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    // console.log(userDetails);
    const handleClose = () => {
        setAnchorEl(null);
    };
    useEffect(() => {
        handleClose();
    }, [location])
    return (
        <div>
            <IconButton size='medium' aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color='primary'>
                {userDetails?.path ? <Avatar src={`http://localhost:5000/${userDetails.path}`} alt="logo" /> : <AccountCircle />}
            </IconButton>
            <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right', }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right', }} open={Boolean(anchorEl)} onClose={handleClose}>
                {location === '/' && <MenuItem onClick={openProfile}>Profile</MenuItem>}
                {location === '/profile' && <MenuItem onClick={openHome}>Home</MenuItem>}
                <MenuItem onClick={logout}>Log out</MenuItem>
            </Menu>
        </div>
    )
}

export default NavBarMenu
