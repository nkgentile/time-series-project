<template>
  <div id="app">
    <!-- NAVBAR
    ================================================== -->
    <nav
      class="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm fade"
      :class="{
        show: navbar.isVisible
      }"
      :style="{
        pointerEvents: navbar.isVisible ? 'auto' : 'none'
      }"
    >
      <div class="container">
        <!-- Brand -->
        <span class="navbar-brand">
          <fa-icon icon="chart-line" />
          <span class="ml-3">
            ETF Price Prediction
          </span>
        </span>

        <!-- Button -->
        <a
          class="navbar-btn btn btn-sm btn-outline-primary ml-auto"
          href="/"
          target="_blank"
        >
          Read the whitepaper
        </a>
      </div>
    </nav>

    <v-intersect @enter="hideNavbar" @leave="showNavbar">
      <welcome-partial />
    </v-intersect>
    <features-partial />
    <about-partial />
    <team-partial />
    <stats-partial />

    <!-- FOOTER
    ================================================== -->
    <footer class="py-1 bg-secondary">
      <div class="container">
        <div class="row">
          <div class="col-3 col-md-1">
            <!-- Brand -->
            <!-- <img src="" alt="..." class="footer-brand img-fluid mb-2" /> -->
            <svg
              class="py-3"
              xmlns="http://www.w3.org/2000/svg"
              version="1"
              viewBox="0 0 720 720"
            >
              <path
                fill="#afafaf"
                d="M422 0l19 3c36 9 64 29 86 58 2 3 4 5 9 5 53-7 104 26 126 79 15 33 17 67 7 102-1 4 0 7 3 10 65 65 49 180-30 222-6 4-10 8-13 14-26 50-66 82-123 88-14 1-30-2-45-3-5-1-8-1-12 3L312 717l-1 3-2-2 14-76 14-77c-45-7-79-31-104-67-13 5-26 12-39 15-34 7-63-3-88-26l-6-6c-52-34-81-82-90-143-10-70 10-131 59-182 16-17 36-30 59-39 3-1 6-4 8-8a180 180 0 0 1 198-90c3 1 8 0 11-1 16-9 33-15 51-17l5-1h21zm-64 624l1 1 61-63v-1c-46-29-72-71-81-124 0-2-2-5-4-6a55 55 0 0 1-28-60c4-36 42-57 71-40 20 11 28 28 28 50s-10 40-30 50c-5 3-6 5-5 10 5 20 13 38 25 55 49 67 140 69 191 4l5-6-23-3-22-7c-4-1-7-1-10 1-12 8-25 10-39 7-23-7-39-32-37-59 2-26 22-48 46-50 25-2 48 16 53 43v27c25 9 48 7 71-5 38-22 57-68 48-113-4-19-12-36-26-51l-13 17c-4 5-6 9-5 15 1 5 0 11-1 17-5 24-25 42-48 43-22 0-44-17-49-41-2-7-2-15-1-23 3-30 30-52 58-46 8 2 16 7 25 10 14-17 22-37 24-60 5-43-17-87-54-107-12-6-26-10-40-10l6 20 4 4c22 7 40 32 35 64-5 29-31 49-59 43-25-5-43-31-41-58 2-21 12-36 29-47-19-73-92-103-138-86 15 13 31 25 44 40 34 39 50 85 52 136 0 4 1 8 4 11 17 14 23 33 20 55-4 31-33 51-61 44-23-6-38-29-38-54s15-47 38-54l5-1c1-30-11-68-29-96-57-85-167-95-235-22l-6 7h3c24-1 47 3 70 12 4 1 7 1 11-2 13-11 28-14 45-9 24 8 39 37 34 64-6 31-33 50-61 43-23-6-40-31-38-56 0-7-2-9-7-10-50-17-96-8-136 25-68 56-80 160-32 233l1 1 6-42c1-2 0-5-1-7-7-12-9-25-7-38 3-25 21-44 45-47 21-3 43 12 51 35 12 35-9 72-43 75h-16c-10 27 5 68 32 87 25 17 59 16 80-3v-1c-16-42-17-83-3-125 1-2 0-5-1-7-8-13-11-27-10-41 3-24 22-45 44-48 23-2 44 11 53 35 11 32-6 68-37 75l-20 1c-13 29-9 79 10 112 27 47 68 68 122 64l-16 93zm206-448c0-11-9-21-19-21-11 0-20 9-20 21 0 11 9 21 19 21 11 0 20-9 20-21zM375 380c0-11-8-21-19-21-10 0-19 10-19 22 0 11 9 20 19 21 11 0 19-10 19-22zm-240-53c0-11-8-21-19-21-10 0-19 10-19 21 0 12 9 21 19 21 11 1 19-9 19-21zm136-27c0-12-8-22-19-22-10 0-19 10-19 21-1 12 8 21 19 21 10 0 19-9 19-20zm333 20c0-11-8-21-19-21-10 0-19 10-19 21 0 12 9 22 19 21 11 0 19-9 19-21zM274 159c0 12 8 21 19 21 10 0 19-9 19-21 0-11-9-21-19-21-11 0-19 9-19 21zm163 111c-1 12 8 22 19 22 10 0 19-9 19-20 1-12-8-22-19-22-10 0-19 9-19 20zm93 168c0-12-8-21-19-21-10 0-19 9-19 21s8 21 19 21 19-9 19-21z"
              />
            </svg>

            <!-- Text -->
            <!-- <p class="text-gray-700 mb-2">
              A better way to build.
            </p> -->

            <!-- Social -->
            <ul class="list-unstyled list-inline list-social mb-6 mb-md-0">
              <li class="list-inline-item list-social-item mr-3">
                <a href="#!" class="text-decoration-none">
                  <!-- <img
                    src="./assets/img/icons/social/instagram.svg"
                    class="list-social-icon"
                    alt="..."
                  /> -->
                </a>
              </li>
              <li class="list-inline-item list-social-item mr-3">
                <a href="#!" class="text-decoration-none">
                  <!-- <img
                    src="./assets/img/icons/social/facebook.svg"
                    class="list-social-icon"
                    alt="..."
                  /> -->
                </a>
              </li>
              <li class="list-inline-item list-social-item mr-3">
                <a href="#!" class="text-decoration-none">
                  <!-- <img
                    src="./assets/img/icons/social/twitter.svg"
                    class="list-social-icon"
                    alt="..."
                  /> -->
                </a>
              </li>
              <li class="list-inline-item list-social-item">
                <a href="#!" class="text-decoration-none">
                  <!-- <img
                    src="./assets/img/icons/social/pinterest.svg"
                    class="list-social-icon"
                    alt="..."
                  /> -->
                </a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md-4 col-lg-2 d-none">
            <!-- Heading -->
            <h6 class="font-weight-bold text-uppercase text-gray-700">
              Products
            </h6>

            <!-- List -->
            <ul class="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
              <li class="mb-3">
                <a href="#!" class="text-reset">
                  Page Builder
                </a>
              </li>
              <li class="mb-3">
                <a href="#!" class="text-reset">
                  UI Kit
                </a>
              </li>
              <li class="mb-3">
                <a href="#!" class="text-reset">
                  Styleguide
                </a>
              </li>
              <li class="mb-3">
                <a href="#!" class="text-reset">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#!" class="text-reset">
                  Changelog
                </a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md-4 col-lg-2 d-none">
            <!-- Heading -->
            <h6 class="font-weight-bold text-uppercase text-gray-700">
              Services
            </h6>

            <!-- List -->
            <ul class="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
              <li class="mb-3">
                <a href="#!" class="text-reset">
                  Documentation
                </a>
              </li>
              <li class="mb-3">
                <a href="#!" class="text-reset">
                  Changelog
                </a>
              </li>
              <li class="mb-3">
                <a href="#!" class="text-reset">
                  Pagebuilder
                </a>
              </li>
              <li>
                <a href="#!" class="text-reset">
                  UI Kit
                </a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md-4 offset-md-4 col-lg-2 offset-lg-0 d-none">
            <!-- Heading -->
            <h6 class="font-weight-bold text-uppercase text-gray-700">
              Connect
            </h6>

            <!-- List -->
            <ul class="list-unstyled text-muted mb-0">
              <li class="mb-3">
                <a href="#!" class="text-reset">
                  Page Builder
                </a>
              </li>
              <li class="mb-3">
                <a href="#!" class="text-reset">
                  UI Kit
                </a>
              </li>
              <li class="mb-3">
                <a href="#!" class="text-reset">
                  Styleguide
                </a>
              </li>
              <li class="mb-3">
                <a href="#!" class="text-reset">
                  Documentation
                </a>
              </li>
              <li class="mb-3">
                <a href="#!" class="text-reset">
                  Changelog
                </a>
              </li>
              <li class="mb-3">
                <a href="#!" class="text-reset">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#!" class="text-reset">
                  Changelog
                </a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md-4 col-lg-2 d-none">
            <!-- Heading -->
            <h6 class="font-weight-bold text-uppercase text-gray-700">
              Legal
            </h6>

            <!-- List -->
            <ul class="list-unstyled text-muted mb-0">
              <li class="mb-3">
                <a href="#!" class="text-reset">
                  Documentation
                </a>
              </li>
              <li class="mb-3">
                <a href="#!" class="text-reset">
                  Changelog
                </a>
              </li>
              <li>
                <a href="#!" class="text-reset">
                  Pagebuilder
                </a>
              </li>
            </ul>
          </div>
        </div>
        <!-- / .row -->
      </div>
      <!-- / .container -->
    </footer>
  </div>
</template>

<script>
  import AboutPartial from "@/partials/About";
  import FeaturesPartial from "@/partials/Features";
  import TeamPartial from "@/partials/Team";
  import StatsPartial from "@/partials/Stats";
  import WelcomePartial from "@/partials/Welcome";

  export default {
    components: {
      AboutPartial,
      FeaturesPartial,
      StatsPartial,
      TeamPartial,
      WelcomePartial
    },
    data: () => ({
      navbar: {
        isVisible: false
      }
    }),
    methods: {
      showNavbar() {
        const { navbar } = this;
        navbar.isVisible = true;
      },
      hideNavbar() {
        const { navbar } = this;
        navbar.isVisible = false;
      }
    }
  };
</script>
