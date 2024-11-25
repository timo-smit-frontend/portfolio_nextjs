import styles from "./Experience.module.scss";

import { Heading } from "@/components/atoms/Heading/Heading";
import { Button } from "@/components/atoms/Button/Button";

export default function Experience() {
    return (
        <div className={`${styles["experience-container"]}`}>
            <div className={`${styles["wrapper"]}`}>
                <article className={`${styles["article"]}`}>
                    <Heading.H2 id="experience-heading">My experience</Heading.H2>
                    <p>
                        I learning about designing and coding at the same time. This made me fall in love with the
                        combination of them both and it got me a lot of fun experiences. I mainly learned by using:
                        Figma, Adobe XD, Laravel, React, Next.js, Angular and more...
                    </p>
                    <Button
                        id="experience-button"
                        className={styles["experience-button"]}
                        styledAs="primary"
                        tagName="a"
                        paddingX="large"
                        href="/experience"
                        aria={{
                            "aria-label": "Experiences of Timo",
                        }}
                    >
                        My experiences
                    </Button>
                </article>
                <div className={styles["skills"]}>
                    <div className={styles["skill"]}>
                        <Heading.H3 styledAs="h4" id="skill-react">
                            Coding
                        </Heading.H3>
                        <div className={styles["visual"]}></div>
                    </div>
                    <div className={styles["skill"]}>
                        <Heading.H3 styledAs="h4" id="skill-react">
                            Designing
                        </Heading.H3>
                        <div className={styles["visual"]}></div>
                    </div>
                    <div className={styles["skill"]}>
                        <Heading.H3 styledAs="h4" id="skill-react">
                            Vibe
                        </Heading.H3>
                        <div className={styles["visual"]}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
