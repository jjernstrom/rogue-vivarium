import { useApp } from "@pixi/react"
import { Application, Container, ICanvas } from "pixi.js";
import { useEffect } from "react";
import { Vector } from "./types";
import { renderPerlinTerrain } from "./renderPerlinTerrain";

interface Props {
  generate: boolean,
  frequency: number,
  mapSize: Vector,
  tileSize: number,
  waterLevel: number,
}

interface Args {
  frequency: number,
  mapSize: Vector,
  tileSize: number,
  waterLevel: number,
}

const run = (app: Application<ICanvas>, {...args}:Args) => {
  const container = new Container();

  app.stage.addChild(container);
  
  renderPerlinTerrain(container, {...args});
}

export const Terrain = ({generate, ...args}:Props) => {
  const app = useApp();

  useEffect(() => {
    app.stage.removeChildren();  // What is this purpose?
    
    run(app, args);

  }, [app, generate]);
  
  return (<></>);  // Weird that we return an empty tag here
}