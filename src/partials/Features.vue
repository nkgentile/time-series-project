<template>
  <!-- FEATURES
    ================================================== -->
  <section class="my-5 my-md-9 py-8 py-md-11">
    <div class="container my-3 my-md-7">
      <div class="row">
        <div class="col-12 col-md-12">
          <!-- Icon -->
          <div class="icon text-primary mb-3">
            <fa-icon icon="server" size="4x" />
          </div>

          <!-- Text -->
          <div class="mb-6 mb-md-0">
            <p class="lead">
              Our AI model is designed to use 33 technical indicators to
              generate daily buy and sell signals 5 days in advance of market
              movement with approximately 70% accuracy.
            </p>
          </div>

          <div class="d-flex">
            <div class="pr-5">
              <h3 class="mb-0 text-success">
                ~67%
              </h3>
              <p class="text-muted mb-0">
                S&amp;P 500 (SPY)
              </p>
            </div>
            <div class="border-left border-gray-300"></div>
            <div class="px-5">
              <h3 class="mb-0 text-success">
                ~73%
              </h3>
              <p class="text-muted mb-0">
                Nasdaq 100 (QQQ)
              </p>
            </div>
            <div class="border-left border-gray-300"></div>
            <div class="pl-5 text-success">
              <h3 class="mb-0">
                ~71%
              </h3>
              <p class="text-muted mb-0">
                Russell 2000 (IWM)
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- / .row -->
    </div>
    <!-- / .container -->
  </section>
</template>

<script>
  export default {
    name: "features"
  };
</script>