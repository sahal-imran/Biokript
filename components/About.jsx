import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

function About() {
    return (
        <>
            <Container maxWidth="lg" sx={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', py: 8
            }} >
                <Typography variant="h2" sx={{
                    fontSize: '40px', fontWeight: 400, color: '#000', mb: '25px', fontFamily: "Source Sans Pro", alignSelf: 'start'
                }} component="div">
                    About Biokript
                </Typography>
                <Box sx={{ width: '100%', height: '1px', backgroundColor: '#508fc7' }} ></Box>
                <Box sx={{
                    width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: {
                        md: 'row',
                        xs: 'column'
                    }, mt: 2
                }} >
                    <Box sx={{
                        width: {
                            md: '40%',
                            xs: '100%'
                        }, display: 'flex', justifyContent: 'center', alignItems: 'center'
                    }} >
                        <Box sx={{ width: '100%', height: '100%' }} >
                            <img style={{ width: '100%', height: '100%', objectFir: 'contain' }} src="/machine2.png" alt="machine" />
                        </Box>
                    </Box>
                    <Box sx={{
                        width: {
                            md: '60%',
                            xs: '100%'
                        }, display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column',mt:{
                            md:0,
                            xs:4
                        }
                    }} >
                        <Typography variant="h2" sx={{
                            fontSize: '30px', fontWeight: 500, color: '#000', mb: '0.5rem', fontFamily: "Source Sans Pro",
                        }} component="div">
                            Our company
                        </Typography>
                        <Typography variant="h2" sx={{
                            fontSize: '16px', lineHeight: '24px', fontWeight: 500, color: '#787878', mb: '25px', fontFamily: "Source Sans Pro",
                        }} component="div">
                            Legally incorporated in United States and headquartered in Sarajevo, Bosnia and Herzegovina, Biokript is the world’s first hybrid, Shariah-compliant cryptocurrency platform. With Biokript’s next generation, blockchain-powered platform, you can securely buy, sell, and store digital assets while fully controlling your private keys. 
                        </Typography>
                        <Typography variant="h2" sx={{
                            fontSize: '30px', fontWeight: 500, color: '#000', mb: '0.5rem', fontFamily: "Source Sans Pro",
                        }} component="div">
                            Our Technology
                        </Typography>
                        <Typography variant="h2" sx={{
                            fontSize: '16px', lineHeight: '24px', fontWeight: 500, color: '#787878', fontFamily: "Source Sans Pro",
                        }} component="div">
                            Our next generation, blockchain-based trading platform is far more secure and superior than today’s centralized exchanges. With the cutting-edge state technology, it will offer ultra-high-speed trade settlements, low fees, and sufficient liquidity at lowest prices. It is a Web3 solution with near-instant off-chain transactions. 
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }} >
                    <Typography variant="h2" sx={{
                        fontSize: '16px', lineHeight: '24px', fontWeight: 500, color: '#787878', fontFamily: "Source Sans Pro",
                    }} component="div">
                        Biokript has the lowest latency at any point on the globe. Compared to centralized exchanges with latency of 50-450 ms and decentralized exchanges’ latency of 30-120 ms, Biokript will be far ahead of them with latency of 10-50 ms.<br />
                        <br />
                        Since all of the Biokript’s transactions are done on blockchain, everything is transparent and open for review, unlike centralized exchanges where everything is stored inside a single server without any accountability or transparency.
                    </Typography>
                </Box>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', mt: 2 }}  >
                    <Typography variant="h2" sx={{
                        fontSize: '30px', fontWeight: 500, color: '#000', mb: '0.5rem', fontFamily: "Source Sans Pro",
                    }} component="div">
                        Our Vision
                    </Typography>
                    <Typography variant="h2" sx={{
                        fontSize: '16px', lineHeight: '24px', fontWeight: 500, color: '#787878', fontFamily: "Source Sans Pro",
                    }} component="div">
                        With faith, integrity, and hard work our goal is to provide Shariah-compliant crypto services and in the process move the world toward decentralization by educating people about the blockchain technology.
                    </Typography>
                </Box>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', mt: 3 }}  >
                    <Typography variant="h2" sx={{
                        fontSize: '30px', fontWeight: 500, color: '#000', mb: '0.5rem', fontFamily: "Source Sans Pro",
                    }} component="div">
                        Our Mission
                    </Typography>
                    <Typography variant="h2" sx={{
                        fontSize: '16px', lineHeight: '24px', fontWeight: 500, color: '#787878', fontFamily: "Source Sans Pro",
                    }} component="div">
                        Upholding the basic tenants of decentralization, Biokript’s mission is to empower new and experienced crypto investors to engage in new digital economy without relinquishing their wealth to central authority. Through our next-generation blockchain-powered platform and educational approach our goal is to become world’s most trusted cryptocurrency exchange. 
                    </Typography>
                </Box>
            </Container>
        </>
    )
}

export default About