<template>
  <!-- WELCOME
    ================================================== -->
  <section id="marquee" class="pt-5 pt-md-12 pb-3 pb-md-9 h-100">
    <div class="container">
      <div class="row align-items-center">
        <!-- <div class="col-12 col-md-5 col-lg-6 order-md-2">
            <img
              src="images/marquee.jpg"
              class="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0"
              alt="..."
            />
          </div> -->
        <div class="col-12 col-md-8 col-lg-7 order-md-1">
          <!-- Text -->
          <p class="lead text-center text-light text-md-left mb-6">
            Princeton School of AI
          </p>

          <!-- Heading -->
          <h1 class="display-4 text-white text-center text-md-left">
            <span class="text-primary font-weight-bold"
              >ETF Price Prediction</span
            ><br />Buy and Sell Signals
          </h1>

          <!-- Buttons -->
          <div class="text-center text-md-left my-3">
            <a
              class="btn btn-outline-light"
              href="https://docs.google.com/document/d/1VJHhaF1ohVgisgrVrZnZj3ITBjBHLeLRr0ESL71lmeA/edit"
              target="_blank"
            >
              Read the whitepaper
              <!-- <i class="fe fe-arrow-right d-none d-md-inline ml-3"></i> -->
            </a>
            <!-- <a href="docs/index.html" class="btn btn-primary-soft lift">
                Documentation
              </a> -->
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
    name: "welcome"
  };
</script>

<style lang="scss">
  #marquee {
    background-image: url("~@/assets/images/marquee.jpg");
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>