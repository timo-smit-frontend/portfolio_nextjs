/** Functions */
import Head from 'next/head';

type SeoHeadProps = {
    title: string;
};

export const SeoHead = (props: SeoHeadProps) => {
    const { title } = props;

    return <Head>{title && <title>{title}</title>}</Head>;
};
