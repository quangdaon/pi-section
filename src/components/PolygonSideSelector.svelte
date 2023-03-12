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
    type="range"
    bind:value={sides}
    min="4"
    max="20000"
    step="2"
    {disabled}
  />
  <input
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
    display: flex;
    align-items: center;
  }
</style>
