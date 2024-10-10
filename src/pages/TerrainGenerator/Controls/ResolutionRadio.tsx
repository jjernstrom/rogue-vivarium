import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { Vector } from "../types";

interface Props {
  setMapSize: React.Dispatch<React.SetStateAction<Vector>>
  setTileSize: React.Dispatch<React.SetStateAction<number>>
}

export const ResolutionRadio = ({setMapSize, setTileSize}: Props) => {
  
  const handleMapSizeChange = (_event: React.ChangeEvent<HTMLInputElement>, value: string) => {
    switch (value) {
      case "high":
        setMapSize({x:1200, y:600});
        setTileSize(1);
        
        break;
      case "med":
        setMapSize({x:600, y:300});
        setTileSize(2);

        break;
      case "low":
        setMapSize({x:300, y:150})
        setTileSize(4);
        break;
    }
  }

  return (
    <FormControl>
        <FormLabel>Resolution</FormLabel>
        <RadioGroup onChange={handleMapSizeChange} defaultValue='low'>
          <FormControlLabel value="high" control={<Radio />} label="High: 1200 x 600" />
          <FormControlLabel value="med" control={<Radio />} label="Med: 600 x 300" />
          <FormControlLabel value="low" control={<Radio />} label="Low: 300 x 150" />
        </RadioGroup>
      </FormControl>
  )
}