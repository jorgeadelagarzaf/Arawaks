import { useParams } from 'react-router-dom';
import { chakra, useRecipe, Box, HStack, Grid, GridItem, Input, Card, Heading } from '@chakra-ui/react';
import { MdPerson, MdRecordVoiceOver, MdPayments, MdDirectionsBusFilled, MdAssignment, MdCalendarToday, MdChurch } from "react-icons/md";
import { Field } from '../../../../components/ui/field';
import { SegmentedControl } from '../../../../components/ui/segmented-control';
import AutoResize from "react-textarea-autosize";
import { Avatar } from "../../../../components/ui/avatar"
import {
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
  } from "../../../../components/ui/select"

const StyledAutoResize = chakra(AutoResize)

const FieldLabel = ({ text, icon: Icon }) => {
    return (        
        <Box display="flex" alignItems="center">
            <Icon style={{ marginRight: '4px' }} /><span>{text}</span>
        </Box>
    );
}

const PrevioMenu = () => {
  const { id } = useParams();

  const recipe = useRecipe({ key: "textarea" })
  const styles = recipe({ size: "md" })
  

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap="5" pb="5">
        <GridItem colSpan={1}>
            <Card.Root size="sm" w="full" mb="5" _dark={{ bg: "gray.800" }}>
                <Card.Header>
                    <Box divideY="2px" divideColor="gray.200" _dark={{ divideColor: "gray.700" }}>
                        <Heading size="md"> Coordinación de Actividades</Heading>
                        <Box></Box>
                    </Box>
                </Card.Header>
                <Card.Body color="fg.muted">
                    <HStack pb="5">
                        <Field label={<FieldLabel text="Encargado de la Actividad" icon={MdPerson}/>} helperText="El encargado de la ejecución de la actividad">
                            <SelectRoot bg="gray.50" _dark={{ bg: "gray.900" }}>
                                <SelectTrigger>
                                    <SelectValueText placeholder="Instructor" />
                                </SelectTrigger>
                                <SelectContent portalled={false}>
                                    <SelectItem item="test" key="1" justifyContent="flex-start">
                                        <Avatar name="Instructor" src="https://firebasestorage.googleapis.com/v0/b/peer-teaching.appspot.com/o/users%2Fa00838816%40tec.mx%2Fphoto?alt=media&token=bbe5cce8-62dd-49c3-9ec2-35d27ee5a613" size="xs" />
                                        Jorge de la Garza
                                    </SelectItem>
                                    <SelectItem item="test2" key="2" justifyContent="flex-start">
                                        <Avatar name="Instructor" src="https://arawaks.org/wp-content/themes/astra-child-1.0.1/images/instructores/mauqJefe.png" size="xs" />
                                        Mauricio Quintana
                                    </SelectItem>
                                </SelectContent>
                            </SelectRoot>
                        </Field>
                        <Field label={<FieldLabel text="Encargado de la Charla" icon={MdRecordVoiceOver}/>} helperText="El encargado de la charla de la actividad">
                            <SelectRoot bg="gray.50" _dark={{ bg: "gray.900" }}>
                                <SelectTrigger>
                                    <SelectValueText placeholder="Instructor" />
                                </SelectTrigger>
                                <SelectContent portalled={false}>
                                    <SelectItem item="test" key="1" justifyContent="flex-start">
                                        <Avatar name="Instructor" src="https://firebasestorage.googleapis.com/v0/b/peer-teaching.appspot.com/o/users%2Fa00838816%40tec.mx%2Fphoto?alt=media&token=bbe5cce8-62dd-49c3-9ec2-35d27ee5a613" size="xs" />
                                        Jorge de la Garza
                                    </SelectItem>
                                    <SelectItem item="test2" key="2" justifyContent="flex-start">
                                        <Avatar name="Instructor" src="https://arawaks.org/wp-content/themes/astra-child-1.0.1/images/instructores/mauqJefe.png" size="xs" />
                                        Mauricio Quintana
                                    </SelectItem>
                                </SelectContent>
                            </SelectRoot>
                        </Field>
                    </HStack>
                    <Field label={<FieldLabel text="Otros Encargos" icon={MdAssignment}/>} helperText="Escribe aquí cualquier otro encargo que haya y su respectivo encargado">
                        <StyledAutoResize bg="gray.50"  _dark={{ bg: "gray.900" }} placeholder="Refrigerio: Instructor" minH="initial" resize="none" overflow="hidden" lineHeight="inherit" css={styles}/>
                    </Field>
                </Card.Body>
            </Card.Root>
        </GridItem>
        <GridItem colSpan={1}>
            <Card.Root size="sm" w="full" mb="5" _dark={{ bg: "gray.800" }}>
                <Card.Header>
                    <Box divideY="2px" divideColor="gray.200" _dark={{ divideColor: "gray.700" }}>
                        <Heading size="md"> Presupuesto y Logística</Heading>
                        <Box></Box>
                    </Box>
                </Card.Header>
                <Card.Body color="fg.muted">
                    <HStack pb="5">
                        <Field label={<FieldLabel text="Presupuesto" icon={MdPayments}/>} helperText="El presupuesto que requieres para la actividad">
                            <Input bg="gray.50" _dark={{ bg: "gray.900" }} placeholder="$1,000" />
                        </Field>
                        <Field label={<FieldLabel text="Uso de van" icon={MdDirectionsBusFilled}/>} helperText="Si será necesario hacer uso de la van">
                            <SegmentedControl items={["Si", "No", "Tal Vez"]}/>
                        </Field>
                    </HStack>
                    <Field label={<FieldLabel text="Horario de la Actividad" icon={MdCalendarToday}/>} helperText="Escribe aquí el horario detallado de tu actividad">
                        <StyledAutoResize bg="gray.50"  _dark={{ bg: "gray.900" }} placeholder="10:00 - Recibir Socios ..." minH="initial" resize="none" overflow="hidden" lineHeight="inherit" css={styles}/>
                    </Field>
                </Card.Body>
            </Card.Root>
        </GridItem>
    </Grid>
  );
};

export default PrevioMenu;

