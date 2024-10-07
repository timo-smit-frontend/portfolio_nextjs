/** Functions */
import VideoHeading from "@/components/atoms/VideoHeading/VideoHeading";

/** Assets */
import video from "#/videos/bg-video-sea.mp4";

/** Styles */
import styles from "./ExperienceTemplate.module.scss";

export default function Experience() {
    return (
        <div className={`${styles["experience-container"]}`}>
            <VideoHeading source={video} title="My experience" />
            <main id="main">
                <p>
                    I have started programming when I was in highschool. I followed the subject Computer science and
                    made my first websites in HTML and CSS. During my studies in Communication and Multimedia Design I
                    became a designer as well as a front-end developer. I learned how to use applications like Figma,
                    Adobe XD, etc. and started advancing my coding skills. I added JavaScript onto my websites which
                    made them come alive. I fell in love with puzzling with code and making something useful as well as
                    beautiful.
                </p>
                <p>
                    At first I wanted to become a user experience designer as well as a visual storyteller. I liked
                    making people happy with what I made and I found it very satisfying to improve the user experience.
                    My first work experience was in this field and it felt really rewarding coming up with solutions
                    that would make the website I was working on better and nicer for everyone. The only thing that is
                    missed, was actually implementing it / making it come to fruition myself. This really made me look
                    back at front-end development.
                </p>
                <p>
                    When my curiousity started growing more and more in and around front-end development, I started
                    learning about frameworks. My first experience was with Laravel (PHP). I created the front-end for
                    an planning system for our clients, including ProRail. This also included making the designs. Doing
                    the whole process of designing and coding was a lot of fun and thaught me alot. It also confirmed
                    for me that "making it actually work" was really important for me.
                </p>
                <p>
                    Afterwards, when I was sure front-end development was what I really wanted to do, I started mostly
                    learning React. Working in components felt like home to me, because it felt the same as working in
                    Figma like I used to. This made me also look into Angular and it made me expend my skillset by
                    learning about Next.js. Besides trying to keep on expending my knowledge in front-end, I try to stay
                    close to the design-side of things. Lately I did this by mastering Web Accessiblity, which was very
                    useful.
                </p>
            </main>
        </div>
    );
}
