import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {

  return (
    <Flex>
      <Sidebar/>
      <Flex direction="column" flex="1">
        <Topbar />
        <Box as="main" p="1rem" bg="bg.muted" h="100vh">
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
};

export default DashboardLayout;
