import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { AppBar, IconButton, Menu, MenuItem,Avatar } from '@material-ui/core';


const NavBarMenu = ({ logout, openHome, openProfile, location }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { userDetails } = useSelector(state => state.userDetails);
    

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    console.log(userDetails);
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
