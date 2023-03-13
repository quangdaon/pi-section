<script lang="ts">
  import Canvas from './components/Canvas.svelte';
  import Results from './components/Results.svelte';
  import Settings from './components/Settings.svelte';
  import { Polygon } from './lib/polygon';
  import { circumscribedSides, inscribedSides, isCircumscribedAngleOffset } from './stores/settings';


  $: inscribedPolygon = Polygon.inscribed($inscribedSides);
  $: circumscribedPolygon = Polygon.circumscribed($circumscribedSides, $isCircumscribedAngleOffset);

</script>

<main>
  <Canvas {circumscribedPolygon} {inscribedPolygon} />
  <Settings />
  <Results {circumscribedPolygon} {inscribedPolygon} />
</main>
