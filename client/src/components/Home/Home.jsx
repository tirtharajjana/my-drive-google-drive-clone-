import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { getUserDetails } from '../../actions/userAction';
import Dashboard from './subcomponents/dashboard/Dashboard';
import Folders from './subcomponents/folder/Folders';
import { getFolders, getCurrentFolder } from '../../actions/userAction';

const Home = () => {
    const history = useHistory();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    useEffect(() => {
        if (!user)
            history.push('/auth');
    }, [history])
    const { id } = useParams();
    const parentId = id;

    const dispatch = useDispatch();
    if (user) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            dispatch(getUserDetails(user.result._id))
        }, [dispatch, user.result._id]);
    }


    useEffect(() => {
        dispatch(getFolders(parentId, history));
        // dispatch(getCurrentFolder(parentId, history));
    }, [dispatch, history, parentId])


    const { userDetails } = useSelector(state => state.userDetails);



    return (
        <>
            {userDetails ?
                (
                    <>
                        <Dashboard />
                        <Folders />
                    </>
                )
                : <CircularProgress />}

        </>
    )
}

export default Home
