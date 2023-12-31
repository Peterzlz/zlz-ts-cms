import { createApp } from "vue"
import App from "./App.vue"
import router from "./routers"
import pinia from "./stores"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"

import "normalize.css"
import "@/assets/css/index.css"
// import "element-plus/es/components/message/style/css"

const app = createApp(App)

app.use(router).use(pinia)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount("#app")
