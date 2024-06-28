/** Functions */
import { useState } from "react";
import Logo from "../../../../public/ts_logo.svg";
import { Button } from "@/components/atoms/Button/Button";
import { Container } from "@/components/atoms/Grid/Grid";

/** Styles */
import styles from "./Header.module.scss";

interface HeaderProps {
    id: string;
}

export default function Header({ id }: HeaderProps) {
    const [isHeaderVisible, setIsHeaderVisible] = useState(false);

    const onClickToggleNav = () => {
        setIsHeaderVisible(!isHeaderVisible);
    };

    return (
        <>
            <header id={id} className={styles["header"]}>
                <Button id={`${id}-home-link`} className={styles["brand-link"]} tagName="a" styledAs="wrapper" href="/">
                    <Logo id={`${id}-brand-logo`} className={styles["brand"]} />
                </Button>
                <Button
                    id={`${id}-nav-toggle`}
                    className={styles["toggle-nav-button"]}
                    tagName="button"
                    styledAs="wrapper"
                    icon="menu"
                    iconClassName={styles["icon"]}
                    onClick={onClickToggleNav}
                />
                <Container
                    className={`${styles["navigation-container"]} ${
                        isHeaderVisible ? styles["visible"] : styles["navigation-container"]
                    }`}
                >
                    <Button
                        styledAs="wrapper"
                        id={`${id}-close-nav-button`}
                        tagName="button"
                        onClick={onClickToggleNav}
                        icon="close"
                        iconClassName={styles["icon"]}
                        className={styles["close-button"]}
                    />
                    <Container className={styles["container"]}>
                        <Button
                            id={`${id}-home-link`}
                            className={styles["brand-link"]}
                            tagName="a"
                            styledAs="wrapper"
                            href="/"
                            onClick={onClickToggleNav}
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
                                        onClick={onClickToggleNav}
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
                                        onClick={onClickToggleNav}
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
                                        onClick={onClickToggleNav}
                                    >
                                        About
                                    </Button>
                                </li>
                            </ul>
                        </nav>
                    </Container>
                </Container>
            </header>
        </>
    );
}
