/** Functions */
import VideoHeading from "@/components/atoms/VideoHeading/VideoHeading";

/** Assets */
import video from "#/videos/bg-video-city.mp4";

/** Styles */
import styles from "./ProjectsTemplate.module.scss";

export default function Projects() {
    return (
        <div className={`${styles["projects-container"]}`}>
            <VideoHeading source={video} title="My projects" />
            <main id="main">
                <p>
                    I took on a project for the Tweede Kamer focused solely on accessibility. This was motivated by my
                    desire to stay connected to my creative background while also expanding my skill set and expertise.
                    By researching WCAG, creating an accessibility plan and implementing the changes in React/Next.js.
                </p>
                <p>
                    While working at Capgemini, I had the opportunity to collaborate with the United Nations World Food
                    Programme on Project Enhance. This sophisticated initiative addresses dietary considerations,
                    offering a versatile tool to calculate and model dietary patterns. The goal is to enhance nutrition,
                    affordability, and sustainability based on individual needs and local preferences.
                </p>
                <p>
                    At Accent Interactive I got to work together with a team of developers which I supported with my
                    designer skills. Besides that they helped me learn more about being a developer and so I developed a
                    fully coded frontend (in Laravel and SCSS) for a new version of an planning system they have.
                </p>
                <p>
                    SmartHOTEL gave me the opportunity to grow by allowing me to unleash all my knowledge on there
                    current designs and ways of communicating. This allowed me to enhance the user experience, give the
                    design a more modern feel and make everything more lively.
                </p>
            </main>
        </div>
    );
}
