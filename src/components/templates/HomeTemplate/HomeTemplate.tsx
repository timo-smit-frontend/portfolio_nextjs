/** Functions */
import VideoHeading from "@/components/atoms/VideoHeading/VideoHeading";

/** Styles */
import styles from "./HomeTemplate.module.scss";

export default function Home() {
    return (
        <div className={`${styles["home-container"]}`}>
            <VideoHeading title="Welcome" />
        </div>
    );
}
