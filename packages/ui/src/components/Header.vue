<script lang="ts">
import { defineComponent } from "vue-demi";

export default defineComponent({
  name: "Header",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>
<template>
  <header id="header">
    <h1>{{ title }}</h1>
  </header>
</template>
<style module>
h1 {
  font-size: 3.2em;
  line-height: 1.1;
}
</style>
