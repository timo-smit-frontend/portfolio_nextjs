import styles from "./Header.module.scss";

import Logo from "#/ts_logo.svg";

import { Button } from "@/components/atoms/Button/Button";
import { SkipToMainContentButton } from "@/components/atoms/SkipToMainContentButton/SkipToMainContentButton";

interface HeaderProps {
    id: string;
}

export default function Header({ id }: HeaderProps) {
    return (
        <header id={id} className={styles["header"]}>
            <div className={styles["wrapper"]}>
                <SkipToMainContentButton />
                <Button
                    id={`${id}-home-link`}
                    className={styles["brand-link"]}
                    tagName="a"
                    styledAs="wrapper"
                    href="/"
                    aria={{ "aria-label": "Logo of Timo Smit, link to homepage" }}
                >
                    <Logo id={`${id}-brand-logo`} className={styles["brand"]} />
                </Button>
                <nav id={`${id}-navigation`} className={styles["navigation"]}>
                    <ul id={`${id}-navigation-list`} className={styles["navigation-list"]}>
                        <li id={`${id}-navigation-item-experience`} className={styles["navigation-item"]}>
                            <Button
                                id={`${id}-experience-link`}
                                className={styles["navigation-item-link"]}
                                styledAs="header"
                                tagName="a"
                                href="/experience"
                            >
                                Experience
                            </Button>
                        </li>
                        <li id={`${id}-navigation-item-projects`} className={styles["navigation-item"]}>
                            <Button
                                id={`${id}-projects-link`}
                                className={styles["navigation-item-link"]}
                                styledAs="header"
                                tagName="a"
                                href="/projects"
                            >
                                Projects
                            </Button>
                        </li>
                        <li id={`${id}-navigation-item-about`} className={styles["navigation-item"]}>
                            <Button
                                id={`${id}-about-link`}
                                className={styles["navigation-item-link"]}
                                styledAs="header"
                                tagName="a"
                                href="/about"
                            >
                                About
                            </Button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
