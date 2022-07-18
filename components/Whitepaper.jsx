import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';


function Whitepaper() {
    return (
        <>
            <Container maxWidth="lg" sx={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', py: 8
            }} >
                <Typography variant="h2" sx={{
                    fontSize: '40px', fontWeight: 400, color: '#000', mb: '25px', fontFamily: "Source Sans Pro", alignSelf: 'start'
                }} component="div">
                    Whitepaper
                </Typography>
                <Box sx={{ width: '100%', height: '1px', backgroundColor: '#508fc7' }} ></Box>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection:'column'}} >
                    {/* <Typography variant="h2" sx={{
                        fontSize: '16px', lineHeight: '24px', fontWeight: 500, color: '#787878', fontFamily: "Source Sans Pro",
                    }} component="div">
                        order execution and low latency. Our traders of all experience levels can easily design and customize layouts and widgets to best fit their trading style. We are proud to offer such innovative products and professional trading conditions to all our customers.<br />
                        <br />
                        All trades on Biokript trading platform are executed at one of our Amazon AWS servers. We are connected with multiple liquidity providers to ensure low latency and smooth pricing on all available assets<br />
                        <br />
                        Everything we do, from our continuous investment in R&D to the ongoing expansion of our product offering to our clients, is a demonstration of how dynamic Bitegen really is. It is always our aim to serve the best interests of our clients and continue providing the best in class digital asset trading experience in the industry.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, dignissimos saepe. Suscipit possimus ipsa cum impedit nostrum? Officiis eos ad, et quaerat dolorum amet non omnis. In modi iste veniam voluptatibus sed eveniet dolore, soluta sequi quidem cum perspiciatis, enim ullam iure quos facilis adipisci fugit mollitia distinctio nobis placeat, ut dolorem inventore cumque! Nam, adipisci rerum culpa totam debitis sint nobis voluptatibus omnis? Adipisci itaque aut eaque tenetur voluptas blanditiis dolore laboriosam eius enim natus vel voluptatum ducimus aspernatur quod nam repellat animi atque, quos commodi quo sapiente eveniet magni! Officia aspernatur commodi atque aliquam, exercitationem distinctio praesentium fuga?
                    </Typography> */}
                    {
                        WhitepaperImageURLs.map((img, index) => {
                            return <Box key={index} sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', mt: 2  }} >
                                <img src={img.URL} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </Box>
                        })
                    }
                </Box>
            </Container>
        </>
    )
}

export default Whitepaper;

const WhitepaperImageURLs = [
    {
        URL: 'Whitepaper/Slide1.jpg',
        alt: 'Slide1'
    },
    {
        URL: 'Whitepaper/Slide2.jpg',
        alt: 'Slide2'
    },
    {
        URL: 'Whitepaper/Slide3.jpg',
        alt: 'Slide3'
    },
    {
        URL: 'Whitepaper/Slide4.jpg',
        alt: 'Slide4'
    },
    {
        URL: 'Whitepaper/Slide5.jpg',
        alt: 'Slide5'
    },
    {
        URL: 'Whitepaper/Slide6.jpg',
        alt: 'Slide6'
    },
    {
        URL: 'Whitepaper/Slide8.jpg',
        alt: 'Slide8'
    },
    {
        URL: 'Whitepaper/Slide9.jpg',
        alt: 'Slide9'
    },
    {
        URL: 'Whitepaper/Slide10.jpg',
        alt: 'Slide10'
    },
    {
        URL: 'Whitepaper/Slide11.jpg',
        alt: 'Slide11'
    },
    {
        URL: 'Whitepaper/Slide12.jpg',
        alt: 'Slide12'
    },
    {
        URL: 'Whitepaper/Slide13.jpg',
        alt: 'Slide13'
    },
    {
        URL: 'Whitepaper/Slide14.jpg',
        alt: 'Slide14'
    },
    {
        URL: 'Whitepaper/Slide15.jpg',
        alt: 'Slide15'
    },
    {
        URL: 'Whitepaper/Slide16.jpg',
        alt: 'Slide16'
    },
    {
        URL: 'Whitepaper/Slide17.jpg',
        alt: 'Slide17'
    },
    {
        URL: 'Whitepaper/Slide18.jpg',
        alt: 'Slide18'
    },
    {
        URL: 'Whitepaper/Slide19.jpg',
        alt: 'Slide19'
    },
    {
        URL: 'Whitepaper/Slide20.jpg',
        alt: 'Slide20'
    },
    {
        URL: 'Whitepaper/Slide21.jpg',
        alt: 'Slide21'
    },
    {
        URL: 'Whitepaper/Slide22.jpg',
        alt: 'Slide22'
    },
    {
        URL: 'Whitepaper/Slide23.jpg',
        alt: 'Slide23'
    },
    {
        URL: 'Whitepaper/Slide24.jpg',
        alt: 'Slide24'
    },
    {
        URL: 'Whitepaper/Slide25.jpg',
        alt: 'Slide25'
    },
    {
        URL: 'Whitepaper/Slide26.jpg',
        alt: 'Slide26'
    },
    {
        URL: 'Whitepaper/Slide27.jpg',
        alt: 'Slide27'
    },
    {
        URL: 'Whitepaper/Slide28.jpg',
        alt: 'Slide28'
    },
    {
        URL: 'Whitepaper/Slide29.jpg',
        alt: 'Slide29'
    },
    {
        URL: 'Whitepaper/Slide30.jpg',
        alt: 'Slide30'
    },
    {
        URL: 'Whitepaper/Slide31.jpg',
        alt: 'Slide31'
    },
]