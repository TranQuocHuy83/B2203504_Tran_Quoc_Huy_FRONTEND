import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

// Bootstrap & FontAwesome
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.js"; //thêm vào

import router from "./router";
createApp(App).use(router).mount("#app");
