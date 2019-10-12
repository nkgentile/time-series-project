<template>
  <!-- ABOUT
    ================================================== -->
  <section class="pt-8 pt-md-11 bg-gradient-light border-top">
    <div class="container">
      <div
        class="row d-flex flex-flow-column justify-content-center align-content-center"
        style="min-height: 30vw"
      >
        <http-request
          url="https://princetonprediction.s3.amazonaws.com/results.json"
        >
          <template v-slot:default="{ pending, error, data }">
            <div v-if="pending" class="text-muted">
              <fa-icon icon="spinner" spin />
              <small>
                Loading ...
              </small>
            </div>
            <div v-else-if="error" class="text-muted">
              <fa-icon icon="exclamation-triangle" />
              <small>
                {{ error }}
              </small>
            </div>
            <template v-else>
              <prediction-chart :data="data" />
              <adx-chart :data="data" />
            </template>
          </template>
        </http-request>
      </div>
    </div>
    <!-- / .container -->
  </section>
</template>

<script>
  import PredictionChart from "@/components/PredictionChart";
  import AdxChart from "@/components/AdxChart";

  export default {
    name: "about",
    components: {
      PredictionChart,
      AdxChart
    }
  };
</script>

<style>
</style>
