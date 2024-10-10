import { Box, Button, Stack } from "@mui/material";
import { Vector } from "../types";
import { FrequencySlider } from "./FrequencySlider";
import { ResolutionRadio } from './ResolutionRadio';
import { WaterLevelSlider } from "./WaterLevelSlider";

export type Controls = {
  generate: boolean,
  frequency: number,
  tileSize: number,
  mapSize: Vector,
}

interface Props {
  generate: boolean,
  setGenerate: React.Dispatch<React.SetStateAction<boolean>>,
  frequency: number,
  setFrequency: React.Dispatch<React.SetStateAction<number>>,
  setMapSize: React.Dispatch<React.SetStateAction<Vector>>,
  setTileSize: React.Dispatch<React.SetStateAction<number>>,
  waterLevel: number,
  setWaterLevel: React.Dispatch<React.SetStateAction<number>>,
}

export const ControlPanel = ({...props}: Props) => {
  return (
    <Stack gap={2} marginTop={2}>
    <div>Generation Parameters</div>
    <Stack direction='row' gap={2} alignContent='center' marginLeft={5}>
      <ResolutionRadio
            setMapSize={props.setMapSize}
            setTileSize={props.setTileSize} />
      <FrequencySlider 
          frequency={props.frequency} 
          setFrequency={props.setFrequency} />
      <Box margin='auto'>
        <Button 
          variant='contained'
          onClick={()=>{props.setGenerate(!props.generate)} }>
          Generate
        </Button>
      </Box>
        </Stack>
      <div>Terrain Detail</div>
          <Stack direction='row' marginLeft={5}>
            <WaterLevelSlider waterLevel={props.waterLevel} setWaterLevel={props.setWaterLevel} />
        </Stack>
    </Stack>
  );
}