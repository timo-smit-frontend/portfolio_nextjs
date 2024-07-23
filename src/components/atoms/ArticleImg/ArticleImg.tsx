import styles from "./ArticleImg.module.scss";

import { ReactNode } from "react";
import { Heading } from "@/components/atoms/Heading/Heading";

type ArticleImgProps = {
    children?: ReactNode;
    title?: string;
    id: string;
    source: string;
};

export default function ArticleImg(props: ArticleImgProps) {
    const { children, title, id, source } = props;
    return (
        <div className={styles["article-with-image-container"]}>
            <div className={styles["wrapper"]}>
                <img className={styles["image"]} src={source} />
                <article className={styles["article"]}>
                    <Heading.H2 id={`${id}-title`}>{title}</Heading.H2>
                    {children}
                </article>
            </div>
        </div>
    );
}
