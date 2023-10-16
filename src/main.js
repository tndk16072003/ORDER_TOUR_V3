import { createApp } from 'vue'
// import { createRequire } from 'node:module';
import App from './App.vue'
import router from './router/index.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
// const require = createRequire(import.meta.url)
// const cors = require('cors')

const app = createApp(App);
// app.use(cors({
//     origin: "http://127.0.0.1:8000"
// }))
library.add(fas);
app.component('fa', FontAwesomeIcon);
app.use(router);
app.mount('#app');
