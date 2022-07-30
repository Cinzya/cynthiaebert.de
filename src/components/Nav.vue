<script setup lang="ts">
import Language from "./Language.vue";
import { ref, defineEmits } from "vue";
import { onClickOutside } from "@vueuse/core";
const emit = defineEmits(["pressed"]);

const menu = ref();
const menuState = ref(false);
const menuVisibility = ref();
function toggleMenu() {
  menuState.value = !menuState.value;
  menuVisibility.value = menuState.value;
  emit("pressed");
}

onClickOutside(menu, () => {
  if (menuState.value) {
    toggleMenu();
  }
});
</script>

<template>
  <header ref="menu" class="flex justify-between">
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
