import { Box, Button,HStack, Img, Input, SimpleGrid, Stack, Text, useBreakpointValue} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  useParams} from 'react-router-dom';
import { getsingleProduct } from '../Redux/action';

const SingleProduct = () => {

const { id } = useParams();
const dispatch = useDispatch();
const {data } = useSelector(
    (store) => store.singleProductReducer
  );

  useEffect(() => {
    dispatch(getsingleProduct({ id }));
  }, [dispatch,id]);
 
  let details = data?.Details || [];
 
  let hoverimg = (e) => {
    let fullImg = document.getElementById("image-box");
    fullImg.src = e.target.src;
  };

  const columns = useBreakpointValue({
    base: "80%",
    md: "80%",
    lg: "30% 70%",
  });


  return (
    <>
      <Box
      id="about"
      paddingY={["20", "40", "90"]}
      h="fit-content"
      boxSize="border-box"
    //   bg="#f3f3f3"
    
    >
      <SimpleGrid
        justifyContent={"center"}
        alignItems="center"
        width={["100%", "90%", "75%"]}
        spacing={["10", "20", "25"]}
        margin={"auto"}
        gridTemplateColumns={columns}
      >
        <Stack
          width={["100%", "90%", "100%"]}
          borderRadius="8"
          bg="white"
          marginBottom={['0','0',"0" ,"425"]}
          h="fit-content"
          backgroundColor="white"
        >
          <Img
            height={["420px", "450px", "600px"]}
            h="fit-content"
            boxSizing="border-box"
            id="image-box"
            paddingY="20%"
            paddingX="10%"
            width={"100%"}
            src={data.thumbnailsrc}
            alt="about"
          />

          <HStack
            paddingBottom={"6"}
            justifyContent="center"
            alignItems="center"
          >
            <Img
              onMouseOver={hoverimg}
              height="100px"
              border="2px solid gray"
              width="30%"
              src={data.thumbnailsrc2}
              alt="mobile"
            />
            <Img
              onMouseOver={hoverimg}
              height="100px"
              border="2px solid gray"
              width="30%"
              src={data.thumbnailsrc3}
              alt="mobile"
            />
            <Img
              onMouseOver={hoverimg}
              height="100px"
              width="30%"
              src={data.thumbnailsrc4}
              alt="mobile"
            />
          </HStack>
        </Stack>
        <Stack pl="10%" backgroundColor="white" borderBottom="1px solid #DBD9D9" mt="-60px">
          <Stack textAlign="start">
            <Text fontWeight="700" fontSize={["22", "26", "32"]}>
              {data.storename}
            </Text>

            <Text
              fontSize={["18px", "20px", "22px"]}
              style={{
                textDecoration: "underline",
                textUnderlineOffset: "5px",
                textDecorationColor: "#008bcf ",
                fontWeight: "600",
              }}
            >
              {details[0]?.sheading}
            </Text>

            <Box  fontSize={["16px", "18px","20", "16px"]} fontWeight={["500","500","500","400"]} columns="2" spacing={"4"}>
              <Text color="gray">{details[0]?.points}</Text>
              <Text>. {details[0]?.point1}</Text>
              <Text>. {details[0]?.point2}</Text>
              <Text>. {details[0]?.point3}</Text>
              <Text>{details[0]?.des}</Text>
            </Box>
            <Box display="flex" mt="20px">
                <Box p="10px" borderTop="1px solid #EDE9E9" borderLeft="1px solid #EDE9E9" borderRight="1px solid #EDE9E9" color="#5a72ad">Product Detail</Box>
                <Box p="10px" color="#5bb2de" borderBottom="1px solid red">Reseller Information</Box>
            </Box>
            <Box  fontSize={["16px", "18px","20", "16px"]} fontWeight={["500","500","500","400"]} columns="2" spacing={"4"} p="20px" borderBottom="1px solid #DBD9D9">
              <Text>. {details[0]?.prodetail}</Text>
              <Text>. {details[0]?.prodetail1}</Text>
              <Text>. {details[0]?.prodetail2}</Text>
              <Text>. {details[0]?.prodetail3}</Text>
              <Text>. {details[0]?.prodetail4}</Text>
            </Box>
            <Stack
              height="fit-content"
              width="fit-content"
            >
              <Text
                fontSize="18px"
                fontWeight="400"
                color="#b4826c"
              >
                Price : {details[0]?.cost}
              </Text>
              <HStack paddingY="20px" spacing={["14", "18", "28"]}>

               <Text fontSize="18px">Stock of Availability: Out of Stock</Text>
            </HStack>
            <Box>
            <Text fontSize="18px" mb="10px" color="#3e5f84" fontWeight="bold">Email me when item is back in stock</Text>
                <Input type="email" placeholder='E-mail' mb="10px" w="80%"/>
                <br/>
                <Input type="text" placeholder='First Name' mb="10px"  w="80%" />
                <br />
                <Input type="text" placeholder='Last Name' mb="10px"  w="80%" />
                <br />
                <Button bg="red.600" border="1px solid black">Submit</Button>
               </Box>

            </Stack>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Box>
    </>
  )
}

export default SingleProduct