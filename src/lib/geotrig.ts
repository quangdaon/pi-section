import type { Coordinates } from './coordinates';

export const rotateAngle = (
  [x, y]: Coordinates,
  theta: number
): Coordinates => {
  return [
    x * Math.cos(theta) - y * Math.sin(theta),
    x * Math.sin(theta) + y * Math.cos(theta),
  ];
};

export const angleFromSides = (sides: number) => (Math.PI * 2) / sides;

export const hypotenuseFromAngleAndAdjacent = (adj: number, angle: number) =>
  adj / Math.cos(angle);

export const hypotenuseFromPoints = (
  pointA: Coordinates,
  pointB: Coordinates
) => {
  const a = Math.abs(pointA[0] - pointB[0]);
  const b = Math.abs(pointA[1] - pointB[1]);

  return Math.sqrt(a ** 2 + b ** 2);
};
