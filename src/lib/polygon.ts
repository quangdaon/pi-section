import { CANVAS_SIZE, UNIT_SCALE } from '../config/constants';
import { offsetCircumscribed } from '../stores/settings';

export type Coordinates = [number, number];

const rotate = ([x, y]: Coordinates, theta: number): Coordinates => {
  return [
    x * Math.cos(theta) - y * Math.sin(theta),
    x * Math.sin(theta) + y * Math.cos(theta),
  ];
};

export class Polygon {
  public points: string;
  public edgeLength: number;
  public perimeter: number;
  private center: number;
  private angle: number;
  private offsetCircumscribed: boolean;

  private constructor(public sides: number, private startPoint: Coordinates) {
    this.center = CANVAS_SIZE / 2;
    this.angle = (Math.PI * 2) / this.sides;

    this.edgeLength = this.calculateEdgeLength(this.startPoint);
    this.perimeter = this.edgeLength * this.sides;
    this.points = this.generatePoints(this.startPoint);
  }

  private calculateEdgeLength(pointA: Coordinates): number {
    const pointB: Coordinates = rotate(pointA, this.angle);

    const a = Math.abs(pointA[0] - pointB[0]);
    const b = Math.abs(pointA[1] - pointB[1]);

    return Math.sqrt(a ** 2 + b ** 2);
  }

  private generatePoints(startPoint: Coordinates) {
    const points: Coordinates[] = [];

    for (let i = 0; i < this.sides; i++) {
      points.push(rotate(startPoint, this.angle * i));
    }

    const scaledPoints = points.map((p) =>
      p.map((i: number) => this.center + i * UNIT_SCALE)
    );

    return scaledPoints.map((c) => c.join(',')).join(' ');
  }

  static inscribed(sides: number) {
    return new Polygon(sides, [0, -1]);
  }

  static circumscribed(sides: number, offset: boolean = false) {
    const angle = (Math.PI * 2) / (sides * 2);
    const r = 1;
    const hypotenuse = r / Math.cos(angle);
    return new Polygon(sides, rotate([0, -hypotenuse], offset ? angle : 0));
  }
}
