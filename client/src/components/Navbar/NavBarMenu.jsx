import React from 'react'
import AccountCircle from '@material-ui/icons/AccountCircle';
import { AppBar, IconButton, Menu, MenuItem } from '@material-ui/core';
const NavBarMenu = ({logout}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    // const handleChange = (event) => {
    //     // setAuth(event.target.checked);
    // };
    return (
        <div>
                    <IconButton size='medium' aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color='primary'>
                        <AccountCircle />
                    </IconButton>
                    <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right', }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right', }} open={Boolean(anchorEl)} onClose={handleClose}>
                        <MenuItem onClick={() => { }}>Profile</MenuItem>
                        <MenuItem onClick={logout}>Log out</MenuItem>
                    </Menu>
                </div>
    )
}

export default NavBarMenu
