import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
  Form, Field, ErrorMessage, defineRule, configure
} from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import App from './App.vue';
import router from './router';
import { currency, date } from './methods/filters';
import $httpMessageState from './methods/pushMessageState';
import VueGtag from 'vue-gtag';

// Create Vue application
const app = createApp(App);

// Setup global properties
app.config.globalProperties.$filters = {
  date,
  currency
};
app.config.globalProperties.$httpMessageState = $httpMessageState;  // Integrating custom global methods

// Setup VueAxios
app.use(VueAxios, axios);

// Setup VueGtag for Google Analytics
app.use(VueGtag, {
  config: { id: "YOUR_GA_MEASUREMENT_ID" }
}, router);

// Register global components
app.component('Loading', Loading);
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);

// Setup Vee-Validate rules and localization
Object.keys(AllRules).forEach(rule => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({ zh_TW: zhTW }),  // Load Traditional Chinese locale
  validateOnInput: true  // Validate on every input event
});

setLocale('zh_TW');  // Set default locale

// Mount the app
app.use(router).mount('#app');
