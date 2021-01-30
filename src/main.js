import Vue from 'vue'
import App from './App.vue'

import VeUi from './components/Ve-form'
Vue.use(VeUi, {
  component: [
    'FbTable',
    'FbFrom'
  ]
})
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
