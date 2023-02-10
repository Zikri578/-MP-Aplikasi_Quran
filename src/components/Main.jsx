import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
// import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import axios from 'axios';
// import { Stack } from '@mui/material';
// import CardActions from '@mui/material/CardActions';

export default function Main() {

    // State
    const [quran, setQuran] = useState([]);

    // Did Mount
    useEffect(() => {
        // hit ke api json server di localhost
        axios.get("https://equran.id/api/surat")
            .then((res) => {
                console.info(res.data);
                setQuran(res.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }, [])

    return (
        <main>

            {/* Hero unit */}
            <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }}>
                <Container maxWidth="sm">
                    <Typography sx={{ color: '#66cc91', fontWeight: '600', letterSpacing: '1px' }} component="h1" variant="h2" align="center" color="text.primary" gutterBottom>My Qur'an Apps</Typography>

                    <Typography sx={{ color: 'black' }} component="p" letterSpacing='1.3px' fontSize="20px" align="center" color="text.secondary" paragraph>
                        The Al-Qur'an application is a holy book for Muslims which is considered a revelation of Allah received by the Prophet Muhammad through the angel Gabriel for 23 years. The Qur'an is a way of life and a moral guide for Muslims, and is considered the source of Islamic law and teachings. Al-Qur'an contains 114 surahs which contain verses containing instructions, advice, commands, and warnings.
                    </Typography>

                    {/* <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
                        <Button variant="contained">Main call to action</Button>
                        <Button variant="outlined">Secondary action</Button>
                    </Stack> */}

                </Container>
            </Box>

            <Container sx={{ py: 8 }} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>

                    {quran.map((quran) => (
                        <Grid item key={quran.nama} xs={12} sm={6} md={4}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>

                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2" textAlign='center'>{quran.nama}</Typography>

                                    <Typography gutterBottom variant="h5" component="h2" textAlign='center'>({quran.nama_latin})</Typography>

                                    <Typography>
                                        Letter Meaning : {quran.arti}
                                    </Typography>

                                    <Typography>
                                        Number of Verses : {quran.jumlah_ayat}
                                    </Typography>

                                    <Typography>
                                        Lowered : {quran.tempat_turun}
                                    </Typography>

                                </CardContent>

                            </Card>
                        </Grid>
                    ))}

                </Grid>
            </Container>

        </main>
    )
}
