import React from 'react';
import Container from '@material-ui/core/Container';
import Navbar from '../components/Navbar'
import Divider from '@material-ui/core/Divider';
import { useSelector, useDispatch } from 'react-redux';
import { Increment } from '../store/actions/authActions';

export default function HomePage() {

    //Use to dispatch actions
    const dispatch = useDispatch();

    //Get current state
    const counter = useSelector(state => state.counter);

    return (
        <div>
            <Navbar />
            <Divider />
            <Container>
                <button onClick={() => {
                    dispatch(Increment);
                }}></button>
                <div style={container}>
                    <p>{counter}</p>
                    <p>"The way to get started is to quit talking and begin doing."</p>
                    <p>Walt Disney</p>
                </div>
            </Container>
        </div>
    );
}

const container = {
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: "center",
    height: '90.5vh',
    minHeight: '90.5vh',
}