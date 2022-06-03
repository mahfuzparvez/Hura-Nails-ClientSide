import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './ManageOrders.css';

const ManageOrders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://whispering-crag-53712.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div>
            <h1 style={{ marginTop: '-30px', marginBottom: '-10px' }}>Customer ordered products</h1>
            <Container>
                <Grid direction="row" justifyContent="center" alignItems="center" container columns={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                    {
                        orders.map(product => (<Card className='CARD'>
                            <CardMedia
                                component="img"
                                image={product.imageUrl}
                                alt="green iguana"
                                style={{
                                    height: '200px', width: '100%'
                                }}
                            />
                            <CardContent style={{ backgroundColor: 'rgb(231, 226, 226)', height: '325px', width: '300px' }}>
                                <Typography style={{ fontWeight: "700" }} gutterBottom variant="h6" component="div">
                                    {product.productName}
                                </Typography>
                                <Typography variant="p">
                                    Available Size: {product.Size}
                                </Typography>
                                <br />
                                <Typography variant="p">
                                    Status: {product.Status}
                                </Typography>
                                <Typography style={{ color: "rgb(8, 132, 218)" }} gutterBottom variant="h6" component="div">
                                    ৳{product.price}
                                </Typography>
                                <Typography className="" variant="p" color="">
                                    Customer Name: {product.customerName}<br />
                                    Email: {product.email}<br />
                                    Phone: {product.phone}<br />
                                    Address: {product.address}
                                </Typography>
                                <br />
                            </CardContent>
                        </Card>))
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default ManageOrders;