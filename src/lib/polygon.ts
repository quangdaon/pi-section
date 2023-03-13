import type { Coordinates } from './coordinates';
import {
  angleFromSides,
  rotateAngle,
  hypotenuseFromPoints,
  hypotenuseFromAngleAndAdjacent,
} from './geotrig';

export class Polygon {
  public points: Coordinates[];
  public edgeLength: number;
  public perimeter: number;
  private angle: number;

  private constructor(public sides: number, private startPoint: Coordinates) {
    this.angle = angleFromSides(this.sides);

    this.edgeLength = this.calculateEdgeLength(this.startPoint);
    this.perimeter = this.edgeLength * this.sides;
    this.points = this.generatePoints(this.startPoint);
  }

  private calculateEdgeLength(pointA: Coordinates): number {
    const pointB: Coordinates = rotateAngle(pointA, this.angle);
    return hypotenuseFromPoints(pointA, pointB);
  }

  private generatePoints(startPoint: Coordinates) {
    const points: Coordinates[] = [];

    for (let i = 0; i < this.sides; i++) {
      points.push(rotateAngle(startPoint, this.angle * i));
    }

    return points;
  }

  static inscribed(sides: number) {
    return new Polygon(sides, [0, -1]);
  }

  static circumscribed(sides: number, offset: boolean = false) {
    const angle = angleFromSides(sides) / 2;
    const r = 1;
    const distance = hypotenuseFromAngleAndAdjacent(r, angle);
    const startPoint = rotateAngle([0, -distance], offset ? angle : 0);

    return new Polygon(sides, startPoint);
  }
}
