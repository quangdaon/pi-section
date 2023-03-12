<script lang="ts">
  import type { Polygon } from '../lib/polygon';

  export let title: string;
  export let polygon: Polygon;
</script>

<details open>
  <summary>{title}</summary>
  <p><b>Edge Length:</b> {polygon.edgeLength}</p>
  <p><b>Perimater:</b> {polygon.perimeter}</p>
</details>
