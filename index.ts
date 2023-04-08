import { Jumpingjack } from './src/game';

export const canvas = <HTMLCanvasElement>document.getElementById('gamecanvas');

new Jumpingjack({
  element: canvas,
  context: canvas.getContext('2d'),
  width: 50,
  height: 50,
  HUD: <HTMLElement>document.getElementById('HUD'),
});
