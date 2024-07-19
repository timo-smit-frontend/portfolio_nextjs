import { Heading } from "../Heading/Heading";
import styles from "./VideoHeading.module.scss";

type VideoHeadingProps = {
    title: string;
    videoSource: string;
};

export default function VideoHeading(props: VideoHeadingProps) {
    const { title, videoSource } = props;
    return (
        <div className={styles["video-container"]}>
            <Heading.H1 id="page-title" className={styles["heading"]}>
                {title}
            </Heading.H1>
            <div className={styles["overlay"]}></div>
            <video className={styles["video"]} autoPlay loop muted preload="none" aria-hidden src={videoSource} />
        </div>
    );
}
