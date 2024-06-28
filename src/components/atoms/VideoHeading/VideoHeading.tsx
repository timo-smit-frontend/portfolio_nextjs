/** Assets */
import videoBg from "../../../../public/videos/background_video.mp4";

/** Functions */

/** Styles */
import styles from "./VideoHeading.module.scss";

type VideoHeadingProps = {
    /* Page title */
    title: string;
};

export default function VideoHeading(props: VideoHeadingProps) {
    const { title } = props;
    return (
        <div className={`${styles["video-container"]}`}>
            <video className={`${styles["video"]}`} src={videoBg} autoPlay loop muted />
            <h1 className={`${styles["heading"]}`}>{title}</h1>
        </div>
    );
}
