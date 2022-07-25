import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import Vue3Lottie from "vue3-lottie";
import "vue3-lottie/dist/style.css";

createApp(App).use(Vue3Lottie).mount("#app");
