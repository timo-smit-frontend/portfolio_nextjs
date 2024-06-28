/** Functions */
import { Button } from "@/components/atoms/Button/Button";

/** Styles */
import styles from "./Socials.module.scss";
import { Container } from "../Grid/Grid";

interface SocialsProps {
    id: string;
}

export default function Socials({ id }: SocialsProps) {
    return (
        <div className={styles["socials-container"]}>
            <Button
                id={`${id}-linkedin-button`}
                iconClassName={styles["social-button"]}
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
                iconClassName={styles["social-button"]}
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
    );
}
