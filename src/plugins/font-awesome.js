import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSpinner,
  faExclamationTriangle,
  faServer,
  faChartLine
} from '@fortawesome/free-solid-svg-icons';
library.add(faSpinner, faExclamationTriangle, faServer, faChartLine);

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
Vue.component('FaIcon', FontAwesomeIcon);
