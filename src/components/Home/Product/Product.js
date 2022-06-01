import { React } from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Slider from "react-slick";
import { Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

/* https://mocki.io/v1/d6f3a86c-59b8-4b34-8f7e-ac68136088c7   product api*/

const products = [
    {
        Key: "1",
        Photo1: "https://i.postimg.cc/PrT4bWTK/Product-1-1.jpg",
        Photo2: "https://i.postimg.cc/5NgmsXtJ/Product-1-2.jpg",
        Photo3: "https://i.postimg.cc/VkNWpzSC/Product-1-3.jpg",
        Name: "Brown color nail",
        Price: "350  ",
        Available_Size: "3,6,4,5,8",
        Status: "In Stock",
        Details: "If you buy 5pc or 10pc then gift for you glue or tab. Our nails are 100% acrylic nails and gel polish."
    },
    {
        Key: "2",
        Photo1: "https://i.postimg.cc/C5H9PwR2/Product-2-1.jpg",
        Photo2: "https://i.postimg.cc/J7Nw45pQ/Product-2-2.jpg",
        Photo3: "https://i.postimg.cc/02PT6K31/Product-2-3.jpg",
        Name: "Black Color nail",
        Price: "350  ",
        Available_Size: "8",
        Status: "In Stock",
        Details: "If you buy 5pc or 10pc then gift for you glue or tab. Our nails are 100% acrylic nails and gel polish."
    },
    {
        Key: "3",
        Photo1: "https://i.postimg.cc/NGHfcn9C/Product-3-1.jpg",
        Photo2: "https://i.postimg.cc/3Jj8yDZg/Product-3-3.jpg",
        Photo3: "https://i.postimg.cc/Ghn3hjvL/Product-3-4.jpg",
        Name: "Maroon color nail",
        Price: "350  ",
        Available_Size: "5",
        Status: "In Stock",
        Details: "If you buy 5pc or 10pc then gift for you glue or tab. Our nails are 100% acrylic nails and gel polish."
    },
    {
        Key: "4",
        Photo1: "https://i.postimg.cc/dVT9mwLm/Product-4-2.jpg",
        Photo2: "https://i.postimg.cc/0NYdFnGz/Product-4-3.jpg",
        Photo3: "https://i.postimg.cc/7L8nKdzv/Product-4-4.jpg",
        Name: "Customized Red & Black nail",
        Price: "350  ",
        Available_Size: "5",
        Status: "In Stock",
        Details: "If you buy 5pc or 10pc then gift for you glue or tab. Our nails are 100% acrylic nails and gel polish."
    },
    {
        Key: "5",
        Photo1: "https://i.postimg.cc/nhHmRmVk/Product-5-1.jpg",
        Photo2: "https://i.postimg.cc/mrkHRGH1/Product-5-2.jpg",
        Photo3: "https://i.postimg.cc/2S2ZP5Vf/Product-5-3.jpg",
        Name: "Black Color nail",
        Price: "350  ",
        Available_Size: "8",
        Status: "In Stock",
        Details: "If you buy 5pc or 10pc then gift for you glue or tab. Our nails are 100% acrylic nails and gel polish."
    },
    {
        Key: "6",
        Photo1: "https://i.postimg.cc/503dmDsp/Product-6-2.jpg",
        Photo2: "https://i.postimg.cc/kG100K3b/Product-6-3.jpg",
        Photo3: "https://i.postimg.cc/brwXVLMP/Product-6-4.jpg",
        Name: "Glowing Ice nail",
        Price: "1350  ",
        Available_Size: "3,6,4,5,8",
        Status: "In Stock",
        Details: "If you buy 5pc or 10pc then gift for you glue or tab. Our nails are 100% acrylic nails and gel polish."
    }
]

var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
};
const Product = () => {
    return (
        <div>
            <h2 style={{ color: 'rgba(2, 30, 50)', fontWeight: '800', marginTop: '50px' }}>OUR PRODUCTS</h2>
            <Container>
                <Grid direction="row" justifyContent="center" alignItems="center" container columns={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                    {
                        products.map(product => (<Card style={{ width: '20rem', margin: '20px', paddingBottom: '10px' }}>
                            {/* <img src={product.Photo1} alt="" style={{ width: '300px', height: '300px' }} /> */}
                            <Slider {...settings}>
                                <div>
                                    <img src={product.Photo1} alt="" style={{ width: '300px', height: '300px', margin: '0 auto' }} />
                                </div>
                                <div>
                                    <img src={product.Photo2} alt="" style={{ width: '300px', height: '300px', margin: '0 auto' }} />
                                </div>
                                <div>
                                    <img src={product.Photo3} alt="" style={{ width: '300px', height: '300px', margin: '0 auto' }} />
                                </div>
                            </Slider>
                            <h4>{product.Name}</h4>
                            <p>Price: ৳{product.Price}</p>
                            <Link style={{ textDecoration: "none" }} to='/Products'><Button variant="contained">Buy Now</Button></Link>
                        </Card>))
                    }
                </Grid>
            </Container>
            <Button variant="outlined" size="small"><Link style={{ textDecoration: "none", color: "rgba(8, 132, 218)" }} to="/Products">See More</Link></Button>
        </div>
    );
};

export default Product;