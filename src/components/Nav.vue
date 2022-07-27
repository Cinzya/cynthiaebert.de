<script setup lang="ts">
import Language from "./Language.vue";
import { ref } from "vue";
import { defineEmits } from "vue";
const emit = defineEmits(["pressed"]);

const menuState = ref(false);
const menuVisibility = ref();
function toggleMenu() {
  menuState.value = !menuState.value;
  menuVisibility.value = menuState.value;
  emit("pressed");
}
</script>

<template>
  <header class="flex justify-between">
    <span class="logo fs-400">Cynthia Ebert</span>

    <button
      class="mobile-nav-toggle"
      :aria-expanded="menuState"
      artia-controls="primary-navigation"
    >
      <img
        v-if="!menuState"
        @click="toggleMenu"
        class="icon-menu"
        src="../assets/menu.svg"
        alt=""
        aria-hidden="true"
      />
      <img
        v-else
        @click="toggleMenu"
        class="icon-close"
        src="../assets/close.svg"
        alt=""
        aria-hidden="true"
      />
      <span class="visually-hidden">Menu</span>
    </button>
    <div class="navigation-wrapper" :data-visible="menuVisibility">
      <nav class="fs-300" id="primary-navigation">
        <a class="neutral-link" href="#">About</a>
        <a class="neutral-link" href="#">Experience</a>
        <a class="neutral-link" href="#">Work</a>
        <a class="neutral-link" href="#">Contact</a>
      </nav>
      <Language class="mobile" />
    </div>

    <Language class="desktop" />
  </header>
</template>
