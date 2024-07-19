/** Functions */
import VideoHeading from "@/components/atoms/VideoHeading/VideoHeading";

/** Assets */
import video from "#/videos/bg-video-1.mp4";

/** Styles */
import styles from "./AboutTemplate.module.scss";

export default function About() {
    return (
        <div className={`${styles["about-container"]}`}>
            <VideoHeading videoSource={video} title="About me" />
            <main id="main"></main>
        </div>
    );
}
