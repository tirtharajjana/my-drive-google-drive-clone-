import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { getUserDetails } from '../../actions/userAction';
import Dashboard from './subcomponents/dashboard/Dashboard';

const Home = () => {
    const history = useHistory();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    useEffect(() => {
        if (!user)
            history.push('/auth');
    }, [history])
    const dispatch = useDispatch();
    if (user) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            dispatch(getUserDetails(user.result._id))
        }, [dispatch, user.result._id]);
    }
    const { userDetails } = useSelector(state => state.userDetails);


    return (
        <>
            {userDetails ?
                <Dashboard />
                : <CircularProgress />}

        </>
    )
}

export default Home
