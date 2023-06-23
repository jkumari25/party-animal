import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import {FaFacebookF ,FaInstagram} from 'react-icons/fa';
import {AiFillTwitterSquare} from 'react-icons/ai';

import "./footer.css"

const Footer = () => {
  return <>
  <Box p="10" display="flex" w="full" justifyContent="space-between" bg="#0A2238" mt="20%"  >
    <Box w="300px"  >
        <Box >
    <Text color="white" fontSize='lg'>PRODUCTS</Text>
    <Box mt="5px"  borderBottom="1px solid #6BA9D8" ></Box>
    </Box>
    <Box mt="20px" lineHeight="25px">
        <Text  color="white" fontSize='sm'>NFL</Text>
        <Text color="white" fontSize='sm'>COLLEGE</Text>
        <Text color="white" fontSize='sm'>MLB</Text>
        <Text color="white" fontSize='sm'>NBA</Text>
        <Text color="white" fontSize='sm'>NHL</Text>
        <Text color="white" fontSize='sm'>WWE</Text>
        <Text color="white" fontSize='sm'>DC COMICS</Text>
    </Box>
    </Box>
    <Box >
        <Box w="300px" >
    <Text color="white" fontSize='lg'>INFORMATION</Text>
    <Box mt="5px"  borderBottom="1px solid #6BA9D8" ></Box>
    </Box>
    <Box mt="20px" lineHeight="25px">
        <Text  color="white" fontSize='sm'>About Us</Text>
        <Text color="white" fontSize='sm'>Contact Us</Text>
        <Text color="white" fontSize='sm'>Become A Reseller</Text>
        <Text color="white" fontSize='sm'>Reseller Specials</Text>
        <Text color="white" fontSize='sm'>Terms & Conditions</Text>
        <Text color="white" fontSize='sm'>Privacy Policy</Text>
        <Text color="white" fontSize='sm'>FAQ</Text>
    </Box>
    </Box>
    <Box >
        <Box w="300px" >
    <Text color="white" fontSize='lg'>MY ACCOUNT</Text>
    <Box mt="5px"  borderBottom="1px solid #6BA9D8" ></Box>
    </Box>
    <Box mt="20px" lineHeight="25px">
        <Text  color="white" fontSize='sm'>Overview</Text>
        <Text color="white" fontSize='sm'>Track My Order</Text>
        <Text color="white" fontSize='sm'>Order History</Text>
        <Text color="white" fontSize='sm'>Billing/Payment Info</Text>
        <Text color="white" fontSize='sm'>Re-Order Items</Text>
        <Text color="white" fontSize='sm'>Profile</Text>
       
    </Box>
    </Box>
    <Box >
    <Box w="300px" bg="#1D598E" p="2" border="1px solid white"  >
        <Box>
            <Heading  color="white" as='h5' size='sm'>Sign up for our Newsletter</Heading>
            <Text mt="10px" fontSize="sm" color="white">Be the first to know about new products and receive special offers!</Text>
            <Box display="flex" mt="2" gap="2">
               <input type="email" placeholder='email address' /> 
               <button class="subscribe-button" >Subscribe</button>
            </Box>
            <Box p="3" bg="#6BA9D8" mt="30px">
                 <Box justifyContent="space-around"  display="flex" >
                <Box><Button><FaFacebookF/></Button></Box>
                <Box><Button> <AiFillTwitterSquare /> </Button></Box>
                <Box><Button> <FaInstagram /> </Button></Box>
                <Box><Button><FaFacebookF/></Button></Box>
            </Box>
            </Box>
           
        </Box>
    </Box>
    </Box>
  </Box>
  </>
}

export default Footer