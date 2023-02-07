import { createApp } from "vue";
import { createPinia } from "pinia";

import axios from "axios";
import VueAxios from "vue-axios";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faTimes);

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon)

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);

app.mount("#app");
