<template>
  <!-- ABOUT
    ================================================== -->
  <section class="pt-8 pt-md-11 bg-gradient-light border-top">
    <div class="container">
      <prediction-chart></prediction-chart>
    </div>
    <!-- / .container -->
  </section>
</template>

<script>
  import PredictionChart from "@/components/PredictionChart";
  export default {
    name: "about",
    components: {
      PredictionChart
    }
  };
</script>

<style>
</style>
