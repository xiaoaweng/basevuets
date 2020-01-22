import { RouteConfig } from "vue-router";

const files = require.context(".", false, /\.ts$/);
const modules: RouteConfig[] = [];

files.keys().forEach(key => {
  if (key === "./index.ts") return;
  const item = files(key).default;
  modules.push(...item);
});

export default modules;
