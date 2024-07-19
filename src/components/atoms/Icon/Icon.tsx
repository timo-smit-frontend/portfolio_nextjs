/** Functions */
import { cn } from "@/lib/cn";
import { forwardRef, useEffect, useState } from "react";

/** Styles */
import styles from "./Icon.module.scss";

/** Types */
import type { HTMLAttributes } from "react";

type IconProps = {
    /** Name of the icon */
    name: string;
    /** Testing id */
    id: string;
    /** Extend className */
    className?: string;
    /** Icon style */
    filled?: boolean;
    /** Type of the icon: 'material' or 'custom' */
    type?: string;
} & HTMLAttributes<HTMLElement>;

const Icon = forwardRef<HTMLElement, Readonly<IconProps>>(function Icon(props, ref) {
    const { name, id, className, filled, type, ...rest } = props;
    const [svgContent, setSvgContent] = useState<string | null>(null);

    useEffect(() => {
        if (type === "custom") {
            fetch(`/icons/${name}.svg`)
                .then(response => response.text())
                .then(data => setSvgContent(data))
                .catch(error => console.error(`Error loading SVG: ${name}`, error));
        }
    }, [name, type]);

    if (!name) return null;

    const isMaterialIcon = type;

    if (isMaterialIcon === "custom") {
        return (
            <span
                ref={ref as React.Ref<HTMLImageElement>}
                id={id}
                className={cn([className, styles["custom-icon"]])}
                dangerouslySetInnerHTML={{ __html: svgContent || "" }}
            />
        );
    } else {
        return (
            <i ref={ref} id={id} className={cn([className, styles["icon"], filled && styles["filled"]])} {...rest}>
                <span className={cn([styles["inner"]])}>{name}</span>
            </i>
        );
    }
});

export default Icon;
