import { Box,Image,Text } from '@chakra-ui/react'
import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductData } from '../Redux/action';
import { Link } from 'react-router-dom';

const Toys = () => {

const dispatch= useDispatch();
const data = useSelector((store) => store.productReducer.data);
//console.log(data);

useEffect(() => {
  dispatch(getProductData);
},[dispatch]);



  return (
    <Box>
      <Box m="auto" w="80%" h="auto" boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" mt="40px">
        <Box w="90%" m="auto" p="40px" borderBottom="1px solid #dae6ed" >
            <Text fontSize="40px" fontWeight="600" fontStyle="inherit" mb="10px" color="#0c3646">TeenyMates</Text>
            <Image src="https://www.partyanimalinc.com/TMBanner2022.jpg" alt="teen" w="100%" />
            <Text fontSize="35px" color="#2f4c59" textAlign="center" mt="20px">You have reached TeenyMates Headquarters!</Text>
            <Text fontSize="20px" textAlign="center" mt="5px">Home of the award-winning 1" mini collectible sports figures.  Have a look around. </Text>
        </Box>
        <Box w="90%" m="auto">
        <Text fontSize="35px" color="#2f4c59" mt="20px" textAlign="left">Get all the latest info on TeenyMates! </Text>
        <Text fontSize="20px" textAlign="left" color="#87abd1" pb="30px">Click here to sign up now</Text>
        </Box>
      </Box>
      <Box w="60%" m="auto" display="flex" justifyContent="space-around" mt="10px">
        <Text fontSize="18px" fontWeight="500" color="#87ABD1">TeenyMates Blind Packs</Text>
        <Text fontSize="18px" fontWeight="500" color="#87ABD1">TeenyMates Collector Tins</Text>
        <Text fontSize="18px" fontWeight="500" color="#87ABD1">TeenyMates League Sets</Text>
        <Text fontSize="18px" fontWeight="500" color="#87ABD1">TeenyMates Locker Room Sets</Text>
      </Box>
      <Box w="60%" m="auto" display="flex" justifyContent="space-around" mt="10px">
        <Text fontSize="18px" fontWeight="500" color="#87ABD1">TeenyMates Keychains</Text>
        <Text fontSize="18px" fontWeight="500" color="#87ABD1">TeenyMates Gravity Feed Displays</Text>
      </Box>
      <Box w="80%" m="auto" mt="30px" boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px" mb="30px" >
        <Text p="30px" fontSize="35px" fontWeight="600" color="#0C366E">Items</Text>
      </Box>
      <Box w="80%" m="auto" display="grid" gridTemplateColumns="repeat(4,1fr)" gap="20px">
        
        {data.length > 0 && data?.map((item, i) => (
          <Link to={`/toys/${item.id}`}>
          <Box key={item.id} >
             <Image src={item.thumbnailsrc} alt="" w="100%" h="70%" _hover={{border:"2px solid #6975b5"}} />
             <Box>
               <Text textAlign="center" fontSize="18px" fontWeight="500" color="#87ABD1" mt="20px">{item.storename}</Text>
               <Text textAlign="center" fontSize="20px" fontWeight="500" color="#5d5f6c" mt="10px">{item.normal_price}</Text>
             </Box>
          </Box>
          </Link>
        ))}
    
      </Box>
    </Box>
  )
}

export default Toys