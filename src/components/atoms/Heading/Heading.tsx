/** Functions */
import { cn } from "@/lib/cn";

/** Styles */
import styles from "./Heading.module.scss";

/** Types */
import type { ReactNode } from "react";

type BaseProps = {
    id: string;
    styledAs?: "h1" | "h2" | "h3" | "h4";
    children: ReactNode;
    semanticLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    className?: string;
};

type HeadingLevelProps = Omit<BaseProps, "semanticLevel">;

const HeadingBase = (props: BaseProps) => {
    const { styledAs, children, semanticLevel, id, className = "" } = props;

    const TagName = semanticLevel;

    return (
        <TagName id={`${id}-heading`} className={cn([styles[styledAs], styles["heading"], className])}>
            {children}
        </TagName>
    );
};

export const H1 = (props: HeadingLevelProps) => {
    const passedProps: BaseProps = { semanticLevel: "h1", styledAs: "h1", ...props };
    return <HeadingBase {...passedProps} />;
};

export const H2 = (props: HeadingLevelProps) => {
    const passedProps: BaseProps = { semanticLevel: "h2", styledAs: "h2", ...props };
    return <HeadingBase {...passedProps} />;
};

export const H3 = (props: HeadingLevelProps) => {
    const passedProps: BaseProps = { semanticLevel: "h3", styledAs: "h3", ...props };
    return <HeadingBase {...passedProps} />;
};

export const H4 = (props: HeadingLevelProps) => {
    const passedProps: BaseProps = { semanticLevel: "h4", styledAs: "h4", ...props };
    return <HeadingBase {...passedProps} />;
};

export const H5 = (props: HeadingLevelProps) => {
    const passedProps: BaseProps = { semanticLevel: "h5", styledAs: "h4", ...props };
    return <HeadingBase {...passedProps} />;
};

export const H6 = (props: HeadingLevelProps) => {
    const passedProps: BaseProps = { semanticLevel: "h6", styledAs: "h4", ...props };
    return <HeadingBase {...passedProps} />;
};

export const Heading = { H1, H2, H3, H4, H5, H6 };
