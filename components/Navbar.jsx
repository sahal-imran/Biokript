import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from 'next/link';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

function Navbar() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  return <>
    <Box sx={router.pathname === '/' ? { display: 'none' } : { display: 'block' }} >
      <Box component={'div'} sx={router.pathname === '/home' ? { position:'relative',zIndex: 999, width: '100%', backgroundColor: 'rgba(6,20,108,.5)', height: '70px' } : { position:'relative',zIndex: 999, width: '100%', backgroundColor: '#2b2e8e', height: '70px' }} >
        <Container maxWidth="xl" sx={{ height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
          <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 2 }} >
            <Image
              src="/logo.png"
              alt="Logo"
              width={60}
              height={50}
            />
          </Box>
          <Box component={'div'} sx={{
            display: {
              md: "flex",
              xs: "none"
            }, justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 2
          }} >

            <Link href="/home">
              <a className={router.pathname == '/home' ? 'navLink active' : 'navLink'} >Home</a>
            </Link>
            <Link href="/about">
              <a className={router.pathname == '/about' ? 'navLink active' : 'navLink'} >About</a>
            </Link>
            <Link href="/whitepaper">
              <a className={router.pathname == '/whitepaper' ? 'navLink navLinkLast active' : 'navLink navLinkLast'}>Whitepaper</a>
            </Link>
          </Box>
          {isOpen ? < CloseIcon onClick={toggleDrawer} sx={{
            color: '#FFFFFF', fontSize: '36px', cursor: 'pointer', position: 'relative', zIndex: 2, display: {
              md: 'none'
            }
          }} /> : < MenuIcon onClick={toggleDrawer} sx={{
            display: {
              md: 'none'
            }, color: '#FFFFFF', fontSize: '36px', cursor: 'pointer', position: 'relative', zIndex: 2
          }} />}
        </Container>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction='left'
          className='drawer'
        >
          <Box component={'div'} sx={{
            width: '100%', height: '100vh',
            display: "flex", justifyContent: 'start', alignItems: 'center', flexDirection: 'column', backgroundColor: '#2b2e8e'
          }} >
            <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 4 }} >
              {/* <Image
              src="/logo.png"
              alt="Logo"
              width={30}
              height={30}
            /> */}
              <Typography variant="h6" sx={{ fontSize: '30px', fontWeight: 700, color: 'white', ml: 1, textTransform: 'capitalize' }} component="div">
                Biokript
              </Typography>
            </Box>
            <Box sx={{ width: '100%', display: "flex", justifyContent: 'center', alignItems: 'start', flexDirection: 'column', mt: 4 }} >
              <Link href="/home">
                <a onClick={toggleDrawer} className='navLink1' >Home</a>
              </Link>
              <Link href="/about">
                <a onClick={toggleDrawer} className='navLink1' >About</a>
              </Link>
              <Link href="/whitepaper">
                <a onClick={toggleDrawer} className='navLink1' >Whitepaper</a>
              </Link>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </Box>
  </>
}

export default Navbar;
