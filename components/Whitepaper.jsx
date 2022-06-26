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
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }} >
                    <Typography variant="h2" sx={{
                        fontSize: '16px', lineHeight: '24px', fontWeight: 500, color: '#787878', fontFamily: "Source Sans Pro",
                    }} component="div">
                        order execution and low latency. Our traders of all experience levels can easily design and customize layouts and widgets to best fit their trading style. We are proud to offer such innovative products and professional trading conditions to all our customers.<br />
                        <br />
                        All trades on Biokript trading platform are executed at one of our Amazon AWS servers. We are connected with multiple liquidity providers to ensure low latency and smooth pricing on all available assets<br />
                        <br />
                        Everything we do, from our continuous investment in R&D to the ongoing expansion of our product offering to our clients, is a demonstration of how dynamic Bitegen really is. It is always our aim to serve the best interests of our clients and continue providing the best in class digital asset trading experience in the industry.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, dignissimos saepe. Suscipit possimus ipsa cum impedit nostrum? Officiis eos ad, et quaerat dolorum amet non omnis. In modi iste veniam voluptatibus sed eveniet dolore, soluta sequi quidem cum perspiciatis, enim ullam iure quos facilis adipisci fugit mollitia distinctio nobis placeat, ut dolorem inventore cumque! Nam, adipisci rerum culpa totam debitis sint nobis voluptatibus omnis? Adipisci itaque aut eaque tenetur voluptas blanditiis dolore laboriosam eius enim natus vel voluptatum ducimus aspernatur quod nam repellat animi atque, quos commodi quo sapiente eveniet magni! Officia aspernatur commodi atque aliquam, exercitationem distinctio praesentium fuga?
                    </Typography>
                </Box>
            </Container>
        </>
    )
}

export default Whitepaper