// src/css.ts
var CACHE = {};
function css(part, ...args) {
  if ("document" in globalThis) {
    const ID = part.reduce((css2, part2, i) => css2 + part2 + (args[i] || ""));
    if (!CACHE[ID]) {
      CACHE[ID] = document.createElement("style");
      CACHE[ID].textContent = ID;
      document.body.appendChild(CACHE[ID]);
    }
  }
}
export {
  css as default
};
