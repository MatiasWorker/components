// src/file/file.tsx
import * as Icon from "@bxreact/icon";
import { useState } from "react";

// src/file/file.css
import css from "@bxreact/theme/css";
var file_default = css`.bx-form-file {
    display: grid;
    gap: var(--bx-space-md);
    font-size: var(--bx-font-size-text-3);
}

.bx-form-file_label {
    width: 100%;
    height: var(--bx-form-file-height, 8rem);
    position: relative;
    border: 1px dashed var(--bx-color-blue);
    display: block;
    border-radius: var(--bx-sm-radius);
    background: var(--bx-color-grey-on);
}

.bx-form-file input {
    display: block;
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    cursor: pointer;
}

.bx-form_content {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: var(--bx-space-sm);
    text-align: center;
    color: var(--bx-color-blue);
}

.bx-form-file_file {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr auto;
    gap: var(--bx-space-sm);
}

.bx-form-file_file_label {
    display: grid;
    align-items: center;
    grid-template-columns: 1rem auto;
    gap: var(--bx-space-sm);
}
`;

// src/file/file.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function File({
  label = "Arrastra tu archivo o selecciona desde tu computadora",
  onChange,
  ...props
}) {
  const [files, setFiles] = useState();
  return /* @__PURE__ */ jsxs("div", {
    className: "bx-form-file",
    children: [
      /* @__PURE__ */ jsxs("label", {
        className: "bx-form-file_label",
        children: [
          /* @__PURE__ */ jsxs("div", {
            className: "bx-form_content",
            children: [
              /* @__PURE__ */ jsx(Icon.Upload, {
                size: "2rem"
              }),
              /* @__PURE__ */ jsx("div", {
                children: label
              })
            ]
          }),
          /* @__PURE__ */ jsx("input", {
            ...props,
            type: "file",
            onChange: (event) => {
              const { files: files2 } = event.target;
              setFiles(files2);
              if (onChange)
                onChange(files2);
            }
          })
        ]
      }),
      files?.length && [...files].map((file) => /* @__PURE__ */ jsxs("div", {
        className: "bx-form-file_file",
        children: [
          /* @__PURE__ */ jsxs("div", {
            className: "bx-form-file_file_label",
            children: [
              /* @__PURE__ */ jsx(Icon.Document, {
                color: "blue"
              }),
              " ",
              /* @__PURE__ */ jsx("span", {
                children: file.name
              })
            ]
          }),
          /* @__PURE__ */ jsx("div", {
            className: "bx-form-file_file_meta",
            children: /* @__PURE__ */ jsxs("strong", {
              children: [
                (file.size / (1024 * 100)).toFixed(2),
                "MB"
              ]
            })
          })
        ]
      }))
    ]
  });
}

export {
  File
};
