/** Functions */
import { cn } from "@/lib/cn";

/** Styles */
import styles from "./Container.module.scss";

/** Types */
import type { ReactNode } from "react";

type ContainerProps = {
    children: ReactNode;
    className?: string;
};

export const Container = (props: ContainerProps) => {
    const { children, className = "" } = props;

    if (!children) return null;

    return <div className={cn([styles["container"], className])}>{children}</div>;
};
