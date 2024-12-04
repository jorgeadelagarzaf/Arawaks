import { Box, HStack, Stack, Text } from '@chakra-ui/react';
import { MenuContent, MenuItem, MenuRoot, MenuTrigger, MenuTriggerItem } from "../../components/ui/menu"
import { Avatar } from '../../components/ui/avatar';
import { useColorMode } from '../../components/ui/color-mode';
import { MdOutlineExitToApp, MdPersonOutline, MdOutlineLightMode, MdOutlineDarkMode, MdOutlineLayers, MdOutlineDashboard } from 'react-icons/md';

const ProfileMenu = () => {
    const { toggleColorMode, colorMode } = useColorMode();
  return (
    <MenuRoot>
        <MenuTrigger asChild>
            <HStack gap="2" pl="2">
                <Avatar name="Jorge de la Garza" size="sm" src="https://firebasestorage.googleapis.com/v0/b/peer-teaching.appspot.com/o/users%2Fa00838816%40tec.mx%2Fphoto?alt=media&token=bbe5cce8-62dd-49c3-9ec2-35d27ee5a613" colorPalette="red"/>
                <Stack gap="0">
                <Text fontWeight="medium" extStyle="xs">Jorge de la Garza</Text>
                <Text color="fg.muted" textStyle="xs">
                    Jefe de Nivel
                </Text>
                </Stack>
            </HStack>
      </MenuTrigger>

      <MenuContent>
        <MenuItem value="perfil" valueText="perfil" onClick={() => console.log("Perfil clicked")}>
          <MdPersonOutline />
          <Box flex="1">Perfil</Box>
        </MenuItem>
        <MenuRoot positioning={{ placement: "right-start", gutter: 2 }}>
          <MenuTriggerItem value="vista" valueText="vista"> <MdOutlineLayers />Vista</MenuTriggerItem>
          <MenuContent>
            <MenuItem value="instructor">Instructor</MenuItem>
            <MenuItem value="finanzas">Finanzas</MenuItem>
            <MenuItem value="inventario">Inventario</MenuItem>
            <MenuItem value="director">Director</MenuItem>
            <MenuItem value="dev">Web Dev</MenuItem>
          </MenuContent>
        </MenuRoot>
        <MenuRoot positioning={{ placement: "right-start", gutter: 2 }}>
          <MenuTriggerItem value="portal" valueText="portal"> <MdOutlineDashboard />Portal</MenuTriggerItem>
          <MenuContent>
            <MenuItem value="club">Club</MenuItem>
            <MenuItem value="camp">Camp</MenuItem>
            <MenuItem value="asp">ASP</MenuItem>
          </MenuContent>
        </MenuRoot>
        <MenuItem value="tema" valueText="tema" onClick={() => toggleColorMode() }>
          {colorMode === "light" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
          <Box flex="1">Modo {colorMode === "light" ? "Claro" : "Oscuro"}</Box>
        </MenuItem>
        <MenuItem value="cerrar" valueText="cerrar">
          <MdOutlineExitToApp />
          <Box flex="1">Cerrar Sesión</Box>
        </MenuItem>
      </MenuContent>
    </MenuRoot>
  )
}

export default ProfileMenu;
