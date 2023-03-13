<script>
  import {
    circumscribedSides,
    inscribedSides,
    showCircumscribed,
    showCircumscribedSegments,
    showInscribed,
    showInscribedSegments,
    offsetCircumscribed,
    showCircle,
    fillShapes,
  } from '../stores/settings';

  import PolygonSideSelector from './PolygonSideSelector.svelte';
  let linked = false;

  $: if (linked) {
    $circumscribedSides = $inscribedSides;
  }

  $: if ($inscribedSides > 128) {
    $showInscribedSegments = false;
  }

  $: if ($circumscribedSides > 128) {
    $showCircumscribedSegments = false;
  }
</script>

<div class="settings">
  <h2>Settings</h2>
  <div class="sides-selectors-container">
    <div class="sides-selectors">
      <PolygonSideSelector
        bind:sides={$inscribedSides}
        title="Inner Polygon Sides"
        id="inscribedSides"
      />
      <PolygonSideSelector
        bind:sides={$circumscribedSides}
        title="Outer Polygon Sides"
        id="circumscribedSides"
        disabled={linked}
      />
      <!-- svelte-ignore a11y-click-events-have-key-events -->
    </div>
    <div class="linked-toggle">
      <input id="linked" type="checkbox" bind:checked={linked} />
      <label for="linked">🔗</label>
    </div>
  </div>

  <div class="toggles">
    <label class="checkbox-field">
      Show Circle
      <input type="checkbox" bind:checked={$showCircle} />
    </label>
    
    <label class="checkbox-field">
      Fill Shapes
      <input type="checkbox" bind:checked={$fillShapes} />
    </label>
    
    <label class="checkbox-field">
      Show Inner Polygon
      <input type="checkbox" bind:checked={$showInscribed} />
    </label>

    <label class="checkbox-field">
      Show Inner Polygon Segments
      <input
        type="checkbox"
        bind:checked={$showInscribedSegments}
        disabled={!$showInscribed || $inscribedSides > 128}
      />
    </label>

    <label class="checkbox-field">
      Show Outer Polygon
      <input type="checkbox" bind:checked={$showCircumscribed} />
    </label>

    <label class="checkbox-field">
      Show Outer Polygon Segments
      <input
        type="checkbox"
        bind:checked={$showCircumscribedSegments}
        disabled={!$showCircumscribed || $circumscribedSides > 128}
      />
    </label>

    <label class="checkbox-field">
      Offset Outer Polygon Angle
      <input
        type="checkbox"
        bind:checked={$offsetCircumscribed}
        disabled={!$showCircumscribed}
      />
    </label>
  </div>
</div>

<style>
  .settings {
    padding: 1em;
  }

  .sides-selectors-container {
    text-align: center;
    padding: 0 0.5em;
  }

  #linked {
    display: none;
  }

  #linked + label {
    opacity: 0.5;
    user-select: none;
    font-size: 2em;
    cursor: pointer;
  }

  #linked:checked + label {
    opacity: 1;
  }

  .toggles {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 1em;
  }

  .checkbox-field {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0.5em;
  }

  .checkbox-field:hover {
    background: var(--color-tint);
  }

  @media only screen and (min-width: 600px) {
    .settings {
      position: fixed;
      bottom: 0.5em;
      left: 0.5em;
    }

    .linked-toggle {
      padding: 1em;
    }

    .sides-selectors-container {
      max-width: 100%;
      display: flex;
      align-items: center;
      overflow: hidden;
    }

    .sides-selectors {
      flex: 1 1 auto;
    }

    .linked-toggle {
      flex: 0 0 auto;
    }
  }
</style>
