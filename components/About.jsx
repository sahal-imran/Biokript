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
                            Biokript is a Bitcoin-based platform, offering a leveraged trading on several digital assets including Bitcoin, Ethereum, Litecoin, Ripple and Bitcoin Cash. We provide our clients with access to top-tier liquidity and wide range of tradināg tools, while maintaining security, liquidity, enabling a safe and efficient trading environment for everyone.
                        </Typography>
                        <Typography variant="h2" sx={{
                            fontSize: '30px', fontWeight: 500, color: '#000', mb: '0.5rem', fontFamily: "Source Sans Pro",
                        }} component="div">
                            Our Technology
                        </Typography>
                        <Typography variant="h2" sx={{
                            fontSize: '16px', lineHeight: '24px', fontWeight: 500, color: '#787878', fontFamily: "Source Sans Pro",
                        }} component="div">
                            Biokript offers a robust trading system for both beginners and professional traders that demand highly reliable market data and performance. Entire infrastructure is designed to facilitate high number of orders per second and extreme loads, while offering ultra-fast
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }} >
                    <Typography variant="h2" sx={{
                        fontSize: '16px', lineHeight: '24px', fontWeight: 500, color: '#787878', fontFamily: "Source Sans Pro",
                    }} component="div">
                        order execution and low latency. Our traders of all experience levels can easily design and customize layouts and widgets to best fit their trading style. We are proud to offer such innovative products and professional trading conditions to all our customers.<br />
                        <br />
                        All trades on Biokript trading platform are executed at one of our Amazon AWS servers. We are connected with multiple liquidity providers to ensure low latency and smooth pricing on all available assets<br />
                        <br />
                        Everything we do, from our continuous investment in R&D to the ongoing expansion of our product offering to our clients, is a demonstration of how dynamic Bitegen really is. It is always our aim to serve the best interests of our clients and continue providing the best in class digital asset trading experience in the industry.
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
                        At Biokript we remain committed to creating a dynamic and most innovative platform that equips our users with all necessary tools for their trading activities. In a such rapidly-changing and ever-expanding industry, we continuously refine our services to cater to the needs of traders worldwide.
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
                        We have always followed a client-oriented approach and placed our clients’ interests at the center of all our operations. Biokript team has a goal to be among the best online trading platforms in the cryptocurrency industry and to retain our reputation as a most reliable and trusted partner.
                    </Typography>
                </Box>
            </Container>
        </>
    )
}

export default About