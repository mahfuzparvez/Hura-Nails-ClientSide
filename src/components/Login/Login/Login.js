import { Alert, Button, CircularProgress, Container, Grid, TextField } from '@mui/material';
import image from '../../../image/login2.jpg';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useLocation, useHistory } from 'react-router-dom';
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLogin = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <div>
            <Container sx={{ my: 5 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <img style={{ width: '75%' }} src={image} alt="" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <h3 style={{ color: 'rgba(2, 30, 50)', fontWeight: '700', fontSize: '30px' }}>Login</h3>
                        <form onSubmit={handleLogin}>
                            <TextField
                                sx={{ width: "75%" }} fullWidthtype="email" label="Email"
                                name="email"
                                onChange={handleOnChange}
                                id="fullWidth" />
                            <br />
                            <br />
                            <TextField
                                sx={{ width: "75%" }}
                                id="outlined-password-input"
                                label="Password"
                                name="password"
                                onChange={handleOnChange}
                                type="password"
                                autoComplete="current-password"
                            />
                            <br />
                            <br />
                            <Button
                                sx={{ width: "75%" }}
                                type='submit'
                                variant="contained">Login</Button>
                            <br />
                            <br />
                            <Button sx={{ width: "75%" }} onClick={handleGoogleSignIn} variant="contained"><FaGoogle style={{ marginRight: '5px' }} />Login with Google</Button>
                            <br />
                            <br />
                            <Link style={{ textDecoration: "none" }} to="register">
                                <Button
                                    sx={{ width: "75%" }}
                                    variant="text">
                                    New User! Please Sign Up
                                </Button>
                            </Link>
                        </form>
                        <br />
                        {isLoading && <CircularProgress style={{ marginTop: '5%', marginLeft: '5%' }} />}
                        {user?.email && <Alert severity="success">Your account has been successfully login.</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Login;