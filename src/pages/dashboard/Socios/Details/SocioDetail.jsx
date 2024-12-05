import { useState } from "react"
import { useParams, Link } from 'react-router-dom';
import { Box, Text, HStack, Tabs } from '@chakra-ui/react';
import { Button } from '../../../../components/ui/button';
import { Avatar } from '../../../../components/ui/avatar';
import {
  BreadcrumbCurrentLink,
  BreadcrumbLink,
  BreadcrumbRoot,
} from "../../../../components/ui/breadcrumb"
import { MdOutlinePeople, MdOutlineCheckCircle, MdGroupAdd, MdOutlineAccountCircle, MdOutlineStorage  } from "react-icons/md";

const SocioDetail = () => {
  const { id } = useParams();
  const [value, setValue] = useState("perfil")

  return (
    <Box>
        <Box>
          <BreadcrumbRoot pb="2">
            <BreadcrumbLink>
              <Link to="/dashboard/socios">
                <HStack><MdOutlinePeople /> Socios</HStack>
              </Link>
            </BreadcrumbLink>
            <BreadcrumbCurrentLink>Jorge de la Garza</BreadcrumbCurrentLink>
          </BreadcrumbRoot>
        </Box>

        <Box bg="gray.muted" h="20vh" rounded="lg" _dark={{ bg: "gray.800" }}></Box>

        <HStack py="5">
          <Avatar mt="-10vh" ml="3vw" mr="2vw" size="2xl" w="150px" h="150px" name="Jorge de la Garza" src="https://firebasestorage.googleapis.com/v0/b/peer-teaching.appspot.com/o/users%2Fa00838816%40tec.mx%2Fphoto?alt=media&token=bbe5cce8-62dd-49c3-9ec2-35d27ee5a613" colorPalette="red"/>
          <Box w="full" display="flex" justifyContent="space-between">
            <Box>
              <Text fontWeight="bold" textStyle="xl">Jorge de la Garza</Text>
              <Text pb="5">Socio de 8° Grado</Text>
            </Box>
            <Box>
              <Button colorPalette="white" variant="surface"><MdGroupAdd /><Text>Editar Socio</Text></Button>
            </Box>
          </Box>
        </HStack>

        <Tabs.Root defaultValue="members" variant="plain" fitted value={value} onValueChange={(e) => setValue(e.value)}>
          <Tabs.List bg="gray.muted" rounded="l3" p="1">
            <Tabs.Trigger value="perfil">
              <MdOutlineAccountCircle />
              Perfil
            </Tabs.Trigger>
            <Tabs.Trigger value="actividades">
              <MdOutlineCheckCircle />
              Actividades
            </Tabs.Trigger>
            <Tabs.Trigger value="pagos">
              <MdOutlineCheckCircle />
              Pagos
            </Tabs.Trigger>
            <Tabs.Trigger value="datos">
              <MdOutlineStorage />
              Datos
            </Tabs.Trigger>
            <Tabs.Indicator rounded="l2" />
          </Tabs.List>
          <Tabs.Content value="perfil">Manage your perfil</Tabs.Content>
          <Tabs.Content value="actividades">Manage your actividades</Tabs.Content>
          <Tabs.Content value="pagos">Manage your pagos</Tabs.Content>
          <Tabs.Content value="datos">Manage your datos</Tabs.Content>
        </Tabs.Root>
    </Box>
  );
};

export default SocioDetail;

