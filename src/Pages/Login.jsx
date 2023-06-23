import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormLabel,
    Input,
    Text,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginfunc, signup } from "../Redux/UserReducer/action";


  const Login = () => {

    const isAuth = useSelector((store)=> store.userReducer.isAuth)
    console.log(isAuth);
    const dispatch= useDispatch();
    const navigate= useNavigate();
  
    const [loginemail , setLoginemail] = useState("")
    const [loginpass , setLoginpass] = useState("")
    const [firstName , setFirstName] = useState("")
    const [lastName , setLastName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [reEnterpass , setReEnterpass] = useState("")
    const [company , setCompany] = useState("")

    const handleSignup= ()=>{
         dispatch(signup(email,password,firstName,lastName,reEnterpass,company));
         alert("Sign up successful")
         return navigate("/login")    
    }

    const handleLogin= () =>{
        dispatch(loginfunc(loginemail , loginpass))
   
        if(!isAuth){
         alert("Login failed")
         return
        }
        if(isAuth){
         alert("Login successful")
         return navigate("/")
        
         }
    }
  
    
    return (

      <>
        <Box  w="90%" m="auto">
          <Box fontSize="15px" p="3">
            Sign In
          </Box>
          <Divider />
        </Box>
        <Box bg="rgb(255,255,255)"  display="flex" w="full">
          <Box w="50%" p="10">
            <Box lineHeight="40px">
              <Text fontSize="25px" fontFamily="inherit">
                Returning customer
              </Text>
              <Text fontFamily="inherit">
                Sign in below to checkout with an existing account:
              </Text>
            </Box>
            <Box mt="40px" w="40%">
              <FormControl isRequired>
                <FormLabel>Email Address </FormLabel>
                <Input type="email" placeholder="Your@gmail.com" value={loginemail} onChange={(e) => setLoginemail(e.target.value)} />
              </FormControl>
              <FormControl mt="20px" isRequired>
                <FormLabel >Password </FormLabel>
                <Input type="password" value={loginpass} onChange={(e) =>setLoginpass(e.target.value) } />
              </FormControl>
              <br/>
              <br/>
              <Divider />
            </Box>
            <Box mt="20px"display="flex" gap="20px">
              <Button colorScheme="red" onClick={handleLogin}>Sign In</Button>
              <Box p="2">
                  <Text cursor="pointer" >Forget Password?</Text> 
              </Box>
             
            </Box>
          </Box>
        
          <Divider  orientation='vertical' />
  
          <Box w="50%" p="10"  >
          <Box lineHeight="40px">
              <Text fontSize="25px" fontFamily="inherit">
              New customer
              </Text>
              <Text fontFamily="inherit">
              Create an account and take advantage of faster checkouts and other great benefits.
              </Text>
            </Box>
            <Box mt="20px" w="50%">
              <FormControl isRequired>
                <FormLabel>First Name </FormLabel>
                <Input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </FormControl>
              <FormControl mt="20px" isRequired>
                <FormLabel >Last Name </FormLabel>
                <Input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </FormControl>
              <FormControl mt="20px" isRequired>
                <FormLabel>Email Address </FormLabel>
                <Input type="email" placeholder="Your@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <Text mt="10px" fontFamily="inherit">
              We need your email address to contact you about your order.
              </Text>
              <FormControl mt="20px" isRequired>
                <FormLabel >Password </FormLabel>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </FormControl>
              <FormControl mt="20px" isRequired>
                <FormLabel >Re-Enter Password</FormLabel>
                <Input type="password" value={reEnterpass} onChange={(e) => setReEnterpass(e.target.value)} />
              </FormControl>
              
              <Divider />
            </Box>
            <Box lineHeight="50px">
               <Checkbox >Yes, Please sign me up for Party Animal, Inc. exclusive offers and promotions</Checkbox>
               <Text fontSize="25px" fontFamily="inherit">
               For Resellers Only
              </Text>
              <Text fontFamily="inherit">
              If you are interested in becoming a reseller of Party Animal, Inc. products and have valid resale credentials, please check one of the boxes below. We will then contact you shortly to complete your online account setup.
              </Text>
              <Checkbox >I am interested in becoming a reseller and have valid vendor resale credentials.</Checkbox>
              <Checkbox >I am already a current reseller of Party Animal products, and need to register.</Checkbox>
             <Box w="50%">
             <FormControl >
                <FormLabel>Company </FormLabel>
                <Input type="text" placeholder="(Optional)" value={company} onChange={(e) => setCompany(e.target.value)} />
              </FormControl>
             </Box>
             
  
            </Box>
          <Box mt="20px">
              <Divider orientation='horizontal' />
          </Box>
            
           <Box mt="20px">
                <Button colorScheme="red" onClick={handleSignup}>Create Account</Button>
           </Box>
          
          </Box>
        </Box>
      </>
    );
  };
  
  export default Login;
  