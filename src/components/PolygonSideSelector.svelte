<script lang="ts">
  export let title: string;
  export let id: string;
  export let sides: number;
  export let disabled: boolean = false;

  const min = 4;
  const max = 20000;
  const step = 1;
</script>

<div class="sides-selector">
  <label for={id}>{title}</label>
  <input
    {id}
    class="range"
    type="range"
    bind:value={sides}
    {min}
    {max}
    {step}
    {disabled}
  />
  <input
    class="numeric"
    type="number"
    bind:value={sides}
    {min}
    {max}
    {step}
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
    -moz-appearance: textfield;
  }

  .numeric::-webkit-inner-spin-button,
  .numeric::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>
