import VideoHeading from "@/components/atoms/VideoHeading/VideoHeading";
import Article from "@/components/molecules/Article/Article";

import video from "#/videos/bg-video-4.mp4";

import styles from "./HomeTemplate.module.scss";
import Socials from "@/components/atoms/Socials/Socials";

export default function Home() {
    return (
        <div className={`${styles["home-container"]}`}>
            <VideoHeading videoSource={video} title="Welcome to my portfolio" />
            <main id="main">
                <Article id="introduction" title="Introduction">
                    <p>
                        Hey everyone, my name is Timo, welcome to my portfolio. I am a Front-end Developer currently
                        working for Capgemini Netherlands B.V. In june 2023 I finished my bachelor Communication and
                        Multimedia Design at the University of Applied Sciences in Amsterdam. During my studies I became
                        a UX/UI designer and a Front-end Developer in one. Making me a creative developer always having
                        user experience and accessability in mind.
                        <br />
                        <br />
                        To me, coding is like putting together a puzzle, a challenging task that's intriguing to solve.
                        Adding creativity and aiming to make something that brings happiness makes the whole process
                        special. Creating something I like and seeing how it affects others is really satisfying.
                    </p>
                    <Socials id="introduction-socials" />
                </Article>
            </main>
        </div>
    );
}
