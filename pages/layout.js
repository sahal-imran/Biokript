import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      lgBig: 1400,
      xl: 1500,
      xxl: 1700,
    },
  },
});

export default function Layout({ children }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  );
}
