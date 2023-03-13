<script lang="ts">
  export let title: string;
  export let id: string;
  export let sides: number;
  export let disabled: boolean = false;
</script>

<div class="sides-selector">
  <label for={id}>{title}</label>
  <input
    {id}
    class="range"
    type="range"
    bind:value={sides}
    min="4"
    max="20000"
    step="2"
    {disabled}
  />
  <input
    class="numeric"
    type="number"
    bind:value={sides}
    min="4"
    max="20000"
    step="2"
    {disabled}
  />
</div>

<style>
  .sides-selector {
    text-align: left;
    margin: 1em 0;
    display: flex;
    align-items: center;
  }

  label {
    flex: 0 1 14em;
  }

  .range {
    flex: 1 1 auto;
  }

  .numeric {
    flex: 0 1 4em;
    width: fit-content;
    min-width: 0;
    background: transparent;
    border: none;
    color: inherit;
    font-family: inherit;
    font-size: 1em;
  }
</style>
