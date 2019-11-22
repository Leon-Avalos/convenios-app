import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

let app = ''

firebase.initializeApp({
  apiKey: "AIzaSyCYumludClr9qnnEThcKnEVGu7sIlERMGE",
  authDomain: "software-udem.firebaseapp.com",
  databaseURL: "https://software-udem.firebaseio.com",
  projectId: "software-udem",
  storageBucket: "software-udem.appspot.com",
  messagingSenderId: "615238501497",
  appId: "1:615238501497:web:a91e76b7f4994c9a7e40a8",
  measurementId: "G-MTTQ0ZMX3Z"
})

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})





