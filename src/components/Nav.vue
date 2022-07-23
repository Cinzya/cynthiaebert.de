<script setup lang="ts">
import { ref } from "vue";

const menuState = ref(false);
const menuVisibility = ref();
function toggleMenu() {
  menuState.value = !menuState.value;
  menuVisibility.value = menuState.value;
}
</script>

<template>
  <header class="container flex justify-between">
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
    <nav class="fs-300" id="primary-navigation" :data-visible="menuVisibility">
      <a href="#">About</a>
      <a href="#">Experience</a>
      <a href="#">Work</a>
      <a href="#">Contact</a>
    </nav>

    <div class="button">
      <a href="#">EN</a>
    </div>
  </header>
</template>
