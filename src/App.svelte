<script lang="ts">
  import Canvas from './components/Canvas.svelte';
  import Results from './components/Results.svelte';
  import Settings from './components/Settings.svelte';
  import { Polygon } from './lib/polygon';
  import { circumscribedSides, inscribedSides, offsetCircumscribed } from './stores/settings';


  $: inscribedPolygon = Polygon.inscribed($inscribedSides);
  $: circumscribedPolygon = Polygon.circumscribed($circumscribedSides, $offsetCircumscribed);

</script>

<main>
  <Canvas {circumscribedPolygon} {inscribedPolygon} />
  <Settings />
  <Results {circumscribedPolygon} {inscribedPolygon} />
</main>
