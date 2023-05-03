import React from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Home() {
    return(
        <Container>
            <Typography component="h1" variant="h5" align={'center'}>
                Home
            </Typography>
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
        </Container>
    );
}