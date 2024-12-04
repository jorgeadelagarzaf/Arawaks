import { Box, IconButton, Circle, Float } from "@chakra-ui/react";
import { MdOutlineNotifications } from "react-icons/md";

function NotificationMenu() {
  return (
    <Box position="relative" display="inline-block">
        <Float placement="top-end" offsetX={3} offsetY={3}>
            <Circle bg="red.500" size="8px"/>
        </Float>
        <IconButton type="button" variant="ghost" color="fg.muted" rounded="full">
            <MdOutlineNotifications  />
        </IconButton>
    </Box>
  );
}

export default NotificationMenu;
