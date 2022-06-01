import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { FaInstagramSquare } from "@react-icons/all-files/fa/FaInstagramSquare";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1, width: '100%', color: 'white', backgroundColor: 'rgba(10, 10, 10)' }}>
                <Grid container spacing={1}>
                    <Grid item xs={12} lg={6}>
                        <h2>Hura Nails</h2>
                        <h4>Address</h4>
                        <p>Chittagong, Bangladesh<LocationOnIcon sx={{ width: '25px', height: '25px' }} /> </p>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <h3>About Us</h3>
                        <p>Want to shop nail, hand and foot care products? <br /> Can't wait to discover our latest trend colours & <br /> products? Pick one of our Hura nails webshops!</p>
                        <FacebookOutlinedIcon sx={{ width: '40px', height: '40px' }} />
                        <FaInstagramSquare style={{ width: '40px', height: '40px', marginLeft: '15px' }} />
                    </Grid>
                    <p style={{ margin: '0 auto', paddingBottom: '15px', color: 'grey' }}>©2022 all right reserved by Hura Nails</p>
                </Grid>
            </Box>
        </div>
    );
};

export default Footer;