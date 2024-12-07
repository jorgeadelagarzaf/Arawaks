import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Card, Image, Flex } from '@chakra-ui/react';
import { Button } from '../../../components/ui/button';
import { MdPeople, MdPerson, MdSupervisorAccount } from "react-icons/md";

function CardActs({id, nombre, fecha, foto, socios, instructores, preceptorias}) {
  return (
    <Card.Root maxW="xs" overflow="hidden" _dark={{ bg: "gray.800" }}>
        <Image
        src={foto}
        alt={nombre}
        objectFit="cover"
        h="50%"
        />
        <Card.Body gap="2">
        <Card.Title>{nombre}</Card.Title>
        <Card.Description>
            {fecha}
        </Card.Description>
        </Card.Body>
        <Card.Footer gap="2" justifyContent="space-between">
        <Link to={"/dashboard/actividades/"+id}><Button variant="solid">Editar</Button></Link>
        <Flex gap="2" textAlign="center">
            <Box>{socios} <MdPeople /></Box>
            <Box>{instructores} <MdPerson /></Box>
            <Box>{preceptorias} <MdSupervisorAccount /></Box>
        </Flex>
        </Card.Footer>
    </Card.Root>
  );
}

export default CardActs;
