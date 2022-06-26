import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from 'next/link';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';
import Grid from '@mui/material/Grid';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import BalanceIcon from '@mui/icons-material/Balance';
import ShareIcon from '@mui/icons-material/Share';

export default function Innovative() {
    return (
        <>
            <Container maxWidth="lg" sx={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', minHeight:'80vh'
            }} >
                <Box sx={{ flexGrow: 1, width: '100%',display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Box className='Main' sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: 'white',transition:'all 0.5s ease' }} >
                                <RocketLaunchIcon className='sign' sx={{fontSize:'60px',transition:'all 0.5s ease',color: '#5d5d5d'}} />
                                <Box className='Sub' sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: 6,p:4,transition:'all 0.5s ease',borderBottom:'7px solid transparent' }} >
                                    <Typography variant="h6" sx={{
                                        fontSize: '24px', fontWeight: 600, color: '#0f579f', textAlign: 'center'
                                    }} component="div">
                                        Innovative
                                    </Typography>
                                    <Typography variant="h2" sx={{
                                        fontSize: '16px', lineHeight: '24px', fontWeight: 500, color: '#5d5d5d', fontFamily: "Source Sans Pro",textAlign:'start',mt:3
                                    }} component="div">
                                        Biokript combines the bext features of centalized (CEXs) and decentralized exchnage (DEXs)
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box className='Main' sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: 'white',transition:'all 0.5s ease' }} >
                            <BalanceIcon className='sign' sx={{fontSize:'60px',transition:'all 0.5s ease',color: '#5d5d5d'}} />
                                <Box className='Sub' sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: 6,p:4,transition:'all 0.5s ease',borderBottom:'7px solid transparent' }} >
                                    <Typography variant="h6" sx={{
                                        fontSize: '24px', fontWeight: 600, color: '#0f579f', textAlign: 'center'
                                    }} component="div">
                                        Legally Incorporated
                                    </Typography>
                                    <Typography variant="h2" sx={{
                                        fontSize: '16px', lineHeight: '24px', fontWeight: 500, color: '#5d5d5d', fontFamily: "Source Sans Pro",textAlign:'start',mt:3
                                    }} component="div">
                                        Legally Incorporated-Biokript is legally incorporated in Estonia and abides by EU exchnage regualtions
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box className='Main' sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: 'white',transition:'all 0.5s ease' }} >
                            <ShareIcon className='sign' sx={{fontSize:'60px',transition:'all 0.5s ease',color: '#5d5d5d'}} />
                                <Box className='Sub' sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: 6,p:4,transition:'all 0.5s ease',borderBottom:'7px solid transparent' }} >
                                    <Typography variant="h6" sx={{
                                        fontSize: '24px', fontWeight: 600, color: '#0f579f', textAlign: 'center'
                                    }} component="div">
                                        Profit Sharing
                                    </Typography>
                                    <Typography variant="h2" sx={{
                                        fontSize: '16px', lineHeight: '24px', fontWeight: 500, color: '#5d5d5d', fontFamily: "Source Sans Pro",textAlign:'start',mt:3
                                    }} component="div">
                                        Profit Sharing-Biokript is the best exchnage to offer EHX stakes a share of it's profit 
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
