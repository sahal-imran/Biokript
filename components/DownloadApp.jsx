import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

function DownloadApp() {
    return (
        <>
            <Container maxWidth="lg" sx={{
                display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection:{
                    md:'row',
                    xs:'column'
                }
            }} >
                <Box sx={{ width: {
                    md:'50%',
                    xs:'100%'
                }, display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }} >
                    <Typography variant="h2" sx={{
                        fontSize: '30px', fontWeight: 500, color: '#343a40', mb: '0.5rem', fontFamily: "Source Sans Pro"
                    }} component="div">
                        Download Biokript Apps
                    </Typography>
                    <Typography variant="h2" sx={{
                        fontSize: '16px', lineHeight: '24px', fontWeight: 400, color: '#343a40', mb: '24px', fontFamily: "Source Sans Pro"
                    }} component="div">
                        Trade over 20+ assets including Crypto from your mobile device
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection:{
                        md:'row',
                        xs:'column'
                    } }} >
                        <Box sx={{ width: '250px', background: 'white', height: '50px', border: '2px solid #508fc7', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '5px', }} >
                            <Link className='Link' href="#" sx={{ background: '#1f347f', width: '101%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '5px', height: '100%', transition: 'all 0.5s ease',textDecoration:'none' }} >
                                <Button className='btn' variant='contained' sx={{
                                    fontSize: '', background: '#1f347f', boxShadow: 'none', textTransform: 'capitalize', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', "&:hover": {
                                        background: '#1f347f', boxShadow: 'none'
                                    }
                                }} >
                                    <img style={{ width: '32px', height: '32px', marginRight: '20px', objectFit: 'contain' }} src="/playstore.png" alt="apple" />
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }} >
                                        <Typography variant="h2" sx={{
                                            fontSize: '12px', fontWeight: 400, color: 'white', fontFamily: "Source Sans Pro", lineHeight: '16px'
                                        }} component="div">
                                            Launching Soon On
                                        </Typography>
                                        <Typography variant="h2" sx={{
                                            fontSize: '16px', fontWeight: 600, color: 'white', fontFamily: "Source Sans Pro"
                                        }} component="div">
                                            Google Play Store
                                        </Typography>
                                    </Box>
                                </Button>
                            </Link>
                        </Box>
                        <Box sx={{ width: '250px', background: 'white', height: '50px', border: '2px solid #508fc7', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '5px', ml: {
                            md:4
                        },mt:{
                            md:0,
                            xs:3
                        } }} >
                            <Link className='Link' href="#" sx={{ background: '#1f347f', width: '101%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '5px', height: '100%', transition: 'all 0.5s ease',textDecoration:'none' }} >
                                <Button className='btn' variant='contained' sx={{
                                    fontSize: '', background: '#1f347f', boxShadow: 'none', textTransform: 'capitalize', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', "&:hover": {
                                        background: '#1f347f', boxShadow: 'none'
                                    }
                                }} >
                                    <img style={{ width: '32px', height: '32px', marginRight: '20px', objectFit: 'contain' }} src="/apple.png" alt="apple" />
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }} >
                                        <Typography variant="h2" sx={{
                                            fontSize: '12px', fontWeight: 400, color: 'white', fontFamily: "Source Sans Pro", lineHeight: '16px'
                                        }} component="div">
                                            Launching Soon On
                                        </Typography>
                                        <Typography variant="h2" sx={{
                                            fontSize: '16px', fontWeight: 600, color: 'white', fontFamily: "Source Sans Pro"
                                        }} component="div">
                                            appple store
                                        </Typography>
                                    </Box>
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                    <Typography variant="h2" sx={{
                        fontSize: '48px',lineHeight:'58px', fontWeight: 500, color: '#202e39', mt:"30px", fontFamily: "Source Sans Pro"
                    }} component="div">
                        Coming Soon
                    </Typography>
                </Box>
                <Box sx={{ width: {
                    md:'50%',
                    xs:'100%'
                }, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    <Box sx={{width:'90%',height:'100%'}} >
                    <img src="/phoneApp.png" style={{width:'100%',height:'100%',objectFit:'contain'}} alt="img" />
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default DownloadApp