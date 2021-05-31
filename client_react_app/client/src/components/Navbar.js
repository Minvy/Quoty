import React, { useState } from 'react';
import RightDrawer from '../components/RightDrawer'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default function Navbar() {

    const [username, setUserame] = useState('Bobby')
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const containerPadding = {
        padding: 8,
    }

    const renderButton = (text) => {
        return (
            <Button onClick={console.log("Hi")} color="primary">Login</Button>
        );
    }

    return (
        <Grid container
            spacing={3}
            direction="row-reverse"
            alignItems="center"
            style={containerPadding}
        >
            <RightDrawer />
            <h4>{isLoggedIn ? `${username}` : renderButton("Login")}</h4>
        </Grid>
    );
}