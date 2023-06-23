import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import ProductCrousel from './ProductCrousel';

const slides = [
    {
      img: "https://www.partyanimalinc.com/core/media/media.nl?id=647878&c=3420200&h=x3L66MdwQMk5KGGaazuNwlTIV3c4Ji58jCSQenluw2mqaMLX",
    },
    {
      img: "https://www.partyanimalinc.com/core/media/media.nl?id=674369&c=3420200&h=v76QUBG_QHSov1T4r8PxgkaqEqw7NVPaza9qdQC6kRxPXL_j",
    },
    {
      img: "https://www.partyanimalinc.com/core/media/media.nl?id=647876&c=3420200&h=ZBJJtu59YDRgTZGkvMxzA5dD48L_ps-em9udnDm4X3LLD66L",
    },
    {
      img: "https://www.partyanimalinc.com/core/media/media.nl?id=647877&c=3420200&h=pCLpuXorwaD-Gc7zF5M8eOU_BQ0im1NuduPO9m3pvlkNh-5G",
    },
    {
      img: "https://www.partyanimalinc.com/core/media/media.nl?id=261486&c=3420200&h=0W75wRVYKj7T-6dCBa0xb9CCDK-mhaCvlF82lGLb_CQJpSZr",
    },
  ];

const Slider = () => {
    
    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesCount = slides.length;
    const carouselStyle = {
      transition: "all .5s",
      ml: `-${currentSlide * 100}%`,
    };
    const SLIDES_INTERVAL_TIME = 6000;
    const ANIMATION_DIRECTION = "right";
    useEffect(() => {
      const prevSlide = () => {
        setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
      };
  
      const nextSlide = () => {
        setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
      };
  
      const automatedSlide = setInterval(() => {
        ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
      }, SLIDES_INTERVAL_TIME);
      return () => clearInterval(automatedSlide);
    }, [slidesCount]);
   
    return (
      <>
        <Flex
          w="full"
          bg="#edf3f8"
          _dark={{
            bg: "#3e3e3e",
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Flex w="full" overflow="hidden">
            <Flex pos="relative" h="auto" w="full" {...carouselStyle}>
              {slides.map((slide, sid) => (
                <Box key={`slide-${sid}`} flex="none" boxSize="full" >
                  <Text
                    color="white"
                    fontSize="xs"
                    p="8px 12px"
                    pos="absolute"
                    top="0"
                    whiteSpace="nowrap"
                  >
                    {sid + 1} / {slidesCount}
                  </Text>
                  <Image
                    src={slide.img}
                    alt="carousel image"
                    boxSize="full"
                    backgroundSize="cover"
                  />
                </Box>
              ))}
            </Flex>
          </Flex>
        </Flex>
        <ProductCrousel />
        </>
      );
}

export default Slider