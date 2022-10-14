import { createApp } from "vue";
import "./styles/style.css";
import "tailwindcss/tailwind.css";
import App from "./App.vue";

const app = createApp(App);
app.config.errorHandler = (err) => {
  /* 处理错误 */
};
app.config.performance = true;
// app.config.compilerOptions.comments = true;
app.mount("#app");
