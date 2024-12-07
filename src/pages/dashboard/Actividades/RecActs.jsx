import React from 'react';
import { Box, Text, HStack } from '@chakra-ui/react';
import { Avatar } from '../../../components/ui/avatar';
import { Rating } from '../../../components/ui/rating';

function RecActs({nombre, rating, foto}) {
  return (
    <HStack>
        <Avatar name={nombre} src={foto} shape="rounded" size="xl"/>
        <Box>
            <Text fontWeight="bold" lineClamp="1">{nombre}</Text>
            <Rating readOnly value={rating} size="sm" />
        </Box>
    </HStack>
  );
}

export default RecActs;
