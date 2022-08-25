import "./index.css";

interface Props {
    size?: "md" | "lg";
    children: any;
}

export function Card({ size, children }: Props): JSX.Element {
    const className: string[] = ["card"];

    if (size) className.push(`card--size-${size}`);

    return <div className={className.join(" ")}>{children}</div>;
}
