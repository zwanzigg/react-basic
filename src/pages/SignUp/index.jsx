import React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function SignUp() {
    return(
        <Container>
            <Typography component="h1" variant="h5" align={'center'}>
                SignUp
            </Typography>
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
        </Container>
    );
}