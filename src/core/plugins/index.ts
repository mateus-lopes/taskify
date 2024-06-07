import "reflect-metadata";
import router from "@/core/router";
import pinia from "@/core/plugins/pinia";
import { registerIonic } from "./ionic";
import type { App } from "vue";

export function registerPlugins(app: App) {
  registerIonic(app);
  app.use(router);
  app.use(pinia);
}