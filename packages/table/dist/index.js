// src/index.tsx
import { jsx as _jsx } from "react/jsx-runtime";

// ../../node_modules/atomico/src/utils.js
function isEqualArray(before, after) {
  let length = before.length;
  if (length !== after.length)
    return false;
  for (let i = 0; i < length; i++) {
    if (before[i] !== after[i])
      return false;
  }
  return true;
}
var isFunction = (value) => typeof value == "function";
var { isArray } = Array;

// ../../node_modules/atomico/src/hooks/create-hooks.js
var SCOPE;
function useHook(render, layoutEffect, effect) {
  let { i, hooks } = SCOPE;
  let hook = hooks[i] = hooks[i] || {};
  hook[0] = render(hook[0]);
  hook[1] = layoutEffect;
  hook[2] = effect;
  SCOPE.i++;
  return hooks[i][0];
}

// ../../node_modules/atomico/src/options.js
var options = {
  sheet: !!document.adoptedStyleSheets
};

// ../../node_modules/atomico/src/hooks/use-effect.js
var createEffect = (type) => (currentEffect, currentArgs) => {
  let effect = ([collector, args], unmounted) => {
    if (unmounted) {
      isFunction(collector) && collector();
    } else {
      return [collector ? collector : currentEffect(), args];
    }
  };
  useHook(([collector, args] = []) => {
    if (args || !args) {
      if (args && isEqualArray(args, currentArgs)) {
        collector = collector || true;
      } else {
        isFunction(collector) && collector();
        collector = null;
      }
    }
    return [collector, currentArgs];
  }, type == 1 && effect, type == 2 && effect);
};
var useLayoutEffect = createEffect(1);
var useEffect = createEffect(2);

// ../../node_modules/atomico/src/render.js
var $ = document;
var SymbolFor = Symbol.for;
var ID = SymbolFor("Atomico.ID");
var $$ = SymbolFor("Atomico.$$");
var REF = SymbolFor("Atomico.REF");

// ../../node_modules/atomico/src/css.js
var SHEETS = {};
function css(template2, ...args) {
  let cssText = (template2.raw || template2).reduce((cssText2, part, i) => cssText2 + part + (args[i] || ""), "");
  return SHEETS[cssText] = SHEETS[cssText] || createSheet(cssText);
}
function createSheet(cssText) {
  if (options.sheet) {
    let sheet = new CSSStyleSheet();
    sheet.replaceSync(cssText);
    return sheet;
  } else {
    let sheet = $.createElement("style");
    sheet.textContent = cssText;
    return sheet;
  }
}

// src/index.css
var src_default = css`.table {
    --table-background: var(--bx-table-background, #f6f6f6);
    --table-font-size: var(--bx-table-font-size, 12px);
    --table-font-bold: var(--bx-table-font-bold, 600);
    --table-row-min-height: var(--bx-table-row-min-height, 48px);
    --table-row-border-bottom: var(
        --bx-table-row-border-bottom,
        1px solid rgba(0, 0, 0, 0.1)
    );
    --table-row-background: var(--bx-table-row-background, #fff);
    --table-field-padding: 10px;

    width: 100%;
    background: var(--table-background);
    font-size: var(--table-font-size);
    border-spacing: 0px;
}

.table_thead {
    font-weight: var(--table-font-bold);
}

.table_td {
    height: var(--table-row-min-height);
    padding: 0px;
    border-bottom: var(--table-row-border-bottom);
    background: var(--table-row-background);
}

.table_td--transparent {
    background: transparent;
}
`;

// src/index.tsx
function Table({
  data,
  header,
  types
}) {
  const headerEntries = Object.entries(header);
  return /* @__PURE__ */ _jsx("table", {
    className: "table"
  }, /* @__PURE__ */ _jsx("thead", {
    className: "table_thead"
  }, /* @__PURE__ */ _jsx("tr", {
    className: "table_tr"
  }, headerEntries.map(([prop, value]) => /* @__PURE__ */ _jsx("td", {
    className: "table_td table_td--transparent"
  }, value)))), /* @__PURE__ */ _jsx("tbody", {
    className: "table_tbody"
  }, data.map((row) => /* @__PURE__ */ _jsx("tr", {
    className: "table_tr"
  }, headerEntries.map(([prop]) => [prop, row[prop]]).map(([prop, value], key) => /* @__PURE__ */ _jsx("td", {
    className: `table_td ${prop === "id" ? "table_td--transparent" : ""}`
  }, prop in types ? types[prop](row, value) : types.default ? types.default(row, value) : value))))));
}
export {
  Table
};
