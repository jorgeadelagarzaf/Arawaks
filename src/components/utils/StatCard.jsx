import { HStack } from "@chakra-ui/react";
import { StatLabel, StatRoot, StatValueText } from "../ui/stat";

const StatCard = ({title, data, icon: Icon, color, prefix = "", postfix = "", ...props }) => {
  return (
    <StatRoot borderWidth="1px" p="4" rounded="md" color={color} {...props}>
      <StatLabel color={color}>{title}</StatLabel>
      <HStack justify="space-between">
        <StatValueText>
          {prefix}{data}{postfix}
        </StatValueText>
        {Icon && <Icon color="fg.muted" size="2rem" />}
      </HStack>
    </StatRoot>
  );
};

export default StatCard;
