import { ReactNode, CSSProperties, useRef, useState } from "react";
import useResizeObserver from "use-resize-observer";
import "./index.css";

export function Grid({
    children,
    cols = 1,
    minWidth,
    fit,
    gap,
    align,
}: {
    children: ReactNode;
    gap?: string;
    cols?: number | string;
    minWidth?: string;
    fit?: boolean;
    align?: "start" | "end" | "center";
}) {
    const [forceOnly, setForceOnly] = useState(false);
    const ref = useRef<HTMLDivElement>();
    const typeCols = typeof cols;
    const customProperties: CSSProperties & {
        "--gap"?: string;
        "--columns"?: number;
        "--columns-raw"?: string;
        "--min-width"?: string;
        "--align"?: string;
        "--mode": string;
    } = {
        "--columns": typeCols === "number" ? (cols as number) : 1,
        "--mode": `auto-${fit ? "fit" : "fill"}`,
    };

    if (typeCols === "string")
        customProperties["--columns-raw"] = cols as string;

    if (minWidth) customProperties["--min-width"] = minWidth;

    if (gap) customProperties["--gap"] = gap;

    if (align) customProperties["--align"] = align;

    useResizeObserver({
        ref,
        onResize(rect) {
            if (typeCols === "string" && minWidth) {
                const [, unit, type] = minWidth.match(/(.+)(px|rem)$/);
                const value =
                    type == "rem"
                        ? Number(
                              getComputedStyle(document.body).fontSize.replace(
                                  "px",
                                  ""
                              )
                          ) * Number(unit)
                        : Number(unit);

                if (value >= rect.width) {
                    setForceOnly(true);
                } else {
                    setForceOnly(false);
                }
            }
        },
    });

    return (
        <div
            className={`bx-grid ${
                forceOnly || (cols === 1 && !minWidth) ? "bx-grid--only" : ""
            }`}
            style={customProperties}
            ref={ref}
        >
            {children}
        </div>
    );
}

/* <Grid cols=".4fr .6fr" gap="24px" minWidth='280px'></Grid> */
