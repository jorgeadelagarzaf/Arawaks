import React from 'react';
import { Box, Text, HStack } from '@chakra-ui/react';
import StatCard from '../../../components/utils/StatCard';
import { Button } from '../../../components/ui/button';
import { MdOutlinePeople, MdOutlineCheckCircle, MdOutlineSupervisorAccount, MdOutlineGroups, MdGroupAdd } from "react-icons/md";

const Instructores = () => {
  return (
    <Box>
      <HStack justifyContent="space-between">
      <Box>
        <Text fontWeight="bold" textStyle="4xl">Instructores</Text>
        <Text pb="5">Bienvenido a tus Instructores</Text>
      </Box>
      <Button colorPalette="red" variant="surface"><MdGroupAdd /><Text>Agregar Instructor</Text></Button>
      </HStack>
      <HStack pb="5">
        <StatCard title="Instructores Registrados" data="28" icon={MdOutlinePeople} color="white" bg="cyan.600" _dark={{ bg: "cyan.600" }}/>
        <StatCard title="Asistencia Promedio" data="11" icon={MdOutlineCheckCircle} color="white" bg="green.600" _dark={{ bg: "green.600" }}/>
        <StatCard title="Preceptorias por Preceptores" data="8" icon={MdOutlineSupervisorAccount} color="white" bg="orange.600" _dark={{ bg: "orange.600" }}/>
        <StatCard title="Preceptores por Actividad" data="10" icon={MdOutlineGroups} color="white" bg="red.600" _dark={{ bg: "red.600" }}/>
      </HStack>
    </Box>
  );
};

export default Instructores;
