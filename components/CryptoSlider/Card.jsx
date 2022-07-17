import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from 'next/link';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Card(props) {

    const CoinProfit = props.profit>=0;

    return (
        <Box sx={{
            width: {
                md: '300px',
                xs: '100%'
            }, borderRight: {
                md: '1px solid #00c1dd'
            }, display: 'flex', justifyContent: 'center', alignItems: 'center', px: {
                sx: 5,
                xs: 6
            }, py: {
                md: 0,
                xs: 2
            }
        }} >
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }} >
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', }} >
                    <Typography variant="h6" sx={{
                        fontSize: '18px', fontWeight: 600, color: '#508FC7'
                    }} component="div">
                        {props.name.slice(0,10)}
                    </Typography>
                    <Typography variant="h6" sx={{
                        fontSize: '18px', fontWeight: 600, color: '#00ff0c'
                    }} component="div">
                        {props.profit? Number(props.profit).toFixed(2)+"%" : 'NaN%'}
                    </Typography>
                </Box>
                <Typography variant="h6" sx={{
                    fontSize: '22px', fontWeight: 400, color: 'white', my: {
                        md: '-6px'
                    }
                }} component="div">
                    {Number(props.USDprice).toFixed(4) + " USDT"}
                </Typography>
                <Typography variant="h6" sx={{
                    fontSize: '16px', fontWeight: 400, color: '#c5c5c5',
                }} component="div">
                    {'Vol ' + props.Vol + " "}<Box component={'span'} sx={{textTransform:'uppercase'}}>{props.symbol}</Box>
                </Typography>
            </Box>
        </Box>
    )
}

export default Card