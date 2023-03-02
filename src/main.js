import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import axios from "axios";

axios.defaults.baseURL = "http://pasusapi.test/";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");
const app = createApp(App);
app.use(router);
app.mount("#app");
// createApp(App).mount("#app");
