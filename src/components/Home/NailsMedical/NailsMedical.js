import React from 'react';
import './NailsMedical.css';
import Grid from '@mui/material/Grid';


const NailsMedical = () => {
    return (
        <div>
            <h2 style={{ color: 'rgba(2, 30, 50)', fontWeight: '800', marginTop: '40px' }}>GUESS ABOUT THE HEALTH OF YOUR NAILS FROM DR. TASNIM JARA</h2>
            <p style={{ color: 'rgba(195, 195, 198)', marginTop: '-15px' }}>Seek the help of a dermatologist for any nail problem</p>
            <Grid container spacing={2} style={{ marginBottom: '20px', padding: '40px' }}>
                {/* --------Dr.Tasnim Video from youtube------- */}
                <Grid item xs={12} lg={6}>
                    {<iframe className='video' width='560' height="315" src="https://www.youtube.com/embed/Z_sqbbso9WM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
                </Grid>
                <Grid item xs={12} lg={6}>
                    <h3 style={{ color: 'rgba(2, 30, 50)', fontWeight: '800' }}>Dr. Tasnim Jara</h3>
                    <h4>Tasnim Jara is the founder of Shohay, a health-tech startup <br /> working to make reliable health information accessible in Bangla. <br /> She is a doctor at NHS England and a Clinical Supervisor (Undergraduate) <br /> at University of Cambridge. She fights medical misinformation <br /> everyday with more than 6 million followers.</h4>
                </Grid>
            </Grid>
        </div>
    );
};

export default NailsMedical;