import { HStack, Icon, Stack, Text, Box } from "@chakra-ui/react"
import { Avatar } from "../../../components/ui/avatar"
import {
  HoverCardArrow,
  HoverCardContent,
  HoverCardRoot,
  HoverCardTrigger,
} from "../../../components/ui/hover-card"
import { Link } from 'react-router-dom';
import { MdOutlineCheckCircle, MdOutlineSupervisorAccount, MdOutlinePayments } from "react-icons/md";

const PopoverSocio = ({id, nombre, fecha, colegio, asistencia, preceptorias, cobranza}) => {
  return (
    <HoverCardRoot size="sm">
      <HoverCardTrigger asChild>
        <Link to={"/dashboard/socios/"+id}>{nombre}</Link>
      </HoverCardTrigger>

      <HoverCardContent>
        <HoverCardArrow />
        <Stack gap="4" direction="row">
          <Avatar name={nombre}/>
          <Stack gap="3">
            <Stack gap="1">
              <Text textStyle="sm" fontWeight="semibold">{nombre}</Text>
              <Text textStyle="sm" color="fg.muted">
                {fecha} <br></br>
                {colegio}
              </Text>
            </Stack>
          </Stack>
        </Stack>
        <HStack color="fg.subtle" pt="1">
            <Box display="flex" flexDirection="column" alignItems="center">
                <Box display="flex" alignItems="center">
                    <Icon size="sm"><MdOutlineCheckCircle /></Icon>
                    <Text textStyle="xs" ml={1}>{asistencia}</Text>
                </Box>
                <Text textStyle="xs" mt={1}>Asistencia</Text>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
                <Box display="flex" alignItems="center">
                    <Icon size="sm"><MdOutlineSupervisorAccount /></Icon>
                    <Text textStyle="xs" ml={1}>{preceptorias}</Text>
                </Box>
                <Text textStyle="xs" mt={1}>Preceptorias</Text>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
                <Box display="flex" alignItems="center">
                    <Icon size="sm"><MdOutlinePayments /></Icon>
                    <Text textStyle="xs" ml={1}>{cobranza}%</Text>
                </Box>
                <Text textStyle="xs" mt={1}>Cobranza</Text>
            </Box>
            </HStack>
      </HoverCardContent>
    </HoverCardRoot>
  )
}

export default PopoverSocio