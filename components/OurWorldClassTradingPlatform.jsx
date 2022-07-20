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
                            fontSize: '22px', lineHeight: '28px', fontWeight: 600, color: '#343a40', mb: '43px', fontFamily: "Source Sans Pro"
                        }} component="div">
                            {/* Be one step ahead and Improve your trading results with our industry-leading technology */}
                            Biokript is blockchain-powered, state-of-the-art hybrid exchange, which combines the best features of of centralization and decentralization.
                        </Typography>
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

export default OurWorldClassTradingPlatform;




