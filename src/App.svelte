<script lang="ts">
  import { CANVAS_SIZE, UNIT_SCALE } from './config/constants';
  import { Polygon } from './lib/polygon';

  let inscribedSides = 6;
  let circumscribedSides = 6;

  $: inscribedPolygon = Polygon.inscribed(inscribedSides);
  $: circumscribedPolygon = Polygon.circumscribed(circumscribedSides);
</script>

<main>
  <svg
    id="canvas"
    viewBox="0 0 {CANVAS_SIZE} {CANVAS_SIZE}"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon class="circumscribed" points={circumscribedPolygon.points} />
    <circle cx={CANVAS_SIZE / 2} cy={CANVAS_SIZE / 2} r={UNIT_SCALE} />
    <polygon class="inscribed" points={inscribedPolygon.points} />
  </svg>

  <div class="settings">
    <div class="sides-selectors">
      <div class="sides-selector">
        <label for="inscribedSides">Inscribed Polygon Sides</label>
        <input
          id="inscribedSides"
          type="range"
          bind:value={inscribedSides}
          min="4"
          max="100"
        />
        {inscribedSides}
      </div>
      <div class="sides-selector">
        <label for="circumscribedSides">Circumscribed Polygon Sides</label>
        <input
          id="circumscribedSides"
          type="range"
          bind:value={circumscribedSides}
          min="4"
          max="100"
        />
        {circumscribedSides}
      </div>
    </div>
  </div>
</main>

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

  .sides-selector {
    display: flex;
    align-items: center;
  }
</style>
