/** Functions */
import VideoHeading from "@/components/atoms/VideoHeading/VideoHeading";

/** Assets */
import video from "#/videos/bg-video-2.mp4";

/** Styles */
import styles from "./ProjectsTemplate.module.scss";

export default function Projects() {
    return (
        <div className={`${styles["projects-container"]}`}>
            <VideoHeading videoSource={video} title="My projects" />
            <main id="main"></main>
        </div>
    );
}
