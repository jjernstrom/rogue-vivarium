import { Box, createTheme, CssBaseline, Stack, ThemeProvider } from '@mui/material';
import { Stage } from '@pixi/react';
import { Vector } from './types';
import { Terrain } from './Terrain';
import { useState } from 'react';
import { ControlPanel } from './Controls';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const stageSize: Vector = {x: 1200, y:600};

export const TerrainGenerator = () => {
  
const [generate, setGenerate] = useState<boolean>(false);
const [frequency, setFrequency] = useState<number>(0.1);
const [tileSize, setTileSize] = useState<number>(5);
const [mapSize, setMapSize] = useState<Vector>({x:300, y:600})
const [waterLevel, setWaterLevel] = useState<number>(25);
 
  
return (
  <ThemeProvider theme={darkTheme}>
  <CssBaseline />
  <main style={{display:'flex', justifyContent:'center'}}>
    <Box maxWidth="1200px" display='flex' justifyContent='center'>
    <Stack margin='auto'>
      <div>Terrain Generator</div>
      <Stage width={stageSize.x} height={stageSize.y}>
        <Terrain 
          generate={generate} 
          frequency={frequency} 
          tileSize={tileSize}
          mapSize={mapSize}
          waterLevel={waterLevel}
        />
      </Stage>
      <ControlPanel 
        generate={generate} 
        setGenerate={setGenerate} 
        frequency={frequency} 
        setFrequency={setFrequency}
        setMapSize={setMapSize}
        setTileSize={setTileSize}
        waterLevel={waterLevel}
        setWaterLevel={setWaterLevel}
      />
    </Stack>
    </Box>
    </main>
    </ThemeProvider>
  );
}