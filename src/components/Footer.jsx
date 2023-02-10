import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Footer() {

    function Copyright() {
        return (
            <Typography sx={{ color: 'white' }} variant="body2" color="text.secondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://github.com/Zikri578">
                    Muhammad Zikri
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    return (
        <Box sx={{ bgcolor: '#66cc91', p: 6 }} component="footer">

            <Typography sx={{ color: 'white' }} variant="subtitle1" align="center" color="text.secondary" component="p"> My Qur'an Apps </Typography>
            <Copyright />
        </Box>
    )
}
