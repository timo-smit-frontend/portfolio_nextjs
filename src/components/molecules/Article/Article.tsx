/** Functions */

/** Styles */
import { ReactNode } from "react";
import styles from "./Article.module.scss";
import { Heading } from "@/components/atoms/Heading/Heading";

type ArticleProps = {
    children?: ReactNode;
    title?: string;
    id: string;
};

export default function Article(props: ArticleProps) {
    const { children, title, id } = props;
    return (
        <div className={styles["introduction-container"]}>
            <Heading.H2 id={`${id}-article-title`}>{title}</Heading.H2>
            {children}
        </div>
    );
}
