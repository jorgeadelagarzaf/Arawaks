import React from 'react';
import { Box, Text, HStack } from '@chakra-ui/react';
import StatCard from '../../../components/utils/StatCard';
import { MdOutlinePeople, MdOutlineCheckCircle, MdOutlineSupervisorAccount, MdOutlinePayments } from "react-icons/md";

const Dashboard = () => {
  return (
    <Box>
      <Text fontWeight="bold" textStyle="4xl">Dashboard</Text>
      <Text pb="5">Bienvenido a tu dasboard</Text>
      <HStack pb="5">
        <StatCard title="Socios Registrados" data="28" icon={MdOutlinePeople} color="white" bg="cyan.600" _dark={{ bg: "cyan.600" }}/>
        <StatCard title="Asistencia Promedio" data="11" icon={MdOutlineCheckCircle} color="white" bg="green.600" _dark={{ bg: "green.600" }}/>
        <StatCard title="Preceptorias Promedio" data="8" icon={MdOutlineSupervisorAccount} color="white" bg="orange.600" _dark={{ bg: "orange.600" }}/>
        <StatCard title="Presupuesto Restante" data="3783" icon={MdOutlinePayments} prefix="$" color="white" bg="red.600" _dark={{ bg: "red.600" }}/>
      </HStack>
    </Box>
  );
};

export default Dashboard;
