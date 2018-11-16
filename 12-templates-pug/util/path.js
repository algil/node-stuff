const path = require("path");

const rootDir = path.dirname(process.mainModule.filename);
const viewsDir = path.join(rootDir, "views");
const publicDir = path.join(rootDir, "public");

const getViewFile = htmlFileName => {
  return path.join(viewsDir, `${htmlFileName}.html`);
};

module.exports = {
  rootDir,
  viewsDir,
  publicDir,
  getViewFile
};
