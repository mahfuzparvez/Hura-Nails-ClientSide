import { Container, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import './Review.css';

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
});

const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://whispering-crag-53712.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <div className="background"></div>
            <Container>
                <h2 style={{ color: 'rgba(2, 30, 50)', fontWeight: '800', marginTop: '40px' }}>OUR CUSTOMERS REVIEW</h2>
                <Slider {...settings}>
                    {
                        reviews.map(reviews => (
                            <div>
                                <Paper elevation={3} style={{
                                    display: 'center',
                                    m: 1,
                                    width: '300px',
                                    height: '250px',
                                    backgroundColor: 'rgba(74, 165, 229)'
                                }}>
                                    <img src={reviews.photoUrl}
                                        style={{ paddingTop: '10px', borderRadius: '50%', margin: '0 auto' }} />
                                    <h4>Name: {reviews.customerName}</h4>
                                    <StyledRating disabled sx={{
                                        '& > legend': { mt: 1 },
                                    }}
                                        name="customized-color"
                                        defaultValue={reviews.ratingNumber}
                                        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                        precision={0.5}
                                        icon={<FavoriteIcon fontSize="inherit" />}
                                        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                                    />
                                    <Typography variant="button" display="block" gutterBottom>
                                        {reviews.reviewDescription}
                                    </Typography>

                                </Paper>
                            </div>
                        ))
                    }
                </Slider>
            </Container>
        </div>
    );
};

export default Review;