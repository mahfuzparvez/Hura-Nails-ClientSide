import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ProductModal from './ProductModal';
import './SingleProduct.css';

const SingleProduct = ({ product }) => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Card className="card" >
                <CardMedia
                    component="img"
                    image={product.imageUrl}
                    alt="green iguana"
                />
                <CardContent className="cardContent">
                    <Typography style={{ fontWeight: "700", marginTop: "30px" }} gutterBottom variant="h6" component="div">
                        {product.productName}
                    </Typography>
                    <Typography variant="p">
                        Available Size: {product.Size}
                    </Typography>
                    <br />
                    <Typography variant="p">
                        Status: {product.Status}
                    </Typography>
                    <Typography className="text" variant="body2" color="text.secondary">
                        {product.description}
                    </Typography>
                    <br />
                    <Typography style={{ color: "rgb(8, 132, 218)" }} gutterBottom variant="h6" component="div">
                        ৳{product.price}
                    </Typography>
                </CardContent>
            </Card>
            <ProductModal
                open={open}
                setOpen={setOpen}
                product={product}
            ></ProductModal>
        </div>
    );
};

export default SingleProduct;