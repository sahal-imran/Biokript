import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from 'next/link';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';
import Grid from '@mui/material/Grid';

function OurWorldClassTradingPlatform() {
    return (
        <>
            <Container maxWidth="lg" sx={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', py: 8
            }} >
                <Typography variant="h6" sx={{
                    fontSize: {
                        md: '30px',
                        xs: '30px'
                    }, fontWeight: 700, color: '#202e39', textAlign: {
                        md: 'start',
                        xs: 'center'
                    }
                }} component="div">
                    Our World Class Trading Platform
                </Typography>
                <Box sx={{
                    width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: {
                        md: 'row',
                        xs: 'column-reverse'
                    }, mt: {
                        md: 6,
                        xs: 0
                    }
                }} >
                    <Box sx={{
                        width: {
                            md: '55%',
                            xs: 'column'
                        }, display: 'flex', justifyContent: 'center', alignItems: {
                            md: 'start',
                            xs: 'center'
                        }, flexDirection: 'column'
                    }} >
                        <Typography variant="h2" sx={{
                            fontSize: '18px', lineHeight: '24px', fontWeight: 400, color: '#343a40', mb: '43px', fontFamily: "Source Sans Pro"
                        }} component="div">
                            Be one step ahead and Improve your trading results with our industry-leading technology
                        </Typography>
                        <Box sx={{
                            width: {
                                md: '50%',
                                xs: 'max-content'
                            }, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', ml: {
                                md: 9
                            }
                        }} >
                            <Box sx={{
                                width: '100%', display: 'flex', justifyContent: {
                                    md: 'space-between',
                                    xs: 'center'
                                }, alignItems: {
                                    md: 'center',
                                    xs: 'start'
                                }, flexDirection: {
                                    md: 'row',
                                    xs: 'column'
                                }
                            }} >
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <Box sx={{ width: "15px", height: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid #00ff0c' }} >
                                        <DoneIcon sx={{ color: "#00ff0c", fontSize: '12px', fontWeight: 'bold' }} />
                                    </Box>
                                    <Typography variant="h2" sx={{
                                        fontSize: '16px', mb: '2px', fontWeight: 400, color: '#777', fontFamily: "Source Sans Pro", ml: 2
                                    }} component="div">
                                        Easy Access
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    display: 'flex', justifyContent: 'center', alignItems: 'center', mt: {
                                        md: 0,
                                        xs: 2
                                    }
                                }} >
                                    <Box sx={{ width: "15px", height: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid #00ff0c' }} >
                                        <DoneIcon sx={{ color: "#00ff0c", fontSize: '12px', fontWeight: 'bold' }} />
                                    </Box>
                                    <Typography variant="h2" sx={{
                                        fontSize: '16px', mb: '2px', fontWeight: 400, color: '#777', fontFamily: "Source Sans Pro", ml: 2
                                    }} component="div">
                                        Quick Balance Check
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{
                                width: '100%', display: 'flex', justifyContent: {
                                    md: 'space-between',
                                    xs: 'center'
                                }, alignItems: {
                                    md: 'center',
                                    xs: 'start'
                                }, flexDirection: {
                                    md: 'row',
                                    xs: 'column'
                                }, mt: {
                                    md: 2,
                                    xs: 2
                                }
                            }} >
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <Box sx={{ width: "15px", height: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid #00ff0c' }} >
                                        <DoneIcon sx={{ color: "#00ff0c", fontSize: '12px', fontWeight: 'bold' }} />
                                    </Box>
                                    <Typography variant="h2" sx={{
                                        fontSize: '16px', mb: '2px', fontWeight: 400, color: '#777', fontFamily: "Source Sans Pro", ml: 2
                                    }} component="div">
                                        Profit Booking
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    display: 'flex', justifyContent: 'center', alignItems: 'center', mr: -3.5, mt: {
                                        md: 0,
                                        xs: 2
                                    }
                                }} >
                                    <Box sx={{ width: "15px", height: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid #00ff0c' }} >
                                        <DoneIcon sx={{ color: "#00ff0c", fontSize: '12px', fontWeight: 'bold' }} />
                                    </Box>
                                    <Typography variant="h2" sx={{
                                        fontSize: '16px', mb: '2px', fontWeight: 400, color: '#777', fontFamily: "Source Sans Pro", ml: 2
                                    }} component="div">
                                        Multi Window Platform
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ flexGrow: 1, width: '90%', mt: 8 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                                        <Typography variant="h2" sx={{
                                            fontSize: '45px', fontWeight: 400, color: '#414851', mb: '25px', fontFamily: "Source Sans Pro"
                                        }} component="div">
                                            {'<7.12ms'}
                                        </Typography>
                                        <Typography variant="h2" sx={{
                                            fontSize: '17px', fontWeight: 400, color: '#414851', fontFamily: "Source Sans Pro"
                                        }} component="div">
                                            Average order execution speed
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                                        <Typography variant="h2" sx={{
                                            fontSize: '45px', fontWeight: 400, color: '#414851', mb: '25px', fontFamily: "Source Sans Pro"
                                        }} component="div">
                                            {'12+'}
                                        </Typography>
                                        <Typography variant="h2" sx={{
                                            fontSize: '17px', fontWeight: 400, color: '#414851', fontFamily: "Source Sans Pro"
                                        }} component="div">
                                            Integrated liquidity providers
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                                        <Typography variant="h2" sx={{
                                            fontSize: '45px', fontWeight: 400, color: '#414851', mb: '25px', fontFamily: "Source Sans Pro"
                                        }} component="div">
                                            {'>12K'}
                                        </Typography>
                                        <Typography variant="h2" sx={{
                                            fontSize: '17px', fontWeight: 400, color: '#414851', fontFamily: "Source Sans Pro"
                                        }} component="div">
                                            Executed ordersper second
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                                        <Typography variant="h2" sx={{
                                            fontSize: '45px', fontWeight: 400, color: '#414851', mb: '25px', fontFamily: "Source Sans Pro"
                                        }} component="div">
                                            {'$54B'}
                                        </Typography>
                                        <Typography variant="h2" sx={{
                                            fontSize: '17px', fontWeight: 400, color: '#414851', fontFamily: "Source Sans Pro"
                                        }} component="div">

                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Box sx={{
                        width: {
                            md: '45%',
                            xs: '100%'
                        }, display: 'flex', justifyContent: 'center', alignItems: 'center'
                    }} >
                        <Box sx={{
                            width: {
                                md: '85%',
                                xs: '90%'
                            }, height: '100%', mt: 2
                        }} >
                            <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src="/machine.png" alt="machine" />
                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default OurWorldClassTradingPlatform