import React from 'react';
import {Greeting} from "../../components/Greeting";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Profile() {
   return (
       <Container>
           <Typography component="h1" variant="h5" align={'center'}>
               Profile
           </Typography>
           <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
               <Greeting/>
           </Box>
       </Container>
   )
}