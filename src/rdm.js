import rdm from "./index.js";

if (process.env.NODE_ENV === "development") {
  var vrt = require("rdmkit-vrt");
  vrt();
}

rdm("figure");
// Select multiple elements like this below
// rdm("figure, .boxes");
