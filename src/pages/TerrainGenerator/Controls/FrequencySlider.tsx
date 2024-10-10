import { Slider, Stack } from "@mui/material"

interface Props {
  setFrequency: React.Dispatch<React.SetStateAction<number>>,
  frequency: number
}

const calculateScale = (value: number) => {
  return 2 * value;
}

export const FrequencySlider = ({setFrequency, frequency}: Props) => {
  
  const handleChange = (_event: Event, newValue: number | number[]) => {
    setFrequency(newValue as number);
  }
  
  return (
    <Stack width="60%" margin='auto'>
    <div>Noise Frequency</div>
    <Slider 
      step={0.02}
      scale={calculateScale}
      aria-label="Frequency"
      valueLabelDisplay="auto"
      value={frequency}
      onChange={handleChange}
      defaultValue={0.1}
      min={0.001}
      max={1}
      marks={marks}
    />
    </Stack>
  );
}

const marks = [
  {
    value: 1,
    label: 1,
  },
  {
    value: 0.1,
    label: 0.1,
  },
  {
    value: 0.05,
    label: 0.05,
  },
  {
    value: 0.01,
    label: 0.01,
  }
];