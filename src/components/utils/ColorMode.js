import React from 'react';
import { useColorMode } from "../ui/color-mode";
import { Button } from '../ui/button';

export default function ColorToggleButton() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Button
      onClick={toggleColorMode}
      loading={false} // You can add a loading state if needed
      style={{
        backgroundColor: colorMode === 'light' ? '#fff' : '#333',
        color: colorMode === 'light' ? '#000' : '#fff',
      }}
    >
      Switch to {colorMode === 'light' ? 'Dark' : 'Light'} Mode
    </Button>
  );
}
