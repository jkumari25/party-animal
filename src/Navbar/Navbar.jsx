import {
    Box,
    Heading,
    Icon,
    Image,
    Text,
  } from "@chakra-ui/react";
  import "./navbar.css";
  import React from "react";
  import { useState } from "react";
  import { GiKeyLock } from "react-icons/gi";
  import { RiAccountCircleFill } from "react-icons/ri";
  import { MdOutlineSettingsBackupRestore } from "react-icons/md";
  import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
  
  const Navbar = () => {
    const [isShown, setIsShown] = useState(false);
    const [isShown1 , setIsShown1] = useState(false);
    return (
      <>
       <Box background="#F3F6FB" >
          <Box p="5" display="flex" justifyContent="space-between">
            <Link to="/">
            <Box>
              <Image
                w="300px"
                src="https://3420200.secure.netsuite.com/core/media/media.nl?id=288385&c=3420200&h=amh3AoEt1S2DMTGNwAshYGoDmxxnTzca6R88Dxrcnzc51fwO"
              />
            </Box>
            </Link>
            <Box display="flex" w="31%" justifyContent="space-between">
              <Box p="1px" display="flex" justifyContent="flex-end">
                <Box
                  align="center"
                  h="62px"
                  _hover={{ cursor: "pointer" }}
                  p="1"
                  pl="4"
                  pr="4"
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
                  borderBottom="2px solid skyblue"
                  w="80px"
                >
                  <Icon
                    boxSize="20px"
                    color="rgb(58,155,192)"
                    _hover={{ color: "teal.800" }}
                    as={GiKeyLock}
                  />
                  <Link to="/login">
                  <Box
                    fontSize="13px"
                    color="rgb(58,155,192)"
                    _hover={{ color: "teal.800" }}
                  >
                    login
                  </Box>
                  </Link>
                </Box>
                <Box
                  align="center"
                  h="62px"
                  _hover={{ cursor: "pointer" }}
                  p="1"
                  pl="4"
                  pr="4"
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
                  borderBottom="2px solid skyblue"
                  w="80px"
                >
                  <Icon
                    boxSize="20px"
                    color="rgb(58,155,192)"
                    _hover={{ color: "teal.800" }}
                    as={RiAccountCircleFill}
                  />
                  <Link to="/login">
                  <Box
                    fontSize="13px"
                    color="rgb(58,155,192)"
                    _hover={{ color: "teal.800" }}
                  >
                    Account
                  </Box>
                  </Link>
                </Box>
                <Box
                  align="center"
                  h="62px"
                  _hover={{ cursor: "pointer" }}
                  p="1"
                  pl="4"
                  pr="4"
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
                  borderBottom="2px solid skyblue"
                  w="90px"
                >
                  <Icon
                    boxSize="20px"
                    color="rgb(58,155,192)"
                    _hover={{ color: "teal.800" }}
                    as={MdOutlineSettingsBackupRestore}
                  />
                  <Box
                    fontSize="13px"
                    color="rgb(58,155,192)"
                    _hover={{ color: "teal.800" }}
                  >
                    Re order
                  </Box>
                </Box>
              </Box>
  
              <Box p="1px" display="flex" justifyContent="flex-end">
                <Box
                  display="flex"
                  gap="2"
                  align="center"
                  h="62px"
                  _hover={{ cursor: "pointer" }}
                  p="1"
                  pl="2"
                  pr="2"
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
                  borderBottom="2px solid rgb(207,19,19)"
                  w="fit-content"
                  pt="5"
                >
                  <Icon
                    boxSize="20px"
                    color="rgb(207,19,19)"
                    as={BsFillCartFill}
                  />
                  <Box display="flex" gap="2">
                    <Box fontSize="15px" color="rgb(207,19,19)">
                      0 items
                    </Box>
                    <Heading fontSize="15px" mt="1" color="rgb(207,19,19)">
                      $0.00{" "}
                    </Heading>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box w="100%" bg="#1C598F" display="flex">
          <Box>
            <Box
            
              color="white"
              p="3"
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
              PRODUCTS
            </Box>
            {isShown && (
              <Box
              display="flex"
                p="5"
                color="white"
                // border="1px solid white"
                w="100vw"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
               justifyContent="space-evenly"
                
              >
                <Box>
                  <Box >
                    <Heading borderBottom="2px solid" as="h4" size="md">
                      Toys
                    </Heading>
                  </Box>
                  <Box mt="20px" lineHeight="30px">
                    <Link to="/toys">
                    <Text>TeenyMates</Text>
                    </Link>
                    <Text>Big Shot Ballers</Text>
                    <Text>SqueezyMates</Text>
                    <Text>Jumbo Squeezys</Text>
                    <Text>P.A.Sport Stamps</Text>
                    <Text>Projector Flashlights</Text>
                  </Box>
                </Box>
                <Box>
                  <Box>
                    <Heading borderBottom="2px solid" as="h4" size="md">
                    Flags & Banners
                    </Heading>
                  </Box>
                  <Box  mt="20px" lineHeight="30px">
                    <Text>Premium Banner Flags</Text>
                    <Text>Premium Garden Flags</Text>
                    <Text>Player Silhouette Banner Flags</Text>
                    <Text>Team Shield Banners</Text>
                    <Text>Tall Team Flag Kits</Text>
                    <Text>Giant 8' Banners</Text>
                    <Text>Other Flags, Stands & Poles</Text>
                  </Box>
                </Box>
                <Box>
                  <Box>
                    <Heading borderBottom="2px solid" as="h4" size="md">
                    Drinkware
                    </Heading>
                  </Box>
                  <Box mt="20px" lineHeight="30px">
                    <Text>Big Sip Water Bottles</Text>
                    <Text>Big Sip Drink Mugs</Text>
                    <Text>Party Cup 4-Packs</Text>
                    <Text>Water Cooler Mugs</Text>
                    <Text>3D Football Mugs</Text>
                    <Text>Squeezy Water Bottles</Text>
                  </Box>
                </Box>
                <Box>
                  <Box>
                    <Heading borderBottom="2px solid" as="h4" size="md">
                    Homegating & Décor
                    </Heading>
                  </Box>
                  <Box mt="20px" lineHeight="30px">
                    <Text>MotiGlow Light Up Signs</Text>
                    <Text>LED Night Lights</Text>
                    <Text>Helmet String Lights</Text>
                    <Text>Embossed Metal Signs</Text>
                    <Text>Laser Cut Metal Signs</Text>
                    <Text>Player Jersey Aprons</Text>
                    <Text>Face Decorations</Text>
                  </Box>
                </Box>
            
              </Box>
            )}
          </Box>
          <Box>
            <Box
            
              color="white"
              p="3"
              onMouseEnter={() => setIsShown1(true)}
              onMouseLeave={() => setIsShown1(false)}
            >
              NLM
            </Box>
            {isShown1 && (
              <Box
              display="flex"
                p="5"
                color="white"
                // border="1px solid white"
                width="100vw"
                
                onMouseEnter={() => setIsShown1(true)}
                onMouseLeave={() => setIsShown1(false)}
               justifyContent="space-evenly"
                
              >
                <Box>
                  <Box >
                    <Heading borderBottom="2px solid" as="h4" size="md">
                      Toys
                    </Heading>
                  </Box>
                  <Box mt="20px" lineHeight="30px">
                    <Text>TeenyMates</Text>
                    <Text>Big Shot Ballers</Text>
                    <Text>SqueezyMates</Text>
                    <Text>Jumbo Squeezys</Text>
                    <Text>P.A.Sport Stamps</Text>
                    <Text>Projector Flashlights</Text>
                  </Box>
                </Box>
                <Box>
                  <Box>
                    <Heading borderBottom="2px solid" as="h4" size="md">
                    Flags & Banners
                    </Heading>
                  </Box>
                  <Box  mt="20px" lineHeight="30px">
                    <Text>Premium Banner Flags</Text>
                    <Text>Premium Garden Flags</Text>
                    <Text>Player Silhouette Banner Flags</Text>
                    <Text>Team Shield Banners</Text>
                    <Text>Tall Team Flag Kits</Text>
                    <Text>Giant 8' Banners</Text>
                    <Text>Other Flags, Stands & Poles</Text>
                  </Box>
                </Box>
                <Box>
                  <Box>
                    <Heading borderBottom="2px solid" as="h4" size="md">
                    Drinkware
                    </Heading>
                  </Box>
                  <Box mt="20px" lineHeight="30px">
                    <Text>Big Sip Water Bottles</Text>
                    <Text>Big Sip Drink Mugs</Text>
                    <Text>Party Cup 4-Packs</Text>
                    <Text>Water Cooler Mugs</Text>
                    <Text>3D Football Mugs</Text>
                    <Text>Squeezy Water Bottles</Text>
                  </Box>
                </Box>
                <Box>
                  <Box>
                    <Heading borderBottom="2px solid" as="h4" size="md">
                    Homegating & Décor
                    </Heading>
                  </Box>
                  <Box mt="20px" lineHeight="30px">
                    <Text>MotiGlow Light Up Signs</Text>
                    <Text>LED Night Lights</Text>
                    <Text>Helmet String Lights</Text>
                    <Text>Embossed Metal Signs</Text>
                    <Text>Laser Cut Metal Signs</Text>
                    <Text>Player Jersey Aprons</Text>
                    <Text>Face Decorations</Text>
                  </Box>
                </Box>
            
              </Box>
            )}
          </Box>

          {/* <Box>
            <Box
            
              color="white"
              p="3"
              onMouseEnter={() => setIsShown1(true)}
              onMouseLeave={() => setIsShown1(false)}
            >
              MLB
            </Box>
            {isShown1 && (
              <Box
              display="flex"
                p="5"
                color="white"
                border="1px solid white"
                
                onMouseEnter={() => setIsShown1(true)}
                onMouseLeave={() => setIsShown1(false)}
               justifyContent="space-evenly"
                
              >
                <Box>
                  <Box >
                    <Heading borderBottom="2px solid" as="h4" size="md">
                      Toys
                    </Heading>
                  </Box>
                  <Box mt="20px" lineHeight="30px">
                    <Text>TeenyMates</Text>
                    <Text>Big Shot Ballers</Text>
                    <Text>SqueezyMates</Text>
                    <Text>Jumbo Squeezys</Text>
                    <Text>P.A.Sport Stamps</Text>
                    <Text>Projector Flashlights</Text>
                  </Box>
                </Box>
                <Box>
                  <Box>
                    <Heading borderBottom="2px solid" as="h4" size="md">
                    Flags & Banners
                    </Heading>
                  </Box>
                  <Box  mt="20px" lineHeight="30px">
                    <Text>Premium Banner Flags</Text>
                    <Text>Premium Garden Flags</Text>
                    <Text>Player Silhouette Banner Flags</Text>
                    <Text>Team Shield Banners</Text>
                    <Text>Tall Team Flag Kits</Text>
                    <Text>Giant 8' Banners</Text>
                    <Text>Other Flags, Stands & Poles</Text>
                  </Box>
                </Box>
                <Box>
                  <Box>
                    <Heading borderBottom="2px solid" as="h4" size="md">
                    Drinkware
                    </Heading>
                  </Box>
                  <Box mt="20px" lineHeight="30px">
                    <Text>Big Sip Water Bottles</Text>
                    <Text>Big Sip Drink Mugs</Text>
                    <Text>Party Cup 4-Packs</Text>
                    <Text>Water Cooler Mugs</Text>
                    <Text>3D Football Mugs</Text>
                    <Text>Squeezy Water Bottles</Text>
                  </Box>
                </Box>
            
              </Box>
            )}
          </Box> */}
          
        </Box>
      </>
    );
  };
  
  export default Navbar;
  