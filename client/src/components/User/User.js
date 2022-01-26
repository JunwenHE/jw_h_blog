import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { addUser } from '../../actions/posts';

const User = ({ userId, setUserId }) => {
    const classes = useStyles();
    const [userData, setUserData] = useState({ creator: '' })
    const dispatch = useDispatch();
    const user = useSelector((state) => (userId ? state.users.find((message) => message._id === userId) : null));
    useEffect(() => {
        if (user) setUserData(user);
    }, [user]);

    const clear = () => {
        setUserId(0);
        setUserData({ creator: '' })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (userId === 0) {
            dispatch(addUser(userData));
            clear();
        } else {
            //dispatch(updatePost(currentId, postData));
            clear();
        }
    };

    return (
        <Paper className={classes.paper} >
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6"></Typography>
                <TextField name="creator" variant="outlined" label="Username" />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Sign in</Button>
            </form>
        </Paper>
    )
}

export default User