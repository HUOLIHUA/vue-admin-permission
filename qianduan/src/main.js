import Vue from 'vue'
import App from './App.vue'
import store from './store'
// router
import router from './router'

// element-ui
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
Vue.use(Element)

// style
import './styles/index.scss'

// permission
import './permission'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
