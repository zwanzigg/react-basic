import React from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function Home() {
    return (
        <Container>

            <Box sx={{height: '100%', padding: '20px'}}>
                <img src={'/assets/house.png'} alt="Cartoon House" height={'100%'}/>
            </Box>
        </Container>
    );
}