import { Container, Grid, TextField } from '@mui/material';
import './AddProduct.css';
import React, { useState } from 'react';

const AddProduct = () => {
    const initialInfo = { imageUrl: '', productName: '', Size: '', Status: '', price: '', description: '' };
    const [productInfo, setProductInfo] = useState(initialInfo);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...productInfo };
        newInfo[field] = value;
        setProductInfo(newInfo);
    };
    const formSubmit = (e) => {
        const product = {
            ...productInfo,
        };

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                setProductInfo(data);
            })


        e.preventDefault();
        alert("Your product was successfully added.");
        const inputs = document.querySelectorAll('#fullWidth');
        inputs.forEach(input => {
            input.value = '';
        });
    };
    return (
        <div>
            <h1 style={{ marginTop: '-30px' }}>Add Product</h1>
            <Container>
                <Grid direction="row" justifyContent="center" alignItems="center" container columns={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                    <div className="formdiv">
                        <p>How to get Image URL? just follow this step.<br />
                            STEP NO1 = Click on<a href='https://postimages.org/' target="_blank"> here</a> then there find a button (choose image) click on this button then select product image.<br />
                            STEP NO2 = then copy the direct link and paste it on Image Url text box.
                        </p>
                        <form onSubmit={formSubmit} >
                            <TextField fullWidth label="Image Url" name="imageUrl"
                                onBlur={handleOnBlur} id="fullWidth" />
                            <br /><br />
                            <TextField fullWidth label="Product Name"
                                onBlur={handleOnBlur}
                                name='productName'
                                id="fullWidth" />
                            <br /><br />
                            <TextField fullWidth label="Size"
                                onBlur={handleOnBlur}
                                name="Size"
                                id="fullWidth" />
                            <br /><br />
                            <TextField fullWidth label="Status" name="Status"
                                onBlur={handleOnBlur} id="fullWidth" /><br /><br />
                            <TextField fullWidth label="Price"
                                name="price"
                                onBlur={handleOnBlur} id="fullWidth" />
                            <br /><br />
                            <TextField fullWidth label="Description"
                                onBlur={handleOnBlur} name="description" id="fullWidth" /><br /><br />
                            <input id="submit" type="submit" value="Submit" /><br /><br />
                        </form>
                    </div>
                </Grid>
            </Container>
        </div>
    );
};

export default AddProduct;