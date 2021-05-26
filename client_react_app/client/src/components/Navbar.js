import React, { useState } from 'react';
import RightDrawer from '../components/RightDrawer'
import Grid from '@material-ui/core/Grid';

export default function Navbar() {

    const [username, setUserame] = useState('Bobby')

    const containerPadding = {
        padding: 10
    }

    
    return (
        <Grid container
            spacing={3}
            direction="row-reverse"
            align="center"
            style={containerPadding}
        >
            <RightDrawer />
            <h4>Hi {username}</h4>
        </Grid>
    );
}