import { Box, createTheme, CssBaseline, Link, Stack, ThemeProvider } from '@mui/material';
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
    <Box>
      <Stack direction='row'>
        <Stack>
          <h1 style={{marginBottom:0}}>Terrain Generator</h1>
          <h3 style={{marginTop:0}}>Rogue Vivarium</h3>
        </Stack>
        <Stack margin='auto' marginRight={0}> 
          <Link href="https://github.com/jjernstrom/rogue-vivarium">GitHub: jjernstrom/rogue-vivarium</Link>
          <Link href="https://www.linkedin.com/in/jeffrey-jernstrom/">LinkedIn: Jeffrey Jernstrom</Link>
          <Link href="http://www.jjernstrom.com">Portfolio</Link> 
        </Stack>
      </Stack>
    </Box>
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