import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import './Products.css';
import SingleProduct from './SingleProduct';

const appointmentBg = {
    background: `url('https://wallpaperaccess.com/full/1917082.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    height: '550px',
    marginBottom: '20px'
};

const header = {
    fontSize: '100px',
    color: '#5F9EA0',
    textShadow: '4px 4px #000000',
    paddingTop: '3%',
    marginTop: '0',
    marginBottom: '0'
};
const h4 = {
    fontSize: '35px',
    color: '#5F9EA0',
    textShadow: '4px 4px #000000',
    paddingTop: '5%'
};


const Products = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('https://whispering-crag-53712.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <div style={appointmentBg}>
                <h1 className='bannerh1' style={header}>𝓗𝓾𝓻𝓪 𝓝@𝓲𝓵𝓼</h1>
                <h4 style={h4}>We strive to ensure the quality of our products</h4>
            </div>
            <Container>
                <br /><br />
                <Grid direction="row" justifyContent="center" alignItems="center" container columns={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                    {
                        product.map(product => (<SingleProduct product={product}></SingleProduct>))
                    }
                </Grid>
                <br /><br />
            </Container>
        </div>
    );
};

export default Products;