<script lang="ts">
  import { text } from 'svelte/internal';
  import type { Polygon } from '../lib/polygon';
  import {
    fillShapes,
    showCircle,
    showCircumscribed,
    showCircumscribedSegments,
    showInscribed,
    showInscribedSegments,
  } from '../stores/settings';

  const UNIT_SCALE = 800;
  const CANVAS_SIZE = UNIT_SCALE * Math.sqrt(2) * 2;

  export let inscribedPolygon: Polygon;
  export let circumscribedPolygon: Polygon;

  const getPointsString = (points) => {
    const center = CANVAS_SIZE / 2;

    const scaledPoints = points.map((p) =>
      p.map((i: number) => center + i * UNIT_SCALE)
    );

    return scaledPoints.map((c) => c.join(',')).join(' ');
  };
</script>

<svg
  id="canvas"
  class:filled={$fillShapes}
  viewBox="0 0 {CANVAS_SIZE} {CANVAS_SIZE}"
  xmlns="http://www.w3.org/2000/svg"
  style="--stroke-width: {UNIT_SCALE / 300}"
>
  {#if !$showCircle && !$showCircumscribed && !$showInscribed}
    <text
      text-anchor="middle"
      x={CANVAS_SIZE / 2}
      y={CANVAS_SIZE / 2}
      font-size={UNIT_SCALE * 0.2}>Lol, for real?</text
    >
  {/if}
  {#if $showCircle}
    <circle cx={CANVAS_SIZE / 2} cy={CANVAS_SIZE / 2} r={UNIT_SCALE} />
  {/if}

  {#if $showCircumscribed}
    <g class="circumscribed">
      <polygon points={getPointsString(circumscribedPolygon.points)} />

      {#if $showCircumscribedSegments}
        {#each circumscribedPolygon.points as point}
          <line
            x1={CANVAS_SIZE / 2}
            y1={CANVAS_SIZE / 2}
            x2={CANVAS_SIZE / 2 + point[0] * UNIT_SCALE}
            y2={CANVAS_SIZE / 2 + point[1] * UNIT_SCALE}
          />
        {/each}
      {/if}
    </g>
  {/if}

  {#if $showInscribed}
    <g class="inscribed">
      <polygon points={getPointsString(inscribedPolygon.points)} />

      {#if $showInscribedSegments}
        {#each inscribedPolygon.points as point}
          <line
            x1={CANVAS_SIZE / 2}
            y1={CANVAS_SIZE / 2}
            x2={CANVAS_SIZE / 2 + point[0] * UNIT_SCALE}
            y2={CANVAS_SIZE / 2 + point[1] * UNIT_SCALE}
          />
        {/each}
      {/if}
    </g>
  {/if}
</svg>

<style>
  #canvas {
    display: block;
    max-width: 600px;
    margin: auto;
  }

  text {
    fill: var(--color-foreground);
  }

  circle,
  polygon {
    fill: none;
  }

  circle {
    stroke: var(--color-1);
    stroke-width: 6;
  }

  polygon,
  line {
    stroke-width: 3;
  }

  line {
    stroke-dasharray: 12, 24;
  }

  .inscribed {
    stroke: var(--color-3);
  }

  .circumscribed {
    stroke: var(--color-2);
  }

  .filled circle {
    fill: rgba(var(--color-1-definition), 0.2);
  }

  .filled .inscribed polygon {
    fill: rgba(var(--color-3-definition), 0.2);
  }

  .filled .circumscribed polygon {
    fill: rgba(var(--color-2-definition), 0.2);
  }
</style>
