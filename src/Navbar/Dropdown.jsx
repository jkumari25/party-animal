// import React from 'react';
// import { Box, Text } from '@chakra-ui/react';

// const Dropdown = () => {
//   return (
//     <Box w="100%" h="auto" bg="#1C598F" display="flex" >
//         <Text size="lg" color="#fff" p="20px" ml="100px">PRODUCTS</Text>
//         <Text size="md" color="#fff" p="20px">NFL</Text>
//         <Text size="md" color="#fff" p="20px">MLB</Text>
//         <Text size="md" color="#fff" p="20px">NBA</Text>
//         <Text size="md" color="#fff" p="20px">NHL</Text>
//         <Text size="md" color="#fff" p="20px">MLS</Text>
//         <Text size="md" color="#fff" p="20px">COLLEGE</Text>
//         <Text size="md" color="#fff" p="20px">MORE</Text>
//     </Box>
//   )
// }

// export default Dropdown

import React, { useState } from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Flex w="100%" h="auto" bg="#1C598F">
      <Text
        size="lg"
        color="#fff"
        p="20px"
        ml="100px"
        onMouseEnter={toggleDropdown}
        onMouseLeave={toggleDropdown}
      >
        PRODUCTS
      </Text>
      <Text
        size="lg"
        color="#fff"
        p="20px"
        onMouseEnter={toggleDropdown}
        onMouseLeave={toggleDropdown}
      >
       NFL 
      </Text>
      <Text
        size="lg"
        color="#fff"
        p="20px"
        onMouseEnter={toggleDropdown}
        onMouseLeave={toggleDropdown}
      >
        MLB
      </Text>
      <Text
        size="lg"
        color="#fff"
        p="20px"
        onMouseEnter={toggleDropdown}
        onMouseLeave={toggleDropdown}
      >
        NBA
      </Text>
      <Text
        size="lg"
        color="#fff"
        p="20px"
        onMouseEnter={toggleDropdown}
        onMouseLeave={toggleDropdown}
      >
        NHL
      </Text>
      <Text
        size="lg"
        color="#fff"
        p="20px"
        onMouseEnter={toggleDropdown}
        onMouseLeave={toggleDropdown}
      >
        MLS
      </Text>
      <Text
        size="lg"
        color="#fff"
        p="20px"
        onMouseEnter={toggleDropdown}
        onMouseLeave={toggleDropdown}
      >
        COLLEGE
      </Text>
      <Text
        size="lg"
        color="#fff"
        p="20px"
        onMouseEnter={toggleDropdown}
        onMouseLeave={toggleDropdown}
      >
        MORE
      </Text>
      {isOpen && (
        <Box
          w="100%"
          bg="#0A2339"
          boxShadow="0px 8px 16px 0px rgba(0,0,0,0.2)"
          position="absolute"
          zIndex="1"
          top="100%"
          left="0"
        >
          <Flex color="#ddd" flexDirection="column">
            <Text size="sm" ml="30px">Toys</Text>
            <Text size="md" ml="30px">TeenyMates</Text>
            <Text size="md" ml="30px">Big Short Ballers</Text>
            <Text ize="md" ml="30px">SqeezyMates</Text>
            <Text ize="md" ml="30px">Jumbo Squeezys</Text>
            <Text size="md" ml="30px">P.A Sports Stamps</Text>
            <Text ize="md" ml="30px">Projectors Flashlights</Text>
          </Flex>
        </Box>
      )}
    </Flex>
  );
};

export default Dropdown;
