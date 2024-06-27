/**
 * Returns filtered and formatted className
 */
export const cn = (classes: (string | number | null | undefined | boolean)[]) => {
    const filtered = classes.filter(Boolean);

    if (!filtered.length) return null;

    return filtered.join(' ');
};
