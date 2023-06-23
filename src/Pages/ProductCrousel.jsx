import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const productsAr = [
  {
    id: 1,
    image:
      "https://www.partyanimalinc.com/core/media/media.nl?id=672298&c=3420200&h=G3WYXqQSzQXztP04N-OFKieinML-_RTLutf6o8n3idvY-rmR",
    title: "Big Shot Baller MiniFig NBA Series 2 Gift Set",
    price: "$29.99",
  },
  {
    id: 2,
    image:
      "https://www.partyanimalinc.com/core/media/media.nl?id=663762&c=3420200&h=rB7pYeFYH_aLRVJ_2RLPJ8p1EE990SuQ6W0U64sX4ATueo1J",
    title: "Big Shot Baller MiniFig NFL Series 3 Gift Set",
    price:"$29.99"
  },
  {
    id: 3,
    image:
      "https://www.partyanimalinc.com/core/media/media.nl?id=647503&c=3420200&h=cyxMoxhgixXON8CREKbsWAMoK9SUEsLKkwuqAxmP0QQWjcRZ",
    title: "Green Bay Packers Football Mug",
    price:"$24.99"
  },
  {
    id: 4,
    image:
      "https://www.partyanimalinc.com/core/media/media.nl?id=665950&c=3420200&h=hl6jnbE_I3xrXhDAaH64fzKwiASikWVXZ3suRQeIlMh5Bfx8",
    title: "NBA Jumbo Squeezy Surprise! Giant Capsule",
    price:"$9.99"
  },
  {
    id: 5,
    image:
      "https://www.partyanimalinc.com/core/media/media.nl?id=647837&c=3420200&h=T6APjL98d3IFJlw1lVzwSCM7tcidIBFKxAQ-KlRg-W-RlXDu",
    title: "NFL Jumbo Squeezy Surprise! Capsule",
    price:"$9.99"
  },
  {
    id: 6,
    image:
      "https://www.partyanimalinc.com/core/media/media.nl?id=668826&c=3420200&h=Tgogr99Vf3renOjXDQmGtFs4IXijUM_ZVhT8LiOVSVwHXb7r",
    title: "NHL Jumbo Squeezy Surprise! Giant Capsule",
    price:"$9.99"
  },
  {
    id: 7,
    image:
      "https://www.partyanimalinc.com/core/media/media.nl?id=668826&c=3420200&h=Tgogr99Vf3renOjXDQmGtFs4IXijUM_ZVhT8LiOVSVwHXb7r",
    title: "NHL Jumbo Squeezy Surprise! Giant Capsule",
    price:"$9.99"
  },
  {
    id: 8,
    image:
      "https://www.partyanimalinc.com/core/media/media.nl?id=524395&c=3420200&h=uTfeP6kiN_xLx7vNt2ruCoRF9ddQq0gMqLlHJfoHWozOtDKN",
    title: "Dallas Cowboys Party Cup 4 Pack",
    price:"$9.99"
  },
  {
    id: 9,
    image:
      "https://www.partyanimalinc.com/core/media/media.nl?id=671736&c=3420200&h=9lZwUOlShvCgjBgti53ZN4NHqmT1uw7WZ-6161ynysBuagG4",
    title: "P.A.Sport Stamp Collection Book Starter Pack",
    price:"$9.99"
  },
  {
    id: 10,
    image:
      "https://www.partyanimalinc.com/core/media/media.nl?id=671733&c=3420200&h=utOS5ucostbCO44M8hNQQQ5TPp8PRCSP04-jDrZGItTjNKFi",
    title: "4 Blind Packs, P.A.Sport Stamps",
    price:"$19.99"
  },
  {
    id: 11,
    image:
      "https://www.partyanimalinc.com/core/media/media.nl?id=150973&c=3420200&h=95-X9rcyh02nY2akWVn8gaLk4K8qdhXOXWZvpVCLAFPk1MfL",
    title: "NHL Magnetic Standings Board",
    price:"$29.99"
  },
  {
    id: 12,
    image:
      "https://www.partyanimalinc.com/core/media/media.nl?id=592945&c=3420200&h=VdhItZU6mBAcYl8NLVZgIJ2VP3yu2eHJ2VSzI1x1GXI8BfjZ",
    title: "Dallas Cowboys LED Helmet String Lights",
    price:"$29.99"
  },
];

const ProductCrousel = () => {
  return (
    <>
      
      <Button mt="30px" ml="10%" bg="red" color="#fff"><Text>Familier Items</Text></Button>
  
  <Box
    position={"relative"}
    zIndex="1"
    width={"80%"}
    margin={"auto"}
    mt={"3rem"}
    boxShadow={
      "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"
    }
    
  >
    <Carousel responsive={responsive}>
      {productsAr.map((el) => {
        return (
          <Flex justifyContent={"center"} alignItems={"center"} >
            <Box key={el.id} gap="20px" textAlign="center">
              <img src={el.image} alt={el.title} />
              <p style={{padding:"10px",color:"#2c8fc5"}}>{el.title}</p>
              <p style={{color:"#3e5f7a"}}>{el.price}</p>
            </Box>
          </Flex>
        );
      })}
    </Carousel>
  </Box>
 <Box  mt="5%" mb="10%">
  <Grid templateColumns='repeat(3, 1fr)' gap={4}  m="auto"  w="70%">
    <Box w='100%' h='10' mb="20px">
      <Image src="https://www.partyanimalinc.com/site/img/smlogo.jpg" alt="pic1" />
      <Button color="#fff" bg="red" p="20px" ml="20%">SQUEEZMATES</Button>
    </Box>
    <Box w='100%' h='10'>
      <Image src="https://www.partyanimalinc.com/site/img/TMREV.jpg" alt="pic2" />
      <Button color="#fff" bg="red" p="20px" ml="10%">TEENMATES & GIFT SETS</Button>
    </Box>
    <Box w='100%' h='10'>
      <Image src="https://www.partyanimalinc.com/site/img/PAStamp.jpg" alt="pic3" />
      <Button color="#fff" bg="red" p="20px" ml="20%" >WHAT'S NEW</Button>
    </Box>
  </Grid>
  </Box>
</>
  )
}

export default ProductCrousel