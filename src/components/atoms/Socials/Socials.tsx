/** Functions */
import { Button } from "@/components/atoms/Button/Button";

/** Styles */
import styles from "./Socials.module.scss";
import { Heading } from "../Heading/Heading";

interface SocialsProps {
    id: string;
}

export default function Socials({ id }: SocialsProps) {
    return (
        <>
            <div className={styles["socials-container"]}>
                <Heading.H2 id="socials-title">Want to find out more about me?</Heading.H2>
                <div className={styles["button-container"]}>
                    <Button
                        id={`${id}-linkedin-button`}
                        className={styles["social-button"]}
                        iconClassName={styles["social-icon"]}
                        styledAs="link"
                        tagName="a"
                        target="_blank"
                        href="https://www.linkedin.com/in/timo-smit-09983b14a/"
                        icon="linkedin"
                        iconType="custom"
                        aria={{
                            "aria-label":
                                "Follow Timo on LinkedIn, external link to his LinkedIn profile. Opens in new tab.",
                        }}
                    ></Button>
                    <Button
                        id={`${id}-instagram-button`}
                        className={styles["social-button"]}
                        iconClassName={styles["social-icon"]}
                        styledAs="link"
                        tagName="a"
                        target="_blank"
                        href="https://www.instagram.com/timosmit_/"
                        icon="instagram"
                        iconType="custom"
                        aria={{
                            "aria-label":
                                "Follow Timo on Instagram, external link to his Instagram profile. Opens in new tab.",
                        }}
                    ></Button>
                </div>
            </div>
        </>
    );
}
