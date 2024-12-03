import { InputGroup } from '../../components/ui/input-group';
import { Box, Flex, IconButton, Input, Icon } from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi'; // Import icons
import { MdOutlineSettings, MdPersonOutline, MdOutlineNotifications } from 'react-icons/md';
import { ColorModeButton } from '../../components/ui/color-mode';

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
            <InputGroup flex="1" endElement={<Icon color="fg.muted"><FiSearch /></Icon>}>
              <Input sx={{ml:2, flex: 1}} placeholder="Buscar..." />
            </InputGroup>
          </Box>

          <Flex justify="space-between" align="center">
            <ColorModeButton color="fg.muted" rounded="full"/>
            <IconButton type="button" variant="ghost" color="fg.muted" rounded="full">
                <MdOutlineNotifications  />
            </IconButton>
            <IconButton type="button" variant="ghost" color="fg.muted" rounded="full">
                <MdOutlineSettings />
            </IconButton>
            <IconButton type="button" variant="ghost" color="fg.muted" rounded="full">
                <MdPersonOutline />
            </IconButton>
        </Flex>
        </Box>
    );
};

export default Topbar;