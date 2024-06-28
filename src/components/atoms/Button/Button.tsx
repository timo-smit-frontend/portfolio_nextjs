/** Functions */
import { cn } from "@/lib/cn";
import Icon from "@/components/atoms/Icon/Icon";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, forwardRef } from "react";

/** Styles */
import styles from "./Button.module.scss";

/** Types */
import type { ReactNode, MouseEventHandler, AriaAttributes, Ref } from "react";

type BaseProps = {
    /** Additional className */
    className?: string;
    /** Contents of button */
    children?: ReactNode;
    /** Styling of the button */
    styledAs?: "primary" | "secondary" | "tertiary" | "inline-link" | "link" | "header" | "wrapper" | "return";
    /** Title attribute */
    title?: string;
    /** Icon name */
    icon?: string;
    /** Position of icon */
    iconPosition?: "left" | "right";
    /** Additional class for icon */
    iconClassName?: string;
    /** Check if icon is filled */
    iconFilled?: boolean;
    /** Check the type of the icon */
    iconType?: string;
    /** ID */
    id: string;
    /** Two preset padding sizes */
    paddingX?: "small" | "large";
    /** Aria attributes */
    aria?: AriaAttributes;
    /** Disabled */
    disabled?: boolean;
};

type ButtonProps = BaseProps & {
    tagName: "button";
    type?: "button" | "submit" | "reset";
    onClick?: MouseEventHandler<HTMLButtonElement>;
    form?: string;
};

type AnchorProps = BaseProps & {
    tagName: "a";
    href: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
    onClick?: MouseEventHandler<HTMLAnchorElement>;
};

type ButtonOrAnchorProps = ButtonProps | AnchorProps;

export const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, Readonly<ButtonOrAnchorProps>>(function Button(
    props,
    ref,
) {
    const {
        id,
        tagName,
        className = "",
        children,
        styledAs = "primary",
        title,
        icon,
        iconPosition = "left",
        iconFilled,
        iconType,
        iconClassName,
        paddingX = "small",
        aria,
        disabled,
    } = props;
    const { asPath, isReady, pathname } = useRouter();
    const baseClassName = cn([
        styles["button"],
        styles[styledAs],
        className,
        styles[paddingX],
        !children && styles["no-children"],
        styles[`icon-${iconPosition}`],
        !icon && styles["no-icon"],
    ]);
    const [computedClassName, setComputedClassName] = useState(baseClassName);

    useEffect(() => {
        if (isReady && props.tagName === "a") {
            const { href } = props;
            if (!href) setComputedClassName(baseClassName);

            let linkPathname = new URL(href, location.href).pathname;
            let activePathname = new URL(asPath, location.href).pathname;

            const is404 = pathname === "/_error";

            setComputedClassName(
                linkPathname === activePathname && !is404 ? cn([baseClassName, styles["active"]]) : baseClassName,
            );
            return;
        }

        setComputedClassName(baseClassName);
    }, [asPath, isReady, pathname, props, baseClassName]);

    const ButtonIcon = () => {
        return (
            <Icon
                name={styledAs === "return" ? "chevron_left" : icon}
                className={cn([styles["icon"], iconClassName])}
                id={`${id}-icon`}
                filled={iconFilled}
                type={iconType}
            />
        );
    };

    const ButtonInner = () => (
        <>
            {iconPosition === "left" && <ButtonIcon />}
            {children}
            {iconPosition === "right" && <ButtonIcon />}
        </>
    );

    if (tagName === "a") {
        const { href, target = "_self", onClick } = props;

        if (!href) return null;

        return (
            <Link
                ref={ref as Ref<HTMLAnchorElement> | undefined}
                id={id}
                onClick={!disabled && onClick}
                aria-disabled={disabled}
                className={computedClassName}
                href={href}
                title={title}
                target={target}
                {...aria}
            >
                <ButtonInner />
            </Link>
        );
    }

    if (tagName === "button") {
        const { type = "button", onClick, form } = props;

        return (
            <button
                ref={ref as Ref<HTMLButtonElement> | undefined}
                disabled={disabled}
                id={id}
                className={computedClassName}
                type={type}
                onClick={!disabled ? onClick : undefined}
                title={title}
                {...aria}
                form={form}
            >
                <ButtonInner />
            </button>
        );
    }

    return null;
});
