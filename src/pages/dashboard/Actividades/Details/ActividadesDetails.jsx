import { useState } from "react"
import { useParams, Link } from 'react-router-dom';
import { Box, Text, HStack, Tabs, VStack } from '@chakra-ui/react';
import { Button } from '../../../../components/ui/button';
import { Avatar } from '../../../../components/ui/avatar';
import {
  BreadcrumbCurrentLink,
  BreadcrumbLink,
  BreadcrumbRoot,
} from "../../../../components/ui/breadcrumb"
import { MdOutlineRocketLaunch, MdRocketLaunch, MdVisibilityOff, MdExtension, MdCollections, MdContentPaste, MdFactCheck, MdOutlineInventory, MdSupervisorAccount, MdDelete, MdEdit } from "react-icons/md";
import ActividadMenu from "./ActividadMenu";
import PrevioMenu from "./PrevioMenu";

const ActividadesDetails = () => {
  const { id } = useParams();
  const [value, setValue] = useState("actividad")

  return (
    <Box>
        <Box>
          <BreadcrumbRoot pb="2">
            <BreadcrumbLink>
              <Link to="/dashboard/actividades">
                <HStack><MdOutlineRocketLaunch /> Actividades</HStack>
              </Link>
            </BreadcrumbLink>
            <BreadcrumbCurrentLink>Master Cheff Elite</BreadcrumbCurrentLink>
          </BreadcrumbRoot>
        </Box>

        <Box bg="gray.muted" h="20vh" rounded="lg" _dark={{ bg: "gray.800" }} backgroundImage="url('https://t4.ftcdn.net/jpg/04/48/74/49/360_F_448744929_QrH3Asr5vxuuljkBC1VxEsR3iqq2nK62.jpg')" backgroundSize="contain" backgroundPosition="center"></Box>

        <HStack py="5">
          <Avatar shape="rounded" mt="-10vh" ml="3vw" mr="2vw" size="2xl" w="150px" h="150px" name="Actividad" src="https://arawaks.org/wp-content/themes/astra-child-1.0.1/images/thumbnails/496f09cd-3fe3-4e51-bd28-53f55d2a449c.webp" colorPalette="red"/>
          <Box w="full" display="flex" justifyContent="space-between">
            <Box>
              <Text fontWeight="bold" textStyle="xl">Master Cheff Elite</Text>
              <Text>24 de Agosto, 2024 {id}</Text>
            </Box>
            <VStack>
              <Button colorPalette="red" variant="surface" w="full"><MdEdit /><Text>Editar</Text></Button>
              {/*<Button colorPalette="red" variant="surface" w="full"><MdDelete /><Text>Borrar</Text></Button>
              {<Button colorPalette="blue" variant="surface" w="full"><MdVisibilityOff /><Text>Despublicado</Text></Button>*/}
            </VStack>
          </Box>
        </HStack>

        <Tabs.Root defaultValue="members" variant="line" fitted value={value} onValueChange={(e) => setValue(e.value)} colorPalette="red">
          <Tabs.List bg="gray.muted" rounded="l3" p="1">
            <Tabs.Trigger value="actividad" _hover={ value==="actividad" ? { color: 'inherit'} : { color: 'red.solid'}} transition="all 0.2s ease">
              <MdRocketLaunch />
              Actividad
            </Tabs.Trigger>
            <Tabs.Trigger value="previo" _hover={ value==="previo" ? { color: 'inherit'} : { color: 'red.solid'}} transition="all 0.2s ease">
              <MdContentPaste />
              Previo
            </Tabs.Trigger>
            <Tabs.Trigger value="materiales" _hover={ value==="materiales" ? { color: 'inherit'} : { color: 'red.solid'}} transition="all 0.2s ease">
              <MdExtension />
              Materiales
            </Tabs.Trigger>
            <Tabs.Trigger value="posterior" _hover={ value==="posterior" ? { color: 'inherit'} : { color: 'red.solid'}} transition="all 0.2s ease">
              <MdOutlineInventory />
              Posterior
            </Tabs.Trigger>
            <Tabs.Trigger value="asistencia" _hover={ value==="asistencia" ? { color: 'inherit'} : { color: 'red.solid'}} transition="all 0.2s ease">
              <MdFactCheck />
              Asistencia
            </Tabs.Trigger>
            <Tabs.Trigger value="preceptorias" _hover={ value==="preceptorias" ? { color: 'inherit'} : { color: 'red.solid'}} transition="all 0.2s ease">
              <MdSupervisorAccount />
              Preceptorias
            </Tabs.Trigger>
            <Tabs.Trigger value="fotos" _hover={ value==="fotos" ? { color: 'inherit'} : { color: 'red.solid'}} transition="all 0.2s ease">
              <MdCollections />
              Fotos
            </Tabs.Trigger>
            <Tabs.Indicator rounded="l2" />
          </Tabs.List>
          <Tabs.Content value="actividad"><ActividadMenu /></Tabs.Content>
          <Tabs.Content value="previo"><PrevioMenu /></Tabs.Content>
          <Tabs.Content value="materiales">materiales</Tabs.Content>
          <Tabs.Content value="posterior">posterior</Tabs.Content>
          <Tabs.Content value="asistencia">asistencia</Tabs.Content>
          <Tabs.Content value="preceptorias">preceptorias</Tabs.Content>
          <Tabs.Content value="fotos">fotos</Tabs.Content>
        </Tabs.Root>
    </Box>
  );
};

export default ActividadesDetails;

