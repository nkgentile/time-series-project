<template>
  <div id="app">
    <!-- NAVBAR
    ================================================== -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white d-none">
      <div class="container">
        <!-- Brand -->
        <a class="navbar-brand" href="./index.html">
          <!-- <img
            src="./assets/img/brand.svg"
            class="navbar-brand-img"
            alt="..."
          /> -->
        </a>

        <!-- Toggler -->
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Collapse -->
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <!-- Toggler -->
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fe fe-x"></i>
          </button>

          <!-- Navigation -->
          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarLandings"
                data-toggle="dropdown"
                href="#"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Landings
              </a>
              <div
                class="dropdown-menu dropdown-menu-xl p-0"
                aria-labelledby="navbarLandings"
              >
                <div class="row no-gutters">
                  <div class="col-12 col-lg-6">
                    <div
                      class="dropdown-img-left"
                      style="background-image: url(./assets/img/photos/photo-3.jpg);"
                    >
                      <!-- Heading -->
                      <h4 class="font-weight-bold text-white mb-0">
                        Want to see an overview?
                      </h4>

                      <!-- Text -->
                      <p class="font-size-sm text-white">
                        See all the pages at once.
                      </p>

                      <!-- Button -->
                      <a
                        href="./overview.html"
                        class="btn btn-sm btn-white shadow-dark fonFt-size-sm"
                      >
                        View all pages
                      </a>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6">
                    <div class="dropdown-body">
                      <div class="row no-gutters">
                        <div class="col-6">
                          <!-- Heading -->
                          <h6 class="dropdown-header">
                            Services
                          </h6>

                          <!-- List -->
                          <a class="dropdown-item" href="./coworking.html">
                            Coworking
                          </a>
                          <a class="dropdown-item" href="./rental.html">
                            Rental
                          </a>
                          <a class="dropdown-item mb-5" href="./job.html">
                            Job Listing
                          </a>

                          <!-- Heading -->
                          <h6 class="dropdown-header">
                            Apps
                          </h6>

                          <!-- List -->
                          <a class="dropdown-item" href="./desktop-app.html">
                            Desktop
                          </a>
                          <a class="dropdown-item" href="./mobile-app.html">
                            Mobile
                          </a>
                        </div>
                        <div class="col-6">
                          <!-- Heading -->
                          <h6 class="dropdown-header">
                            Web
                          </h6>

                          <!-- List -->
                          <a class="dropdown-item" href="./index.html">
                            Basic
                          </a>
                          <a class="dropdown-item" href="./enterprise.html">
                            Enterprise
                          </a>
                          <a class="dropdown-item" href="./service.html">
                            Service
                          </a>
                          <a class="dropdown-item" href="./cloud.html">
                            Cloud Hosting
                          </a>
                        </div>
                      </div>
                      <!-- / .row -->
                    </div>
                  </div>
                </div>
                <!-- / .row -->
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarPages"
                data-toggle="dropdown"
                href="#"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Pages
              </a>
              <div
                class="dropdown-menu dropdown-menu-lg"
                aria-labelledby="navbarPages"
              >
                <div class="row no-gutters">
                  <div class="col-6 col-lg-4">
                    <!-- Heading -->
                    <h6 class="dropdown-header">
                      Career
                    </h6>

                    <!-- List -->
                    <a class="dropdown-item" href="./careers.html">
                      Listing
                    </a>
                    <a class="dropdown-item mb-5" href="./career-single.html">
                      Opening
                    </a>

                    <!-- Heading -->
                    <h6 class="dropdown-header">
                      Company
                    </h6>

                    <!-- List -->
                    <a class="dropdown-item" href="./about.html">
                      About
                    </a>
                    <a class="dropdown-item" href="./pricing.html">
                      Pricing
                    </a>
                    <a
                      class="dropdown-item mb-5 mb-lg-0"
                      href="./terms-of-service.html"
                    >
                      Terms
                    </a>
                  </div>
                  <div class="col-6 col-lg-4">
                    <!-- Heading -->
                    <h6 class="dropdown-header">
                      Help center
                    </h6>

                    <!-- List -->
                    <a class="dropdown-item" href="./help-center.html">
                      Overview
                    </a>
                    <a
                      class="dropdown-item mb-5"
                      href="./help-center-article.html"
                    >
                      Article
                    </a>

                    <!-- Heading -->
                    <h6 class="dropdown-header">
                      Contact
                    </h6>

                    <!-- List -->
                    <a class="dropdown-item" href="./contact.html">
                      Basic
                    </a>
                    <a class="dropdown-item" href="./contact-alt.html">
                      Cover
                    </a>
                  </div>
                  <div class="col-6 col-lg-4">
                    <!-- Heading -->
                    <h6 class="dropdown-header">
                      Blog
                    </h6>

                    <!-- List -->
                    <a class="dropdown-item" href="./blog.html">
                      Rich View
                    </a>
                    <a class="dropdown-item" href="./blog-post.html">
                      Article
                    </a>
                    <a class="dropdown-item" href="./blog-showcase.html">
                      Showcase
                    </a>
                    <a class="dropdown-item" href="./blog-search.html">
                      Search
                    </a>
                  </div>
                </div>
              </div>
              <!-- / .row -->
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarAccount"
                data-toggle="dropdown"
                href="#"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Account
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarAccount">
                <li class="dropdown-item dropright">
                  <a
                    class="dropdown-link dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                  >
                    Sign In
                  </a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="./signin-cover.html">
                      Side Cover
                    </a>
                    <a class="dropdown-item" href="./signin-illustration.html">
                      Illustration
                    </a>
                    <a class="dropdown-item" href="./signin.html">
                      Basic
                    </a>
                    <a
                      class="dropdown-item"
                      data-toggle="modal"
                      href="#modalSigninHorizontal"
                    >
                      Modal Horizontal
                    </a>
                    <a
                      class="dropdown-item"
                      data-toggle="modal"
                      href="#modalSigninVertical"
                    >
                      Modal Vertical
                    </a>
                  </div>
                </li>
                <li class="dropdown-item dropright">
                  <a
                    class="dropdown-link dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                  >
                    Sign Up
                  </a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="./signup-cover.html">
                      Side Cover
                    </a>
                    <a class="dropdown-item" href="./signup-illustration.html">
                      Illustration
                    </a>
                    <a class="dropdown-item" href="./signup.html">
                      Basic
                    </a>
                    <a
                      class="dropdown-item"
                      data-toggle="modal"
                      href="#modalSignupHorizontal"
                    >
                      Modal Horizontal
                    </a>
                    <a
                      class="dropdown-item"
                      data-toggle="modal"
                      href="#modalSignupVertical"
                    >
                      Modal Vertical
                    </a>
                  </div>
                </li>
                <li class="dropdown-item dropright">
                  <a
                    class="dropdown-link dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                  >
                    Password Reset
                  </a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="./password-reset-cover.html">
                      Side Cover
                    </a>
                    <a
                      class="dropdown-item"
                      href="./password-reset-illustration.html"
                    >
                      Illustration
                    </a>
                    <a class="dropdown-item" href="./password-reset.html">
                      Basic
                    </a>
                  </div>
                </li>
                <li class="dropdown-item dropright">
                  <a
                    class="dropdown-link dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                  >
                    Error
                  </a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="./error-cover.html">
                      Side Cover
                    </a>
                    <a class="dropdown-item" href="./error-illustration.html">
                      Illustration
                    </a>
                    <a class="dropdown-item" href="./error.html">
                      Basic
                    </a>
                  </div>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDocumentation"
                data-toggle="dropdown"
                href="#"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Documentation
              </a>
              <div
                class="dropdown-menu dropdown-menu-md"
                aria-labelledby="navbarDocumentation"
              >
                <div class="list-group list-group-flush">
                  <a class="list-group-item" href="./docs/index.html">
                    <!-- Icon -->
                    <div class="icon icon-sm text-primary">
                      <!--?xml version="1.0" encoding="UTF-8"?-->
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <!-- Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch -->
                        <title>Stockholm-icons / General / Clipboard</title>
                        <desc>Created with Sketch.</desc>
                        <g
                          id="Stockholm-icons-/-General-/-Clipboard"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <rect
                            id="bound"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          ></rect>
                          <path
                            d="M8,3 L8,3.5 C8,4.32842712 8.67157288,5 9.5,5 L14.5,5 C15.3284271,5 16,4.32842712 16,3.5 L16,3 L18,3 C19.1045695,3 20,3.8954305 20,5 L20,21 C20,22.1045695 19.1045695,23 18,23 L6,23 C4.8954305,23 4,22.1045695 4,21 L4,5 C4,3.8954305 4.8954305,3 6,3 L8,3 Z"
                            id="Combined-Shape"
                            fill="#335EEA"
                            opacity="0.3"
                          ></path>
                          <path
                            d="M11,2 C11,1.44771525 11.4477153,1 12,1 C12.5522847,1 13,1.44771525 13,2 L14.5,2 C14.7761424,2 15,2.22385763 15,2.5 L15,3.5 C15,3.77614237 14.7761424,4 14.5,4 L9.5,4 C9.22385763,4 9,3.77614237 9,3.5 L9,2.5 C9,2.22385763 9.22385763,2 9.5,2 L11,2 Z"
                            id="Combined-Shape"
                            fill="#335EEA"
                          ></path>
                          <rect
                            id="Rectangle-152"
                            fill="#335EEA"
                            opacity="0.3"
                            x="7"
                            y="10"
                            width="5"
                            height="2"
                            rx="1"
                          ></rect>
                          <rect
                            id="Rectangle-152-Copy"
                            fill="#335EEA"
                            opacity="0.3"
                            x="7"
                            y="14"
                            width="9"
                            height="2"
                            rx="1"
                          ></rect>
                        </g>
                      </svg>
                    </div>

                    <!-- Content -->
                    <div class="ml-4">
                      <!-- Heading -->
                      <h6
                        class="font-weight-bold text-uppercase text-primary mb-0"
                      >
                        Documentation
                      </h6>

                      <!-- Text -->
                      <p class="font-size-sm text-gray-700 mb-0">
                        Customizing and building
                      </p>
                    </div>
                  </a>
                  <a class="list-group-item" href="./docs/alerts.html">
                    <!-- Icon -->
                    <div class="icon icon-sm text-primary">
                      <!--?xml version="1.0" encoding="UTF-8"?-->
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <!-- Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch -->
                        <title>
                          Stockholm-icons / Layout / Layout-4-blocks
                        </title>
                        <desc>Created with Sketch.</desc>
                        <g
                          id="Stockholm-icons-/-Layout-/-Layout-4-blocks"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <rect
                            id="bound"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          ></rect>
                          <rect
                            id="Rectangle-7"
                            fill="#335EEA"
                            x="4"
                            y="4"
                            width="7"
                            height="7"
                            rx="1.5"
                          ></rect>
                          <path
                            d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                            id="Combined-Shape"
                            fill="#335EEA"
                            opacity="0.3"
                          ></path>
                        </g>
                      </svg>
                    </div>

                    <!-- Content -->
                    <div class="ml-4">
                      <!-- Heading -->
                      <h6
                        class="font-weight-bold text-uppercase text-primary mb-0"
                      >
                        Components
                      </h6>

                      <!-- Text -->
                      <p class="font-size-sm text-gray-700 mb-0">
                        Full list of components
                      </p>
                    </div>
                  </a>
                  <a class="list-group-item" href="./docs/changelog.html">
                    <!-- Icon -->
                    <div class="icon icon-sm text-primary">
                      <!--?xml version="1.0" encoding="UTF-8"?-->
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <!-- Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch -->
                        <title>Stockholm-icons / Files / File</title>
                        <desc>Created with Sketch.</desc>
                        <g
                          id="Stockholm-icons-/-Files-/-File"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <polygon
                            id="Shape"
                            points="0 0 24 0 24 24 0 24"
                          ></polygon>
                          <path
                            d="M5.85714286,2 L13.7364114,2 C14.0910962,2 14.4343066,2.12568431 14.7051108,2.35473959 L19.4686994,6.3839416 C19.8056532,6.66894833 20,7.08787823 20,7.52920201 L20,20.0833333 C20,21.8738751 19.9795521,22 18.1428571,22 L5.85714286,22 C4.02044787,22 4,21.8738751 4,20.0833333 L4,3.91666667 C4,2.12612489 4.02044787,2 5.85714286,2 Z"
                            id="Combined-Shape"
                            fill="#335EEA"
                            opacity="0.3"
                          ></path>
                          <rect
                            id="Rectangle"
                            fill="#335EEA"
                            x="6"
                            y="11"
                            width="9"
                            height="2"
                            rx="1"
                          ></rect>
                          <rect
                            id="Rectangle-Copy"
                            fill="#335EEA"
                            x="6"
                            y="15"
                            width="5"
                            height="2"
                            rx="1"
                          ></rect>
                        </g>
                      </svg>
                    </div>

                    <!-- Content -->
                    <div class="ml-4">
                      <!-- Heading -->
                      <h6
                        class="font-weight-bold text-uppercase text-primary mb-0"
                      >
                        Changelog
                      </h6>

                      <!-- Text -->
                      <p class="font-size-sm text-gray-700 mb-0">
                        Keep track of changes
                      </p>
                    </div>

                    <!-- Badge -->
                    <span class="badge badge-pill badge-primary-soft ml-auto">
                      1.1.0
                    </span>
                  </a>
                </div>
              </div>
            </li>
          </ul>

          <!-- Button -->
          <a
            class="navbar-btn btn btn-sm btn-primary lift ml-auto"
            href="https://themes.getbootstrap.com/product/landkit/"
            target="_blank"
          >
            Buy now
          </a>
        </div>
      </div>
    </nav>

    <welcome-partial />
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
    }
  };
</script>
