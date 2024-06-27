/** Functions */
import { cn } from '@/lib/cn';
import { forwardRef } from 'react';

/** Styles */
import styles from './Icon.module.scss';

/** Types */
import type { HTMLAttributes } from 'react';

type IconProps = {
    /** Name of the icon */
    name: string;
    /** Testing id */
    id: string;
    /** Extend className */
    className?: string;
    /** Icon style */
    filled?: boolean;
} & HTMLAttributes<HTMLElement>;

const Icon = forwardRef<HTMLElement, Readonly<IconProps>>(function Icon(props, ref) {
    const { name, id, className, filled, ...rest } = props;

    if (!name) return null;

    return (
        <i ref={ref} id={id} className={cn([className, styles['icon'], filled && styles['filled']])} {...rest}>
            <span className={cn([styles['inner']])}>{name}</span>
        </i>
    );
});

export default Icon;
