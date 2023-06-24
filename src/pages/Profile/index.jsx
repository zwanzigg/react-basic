import React from 'react';
import {Greeting} from "../../components/Greeting";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function Profile() {
   return (
       <Container>
           <Box sx={{
               height: '100%',
               padding: '20px',
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'center'
           }}>
               <Greeting/>
               <img src={'/assets/avatars.svg'} alt="Avatars" height={'400px'}/>
           </Box>
       </Container>
   )
}