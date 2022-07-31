<script setup lang="ts">
import { ref } from "vue";

const isFlipped = ref(false);
function toggleFlip() {
  isFlipped.value = !isFlipped.value;
}
</script>
<template>
  <main class="grid">
    <section
      class="hero container flex flex-column align-start justify-center col-start-3 col-end-11"
    >
      <h1>
        <span class="block fs-500 mb-600">Hi, my name is</span>
        <span class="inline-block fs-900 ff-bold lh-12 name"
          >Cynthia Ebert</span
        >
        <span class="block fs-900 ff-bold lh-12 punchline mb-600">
          building things for
          <div
            class="flex-inline align-end rotate"
            :class="{ 'is-flipped': isFlipped }"
            @click="toggleFlip"
          >
            <span>the web.</span><span>you.</span>
          </div>
        </span>
        <p class="fs-500 mb-850">
          I'm a German web developer and (sometimes) web designer based in
          Eindhoven, the Netherlands. Currently looking for a job to expand my
          skillset and tackle new challanges.
        </p>
      </h1>
      <a href="" class="button block">Check out my resume!</a>
    </section>
  </main>
</template>
