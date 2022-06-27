import { Container, Grid, TextField } from '@mui/material';
import { FaInstagramSquare } from "@react-icons/all-files/fa/FaInstagramSquare";
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare";
import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    const formSubmit = (e) => {
        e.preventDefault();
        alert("If you want to buy a product, contact LiveChat or Instagram or Facebook page. Contact LiveChat to report any complaints other than this. Thank you!");
        const inputs = document.querySelectorAll('#fullWidth, #filled-multiline-static');
        inputs.forEach(input => {
            input.value = '';
        });
    };
    return (
        <div>
            {/* banner div */}
            <div>
                <img style={{ height: "300px", width: '100%' }} src="https://i.postimg.cc/Jzyyf7ZG/contact-background.jpg" alt="" />
                <div style={{ marginRight: "50%", marginTop: "-270px" }}>
                    <h2 style={{ color: '#FFE4C4', fontWeight: '800', textShadow: '20px 20px  20px grey', fontSize: '50px' }}>Hura Nails</h2>
                </div>
                {/* contact form div */}
            </div>
            <Container style={{ marginTop: "160px", marginBottom: "50px" }}>
                <h3 style={{ color: 'rgba(2, 30, 50)', fontWeight: '700', fontSize: '30px' }}>Fill out the form below to contact us</h3>
                <Grid container>
                    <Grid item sm={12} lg={6}>
                        <img className='contactImg' src="https://i.postimg.cc/BQXHr0xj/Adobe2-removebg-preview.png" alt="" />
                    </Grid>
                    <Grid item sm={12} lg={5}>
                        <form onSubmit={formSubmit} >
                            <div className='form'>
                                <div>
                                    <TextField className="contactText" id="fullWidth" label="First Name" fullWidth />
                                    <br />
                                    <br />
                                    <TextField className="contactText" id="fullWidth" label="Last Name" fullWidth />
                                    <br />
                                    <br />
                                    <TextField className="contactText" id="fullWidth" type="email" label="Email" fullWidth />
                                    <br />
                                    <br />
                                    <TextField className="contactText" id="fullWidth" type="number" label="Phone" fullWidth />
                                    <br />
                                    <br />
                                    <TextField
                                        className="contactText"
                                        id="filled-multiline-static"
                                        label="Your Massege"
                                        multiline
                                        rows={5}
                                        variant="filled"
                                        style={{ width: '100%' }}
                                    />
                                    <br />
                                    <br />
                                    <input
                                        id="submit"
                                        type="submit"
                                        value="Send Message"
                                    />
                                </div>
                            </div>
                        </form>
                    </Grid>
                </Grid>
            </Container>
            <div className='socialMedia'>
                <h3 style={{ color: 'white', fontWeight: '700', fontSize: '30px', marginTop: '-10px' }}>
                    If you want you can visit our Facebook and Instagram
                </h3>
                <button><a target="_blank" href="https://www.facebook.com/profile.php?id=100073905424563"><FaFacebookSquare className="icon" />FACEBOOK</a></button>
                <button><a target="_blank" href="https://www.instagram.com/hura_nails_/?igshid=YmMyMTA2M2Y="><FaInstagramSquare className="icon" />INSTAGRAM</a></button>
            </div>
            <h3 style={{ color: 'rgba(2, 30, 50)', fontWeight: '700', fontSize: '30px' }}>Chittagong Map</h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.66922405208!2d91.8178967144586!3d22.366115246155623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd888da7b79df%3A0xcc17286c4adeb01!2z4KaG4KayIOCmq-CmvuCmsuCmvuCmuSDgppfgprLgpr8sIENoaXR0YWdvbmc!5e0!3m2!1sen!2sbd!4v1653274701391!5m2!1sen!2sbd" width="100%" height="500" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
};

export default ContactUs;

/* 
https://i.postimg.cc/sxnd0tpP/1947207.jpg
https://i.postimg.cc/yYbChC6s/Adobe2.jpg
https://i.postimg.cc/dQnY1Tz7/adobe4.webp
https://i.postimg.cc/Y99xzZCB/contact-Banner.webp
 */