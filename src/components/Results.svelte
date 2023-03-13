<script lang="ts">
  import type { Polygon } from '../lib/polygon';
  import PolygonSummary from './PolygonSummary.svelte';

  export let inscribedPolygon: Polygon;
  export let circumscribedPolygon: Polygon;
</script>

<div class="results">
  <h2>Results</h2>
  <details open>
    <summary><h3>Estimates</h3></summary>
    <p>
      <b>Pi Lower Bound:</b>
      <abbr title="Error: {Math.PI - inscribedPolygon.perimeter / 2}">
        {inscribedPolygon.perimeter / 2}
      </abbr>
    </p>
    <p>
      <b>Pi Upper Bound:</b>
      <abbr title="Error: {Math.PI - circumscribedPolygon.perimeter / 2}">
        {circumscribedPolygon.perimeter / 2}
      </abbr>
    </p>
  </details>
  <PolygonSummary polygon={inscribedPolygon} title="Inscribed" />
  <PolygonSummary polygon={circumscribedPolygon} title="Circumscribed" />
</div>

<style>
  .results {
    padding: 1em;
  }

  @media only screen and (min-width: 600px) {
    .results {
      position: fixed;
      bottom: 0.5em;
      right: 0.5em;
      width: 20%;
    }
  }
</style>
