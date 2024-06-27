/** Functions */
import { cn } from "@/lib/cn";

/** Styles */
import styles from "./SkipToMainContentButton.module.scss";
import buttonStyles from "@/components/atoms/Button/Button.module.scss";

export function SkipToMainContentButton() {
    return (
        <a
            className={cn([
                styles["skip-to-main-content"],
                buttonStyles["button"],
                buttonStyles["secondary"],
                buttonStyles["large"],
            ])}
            id="skip-to-main-content"
            href={"#main"}
            onClick={() => {
                const main = document.querySelector("#main");
                if (!main || !(main instanceof HTMLElement)) return;
                main.focus();
            }}
        >
            Ga naar de hoofdinhoud
        </a>
    );
}
