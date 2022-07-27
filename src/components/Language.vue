<script setup lang="ts">
import { ref } from "vue";

const options = ref({
  languages: ["en", "de"],
});
const selected = ref("en");
</script>

<template>
  <div class="dropdown">
    <button class="button" :aria-haspopup="true" :aria-expanded="true">
      {{ selected.toUpperCase() }}
    </button>
    <div class="button dropdown-content flex-column justify-between">
      <a
        v-for="lang in options.languages"
        v-bind:key="lang"
        class="neutral-link"
        href="#"
      >
        {{ lang.toUpperCase() }}
      </a>
    </div>
  </div>
</template>
