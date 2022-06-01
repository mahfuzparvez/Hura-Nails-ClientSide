import { Container, Grid } from '@mui/material';
import React from 'react';
import bg from '../../image/rsz_istockphoto-1346774232-612x612.png';
import './AboutUs.css';

const appointmentBg = {
    background: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 450px',
    width: '100%',
    height: '450px',
    marginBottom: '20px'
}
const header = {
    fontSize: '100px',
    color: '#F0E68C',
    textShadow: '5px 5px #000000',
    paddingTop: '3%',
    marginTop: '0',
    marginBottom: '0'
};
const women = {
    borderRadius: '50%',
    border: '5px solid #F0E68C',
    padding: '4px',
    marginTop: '60px'
};

const AboutUs = () => {
    return (
        <div>
            {/* about us banner */}
            <div style={appointmentBg}>
                <h1 style={header}>About Us</h1>
                <img style={women} src="https://i.postimg.cc/5t9ZPdZr/oni.jpg" alt="" />
            </div>
            <div className='textDiv'>
                {/* about us text */}
                <h1>Founder of <span style={{ color: '#008B8B' }}>Hura Nails</span></h1>
                <div>
                    <div>
                        <Container>
                            <Grid container spacing={2}>
                                <Grid item sm={12} lg={6}>
                                    <h3 style={{ color: 'rgba(2, 30, 50)', fontWeight: '800', fontSize: '30px' }}>Tahsin</h3>
                                    <p style={{ fontWeight: '500' }}>I am Tahasin and i'm the founder of Hura Nails. Nail art is a creative way to paint, decorate, enhance, and embellish nails. It is a type of artwork that can be done on fingernails and toenails, usually after manicures or pedicures. Manicures and pedicures are beauty treatments that trim, shape, and polish the nails. Often, these procedures remove the cuticles and soften the skin around the nails. Types of manicures can vary from polish on natural nails to dipping powder and acrylic nails. Our professional manicurists will do their best to soothe and calm your hand & fingure! Choose any color of your nail lux and we will make it work for you! Suggest to me, what type of nail designs you wanna see up next. <br />Thank You</p>
                                </Grid>
                                <Grid item sx={{ mt: 3 }} sm={12} lg={6}>
                                    <iframe className='video' width="560" height="315" src="https://www.youtube.com/embed/TPun608lc0k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                </div>
            </div>
            {/* gallery section */}
            <div>
                <h2 style={{ color: 'rgba(2, 30, 50)', fontWeight: '800', fontSize: '30px' }}>Gallery Section</h2>
                <Container>
                    <div className='gallery'>
                        <a target="_blank" href="https://i.postimg.cc/9Qy4KsRt/aaron-huber-21u-Vbz-B2ex8-unsplash.jpg">
                            <img src="https://i.postimg.cc/9Qy4KsRt/aaron-huber-21u-Vbz-B2ex8-unsplash.jpg" alt="" />
                        </a>
                        <a target="_blank" href="https://i.postimg.cc/mkckwnW9/allison-christine-Ppwrie5-Mh-DQ-unsplash-scaled.jpg">
                            <img src="https://i.postimg.cc/mkckwnW9/allison-christine-Ppwrie5-Mh-DQ-unsplash-scaled.jpg" alt="" />
                        </a>
                        <a target="_blank" href="https://i.postimg.cc/Vv36HFzV/evelyn-semenyuk-6d-Wa-LSO2dz-Y-unsplash-scaled.jpg">
                            <img src="https://i.postimg.cc/Vv36HFzV/evelyn-semenyuk-6d-Wa-LSO2dz-Y-unsplash-scaled.jpg" alt="" />
                        </a>
                        <a target="_blank" href="https://i.postimg.cc/bv8GhL1X/gallery-img4.jpg">
                            <img src="https://i.postimg.cc/bv8GhL1X/gallery-img4.jpg" alt="" />
                        </a>
                        <a target="_blank" href="https://i.postimg.cc/rmwKdmhQ/pexels-alina-vilchenko-1819560-scaled.jpg">
                            <img src="https://i.postimg.cc/rmwKdmhQ/pexels-alina-vilchenko-1819560-scaled.jpg" alt="" />
                        </a>
                        <a target="_blank" href="https://i.postimg.cc/s2cMDSJM/pexels-kristina-paukshtite-704815-scaled.jpg">
                            <img src="https://i.postimg.cc/s2cMDSJM/pexels-kristina-paukshtite-704815-scaled.jpg" alt="" />
                        </a>
                    </div>
                </Container>
            </div>
        </div >
    );
};

export default AboutUs;

/* 
https://i.postimg.cc/BbP1tNCS/1.jpg
https://i.postimg.cc/y8Hv4SVg/2.jpg
https://i.postimg.cc/dtd4x9Kc/3.jpg
https://i.postimg.cc/WtRqZr9M/4.jpg
https://i.postimg.cc/7PjK9WdN/5.jpg
https://i.postimg.cc/DfSCqTjZ/pexels-kristina-paukshtite-704815-scaled.jpg
*/