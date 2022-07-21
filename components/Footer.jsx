import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';
import Grid from '@mui/material/Grid';
import AnchorLink from '@mui/material/Link';
import MailIcon from '@mui/icons-material/Mail';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from 'next/link';
import { useRouter } from 'next/router';


function Footer() {
    const router = useRouter();

    const [Email, set_Email] = useState('');

    return (
        <>
            <Box sx={router.pathname === '/' ? { display: 'none' } : { width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#000000' }} >
                <Container maxWidth="lg" sx={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: 8, mb: 4
                }} >
                    <Box sx={{
                        width: '100%', height: {
                            md: '300px'
                        }, display: 'flex', justifyContent: {
                            md: 'space-between',
                            xs: 'center'
                        }, alignItems: {
                            md: 'center',
                            xs: 'start'
                        }, flexDirection: {
                            md: 'row',
                            xs: 'column'
                        }
                    }} >
                        <Box sx={{
                            width: {
                                md: '33%',
                                xs: '100%'
                            }, height: '100%', display: 'flex', justifyContent: 'start', alignItems: 'start', flexDirection: 'column'
                        }} >
                            <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 2 }} >
                                <Image
                                    src="/logo.png"
                                    alt="Logo"
                                    width={60}
                                    height={50}
                                />
                                {/* <Typography variant="h6" sx={{ fontSize: '30px', fontWeight: 700, color: 'white', ml: 1, textTransform: 'uppercase' }} component="div">
                                    Biokript
                                </Typography> */}
                            </Box>
                            <Box sx={{
                                width: {
                                    md: '80%',
                                    xs: '90%'
                                }, height: '50px', borderRadius: '6px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 4
                            }} >
                                <Box sx={{ width: '84%', height: '100%', }} >
                                    <input value={Email} onChange={(e) => set_Email(e.target.value)} className='inputEmail' type="text" style={{ width: '100%', height: '100%', background: '#2f64ae', outline: 'none', border: 'unset', paddingLeft: '30px', color: 'white', fontSize: '12px' }} placeholder='type you email here' />
                                </Box>
                                <Button variant='conatained' sx={{
                                    width: '16%', minWidth: '10px', color: 'white', height: '100%', backgroundColor: '#508fc7', p: 0, boxShadow: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: "unset", "&:hover": {
                                        backgroundColor: '#508fc7', boxShadow: 'none'
                                    }
                                }} >
                                    <MailIcon sx={{ fontSize: '16px' }} />
                                </Button>
                            </Box>
                        </Box>
                        <Box sx={{
                            width: {
                                md: '33%',
                                xs: '100%'
                            }, height: '100%', display: 'flex', justifyContent: 'start', alignItems: {
                                md: 'center',
                                xs: 'start'
                            }, flexDirection: 'column', mt: {
                                md: 0,
                                xs: 4
                            }
                        }} >
                            <Box>
                                <Typography variant="h2" sx={{
                                    fontSize: '16px', lineHeight: '24px', fontWeight: 600, color: '#fff', fontFamily: "Source Sans Pro"
                                }} component="div">
                                    Related Links
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start', mt: .5, flexDirection: 'column' }} >
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                        <Box component={'span'} sx={{ width: '10px', height: '2px', backgroundColor: 'white', opacity: .6, ml: .5 }} ></Box>
                                        <Box component={'span'} sx={{ width: '22px', height: '2px', backgroundColor: 'white', opacity: 1, ml: 1 }} ></Box>
                                    </Box>
                                    <Box component={'span'} sx={{ width: '18px', height: '2px', backgroundColor: 'white', opacity: .4, mt: .3, }} ></Box>
                                </Box>
                            </Box>
                            <Box sx={{
                                width: {
                                    md: '25%',
                                    xs: '100%'
                                }, display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 4
                            }} >
                                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }} >
                                    <Link href="/" >
                                        <a className='FooterLink' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', transition: 'all 0.5s ease', color: '#dbdfff', fontWeight: 400, fontFamily: "Source Sans Pro", fontSize: '14px', textDecoration: 'none', textTransform: 'capitalize' }} >
                                            <ArrowForwardIosIcon className='arrow' sx={{ fontSize: '12px', color: '#0d579e', opacity: 0, ml: -1, transition: 'all 0.5s ease', fontWeight: 900 }} />
                                            Home
                                        </a>
                                    </Link>
                                    <Link href="/about" >
                                        <a className='FooterLink' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', transition: 'all 0.5s ease', color: '#dbdfff', fontWeight: 400, fontFamily: "Source Sans Pro", fontSize: '14px', textDecoration: 'none', textTransform: 'capitalize',marginTop:'10px' }} >
                                            <ArrowForwardIosIcon className='arrow' sx={{ fontSize: '12px', color: '#0d579e', opacity: 0, ml: -1, transition: 'all 0.5s ease', fontWeight: 900 }} />
                                            About Us
                                        </a>
                                    </Link>
                                    <Link href="/whitepaper" >
                                        <a className='FooterLink' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', transition: 'all 0.5s ease', color: '#dbdfff', fontWeight: 400, fontFamily: "Source Sans Pro", fontSize: '14px', textDecoration: 'none', textTransform: 'capitalize',marginTop:'10px' }} >
                                            <ArrowForwardIosIcon className='arrow' sx={{ fontSize: '12px', color: '#0d579e', opacity: 0, ml: -1, transition: 'all 0.5s ease', fontWeight: 900 }} />
                                            Whitepaper
                                        </a>
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{
                            width: {
                                md: '33%',
                                xs: '100%'
                            }, height: '100%', display: 'flex', justifyContent: 'start', alignItems: 'start', flexDirection: 'column', mt: {
                                md: 0,
                                xs: 6
                            }, mb: {
                                md: 0,
                                xs: 6
                            }
                        }} >
                            <Box>
                                <Typography variant="h2" sx={{
                                    fontSize: '16px', lineHeight: '24px', fontWeight: 600, color: '#fff', fontFamily: "Source Sans Pro"
                                }} component="div">
                                    Contact
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start', mt: .5, flexDirection: 'column' }} >
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                        <Box component={'span'} sx={{ width: '10px', height: '2px', backgroundColor: 'white', opacity: .6, ml: .5 }} ></Box>
                                        <Box component={'span'} sx={{ width: '22px', height: '2px', backgroundColor: 'white', opacity: 1, ml: 1 }} ></Box>
                                    </Box>
                                    <Box component={'span'} sx={{ width: '18px', height: '2px', backgroundColor: 'white', opacity: .4, mt: .3, }} ></Box>
                                </Box>
                            </Box>
                            <Typography variant="h2" sx={{
                                fontSize: '14px', lineHeight: '24px', fontWeight: 400, color: '#dbdfff', mb: {
                                    md: '25px',
                                    xs: 0
                                }, fontFamily: "Source Sans Pro", mt: 4
                            }} component="div">
                                Biokript@gmail.com
                            </Typography>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                <Box sx={{ width: '10%', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }} >
                                    <LocationOnIcon sx={{
                                        color: '#dbdfff', fontSize: '28px',
                                    }} />
                                </Box>
                                <Box sx={{ width: '90%', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }} >
                                    <Typography variant="h2" sx={{
                                        fontSize: '14px', lineHeight: '24px', fontWeight: 400, color: '#dbdfff', fontFamily: "Source Sans Pro", "&:hover": {
                                            color: 'white'
                                        }
                                    }} component="div">
                                        Glendale, Arizona, United States
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    {/* <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 2 }} >
                        <Link className='IconBox' href='' sx={{ width: '36px', height: '36px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: '50px', textDecoration: 'none', transition: 'all 0.3s ease' }} >
                            <FaFacebookF className='Icon' />
                        </Link>
                        <Link className='IconBox' href='' sx={{ width: '36px', height: '36px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: '50px', textDecoration: 'none', transition: 'all 0.3s ease', ml: 2 }} >
                            <BsTwitter className='Icon' />
                        </Link>
                        <Link className='IconBox' href='' sx={{ width: '36px', height: '36px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: '50px', textDecoration: 'none', transition: 'all 0.3s ease', ml: 2 }} >
                            <FaPinterestP className='Icon' />
                        </Link>
                        <Link className='IconBox' href='' sx={{ width: '36px', height: '36px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: '50px', textDecoration: 'none', transition: 'all 0.3s ease', ml: 2 }} >
                            <FaTelegramPlane className='Icon' />
                        </Link>
                        <Link className='IconBox' href='' sx={{ width: '36px', height: '36px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: '50px', textDecoration: 'none', transition: 'all 0.3s ease', ml: 2 }} >
                            <FaLinkedinIn className='Icon' />
                        </Link>
                    </Box> */}
                    <Box sx={{ width: '100%', height: '2px', backgroundColor: '#508fc7', mt: -2.3 }} ></Box>
                    <Box sx={{
                        width: '100%', display: 'flex', justifyContent: {
                            md: 'space-between',
                            xs: 'center'
                        }, alignItems: 'center',
                        flexDirection: {
                            md: 'row',
                            xs: 'column'
                        }, mt: 4
                    }} >
                        <Typography variant="h2" sx={{
                            fontSize: '12px', fontWeight: 400, color: '#508fc7', fontFamily: "Source Sans Pro"
                        }} component="div">
                            © Developed by Biokript, 2022.
                        </Typography>
                        <Box sx={{
                            display: 'flex', justifyContent: 'center', alignItems: 'center', mt: {
                                md: 0,
                                xs: 1
                            }
                        }} >
                            <AnchorLink href='' sx={{
                                color: '#dbdfff', fontSize: '12px', fontWeight: 400, color: '#dbdfff', fontFamily: "Source Sans Pro", textDecoration: 'none', "&:hover": {
                                    color: 'white'
                                }
                            }} >Terms of Use</AnchorLink>
                            <Box component={'span'} sx={{ color: '#508fc7', mx: 2 }} >/</Box>
                            <AnchorLink href='' sx={{
                                color: '#dbdfff', fontSize: '12px', fontWeight: 400, color: '#dbdfff', fontFamily: "Source Sans Pro", textDecoration: 'none', "&:hover": {
                                    color: 'white'
                                }
                            }} >Privacy Policy</AnchorLink>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Footer