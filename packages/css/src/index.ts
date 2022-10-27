const CACHE = {};

export default function css(part: TemplateStringsArray, ...args: any) {
    if ("document" in globalThis) {
        const ID = part.reduce((css, part, i) => css + part + (args[i] || ""));
        if (!CACHE[ID]) {
            CACHE[ID] = document.createElement("style");
            CACHE[ID].textContent = ID;
            document.body.appendChild(CACHE[ID]);
        }
    }
}
