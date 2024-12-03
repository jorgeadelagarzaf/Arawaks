import React from 'react';
import { Link } from 'react-router-dom';
import { Box, HStack, Image } from '@chakra-ui/react';
import { ColorModeButton, useColorMode } from '../../components/ui/color-mode';
import LogoBlanco from '../../assets/LogoTextoBlanco.png';
import LogoNegro from '../../assets/LogoTextoNegro.png';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  const { colorMode } = useColorMode(); // Access current color mode

  return (
    <Box>
      {/* Header */}
      <Box as="header" bg="gray.800" padding="20px" _dark={{ bg: "green.700" }}>
        <HStack spacing="1rem" align="center">
          {/* Logo */}
          <Link to="/">
            <Image 
              src={colorMode === 'light' ? LogoBlanco : LogoNegro} // Switch logo based on color mode
              alt="Logo" 
              h="30px" // Adjust size as needed
            />
          </Link>

          {/* Navigation Links */}
          <HStack spacing="1rem">
            <Link to="/" color="white">Inicio</Link>
            <Link to="/nosotros" color="white">Nosotros</Link>
            <Link to="/contacto" color="white">Contacto</Link>
            <Link to="/dashboard" color="white">Dashboard</Link>
          </HStack>

          {/* Dark Mode Button */}
          <Box ml="auto">
            <ColorModeButton />
          </Box>
        </HStack>
      </Box>

      {/* Main Content */}
      <Box as="main" padding="2rem">
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
