<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Navigation from "./components/Nav.vue";
import { ref } from "vue";

const isBlurred = ref(false);
function toggleBlur() {
  isBlurred.value = !isBlurred.value;
}
</script>
<template>
  <Navigation @pressed="toggleBlur" />
  <main :class="{ blur: isBlurred }">
    <div>Hallo Welt!</div>
    <img src="./assets/vue.svg" alt="" />
  </main>
</template>

<style scoped></style>
