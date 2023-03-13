<script lang="ts">
  import type { Polygon } from '../lib/polygon';

  export let title: string;
  export let polygon: Polygon;
</script>

<details open>
  <summary><h3>{title}</h3></summary>
  <p><b>Edge Length:</b> {polygon.edgeLength}</p>
  <p><b>Perimeter:</b> {polygon.perimeter}</p>
</details>
