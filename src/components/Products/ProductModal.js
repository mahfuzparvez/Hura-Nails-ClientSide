import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import './ProductModal.css';
import useAuth from '../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
};

const ProductModal = ({ product }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { imageUrl, productName, Size, Status, price } = product;

    const { user } = useAuth();
    const initialInfo = { customerName: user.displayName, email: user.email, phone: '', address: '', productSize: '' }
    const [orderInfo, setOrderInfo] = useState(initialInfo);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        setOrderInfo(newInfo);
    }

    const handleSubmit = e => {
        const order = {
            ...orderInfo,
            imageUrl,
            Size,
            price,
            Status,
            serviceName: productName,
        }
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Thank you for your order. We will contact to you shortly.')
                    handleClose();
                }
            })

        e.preventDefault();
    };
    return (
        <div>
            <Button onClick={handleOpen}>Buy Now</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="mainbox" sx={style}>
                    <Box className="child1">
                        <img style={{ height: "50%", width: "50%" }} src={imageUrl} alt="" />
                        <Typography style={{ marginBottom: "-15px" }} id="modal-modal-title" variant="h6" component="h4">
                            {productName}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ my: 2 }}>
                            Available Size: {Size}<br />
                            Status: {Status}<br />
                            Price: {price}৳
                        </Typography>
                    </Box>
                    <form onSubmit={handleSubmit}>
                        <Box className="child2">
                            <TextField id="standard-basic" label="Name" variant="standard"
                                defaultValue={user.displayName}
                                name="customerName"
                                onBlur={handleOnBlur}
                            />

                            <TextField disabled id="standard-basic" label="Email" variant="standard" defaultValue={user.email} name="email" />

                            <TextField id="standard-basic" label="Phone" variant="standard" name="phone" onBlur={handleOnBlur} />

                            <TextField id="standard-basic" label="Address" variant="standard" name="address" onBlur={handleOnBlur} />

                            <TextField id="standard-basic" label="Product size number" variant="standard" name="productSize"
                                onBlur={handleOnBlur} />
                        </Box>
                        <br />
                        <Button type="submit" variant="contained">Order Conform</Button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
};

export default ProductModal;