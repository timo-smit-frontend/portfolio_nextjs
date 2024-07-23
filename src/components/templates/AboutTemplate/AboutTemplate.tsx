/** Functions */
import VideoHeading from "@/components/atoms/VideoHeading/VideoHeading";

/** Assets */
import video from "#/videos/bg-video-animals.mp4";

/** Styles */
import styles from "./AboutTemplate.module.scss";

export default function About() {
    return (
        <div className={`${styles["about-container"]}`}>
            <VideoHeading source={video} title="About me" />
            <main id="main"></main>
        </div>
    );
}
