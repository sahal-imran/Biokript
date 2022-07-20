import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from 'next/link';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';
import Grid from '@mui/material/Grid';

function OpenAccount() {
    return (
        <>
            <Container maxWidth="lg" sx={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', py: 4
            }} >
                <Typography variant="h6" sx={{
                    fontSize: {
                        md: '30px',
                        xs: '30px'
                    }, fontWeight: 700, color: '#202e39', textAlign:'center'
                }} component="div">
                    Open a free account
                </Typography>
                <Box sx={{ flexGrow: 1, width: '100%',mt:8 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Box className='MainDiv' sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '150px' }} >
                                <Box sx={{ width: '20%', height: '100%', display: 'flex', justifyContent: 'start', alignItems: 'center', flexDirection: 'column' }} >
                                    <Box className='ImgDiv' sx={{ width: '30px', height: '30px', transition: 'all .3s linear' }} >
                                        <img src="/rightTick.png" alt="img" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                    </Box>
                                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1 }} >
                                        <Box component={'span'} sx={{ width: '20px', height: '2px', borderRadius: '10px', backgroundColor: '#508fc7', opacity: .5 }} ></Box>
                                        <Box component={'span'} sx={{ width: '30px', height: '2px', borderRadius: '10px', backgroundColor: '#508fc7', opacity: 1, ml: 1 }} ></Box>
                                    </Box>
                                    <Box component={'span'} sx={{ width: '25px', height: '2px', borderRadius: '10px', backgroundColor: '#508fc7', opacity: .4, mt: .5 }} ></Box>
                                </Box>
                                <Box sx={{ width: '75%', height: '100%', display: 'flex', justifyContent: 'start', alignItems: 'start', flexDirection: 'column' }} >
                                    <Typography variant="h2" sx={{
                                        fontSize: '18px', fontWeight: 600, color: '#414851', fontFamily: "Source Sans Pro", mb: '20px'
                                    }} component="div">
                                        Best-in-Class Trading Platform
                                    </Typography>
                                    <Typography variant="h2" sx={{
                                        fontSize: '14px', fontWeight: 400, color: 'black', fontFamily: "Source Sans Pro"
                                    }} component="div">
                                        Our fast, safe and reliable trading platform is suitable for both novice and professional traders.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box className='MainDiv' sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '150px' }} >
                                <Box sx={{ width: '20%', height: '100%', display: 'flex', justifyContent: 'start', alignItems: 'center', flexDirection: 'column' }} >
                                    <Box className='ImgDiv' sx={{ width: '30px', height: '30px', transition: 'all .3s linear' }} >
                                        <img src="/wallet.png" alt="img" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                    </Box>
                                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1 }} >
                                        <Box component={'span'} sx={{ width: '20px', height: '2px', borderRadius: '10px', backgroundColor: '#508fc7', opacity: .5 }} ></Box>
                                        <Box component={'span'} sx={{ width: '30px', height: '2px', borderRadius: '10px', backgroundColor: '#508fc7', opacity: 1, ml: 1 }} ></Box>
                                    </Box>
                                    <Box component={'span'} sx={{ width: '25px', height: '2px', borderRadius: '10px', backgroundColor: '#508fc7', opacity: .4, mt: .5 }} ></Box>
                                </Box>
                                <Box sx={{ width: '75%', height: '100%', display: 'flex', justifyContent: 'start', alignItems: 'start', flexDirection: 'column' }} >
                                    <Typography variant="h2" sx={{
                                        fontSize: '18px', fontWeight: 600, color: '#414851', fontFamily: "Source Sans Pro", mb: '20px'
                                    }} component="div">
                                        Low Trading Fee
                                    </Typography>
                                    <Typography variant="h2" sx={{
                                        fontSize: '14px', fontWeight: 400, color: 'black', fontFamily: "Source Sans Pro"
                                    }} component="div">
                                        Enjoy tight spreads and low commission rates while trading BTC, ETH, LTC, XRP, and many other popular coins.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box className='MainDiv' sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '150px' }} >
                                <Box sx={{ width: '20%', height: '100%', display: 'flex', justifyContent: 'start', alignItems: 'center', flexDirection: 'column' }} >
                                    <Box className='ImgDiv' sx={{ width: '30px', height: '30px', transition: 'all .3s linear' }} >
                                        <img src="/trade.png" alt="img" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                    </Box>
                                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1 }} >
                                        <Box component={'span'} sx={{ width: '20px', height: '2px', borderRadius: '10px', backgroundColor: '#508fc7', opacity: .5 }} ></Box>
                                        <Box component={'span'} sx={{ width: '30px', height: '2px', borderRadius: '10px', backgroundColor: '#508fc7', opacity: 1, ml: 1 }} ></Box>
                                    </Box>
                                    <Box component={'span'} sx={{ width: '25px', height: '2px', borderRadius: '10px', backgroundColor: '#508fc7', opacity: .4, mt: .5 }} ></Box>
                                </Box>
                                <Box sx={{ width: '75%', height: '100%', display: 'flex', justifyContent: 'start', alignItems: 'start', flexDirection: 'column' }} >
                                    <Typography variant="h2" sx={{
                                        fontSize: '18px', fontWeight: 600, color: '#414851', fontFamily: "Source Sans Pro", mb: '20px'
                                    }} component="div">
                                        Powerful Charting Engine
                                    </Typography>
                                    <Typography variant="h2" sx={{
                                        fontSize: '14px', fontWeight: 400, color: 'black', fontFamily: "Source Sans Pro"
                                    }} component="div">
                                    One of the most high-performing order matching engines in the world, handling over 500,000 orders per second.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default OpenAccount;