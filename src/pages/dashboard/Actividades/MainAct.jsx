import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Text, HStack, Card, Badge, Image } from '@chakra-ui/react';
import { Button } from '../../../components/ui/button';

function RecActs({id, nombre, fecha, desc, horaInicio, horaFin, foto}) {
  return (
    <Card.Root flexDirection="row" overflow="hidden" maxH="300px" _dark={{ bg: "gray.800" }}>
        <Image objectFit="cover" maxW="300px" src={foto} alt={nombre}/>
        <Box>
          <Card.Body>
            <Card.Title mb="2">
              <Text>{nombre}</Text>
              <Text fontWeight="normal" fontSize="sm">{fecha}</Text>
            </Card.Title>
            <Card.Description>
              <Text lineClamp="4">{desc}</Text>
            </Card.Description>
            <HStack mt="4">
              <Badge _dark={{ bg: "gray.700" }}>{horaInicio}</Badge>
              <Badge _dark={{ bg: "gray.700" }}>{horaFin}</Badge>
            </HStack>
          </Card.Body>
          <Card.Footer>
            <Link to={"/dashboard/actividades/"+id}><Button variant="solid">Editar</Button></Link>
          </Card.Footer>
        </Box>
    </Card.Root>
  );
}

export default RecActs;
