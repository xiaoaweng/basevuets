const files = require.context(".", false, /\.ts$/);
const modules: any = {};

files.keys().forEach(key => {
  if (key === "./index.ts") return;
  var file_name = key.replace(/(.*\/)*([^.]+).*/gi, "$2");
  const item = files(key).default;
  modules[file_name] = item;
});

export default modules;
