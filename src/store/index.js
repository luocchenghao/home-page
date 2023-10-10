import { createPinia } from "pinia";
import piniaPlugin from "pinia-plugin-persistedstate";

export default createPinia().use(piniaPlugin);
