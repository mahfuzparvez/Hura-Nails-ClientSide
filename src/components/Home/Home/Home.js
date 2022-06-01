import React from 'react';
import NailsMedical from '../NailsMedical/NailsMedical';
import Product from '../Product/Product';
import Review from '../Review/Review';
import HeadBanner from '../HeadBanner/HeadBanner';

const Home = () => {
    return (
        <div>
            <HeadBanner></HeadBanner>
            <Product></Product>
            <Review></Review>
            <NailsMedical></NailsMedical>
        </div>
    );
};

export default Home;