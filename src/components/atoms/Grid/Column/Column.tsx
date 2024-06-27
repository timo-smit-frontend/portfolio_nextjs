/** Functions */
import { cn } from "@/lib/cn";

/** Styles */
import styles from "./Column.module.scss";

/** Types */
import type { ReactNode } from "react";

type GridSections = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type ColumnProps = {
    children: ReactNode;
    className?: string;
    span?: GridSections;
    offset?: GridSections;
    alignCenter?: boolean;
    alignEnd?: boolean;
};

export const Column = (props: ColumnProps) => {
    const { children, className, span, offset, alignCenter, alignEnd } = props;

    if (!children) return null;

    return (
        <div
            className={cn([
                styles["column"],
                className,
                span && styles[`col-${span}`],
                offset ?? styles[`offset-${offset}`],
                alignCenter && styles["align-center"],
                alignEnd && styles["align-end"],
            ])}
        >
            {children}
        </div>
    );
};
