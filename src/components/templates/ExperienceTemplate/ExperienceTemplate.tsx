/** Functions */
import VideoHeading from "@/components/atoms/VideoHeading/VideoHeading";

/** Assets */
import video from "#/videos/bg-video-3.mp4";

/** Styles */
import styles from "./ExperienceTemplate.module.scss";

export default function Experience() {
    return (
        <div className={`${styles["experience-container"]}`}>
            <VideoHeading videoSource={video} title="My experience" />
            <main id="main"></main>
        </div>
    );
}
