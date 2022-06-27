import { Container, Grid, TextField, } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './UserReview.css'

const UserReview = () => {
    const { user } = useAuth();
    const initialInfo = { photoUrl: '', customerName: '', ratingNumber: '', reviewDescription: '' };
    const [reviewInfo, setReviewInfo] = useState(initialInfo);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...reviewInfo };
        newInfo[field] = value;
        setReviewInfo(newInfo);
    };

    const formSubmit = (e) => {
        const review = {
            ...reviewInfo,
        };

        fetch('https://whispering-crag-53712.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                setReviewInfo(data);
            })

        e.preventDefault();
        alert("The well-done success of your review. Thank you so much for review");
        const inputs = document.querySelectorAll('#filled-multiline-static');
        inputs.forEach(input => {
            input.value = '';
        });
    };
    return (
        <div>
            <div className='header'>
                <h1 style={{ color: "white", marginRight: "40%", marginTop: "5%" }}>If you use any of our products, please share your experience with us</h1>
            </div>

            <Container>
                <h2 style={{ color: 'rgba(2, 30, 50)', fontWeight: '800', marginTop: '10px' }}>Fill out the form below for review</h2>
                <Grid container spacing={2}>
                    <Grid item sm={12} lg={12}>
                        <form onSubmit={formSubmit}>
                            <TextField id="fullWidth" className="specialField" label="Please click this text but don't edit"
                                name="photoUrl"
                                defaultValue={user.photoURL}
                                onBlur={handleOnBlur} />
                            <br />
                            <br />
                            <TextField id="filled-multiline-static" label="Your Name"
                                name="customerName"
                                onBlur={handleOnBlur} />
                            <br />
                            <br />
                            <TextField
                                id="filled-multiline-static"
                                label="Rating"
                                type="number"
                                name="ratingNumber"
                                onBlur={handleOnBlur}
                            />
                            <br />
                            <br />
                            <TextField
                                id="filled-multiline-static"
                                className="specialField2"
                                label="Description"
                                multiline
                                rows={4}
                                variant="filled"
                                name="reviewDescription"
                                onBlur={handleOnBlur}
                            />
                            <br />
                            <br />
                            <input style={{
                                padding: "15px", marginBottom: '20px', borderRadius: "5px", fontWeight: '900', cursor: 'pointer'
                            }}
                                type="submit"
                                value="Review Submit"
                            />
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default UserReview;

