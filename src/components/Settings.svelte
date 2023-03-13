<script>
  import { circumscribedSides, inscribedSides } from '../stores/settings';

  import PolygonSideSelector from './PolygonSideSelector.svelte';
  let linked = false;

  $: if (linked) {
    $circumscribedSides = $inscribedSides;
  }
</script>

<div class="settings">
  <h2>Settings</h2>
  <div class="sides-selectors-container">
    <div class="sides-selectors">
      <PolygonSideSelector
        bind:sides={$inscribedSides}
        title="Inscribed Polygon Sides"
        id="inscribedSides"
      />
      <PolygonSideSelector
        bind:sides={$circumscribedSides}
        title="Circumscribed Polygon Sides"
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
</div>

<style>
  .settings {
    padding: 1em;
  }

  .sides-selectors-container {
    text-align: center;
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
