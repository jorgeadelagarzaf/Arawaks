import React from 'react';
import { Box, Text, HStack, Card, Heading, SimpleGrid, Grid, GridItem } from '@chakra-ui/react';
import StatCard from '../../../components/utils/StatCard';
import { Button } from '../../../components/ui/button';
import { MdOutlinePeople, MdOutlineCheckCircle, MdOutlineSupervisorAccount, MdOutlinePayments, MdOutlineSportsEsports } from "react-icons/md";
import CardActs from './CardActs';
import RecActs from './RecActs';
import MainAct from './MainAct';

const Actividades = () => {
  return (
    <Box>
      <HStack justifyContent="space-between">
      <Box>
        <Text fontWeight="bold" textStyle="4xl">Actividades</Text>
        <Text pb="5">Gestiona tus actividades y recomendaciones</Text>
      </Box>
      <Button colorPalette="red" variant="surface"><MdOutlineSportsEsports /><Text>Agregar Actividad</Text></Button>
      </HStack>
      <HStack pb="5">
        <StatCard title="Socios Registrados" data="28" icon={MdOutlinePeople} color="white" bg="cyan.600" _dark={{ bg: "cyan.600" }}/>
        <StatCard title="Asistencia Promedio" data="11" icon={MdOutlineCheckCircle} color="white" bg="green.600" _dark={{ bg: "green.600" }}/>
        <StatCard title="Preceptorias Promedio" data="8" icon={MdOutlineSupervisorAccount} color="white" bg="orange.600" _dark={{ bg: "orange.600" }}/>
        <StatCard title="Presupuesto Restante" data="3783" icon={MdOutlinePayments} prefix="$" color="white" bg="red.600" _dark={{ bg: "red.600" }}/>
      </HStack>

      <Grid templateColumns="repeat(8, 1fr)" gap="2" pb="5">
        <GridItem colSpan={5}>
          <MainAct id="10" nombre="Master Cheff Elite" fecha="29 de Febrero, 2024" desc="Los niños pasarán la mañana preparando el platillo que deseen para poder participar en un concurso de Mastercheff. Durante la actividad pasaremos por los ingredientes necesarios, para luego poder cocinar en Arawaks. ¡Los esperamos!" horaInicio="10:00 AM" horaFin="1:00 P.M." foto="https://arawaks.org/wp-content/themes/astra-child-1.0.1/images/thumbnails/496f09cd-3fe3-4e51-bd28-53f55d2a449c.webp" />
        </GridItem>
        <GridItem colSpan={3}>
          <Card.Root size="sm" height="300px" _dark={{ bg: "gray.800" }}>
            <Card.Header>
              <Heading size="md"> Recomendaciones </Heading>
            </Card.Header>
            <Card.Body color="fg.muted">
            <SimpleGrid columns="2" gap="2">
                <RecActs nombre="Bicis en la Huasteca" rating="5" foto="https://arawaks.org/wp-content/themes/astra-child-1.0.1/images/thumbnails/depositphotos_6490510-stock-illustration-mountain-bikers.webp"/>
                <RecActs nombre="Tee de Practica" rating="4.5" foto="https://arawaks.org/wp-content/themes/astra-child-1.0.1/images/thumbnails/grupo-adnersons-golf.webp"/>
                <RecActs nombre="eSports" rating="4.5" foto="https://arawaks.org/wp-content/themes/astra-child-1.0.1/images/thumbnails/globalseries.jpg"/>
                <RecActs nombre="Beisbol" rating="4" foto="https://arawaks.org/wp-content/themes/astra-child-1.0.1/images/thumbnails/BEISBOL.jpg"/>
                <RecActs nombre="Boweler" rating="5" foto="https://arawaks.org/wp-content/themes/astra-child-1.0.1/images/thumbnails/justinkennedybowling.jpg"/>
                <RecActs nombre="Jumpster" rating="4.5" foto="https://arawaks.org/wp-content/themes/astra-child-1.0.1/images/thumbnails/a87a7c34-ab9e-42a4-a99c-416ed5190787_0894fcfd.webp"/>
                <RecActs nombre="Deportes" rating="4" foto="https://arawaks.org/wp-content/themes/astra-child-1.0.1/images/thumbnails/shutterstock_565236667.webp"/>
                <RecActs nombre="Zoologico" rating="3.5" foto="https://arawaks.org/wp-content/themes/astra-child-1.0.1/images/thumbnails/IMG_0392-1-scaled.jpg"/>
              </SimpleGrid>
            </Card.Body>
          </Card.Root>
        </GridItem>
      </Grid>

      <SimpleGrid columns="5" gap="2">
        <CardActs id="1" nombre="Cazafirmas y Frontera" fecha="29 de Agosto, 2024" socios="15" instructores="12" preceptorias="2" foto="https://arawaks.org/wp-content/themes/astra-child-1.0.1/images/thumbnails/449147896_1238563217533424_595913022435170557_n.jpg"/>
        <CardActs id="2" nombre="Hike" fecha="14 de Septiembre, 2024" socios="15" instructores="12" preceptorias="2" foto="https://arawaks.org/wp-content/themes/astra-child-1.0.1/images/thumbnails/Imagen%20de%20WhatsApp%202024-11-27%20a%20las%2013.20.29_e401ce69.jpg"/>
        <CardActs id="3" nombre="Pickleball" fecha="23 de Septiembre, 2024" socios="15" instructores="12" preceptorias="2" foto="https://arawaks.org/wp-content/themes/astra-child-1.0.1/images/thumbnails/pickleball.jpg"/>
        <CardActs id="4" nombre="Quemados" fecha="31 de Septiembre, 2024" socios="15" instructores="12" preceptorias="2" foto="https://arawaks.org/wp-content/themes/astra-child-1.0.1/images/thumbnails/dodge.jpg"/>
        <CardActs id="5" nombre="Carne Asada" fecha="4 de Octubre, 2024" socios="15" instructores="12" preceptorias="2" foto="https://arawaks.org/wp-content/themes/astra-child-1.0.1/images/thumbnails/carne%20asada.webp"/>
        <CardActs id="6" nombre="Visita a los Bomberos" fecha="19 de Octubre, 2024" socios="15" instructores="12" preceptorias="2" foto="https://arawaks.org/wp-content/themes/astra-child-1.0.1/images/thumbnails/1fd8c73e-2569-4d01-b76a-55e0476a726c.JPG"/>
        <CardActs id="7" nombre="Torneo de Futbol" fecha="26 de Octubre, 2024" socios="15" instructores="12" preceptorias="2" foto="https://arawaks.org/wp-content/themes/astra-child-1.0.1/images/thumbnails/channels4_profile.jpg"/>
        <CardActs id="8" nombre="Volleyball y Quemados" fecha="1 de Noviembre, 2024" socios="15" instructores="12" preceptorias="2" foto="https://arawaks.org/wp-content/themes/astra-child-1.0.1/images/thumbnails/IMG_3271.webp"/>
      </SimpleGrid>

      

    </Box>
  );
};

export default Actividades;
