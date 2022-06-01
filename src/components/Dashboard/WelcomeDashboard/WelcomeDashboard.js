import React from 'react';
import homeDashBorad from '../../../image/3528492.jpg'

const WelcomeDashboard = () => {
    return (
        <div>
            <img style={{ width: '80%', height: '350px' }} src={homeDashBorad} alt="" />
            <h1 style={{ marginTop: '-400px', color: '#4682B4', fontSize: "50px" }}>Welcome to Dashboard</h1>
        </div>
    );
};

export default WelcomeDashboard;