import { useParams } from 'react-router-dom';
import { chakra, useRecipe, Box, HStack, Grid, GridItem, Input, Card, Heading } from '@chakra-ui/react';
import { MdRocketLaunch, MdEvent, MdAccessTime, MdAccessAlarm, MdPlace, MdLocationPin, MdMap, MdCategory, MdDescription, MdForum } from "react-icons/md";
import { Field } from '../../../../components/ui/field';
import { InputGroup } from '../../../../components/ui/input-group';
import AutoResize from "react-textarea-autosize";

const StyledAutoResize = chakra(AutoResize)

const FieldLabel = ({ text, icon: Icon }) => {
    return (        
        <Box display="flex" alignItems="center">
            <Icon style={{ marginRight: '4px' }} /><span>{text}</span>
        </Box>
    );
}

const ActividadMenu = () => {
  const { id } = useParams();

  const recipe = useRecipe({ key: "textarea" })
  const styles = recipe({ size: "md" })
  

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap="5" pb="5">
        <GridItem colSpan={1}>
            <Card.Root size="sm" w="full" mb="5" _dark={{ bg: "gray.800" }}>
                <Card.Header>
                    <Box divideY="2px" divideColor="gray.200" _dark={{ divideColor: "gray.700" }}>
                        <Heading size="md"> Información General</Heading>
                        <Box></Box>
                    </Box>
                </Card.Header>
                <Card.Body color="fg.muted">
                    <HStack>
                        <Field pb="5" label={<FieldLabel text="Nombre" icon={MdRocketLaunch}/>} helperText="Dale un nombre alusivo a la actividad">
                            <Input bg="gray.50"  _dark={{ bg: "gray.900" }} placeholder="Juegos Acuaticos" />
                        </Field>
                        <Field pb="5" label={<FieldLabel text="Fecha" icon={MdEvent}/>} helperText="Programa una fecha para tu actividad">
                            <Input bg="gray.50"  _dark={{ bg: "gray.900" }} placeholder="24 de Febrero, 2024" />
                        </Field>
                    </HStack>
                    <Field label={<FieldLabel text="Descripción" icon={MdDescription}/>} helperText="Describe la actividad. Recuerda que este mensaje será visto por las familias">
                        <StyledAutoResize bg="gray.50"  _dark={{ bg: "gray.900" }} placeholder="Este fin de semana..." minH="initial" resize="none" overflow="hidden" lineHeight="inherit" css={styles}/>
                    </Field>
                </Card.Body>
            </Card.Root>
            <Card.Root size="sm" w="full" mb="5" _dark={{ bg: "gray.800" }}>
                <Card.Header>
                    <Box divideY="2px" divideColor="gray.200" _dark={{ divideColor: "gray.700" }}>
                        <Heading size="md"> Charla</Heading>
                        <Box></Box>
                    </Box>
                </Card.Header>
                <Card.Body color="fg.muted">
                    <HStack>
                        <Field label={<FieldLabel text="Tema de la Charla" icon={MdForum}/>} helperText="Indica el tema de la charla que será impartido">
                            <Input bg="gray.50"  _dark={{ bg: "gray.900" }} placeholder="La honestidad" />
                        </Field>
                    </HStack>
                </Card.Body>
            </Card.Root>
        </GridItem>
        <GridItem colSpan={1}>
            <Card.Root size="sm" w="full" mb="5" _dark={{ bg: "gray.800" }}>
                <Card.Header>
                    <Box divideY="2px" divideColor="gray.200" _dark={{ divideColor: "gray.700" }}>
                        <Heading size="md"> Horario y Ubicación</Heading>
                        <Box></Box>
                    </Box>
                </Card.Header>
                <Card.Body color="fg.muted">
                    <HStack pb="5">
                        <Field label={<FieldLabel text="Hora de Inicio" icon={MdAccessTime}/>} helperText="Indica a que hora inicia tu actividad">
                            <Input bg="gray.50"  _dark={{ bg: "gray.900" }} placeholder="10:00 A.M." />
                        </Field>
                        <Field label={<FieldLabel text="Hora de Fin" icon={MdAccessAlarm}/>} helperText="Indica a que hora termina tu actividad">
                            <Input bg="gray.50"  _dark={{ bg: "gray.900" }} placeholder="1:00 P.M." />
                        </Field>
                    </HStack>
                    <HStack>
                        <Field label={<FieldLabel text="Donde dejar" icon={MdPlace}/>} helperText="Indica donde inicia tu actividad">
                            <Input bg="gray.50"  _dark={{ bg: "gray.900" }} placeholder="Club Arawaks" />
                        </Field>
                        <Field label={<FieldLabel text="Donde recoger" icon={MdLocationPin}/>} helperText="Indica donde termina tu actividad">
                            <Input bg="gray.50"  _dark={{ bg: "gray.900" }} placeholder="Fundidora" />
                        </Field>
                    </HStack>
                </Card.Body>
            </Card.Root>
            <Card.Root size="sm" w="full" mb="5" _dark={{ bg: "gray.800" }}>
                <Card.Header>
                    <Box divideY="2px" divideColor="gray.200" _dark={{ divideColor: "gray.700" }}>
                        <Heading size="md"> Detalles</Heading>
                        <Box></Box>
                    </Box>
                </Card.Header>
                <Card.Body color="fg.muted">
                    <HStack>
                        <Field label={<FieldLabel text="Categoría de Actividad" icon={MdCategory}/>} helperText="Indica el tipo de actividad">
                            <Input bg="gray.50"  _dark={{ bg: "gray.900" }} placeholder="Tesoro" />
                        </Field>
                        <Field label={<FieldLabel text="Ubicación de Actividad" icon={MdMap}/>} helperText="Indica el lugar de tu actividad">
                            <Input bg="gray.50"  _dark={{ bg: "gray.900" }} placeholder="Parque Bosques del Valle" />
                        </Field>
                    </HStack>
                </Card.Body>
            </Card.Root>
        </GridItem>
    </Grid>
  );
};

export default ActividadMenu;

