import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Main from '../components/Main';

export default function Album() {

    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            {/* Navbar */}
            <Navbar />
            {/* Navbar */}

            {/* Body */}
            <Main />
            {/* Body */}

            {/* Footer */}
            <Footer />
            {/* End footer */}

        </ThemeProvider>
    );
}