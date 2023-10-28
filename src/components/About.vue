<script setup lang="ts"></script>
<template>
  <section class="about container flex flex-row col-start-3 col-end-12">
    <div class="">
      <h2 class="underline large fs-700 ff-bold mb-950">About me</h2>
      <!-- <p class="fs-500">
        I'm passionate about bringing both the technical and visual aspects of
        digital products to life. User experience, beautiful pixels and writing
        clean accessible, human code matters to me.
      </p> -->
      <p class="fs-500">
        I recently graduated from
        <a href="">Ansbach University of Applied Science</a> after completing
        Bachelor of Arts of Multimedia and Communication in the fields of media
        design and media informatics.
      </p>
      <p class="fs-500">
        I'm happiest when I'm creating, learning, exploring and thinking about
        how to make things better.
      </p>
      <p class="fs-500">
        In my free-time I love to work behind the scenes of esports productions
        by developing helpful tools or being part of the live broadcast crew.
      </p>
      <p class="fs-500">
        Here a few technologies I've been working with recently:
      </p>
      <ul class="flex flex-wrap flex-column fs-500">
        <li>JavaScript</li>
        <li>Vue.js</li>
        <li>Node.js</li>
        <li>TypeScript</li>
        <li>Electron</li>
        <li>Amazon Web Services</li>
      </ul>
    </div>
    <div>
      <img
        src="../assets/img/headshot-coloured.webp"
        type="image/webp"
        srcset="
          ../assets/img/headshot-coloured-1k.webp  1000w,
          ../assets/img/headshot-coloured-500.webp  500w
        "
        sizes="(max-width: 50em) 21.875vw, 100vw"
        alt=""
      />
    </div>
  </section>
</template>
