import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Navbar() {
    return (
        <AppBar sx={{ bgcolor: '#66cc91' }} position="relative" >
            <Toolbar>
                <Typography sx={{ fontStyle: 'italic', fontSize: '18px' }} letterSpacing='1px' variant="h6" color="inherit" noWrap>Read the Qur'an Easily</Typography>
            </Toolbar>
        </AppBar>
    )
}
