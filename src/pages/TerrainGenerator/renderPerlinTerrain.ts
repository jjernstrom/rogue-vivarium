import { Container, DisplayObject, Graphics } from "pixi.js";
import { Vector } from "./types";
import { generateGradientVectorGrid, perlinNoise2d } from "./perlinNoise";

interface Args {
  frequency: number,
  mapSize: Vector,
  tileSize: number,
  waterLevel: number
}

export const renderPerlinTerrain = (
  container: Container<DisplayObject>, 
  {
    frequency, 
    mapSize, 
    tileSize, 
    waterLevel
  }: Args) => {
  const colorEarthMap = (height: number) => {
    const white = '#FFFFFF';
    const gray = '#d7dbdd';
    const green = '#52be80';
    const darkGreen = '#1e8449';
    const sand = '#f9e79f';
    const blue = '#21618c';
    
    const scale = 20;
    
    if (height > waterLevel) { 
      if (height + scale > 80) return white;
      else if (height + scale > 75) return gray;
      else if (height + scale > 60) return darkGreen;
      else if (height + scale > 45) return green;
      else return sand;
    }
    else return blue;
  
  }
  
  const gradientVectorGrid = generateGradientVectorGrid(255); 

  for(let x = 0; x < mapSize.x; ++x) {
    for(let y = 0; y < mapSize.y; ++y) {
      const tile = new Graphics()
      
      const value = perlinNoise2d(x * frequency, y * frequency, gradientVectorGrid);
      //const value2 = Math.floor(Math.abs(value) * 255);
      const value3 = Math.floor(Math.abs(value * 100))
      
      //tile.beginFill({r: value2, g: value2, b: value2});
      tile.beginFill(colorEarthMap(value3));
      tile.drawRect(x * tileSize, y * tileSize, tileSize, tileSize);
      
      container.addChild(tile);
    }
  }
}
