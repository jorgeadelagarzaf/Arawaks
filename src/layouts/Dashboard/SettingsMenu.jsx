import { IconButton } from '@chakra-ui/react';
import { MenuContent, MenuItem, MenuRoot, MenuTrigger, MenuTriggerItem } from "../../components/ui/menu"
import { MdOutlineSettings, MdOutlineTimeline, MdOutlineLeaderboard, MdOutlineMap } from 'react-icons/md';

const SettingsMenu = () => {
  return (
    <MenuRoot>
        <MenuTrigger asChild>
            <IconButton type="button" variant="ghost" color="fg.muted" rounded="full">
                <MdOutlineSettings />
            </IconButton>
      </MenuTrigger>

      <MenuContent>
        <MenuRoot positioning={{ placement: "right-start", gutter: 2 }}>
          <MenuTriggerItem value="nivel" valueText="nivel"> <MdOutlineLeaderboard />Nivel</MenuTriggerItem>
          <MenuContent>
            <MenuItem value="4">4° Grado</MenuItem>
            <MenuItem value="5">5° Grado</MenuItem>
            <MenuItem value="6">6° Grado</MenuItem>
            <MenuItem value="7">7° Grado</MenuItem>
            <MenuItem value="8">8° Grado</MenuItem>
            <MenuItem value="9">9° Grado</MenuItem>
          </MenuContent>
        </MenuRoot>
        <MenuRoot positioning={{ placement: "right-start", gutter: 2 }}>
          <MenuTriggerItem value="semestre" valueText="semestre"> <MdOutlineTimeline />Semestre</MenuTriggerItem>
          <MenuContent>
            <MenuItem value="AD24">AD24</MenuItem>
            <MenuItem value="EJ23">EJ24</MenuItem>
            <MenuItem value="AD23">AD23</MenuItem>
          </MenuContent>
        </MenuRoot>
        <MenuRoot positioning={{ placement: "right-start", gutter: 2 }}>
          <MenuTriggerItem value="campus" valueText="campus"> <MdOutlineMap />Campus</MenuTriggerItem>
          <MenuContent>
            <MenuItem value="monterrey">Monterrey</MenuItem>
            <MenuItem value="saltillo">Saltillo</MenuItem>
            <MenuItem value="lince">Lince</MenuItem>
          </MenuContent>
        </MenuRoot>
      </MenuContent>
    </MenuRoot>
  )
}

export default SettingsMenu;
