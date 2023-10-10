import { createApp } from "vue";
import "./style.css";
import "animate.css";
import "./assets/iconfont.css";
import App from "./App.vue";
import router from "./router";
import pinia from "./store";

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");
