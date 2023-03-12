<script lang="ts">
  import PolygonSummary from './components/PolygonSummary.svelte';
  import { CANVAS_SIZE, UNIT_SCALE } from './config/constants';
  import { Polygon } from './lib/polygon';

  let inscribedIntensity = 1;
  let circumscribedIntensity = 1;

  $: inscribedSides = 2 ** inscribedIntensity * 3;
  $: circumscribedSides = 2 ** circumscribedIntensity * 3;

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
          bind:value={inscribedIntensity}
          min="1"
          max="12"
        />
        {inscribedSides}
      </div>
      <div class="sides-selector">
        <label for="circumscribedSides">Circumscribed Polygon Sides</label>
        <input
          id="circumscribedSides"
          type="range"
          bind:value={circumscribedIntensity}
          min="1"
          max="12"
        />
        {circumscribedSides}
      </div>
    </div>
  </div>

  <div class="info">
    <p><b>Pi Lower Bound: </b>{inscribedPolygon.perimeter / 2}</p>
    <p><b>Error: </b>{Math.PI - (inscribedPolygon.perimeter / 2)}</p>
    <p><b>Pi Upper Bound: </b>{circumscribedPolygon.perimeter / 2}</p>
    <p><b>Error: </b>{Math.PI - (circumscribedPolygon.perimeter / 2)}</p>
    <PolygonSummary polygon={inscribedPolygon} title="Inscribed" />
    <PolygonSummary polygon={circumscribedPolygon} title="Circumscribed" />
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
