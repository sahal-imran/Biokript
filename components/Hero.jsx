import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from 'next/link';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true
};


function Hero() {
    const slider = useRef();

    const next = () => {
        slider.current.slickNext();
    };
    const previous = () => {
        slider.current.slickPrev();
    };


    return (
        <>
            <Box sx={{ position: 'relative', overflow: 'hidden', mt: '-70px' }} >
                <Box>
                    <Slider ref={c => (slider.current = c)} style={{ width: '100vw', height: '100vh' }} {...settings}>
                        <Box sx={{ width: '100%', height: '100%', position: 'relative' }} >
                            <Box sx={{ width: '100%', height: "100%" }} >
                                <img style={{ width: '100%', height: '100vh', objectFit: 'cover' }} src="/slide1.jpg" alt="slideBG" />
                            </Box>
                            <Container maxWidth="lg" sx={{
                                height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: {
                                    md: 'row',
                                    xs: 'column'
                                }, position: 'absolute', top: {
                                    md:'45%',
                                    xs:'50%'
                                }, left: '50%', transform: "translate(-50%,-50%)", zIndex: 1, mt: {
                                    md: 0,
                                    xs: 6
                                }
                            }} >
                                <Box sx={{
                                    width: {
                                        md: '60%',
                                        xs: '100%'
                                    }, display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column'
                                }} >
                                    <Typography variant="h6" sx={{ fontSize: {
                                            md: '50px',
                                            xs: '30px'
                                        }, fontWeight: 700, color: 'white', mb: {
                                            md: '60px',
                                            xs: '30px',lineHeight:{
                                                md:'60px',
                                                xs:'40px'
                                            }
                                        } }} component="div">
                                        World's first hybrid Shariah-compliant trading platform
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontSize: {
                                            md: '24px',
                                            xs: '20px'
                                        }, fontWeight: 400, color: 'white', mb: {
                                            md:'50px',
                                            xs:'30px'
                                        } }} component="div">
                                        Trade with Top altcoins on our crypto asset exchange
                                    </Typography>
                                    <Button variant='contained' sx={{
                                        transition: ' all 0.5s ease', textTransform: 'capitalize', borderRadius: '0.25rem', backgroundColor: '#5ba4e3', px: '30px', py: '6px', color: '#082b4b', fontSize: '1rem', fontWeight: 400, boxShadow: 'unset', border: '1px solid transparent', "&:hover": {
                                            backgroundColor: '#5ba4e3', boxShadow: 'unset', transform: 'translateY(-3px)'
                                        }
                                    }} >
                                        start earning today
                                    </Button>
                                </Box>
                                <Box sx={{
                                    width: {
                                        md: '40%',
                                        xs: '100%'
                                    }, display: 'flex', justifyContent: 'center', alignItems: 'center',mt: {
                                        md: 0,
                                        xs: 4
                                    }
                                }} >
                                    <Box sx={{ position: 'relative', width: '100%', border: '1px solid #00c1dd;', borderRadius: '35px', backgroundColor: 'rgba(0,0,0,0.3)', display: 'flex', justifyContent: 'center', alignItems: 'center', p: 5 }} >
                                        <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }} >
                                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                                <img src="/btc.png" style={{ minWidth: '18px', minHeight: '18px', objectFit: 'contain' }} alt="img" />
                                                <Typography variant="h6" sx={{ fontSize: '24px', fontWeight: 400, color: 'white', ml: 1 }} component="div">
                                                    Bitcoin
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1 }} >
                                                <img src="/eth.png" style={{ minWidth: '18px', minHeight: '18px', objectFit: 'contain' }} alt="img" />
                                                <Typography variant="h6" sx={{ fontSize: '24px', fontWeight: 400, color: 'white', ml: 1 }} component="div">
                                                    Ethereum
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1 }} >
                                                <img src="/lit.png" style={{ minWidth: '18px', minHeight: '18px', objectFit: 'contain' }} alt="img" />
                                                <Typography variant="h6" sx={{ fontSize: '24px', fontWeight: 400, color: 'white', ml: 1 }} component="div">
                                                    Litecoin
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1 }} >
                                                <img src="/rip.png" style={{ minWidth: '18px', minHeight: '18px', objectFit: 'contain' }} alt="img" />
                                                <Typography variant="h6" sx={{ fontSize: '24px', fontWeight: 400, color: 'white', ml: 1 }} component="div">
                                                    Ripple
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ width: '50%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }} >
                                            <Typography variant="h6" sx={{ fontSize: '75px', fontWeight: 300, color: '#508FC7', ml: 1 }} component="div">
                                                Spot
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Container>
                        </Box>
                        <Box sx={{ width: '100%', height: '100%', position: 'relative',height:'100vh',background:"radial-gradient(rgba(31,53,219),black)" }} >
                            {/* <Box sx={{ width: '100%', height: "100%" }} >
                                <img style={{ width: '100%', height: '100vh', objectFit: 'cover' }} src="/slide2.jpg" alt="slideBG" />
                            </Box> */}
                            <Container maxWidth="lg" sx={{
                                height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: {
                                    md: 'row',
                                    xs: 'column'
                                }, position: 'absolute', top: {
                                    md:'45%',
                                    xs:'50%'
                                }, left: '50%', transform: "translate(-50%,-50%)", zIndex: 1, mt: {
                                    md: 0,
                                    xs: 6
                                }
                            }} >
                                <Box sx={{
                                    width: {
                                        md: '60%',
                                        xs: '100%'
                                    }, display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column'
                                }} >
                                    <Typography variant="h6" sx={{
                                        fontSize: {
                                            md: '50px',
                                            xs: '30px'
                                        }, fontWeight: 700, color: 'white', mb: {
                                            md: '60px',
                                            xs: '30px'
                                        },lineHeight:{
                                            md:'60px',
                                            xs:'40px'
                                        }
                                    }} component="div">
                                        World's first hybrid Shariah-compliant trading platform
                                    </Typography>
                                    <Typography variant="h6" sx={{
                                        fontSize: {
                                            md: '24px',
                                            xs: '18px'
                                        }, fontWeight: 400, color: 'white', mb: {
                                            md:'50px',
                                            xs:'30px'
                                        }
                                    }} component="div">
                                        Biokript offers an intuitive interface with real-time orderbooks, charting tools, trade history and a simple order process so you can trade from day one.
                                    </Typography>
                                    <Button variant='contained' sx={{
                                        transition: ' all 0.5s ease', textTransform: 'capitalize', borderRadius: '0.25rem', backgroundColor: '#5ba4e3', px: '30px', py: '6px', color: '#082b4b', fontSize: '1rem', fontWeight: 400, boxShadow: 'unset', border: '1px solid transparent', "&:hover": {
                                            backgroundColor: '#5ba4e3', boxShadow: 'unset', transform: 'translateY(-3px)',color:'black'
                                        }
                                    }} >
                                        start earning today
                                    </Button>
                                </Box>
                                <Box sx={{
                                    width: {
                                        md: '40%',
                                        xs: '80%'
                                    }, display: 'flex', justifyContent: 'center', alignItems: 'center', mt: {
                                        md: 0,
                                        xs: 4
                                    }
                                }} >
                                    <img style={{ width: '100%', height: '100%' }} src="/bit.png" alt="img" />
                                </Box>
                            </Container>
                        </Box>
                    </Slider>
                </Box>
                <ArrowBackIosNewIcon onClick={() => previous()} sx={{
                    transition: ' all 0.5s ease', fontSize: '40px', color: 'white', cursor: 'pointer', position: 'absolute', top: '45%', left: {
                        md: '80px',
                        xs: '30px'
                    }, opacity: 0.6, "&:hover": {
                        opacity: 1,
                        transform: 'scale(1.2)'
                    }
                }} />
                <ArrowForwardIosIcon onClick={() => next()} sx={{
                    transition: ' all 0.5s ease', fontSize: '40px', color: 'white', cursor: 'pointer', position: 'absolute', top: '45%', right: {
                        md: '80px',
                        xs: '30px'
                    }, opacity: 0.6, "&:hover": {
                        opacity: 1,
                        transform: 'scale(1.2)'
                    }
                }} />
            </Box>
        </>
    )
}

export default Hero