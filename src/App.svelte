<script lang="ts">
  import PolygonSideSelector from './components/PolygonSideSelector.svelte';
  import PolygonSummary from './components/PolygonSummary.svelte';
  import { CANVAS_SIZE, UNIT_SCALE } from './config/constants';
  import { Polygon } from './lib/polygon';

  let linked = false;

  let inscribedSides = 6;
  let circumscribedSides = 4;

  $: inscribedPolygon = Polygon.inscribed(inscribedSides);
  $: circumscribedPolygon = Polygon.circumscribed(circumscribedSides);

  $: if (linked) {
    circumscribedSides = inscribedSides;
  }
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
      <PolygonSideSelector
        bind:sides={inscribedSides}
        title="Inscribed Polygon Sides"
        id="inscribedSides"
      />
      <PolygonSideSelector
        bind:sides={circumscribedSides}
        title="Circumscribed Polygon Sides"
        id="circumscribedSides"
        disabled={linked}
      />
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="linked-toggle" class:active={linked}>
        <button on:click={() => (linked = !linked)}>🔗</button>
      </div>
    </div>
  </div>

  <div class="info">
    <p><b>Pi Lower Bound: </b>{inscribedPolygon.perimeter / 2}</p>
    <p><b>Error: </b>{Math.PI - inscribedPolygon.perimeter / 2}</p>
    <p><b>Pi Upper Bound: </b>{circumscribedPolygon.perimeter / 2}</p>
    <p><b>Error: </b>{Math.PI - circumscribedPolygon.perimeter / 2}</p>
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

  .linked-toggle button {
    background: transparent;
    border: none;
    font-size: 2em;
    cursor: pointer;
    opacity: 0.5;
  }

  .linked-toggle.active button {
    opacity: 1;
  }
</style>
