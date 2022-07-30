<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Navigation from "./components/Nav.vue";
import Home from "./views/Home.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";

let showNavbar = ref(true);
let lastScrollPosition = ref(0);

function onScroll() {
  // Get the current scroll position
  const currentScrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;
  // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
  if (currentScrollPosition < 0) {
    return;
  }
  // Here we determine whether we need to show or hide the navbar
  showNavbar.value = currentScrollPosition < lastScrollPosition.value;
  // Set the current scroll position as the last scroll position
  lastScrollPosition.value = currentScrollPosition;
}

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});

const isBlurred = ref(false);
function toggleBlur() {
  isBlurred.value = !isBlurred.value;
}
</script>
<template>
  <Navigation
    @pressed="toggleBlur"
    :class="{ 'navbar--hidden': !showNavbar }"
  />
  <Home :class="{ blur: isBlurred }" />
</template>

<style scoped></style>
