import React, { useEffect, useState } from 'react'
import { AppBar, IconButton, Menu, MenuItem } from '@material-ui/core';

import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom';
import myDriveLogo from '../../images/mydriveLogo.jpg';
import { useDispatch, useSelector } from 'react-redux';
import SnackBarJs from '../SnackBar/SnackBar';
import decode from 'jwt-decode';
import { useHistory } from 'react-router';
import NavBarMenu from './NavBarMenu';

const Navbar = () => {
    const classes = useStyles();

    const { authData, error } = useSelector((state) => state.auth);
    const location = useLocation();
    console.log(location.pathname);
    const dispatch = useDispatch();
    const history = useHistory();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            // console.log(decodedToken);
            if (decodedToken * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem("profile")))
    }, [location])

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        dispatch({ type: 'USERDETAILS', data: null });
        setUser(null);
        history.push('/auth');
    }

    const openHome = () => {
        history.push('/');
    }
    const openProfile = () => {
        history.push('/profile');
    }



    const Notification = () => {
        if (error) {
            return <SnackBarJs error={error} type="error" />
        }
        else {
            return null
        }
    }

    return (

        <AppBar position='sticky' color='inherit' className={classes.appBar} >
            <Link to='/' >
                <img src={myDriveLogo} alt="logo" height="35px" />
            </Link>
            {user &&
                <NavBarMenu logout={logout} openHome={openHome} openProfile={openProfile} location={location.pathname} />
            }
            <Notification />
        </AppBar>

    )
}

export default Navbar
