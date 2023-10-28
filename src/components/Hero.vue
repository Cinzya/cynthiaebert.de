<script setup lang="ts">
import { ref, watch } from "vue";
import { useElementHover } from "@vueuse/core";

const myHoverableElement = ref();
const isHovered = useElementHover(myHoverableElement);

const isFlipped = ref(false);
function toggleFlip() {
  isFlipped.value = !isFlipped.value;
}

watch(isHovered, (newValue, oldValue) => {
  if (newValue != oldValue && newValue == true) {
    // execute togglFlip with a delay of a second
    setTimeout(toggleFlip, 300);
  } else {
    toggleFlip();
  }
});
</script>
<template>
  <section
    class="hero container flex flex-column align-start justify-center col-start-3 col-end-11"
  >
    <h1>
      <span class="block fs-500 mb-600">Hi, my name is</span>
      <span class="inline-block fs-900 ff-bold lh-12 name">Cynthia Ebert.</span>
      <span class="block fs-900 ff-bold lh-12 punchline mb-600">
        Building things for
        <div
          ref="myHoverableElement"
          class="flex-inline align-end rotate"
          :class="{ 'is-flipped': isFlipped }"
        >
          <span>the web.</span><span>you!</span>
        </div>
      </span>
      <p class="fs-500 mb-950">
        I'm a German web developer and (sometimes) web designer based in
        Eindhoven, the Netherlands. Currently looking for a job to expand my
        skillset and tackle new challanges.
      </p>
    </h1>
    <a href="" class="button block fs-400 mt-750">Check out my resume!</a>
  </section>
</template>
