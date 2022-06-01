import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../image/error.jpg'

const NotFound = () => {
    return (
        <div>
            <h1>PAGE NOT FOUND</h1>
            <img style={{ width: '300px', height: '300px' }} src={img} alt="" /><br />
            <Button variant="contained"><Link style={{ textDecoration: 'none', color: 'white' }} to="/Home">Go Back</Link></Button><br /><br />
        </div>
    );
};

export default NotFound;