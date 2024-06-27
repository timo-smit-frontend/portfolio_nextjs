/** Functions */
import { cn } from "@/lib/cn";

/** Styles */
import styles from "./Row.module.scss";

/** Types */
import type { ReactNode } from "react";

type RowProps = {
    children: ReactNode;
    wrap?: "wrap" | "nowrap" | "wrap-reverse";
    flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
    className?: string;
    alignItems?: "start" | "end" | "center" | "baseline" | "stretch";
    justifyContent?: "start" | "end" | "center" | "space-between" | "space-around" | "space-evenly";
};

export const Row = (props: RowProps) => {
    const {
        children,
        wrap = "wrap",
        className,
        flexDirection = "row",
        alignItems = "stretch",
        justifyContent = "start",
    } = props;

    if (!children) return null;

    return (
        <div
            className={cn([
                styles["row"],
                flexDirection !== "row" && styles[flexDirection],
                styles[wrap],
                styles["align-" + alignItems],
                styles["justify-" + justifyContent],
                className,
            ])}
        >
            {children}
        </div>
    );
};
