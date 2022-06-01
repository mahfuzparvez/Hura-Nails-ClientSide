import { Alert, Button, CircularProgress, Container, Grid, TextField } from '@mui/material';
import image from '../../../image/login2.jpg';
import React, { useState } from 'react';
import useAuth from './../../../hooks/useAuth';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLogin = e => {
        if (loginData.password !== loginData.password2) {
            alert('Sorry, your password dose not match the confirm password and password must be at least 6 characters');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <div>
            <Container sx={{ my: 5 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <img style={{ width: '75%' }} src={image} alt="" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <h3 style={{ color: 'rgba(2, 30, 50)', fontWeight: '700', fontSize: '30px' }}>Sign Up</h3>
                        {!isLoading && <form onSubmit={handleLogin}>
                            <TextField
                                sx={{ width: "75%" }} fullWidth label="Your Name"
                                name="name"
                                onBlur={handleOnBlur}
                                id="fullWidth" />
                            <br />
                            <br />
                            <TextField
                                sx={{ width: "75%" }} fullWidth label="Email"
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
                                id="fullWidth" />
                            <br />
                            <br />
                            <TextField
                                sx={{ width: "75%" }}
                                id="outlined-password-input"
                                label="Password"
                                placeholder="at least 6 characters"
                                name="password"
                                onBlur={handleOnBlur}
                                type="password"
                                autoComplete="current-password"
                            />
                            <br />
                            <br />
                            <TextField
                                sx={{ width: "75%" }}
                                id="outlined-password-input"
                                label="Confirm Password"
                                placeholder="at least 6 characters"
                                name="password2"
                                onBlur={handleOnBlur}
                                type="password"
                                autoComplete="current-password"
                            />
                            <br />
                            <br />
                            <Button
                                sx={{ width: "75%" }}
                                type='submit'
                                variant="contained">Sign Up</Button>
                        </form>}
                        <br />
                        {isLoading && <CircularProgress style={{ marginTop: '5%', marginLeft: '5%' }} />}
                        {user?.email && <Alert severity="success">Your account has been successfully created.</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Register;