import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from 'next/link';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function TopCryptoAssets() {
    return (
        <>
            <Box sx={{ width: '100%', backgroundColor: "#ffffff", display: 'flex', justifyContent: 'center', alignItems: 'center', py: 8 }}>
                <Container maxWidth="lg" sx={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection:{
                        md:'row',
                        xs:'column'
                    }
                }} >
                    <Box sx={{ width: {
                        md:'42%',
                        xs:'100%'
                    }, display: 'flex', justifyContent: 'center', alignItems: {
                        md:'start',
                        xs:'center'
                    }, flexDirection: 'column' }} >
                        <Typography variant="h6" sx={{
                            fontSize: {
                                md: '48px',
                                xs: '32px'
                            }, fontWeight: 400, color: '#000', mb: {
                                md:'50px',
                                xs:'30px'
                            }
                        }} component="div">
                            TOP CRYPTO ASSETS
                        </Typography>
                        <Typography variant="h2" sx={{
                            fontSize: '22px', lineHeight: '28px', fontWeight: 600, color: '#343a40', mb: '24px', fontFamily: "Source Sans Pro"
                        }} component="div">
                            Biokript is the world’s first hybrid, Shariah-compliant trading platform where traders have full custody of their funds. 
                        </Typography>
                        {/* <Box sx={{ width: '86%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                            <Typography variant="h6" sx={{
                                fontSize: {
                                    md:'30px',
                                    xs:'20px'
                                }, fontWeight: 700, color: '#000', textTransform: 'uppercase', px: '10px', position: 'relative', zIndex: 1, background: 'white'
                            }} component="div">
                                SIMPLE KYC REQUIRED
                            </Typography>
                            <Box sx={{ width: '100%', minHeight: '65px', border: '1px solid #5ba4e3', mt: {
                                md:-3,
                                xs:-2
                            } }} >
                            </Box>
                            <Button variant='contained' sx={{
                                mt: -2.5, opacity: 1,
                                transition: ' all 0.5s ease', textTransform: 'capitalize', borderRadius: '0.25rem', backgroundColor: '#5ba4e3', px: '30px', py: '6px', color: '#082b4b', fontSize: '1rem', fontWeight: 400, boxShadow: 'unset', border: '1px solid transparent', "&:hover": {
                                    backgroundColor: '#5ba4e3', boxShadow: 'unset', transform: 'translateY(-3px)', opacity: 1,
                                },position:'relative',zIndex:1
                            }} >
                                start earning today
                            </Button>
                        </Box> */}
                    </Box>
                    <Box sx={{ width: {
                        md:'58%',
                        xs:'100%'
                    }, height: "100%", display: 'flex', justifyContent: 'center', alignItems: {
                        md:'end',
                        xs:"center"
                    }, flexDirection: 'column',mt:{
                                md:2,
                                xs:4
                            } }} >
                        <Box sx={{ width: "95%", height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                            <Box className='Nav' sx={{ width: '100%', height: '45px', backgroundColor: '#5ba4e3', display: 'flex', justifyContent: 'start', alignItems: 'center', px: 2 }} >
                                <Button variant='contained' sx={{
                                    textTransform: 'uppercase', height: '100%', backgroundColor: 'white', boxShadow: 'none', fontSize: '22px', borderRadius: 'unset', color: "#508fc7", "&:hover": {
                                        backgroundColor: 'white', boxShadow: 'none'
                                    }
                                }} >Spot</Button>
                            </Box>
                            <Box sx={{width:'100%',height:'200px',overflow:'auto'}} >
                                <table id='table' className='table' style={{}} >
                                    <thead>
                                        <tr>
                                            <th>pair</th>
                                            <th>Spot Price</th>
                                            <th>Last Price</th>
                                            <th>24H Change</th>
                                            <th>24H Volume</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>ETHUSDT</td>
                                            <td>1078.35 $</td>
                                            <td>1078.24 $</td>
                                            <td>-1.41%</td>
                                            <td>280642.142 USDT</td>
                                        </tr>
                                        <tr>
                                            <td>ETHUSDT</td>
                                            <td>1078.35 $</td>
                                            <td>1078.24 $</td>
                                            <td>-1.41%</td>
                                            <td>280642.142 USDT</td>
                                        </tr>
                                        <tr>
                                            <td>ETHUSDT</td>
                                            <td>1078.35 $</td>
                                            <td>1078.24 $</td>
                                            <td>-1.41%</td>
                                            <td>280642.142 USDT</td>
                                        </tr>
                                        <tr>
                                            <td>ETHUSDT</td>
                                            <td>1078.35 $</td>
                                            <td>1078.24 $</td>
                                            <td>-1.41%</td>
                                            <td>280642.142 USDT</td>
                                        </tr>
                                        <tr>
                                            <td>ETHUSDT</td>
                                            <td>1078.35 $</td>
                                            <td>1078.24 $</td>
                                            <td>-1.41%</td>
                                            <td>280642.142 USDT</td>
                                        </tr>
                                        <tr>
                                            <td>ETHUSDT</td>
                                            <td>1078.35 $</td>
                                            <td>1078.24 $</td>
                                            <td>-1.41%</td>
                                            <td>280642.142 USDT</td>
                                        </tr>
                                        <tr>
                                            <td>ETHUSDT</td>
                                            <td>1078.35 $</td>
                                            <td>1078.24 $</td>
                                            <td>-1.41%</td>
                                            <td>280642.142 USDT</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default TopCryptoAssets;