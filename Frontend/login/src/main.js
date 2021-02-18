import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import VeeValidate, { Validator } from 'vee-validate'
import dictionary from './plugins/dictionary'
import VueTheMask from 'vue-the-mask'
import http from './plugins/http'

Vue.config.productionTip = false


Validator.localize(dictionary)
Vue.use(VeeValidate, { 
  locale: 'pt_BR',
  enableAutoClasses: true,
  fieldsBagName: 'vvFields'
})

Vue.use(VueTheMask)
Vue.use(http)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
