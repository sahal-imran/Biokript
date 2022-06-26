import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from 'next/link';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';
import Grid from '@mui/material/Grid';

function TradingWith() {
    return (
        <>
            <Container maxWidth="lg" sx={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', py: 8
            }} >
                <Box sx={{
                    width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: {
                        md: 'row',
                        xs: 'column'
                    }
                }} >
                    <Box sx={{
                        width: {
                            md: '50%',
                            xs: '100%'
                        }, borderRight: {
                            md: '1px solid #0f579f',
                            xs: 'unset'
                        }, display: 'flex', justifyContent: {
                            md: 'start',
                            xs: 'center'
                        }, alignItems: 'center',
                    }} >
                        <Typography variant="h2" sx={{
                            fontSize: {
                                md: '40px',
                                xs: '32px'
                            }, fontWeight: {
                                md: 700,
                                xs: 500
                            }, color: '#508fc7', fontFamily: "Source Sans Pro", textAlign: {
                                md: 'start',
                                xs: 'center'
                            }, textTransform: 'uppercase'
                        }} component="div">
                            TRADING WITH Biokript
                        </Typography>
                    </Box>
                    <Box sx={{
                        width: {
                            md: '50%',
                            xs: '100%'
                        }, display: 'flex', justifyContent: 'center', alignItems: 'center', mt: {
                            md: 0,
                            xs: 2
                        }
                    }} >
                        <Typography variant="h2" sx={{
                            fontSize: '18px', lineHeight: '28px', fontWeight: 400, color: '#787878', fontFamily: "Source Sans Pro", textAlign: 'center'
                        }} component="div">
                            Dynamic Cryptocurrency trading that puts you in the driver's seat
                        </Typography>
                    </Box>
                </Box>
                <Typography variant="h2" sx={{
                    fontSize: '24px',fontWeight: 500, color: '#787878', fontFamily: "Source Sans Pro", textAlign: {
                        md:'start',
                        xs:'start'
                    },mb:'30px',mt:7
                }} component="div">
                    Excute trades in microseconds without compromising reliability or security. Our latency trading platform has all the tools you need to make the most of market opportunities, whenever and where
                </Typography>
                <Box sx={{width:'100%',display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                    <img src="/trading.png" style={{width:'100%',height:'100%',objectFit:'contain'}} alt="img" />
                </Box>
            </Container>
        </>
    )
}

export default TradingWith