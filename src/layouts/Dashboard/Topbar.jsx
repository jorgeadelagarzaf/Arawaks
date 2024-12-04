import { Box, Flex, Input, Icon } from '@chakra-ui/react';
import { InputGroup } from '../../components/ui/input-group';
import { MdOutlineSearch  } from 'react-icons/md';
import ProfileMeu from './ProfileMenu';
import SettingsMenu from './SettingsMenu';
import NotificationMenu from './NotificationMenu';

const Topbar = () => {
    return (
        <Box
          display="flex"
          justifyContent="space-between"
          as="header"
          bg="bg.panel"
          p="1rem"
          _dark={{ bg: "gray.800" }}
          position="sticky"
          top="0"
        >
          <Box display="flex" bg="bg.muted" borderRadius="3px">
            <InputGroup flex="1" endElement={<Icon color="fg.muted" size="md"><MdOutlineSearch /></Icon>}>
              <Input sx={{ml:2, flex: 1}} placeholder="Buscar..." />
            </InputGroup>
          </Box>

          <Flex justify="space-between" align="center">
            <NotificationMenu />
            <SettingsMenu />
            <ProfileMeu />
        </Flex>
        </Box>
    );
};

export default Topbar;