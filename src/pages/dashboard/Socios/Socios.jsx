import React from 'react';
import { Box, Text, HStack } from '@chakra-ui/react';
import StatCard from '../../../components/utils/StatCard';
import { Button } from '../../../components/ui/button';
import TableSocios from './TableSocios';
import { MdOutlinePeople, MdOutlineCheckCircle, MdOutlineSupervisorAccount, MdOutlinePersonOff, MdGroupAdd } from "react-icons/md";

const Socios = () => {
  return (
    <Box>
      <HStack justifyContent="space-between">
      <Box>
        <Text fontWeight="bold" textStyle="4xl">Socios</Text>
        <Text pb="5">Bienvenido a tus Socios</Text>
      </Box>
      <Button colorPalette="red" variant="surface"><MdGroupAdd /><Text>Registrar Socio</Text></Button>
      </HStack>
      <HStack pb="5">
        <StatCard title="Socios Registrados" data="28" icon={MdOutlinePeople} color="white" bg="cyan.600" _dark={{ bg: "cyan.600" }}/>
        <StatCard title="Asistencia Promedio" data="11" icon={MdOutlineCheckCircle} color="white" bg="green.600" _dark={{ bg: "green.600" }}/>
        <StatCard title="Preceptorias Promedio" data="8" icon={MdOutlineSupervisorAccount} color="white" bg="orange.600" _dark={{ bg: "orange.600" }}/>
        <StatCard title="Sin Registrar" data="10" icon={MdOutlinePersonOff} color="white" bg="red.600" _dark={{ bg: "red.600" }}/>
      </HStack>

      <TableSocios />
    </Box>
  );
};

export default Socios;
