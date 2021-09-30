import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';  

const Home = () => {
    const history = useHistory();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    useEffect(() => {
        if (!user)
            history.push('/auth');
    }, [history])

    return (
        <>
            Home
        </>
    )
}

export default Home
