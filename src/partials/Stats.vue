<template>
  <!-- STATS
    ================================================== -->
  <section class="pt-5 pt-md-3 bg-gray-200">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-md-5 col-lg-6 order-md-2">
          <!-- Image -->
          <img class="img-fluid mb-6 mb-md-0" :src="saiImage" />
        </div>
        <div class="col-12 col-md-7 col-lg-6 order-md-1">
          <!-- Heading -->
          <h2>
            Join Us
          </h2>

          <!-- Text -->
          <p class="font-size-lg text-gray-700 mb-6">
            We are the Princeton chapter of
            <a href="https://www.theschool.ai" target="_blank"
              >The School of AI</a
            >, whose mission is to offer a world-class AI education to anyone on
            Earth for free.
          </p>
          <p class="font-size-lg text-gray-700 mb-6">
            Our doors are open to all those who wish to learn. This learning
            community spans almost every country and is dedicated to teaching
            our students how to make a positive impact in the world using AI
            technology - whether that's through employment or entrepreneurship.
          </p>
          <p class="font-size-lg text-gray-700 mb-6">
            Our chapter is comprised of AI enthusiasts from a wide range of
            interests and professions coming together to explore and learn how
            the power of AI can provide deeper perspectives and knowledge from
            the vast disparate data all around us.
          </p>
          <b-button
            variant="primary"
            href="https://www.meetup.com/Princeton-School-of-AI/"
            >Come Learn</b-button
          >
        </div>
      </div>
      <!-- / .row -->
    </div>
    <!-- / .container -->
  </section>
</template>

<script>
  import saiImage from "@/assets/images/sai-background-image.png";
  export default {
    name: "stats",
    data: () => ({
      saiImage
    })
  };
</script>

<style>
</style>
