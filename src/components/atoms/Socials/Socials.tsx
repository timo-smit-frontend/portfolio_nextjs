/** Functions */
import { Button } from "@/components/atoms/Button/Button";

/** Styles */
import styles from "./Socials.module.scss";

interface SocialsProps {
    id: string;
}

export default function Socials({ id }: SocialsProps) {
    return (
        <>
            <div className={styles["socials-container"]}>
                <h3>Want to find out more about me?</h3>
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
                    >
                        Timo Smit
                    </Button>
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
                    >
                        timosmit_
                    </Button>
                </div>
            </div>
        </>
    );
}
