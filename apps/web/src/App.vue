<script lang="ts" setup>
import typescriptLogo from "./typescript.svg?url";
import { Counter, Header } from "ui";
</script>
<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img :src="typescriptLogo" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <Header title="Web" />
    <div class="card">
      <Counter />
    </div>
  </div>
</template>
