import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from 'next/link';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';
import Grid from '@mui/material/Grid';

function Features() {
    return (
        <>
            <Container maxWidth="lg" sx={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', minHeight:'80vh'
            }} >
                <Box sx={{ flexGrow: 1, width: '100%',display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Box className='Main' sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: 'white',transition:'all 0.5s ease' }} >
                                <img style={{ width: '100px', height: '100px', objectFit: 'contain' }} src="/rocket.png" alt="rocket" />
                                <Box className='Sub' sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: 6,p:4,transition:'all 0.5s ease',borderBottom:'7px solid transparent' }} >
                                    <Typography variant="h6" sx={{
                                        fontSize: '24px', fontWeight: 600, color: '#0f579f', textAlign: 'center'
                                    }} component="div">
                                        Fast and Stable<br />
                                        ...
                                    </Typography>
                                    <Typography variant="h2" sx={{
                                        fontSize: '16px', lineHeight: '24px', fontWeight: 500, color: '#5d5d5d', fontFamily: "Source Sans Pro",textAlign:'start',mt:3
                                    }} component="div">
                                        Advanced Trade orders help to manage risk while allowing a certain amount of flexibility in trading assets . 
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box className='Main' sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: 'white',transition:'all 0.5s ease' }} >
                                <img style={{ width: '100px', height: '100px', objectFit: 'contain' }} src="/rocket.png" alt="rocket" />
                                <Box className='Sub' sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: 6,p:4,transition:'all 0.5s ease',borderBottom:'7px solid transparent' }} >
                                    <Typography variant="h6" sx={{
                                        fontSize: '24px', fontWeight: 600, color: '#0f579f', textAlign: 'center'
                                    }} component="div">
                                        Reliability<br />
                                        ...
                                    </Typography>
                                    <Typography variant="h2" sx={{
                                        fontSize: '16px', lineHeight: '24px', fontWeight: 500, color: '#5d5d5d', fontFamily: "Source Sans Pro",textAlign:'start',mt:3
                                    }} component="div">
                                        Our platform provides world class financial stability by maintaining full reserves with  the highest standards of legal compliance.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box className='Main' sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: 'white',transition:'all 0.5s ease' }} >
                                <img style={{ width: '100px', height: '100px', objectFit: 'contain' }} src="/rocket.png" alt="rocket" />
                                <Box className='Sub' sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: 6,p:4,transition:'all 0.5s ease',borderBottom:'7px solid transparent' }} >
                                    <Typography variant="h6" sx={{
                                        fontSize: '24px', fontWeight: 600, color: '#0f579f', textAlign: 'center'
                                    }} component="div">
                                        Security<br />
                                        ...
                                    </Typography>
                                    <Typography variant="h2" sx={{
                                        fontSize: '16px', lineHeight: '24px', fontWeight: 500, color: '#5d5d5d', fontFamily: "Source Sans Pro",textAlign:'start',mt:3
                                    }} component="div">
                                        We provide High Security in the Trading,Security of user information and funds is our first priority. 
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

export default Features