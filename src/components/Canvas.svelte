<script lang="ts">
  import { CANVAS_SIZE, UNIT_SCALE } from '../config/constants';
  import type { Polygon } from '../lib/polygon';

  export let inscribedPolygon: Polygon;
  export let circumscribedPolygon: Polygon;
</script>

<svg
  id="canvas"
  viewBox="0 0 {CANVAS_SIZE} {CANVAS_SIZE}"
  xmlns="http://www.w3.org/2000/svg"
>
  <polygon class="circumscribed" points={circumscribedPolygon.points} />
  <circle cx={CANVAS_SIZE / 2} cy={CANVAS_SIZE / 2} r={UNIT_SCALE} />
  <polygon class="inscribed" points={inscribedPolygon.points} />
</svg>

<style>
  #canvas {
    display: block;
    max-width: 800px;
    margin: auto;
  }

  circle {
    stroke: var(--color-1);
    stroke-width: 1;
    stroke-dasharray: 5;
    fill: rgba(var(--color-1-definition), 0.2);
  }

  polygon {
    stroke-width: 1;
  }

  polygon.inscribed {
    stroke: var(--color-2);
    fill: rgba(var(--color-2-definition), 0.2);
  }

  polygon.circumscribed {
    stroke: var(--color-foreground);
    fill: rgba(var(--color-foreground-definition), 0.2);
  }
</style>
