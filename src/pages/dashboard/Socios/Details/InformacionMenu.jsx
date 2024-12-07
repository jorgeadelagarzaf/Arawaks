import { Box, Text, Editable, IconButton } from '@chakra-ui/react';
import { MdOutlineCheck, MdOutlineEdit, MdOutlineClose } from "react-icons/md";


const InformacionMenu = () => {
  return (
    <Box w="full" display="flex" justifyContent="space-between">
        <Box w="full">
          <Text fontWeight="bold" fontSize="xl">Madre</Text>
          <Editable.Root value="Rosalinda Flores Pérez">
            <Editable.Preview />
            <Editable.Input />
            <Editable.Control>
              <Editable.EditTrigger asChild>
                <IconButton variant="ghost" size="xs">
                  <MdOutlineEdit />
                </IconButton>
              </Editable.EditTrigger>
              <Editable.CancelTrigger asChild>
                <IconButton variant="outline" size="xs">
                  <MdOutlineClose />
                </IconButton>
              </Editable.CancelTrigger>
              <Editable.SubmitTrigger asChild>
                <IconButton variant="outline" size="xs">
                  <MdOutlineCheck />
                </IconButton>
              </Editable.SubmitTrigger>
            </Editable.Control>
          </Editable.Root>
        </Box>
        <Box w="full">
          <Text fontWeight="bold" fontSize="xl">Padre</Text>
        </Box>
        <Box w="full">
          <Text fontWeight="bold" fontSize="xl">Hermanos</Text>
        </Box>
    </Box>
  );
};

export default InformacionMenu;

