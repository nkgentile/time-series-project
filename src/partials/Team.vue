<template>
  <section class="mt-3 mt-md-5" style="min-height: 20vh;">
    <div class="container">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto text-center">
          <h2 class="title">The Team</h2>
        </div>
      </div>
      <div class="row justify-content-between">
        <template v-for="(members, role) in teamByRole">
          <div :key="role" class="col-md-3">
            <div class="card card-profile card-plain">
              <div class="card-body">
                <p class="card-title font-weight-bold">
                  {{ role }}
                </p>
                <template v-for="{ id, firstName, lastName } in members">
                  <p :key="id" class="card-category text-muted">
                    {{ firstName }} {{ lastName }}
                  </p>
                </template>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
  import { groupBy, prop } from "ramda";

  import team from "@/assets/json/team.json";

  export default {
    name: "team",
    data: () => ({
      team
    }),
    computed: {
      teamByRole() {
        return groupBy(prop("role"), this.team);
      }
    }
  };
</script>

<style>
</style>
