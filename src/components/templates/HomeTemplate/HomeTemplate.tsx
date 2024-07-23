import styles from "./HomeTemplate.module.scss";

import video from "#/videos/bg-video-nature.mp4";
import timo from "#/images/timo-1.webp";

import Experience from "@/components/molecules/Experience/Experience";
import Projects from "@/components/molecules/Projects/Projects";

import VideoHeading from "@/components/atoms/VideoHeading/VideoHeading";
import Socials from "@/components/atoms/Socials/Socials";
import ArticleImg from "@/components/atoms/ArticleImg/ArticleImg";

export default function Home() {
    return (
        <div className={`${styles["home-container"]}`}>
            <VideoHeading source={video} title="Welcome to my portfolio" />
            <main id="main">
                <ArticleImg source={timo.src} id="introduction" title="Introduction">
                    <p>
                        Hello everyone, my name is Timo. Welcome to my portfolio! I am a Front-end Developer currently
                        working at Capgemini Netherlands B.V. In June 2023, I completed my Bachelor's degree in
                        Communication and Multimedia Design from the University of Applied Sciences in Amsterdam. During
                        my studies, I developed skills as both a UX/UI designer and a Front-end Developer. This dual
                        expertise allows me to be a creative developer who always prioritizes user experience and
                        accessibility.
                        <br />
                        <br />
                        For me, coding is like solving a puzzle—it's a challenging and intriguing task. Adding
                        creativity to the mix and aiming to create something that brings joy makes the whole process
                        special. Seeing how my creations positively impact others is incredibly satisfying.
                    </p>
                </ArticleImg>
                <Experience />
                <div className={styles["socials-wrapper"]}>
                    <Socials id="introduction-socials" />
                </div>
                <Projects />
            </main>
        </div>
    );
}
