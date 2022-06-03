import React, { useState } from 'react';
import { Container, Grid, TextField } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const MakeAnAdmin = () => {
    const [email, setEmail] = useState('');
    const { token } = useAuth();
    const handleOnBlur = e => {
        setEmail(e.target.value);
    };
    const handleAdmin = (e) => {
        const user = { email };
        fetch('https://whispering-crag-53712.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

        e.preventDefault();
        alert("Admin making success");
        const inputs = document.querySelectorAll('#fullWidth, #filled-multiline-static');
        inputs.forEach(input => {
            input.value = '';
        });
    };
    return (
        <div>
            <h1 style={{ marginTop: '-30px' }}>Make an admin</h1>
            <Container>
                <Grid container spacing={2}>
                    <Grid direction="row" justifyContent="center" alignItems="center" container columns={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                        <form className='form' onSubmit={handleAdmin} >
                            <div>
                                <TextField
                                    type="email" id="fullWidth"
                                    onBlur={handleOnBlur}
                                    label="Email"
                                    fullWidth />
                                <br />
                                <br />
                            </div>
                            <input
                                id="submit"
                                type="submit"
                                value="Submit"
                            />
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default MakeAnAdmin;