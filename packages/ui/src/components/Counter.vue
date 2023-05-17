<script lang="ts">
import { defineComponent, ref } from "vue-demi";

export default defineComponent({
  name: "Counter",
  setup() {
    const counter = ref(0);
    const increment = () => counter.value++;
    return { counter, increment };
  },
});
</script>
<template>
  <button @click="increment">count is {{ counter }}</button>
</template>
<style module>
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
@media (prefers-color-scheme: light) {
  button {
    background-color: #f9f9f9;
  }
}
</style>
