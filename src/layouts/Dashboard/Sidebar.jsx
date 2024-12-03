import React, { useState } from 'react';
import { Tooltip } from '../../components/ui/tooltip';
import { Link } from 'react-router-dom';
import { Box, VStack, IconButton, HStack, Flex, Text } from '@chakra-ui/react';
import { MdOutlineHome, MdOutlineRocketLaunch, MdOutlinePeople, MdOutlineMenu, MdOutlinePerson, MdOutlineImage, MdOutlineCalendarToday, MdOutlineWidgets, MdOutlinePayments, MdOutlineShield, MdOutlineKey, MdOutlineLogoDev } from 'react-icons/md';
import { useColorMode } from '../../components/ui/color-mode';
import LogoBlanco from '../../assets/LogoTextoBlanco.png';

const Item = ({ title, to, icon: Icon, collapsed, selected, setSelected }) => {
    return (        
        <Tooltip content={title} positioning={{ placement: "right-end" }} disabled={!collapsed} openDelay={0}>
            <Link to={to}>
                <Flex onClick={() => setSelected(title)} px={collapsed ? "2" : "4"} py={collapsed ? "2" : "1"} _hover={{ bg: 'gray.700', rounded: 'full' }} transition="all 0.2s ease">
                    <Icon color={selected === title ? "white" : "inherit"} size="1.5rem" style={{ marginRight: collapsed ? "0" : "0.5rem" }}/>
                    {!collapsed && <Box ml="1rem" color={selected === title ? "white" : "inherit"} flex="1" w="100%">{title}</Box>}
                </Flex>
            </Link>
        </Tooltip>
    );
}

const Sidebar = () => {
    const { colorMode } = useColorMode();
    const [collapsed, setCollapsed] = useState(false);
    const toggleSidebar = () => setCollapsed(!collapsed);
    const [selected, setSelected] = useState('Panel');

    return (
        <Box as="aside" w={collapsed ? '80px' : '270px'} h="100vh" bg="gray.800" transition="width 0.3s" position="sticky" top="0" overflowY="visible">
          <Box h="100vh" overflowY="auto" p="1rem">
            <VStack align={collapsed ? 'center' : 'start'} spacing="1.5rem">
              <HStack px="2">
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  {!collapsed && (
                    <Link to="/"><img src={colorMode === 'light' ? LogoBlanco : LogoBlanco} alt="Logo" width="70%"/></Link>
                  )}
                  <IconButton  variant="ghost" color="white"  _hover={{ bg: 'gray.700' }} onClick={toggleSidebar} rounded="full"><MdOutlineMenu /></IconButton>
                </Box>
              </HStack>

              {/* Navigation Links */}
              <VStack align={collapsed ? 'center' : 'start'} spacing="1rem" color="fg.subtle" p="5">
                {!collapsed && <Text variant="h6" pt="2">General</Text>}
                <Item title="Panel" to="/dashboard" icon={MdOutlineHome} collapsed={collapsed} selected={selected} setSelected={setSelected}/>
                {!collapsed && <Text variant="h6" pt="2">Datos</Text>}
                <Item title="Actividades" to="/dashboard/actividades" icon={MdOutlineRocketLaunch} collapsed={collapsed} selected={selected} setSelected={setSelected}/>
                <Item title="Socios" to="/dashboard/socios" icon={MdOutlinePeople} collapsed={collapsed} selected={selected} setSelected={setSelected}/>
                <Item title="Instructores" to="/dashboard/instructores" icon={MdOutlinePerson} collapsed={collapsed} selected={selected} setSelected={setSelected}/>
                {!collapsed && <Text variant="h6" pt="2">Adicional</Text>}
                <Item title="Fotos" to="/dashboard/fotos" icon={MdOutlineImage} collapsed={collapsed} selected={selected} setSelected={setSelected}/>
                <Item title="Calendario" to="/dashboard/calendario" icon={MdOutlineCalendarToday} collapsed={collapsed} selected={selected} setSelected={setSelected}/>
                {!collapsed && <Text variant="h6" pt="2">Pro</Text>}
                <Item title="Inventario" to="/dashboard/inventario" icon={MdOutlineWidgets} collapsed={collapsed} selected={selected} setSelected={setSelected}/>
                <Item title="Finanzas" to="/dashboard/finanzas" icon={MdOutlinePayments} collapsed={collapsed} selected={selected} setSelected={setSelected}/>
                {!collapsed && <Text variant="h6" pt="2">Administrativo</Text>}
                <Item title="Semestre" to="/dashboard/semestre" icon={MdOutlineShield} collapsed={collapsed} selected={selected} setSelected={setSelected}/>
                <Item title="Accesos" to="/dashboard/accesos" icon={MdOutlineKey} collapsed={collapsed} selected={selected} setSelected={setSelected}/>
                <Item title="Logs" to="/dashboard/logs" icon={MdOutlineLogoDev} collapsed={collapsed} selected={selected} setSelected={setSelected}/>
              </VStack>
            </VStack>
          </Box>
      </Box>
    );
};

export default Sidebar;