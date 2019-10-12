import Vue from 'vue';

import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);
import '@/assets/styles/bootstrap.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSpinner,
  faExclamationTriangle,
  faServer,
} from '@fortawesome/free-solid-svg-icons';
library.add(faSpinner, faExclamationTriangle, faServer);

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
Vue.component('FaIcon', FontAwesomeIcon);

import { get } from 'axios';
Vue.component('HttpRequest', {
  props: {
    url: { type: String, default: '', required: true },
    params: { type: Object, default: () => ({}) },
  },
  data() {
    return {
      pending: true,
      error: false,
      data: null,
    };
  },
  watch: {
    url() {
      this.requestData();
    },
    params: {
      handler() {
        this.requestData();
      },
      deep: true,
    },
  },
  mounted() {
    this.requestData();
  },
  methods: {
    async requestData() {
      this.pending = true;
      try {
        const { data } = await get(this.url, { params: this.params });
        this.data = data;
        this.error = false;
      } catch (e) {
        this.data = null;
        this.error = e;
      }
      this.pending = false;
    },
  },
  render() {
    return this.$scopedSlots.default({
      pending: this.pending,
      error: this.error,
      data: this.data,
    });
  },
});
