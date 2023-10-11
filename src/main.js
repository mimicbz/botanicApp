import './assets/main.css'

import { createApp } from 'vue'
import { createAuth0 } from "@auth0/auth0-vue";
import { createPinia } from "pinia";
import App from './App.vue'
import router from './router'
import vuetify from '../vuetify'

const app = createApp(App)

app.use(router)
.use(vuetify)
.use(createPinia())
.use(
    createAuth0({
      domain: 'dev-6oqr6wxqxcm1s8rk.us.auth0.com',
      clientId: 'pYAFP2WiIPJz6gMNdqsciYiAH1M52Duf',
      authorizationParams: {
        redirect_uri: window.location.origin,
      }
    })
  )
.mount('#app')
