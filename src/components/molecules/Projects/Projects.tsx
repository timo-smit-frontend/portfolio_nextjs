import styles from "./Projects.module.scss";

import tk from "#/images/tweede_kamer.png";
import wfp from "#/images/world_food_programme.png";
import ai from "#/images/accent_interactive.png";
import sh from "#/images/smarthotel.png";

import { Heading } from "@/components/atoms/Heading/Heading";

export default function Projects() {
    return (
        <div className={`${styles["projects-container"]}`}>
            <div className={`${styles["wrapper"]}`}>
                <Heading.H2 id="projects-title">Projects</Heading.H2>
                <ul className={styles["project-list"]}>
                    <li className={styles["project"]}>
                        <img className={styles["image"]} src={tk.src} />
                        <div className={styles["text-container"]}>
                            <Heading.H3 id="project-heading">Project: Search Enrichment</Heading.H3>
                            <p>
                                I took on a project for the Tweede Kamer focused solely on accessibility. I did this by
                                creating an accessibility plan and implementing the changes in React/Next.js.
                            </p>
                        </div>
                    </li>
                    <li className={styles["project"]}>
                        <img className={styles["image"]} src={wfp.src} />
                        <div className={styles["text-container"]}>
                            <Heading.H3 id="project-heading">Project: Enhance</Heading.H3>
                            <p>
                                For the World Food Programme I developed the React website and enhanced the user
                                experience.
                            </p>
                        </div>
                    </li>
                    <li className={styles["project"]}>
                        <img className={styles["image"]} src={ai.src} />
                        <div className={styles["text-container"]}>
                            <Heading.H3 id="project-heading">Project: Planning system</Heading.H3>
                            <p>
                                At Accent Interactive I got to work together with a team of developers which I supported
                                with my designer skills. Besides that they helped me learn more about being a developer
                                and so I developed a fully coded frontend (in Laravel and SCSS) for a new version of an
                                planning system they have.
                            </p>
                        </div>
                    </li>
                    <li className={styles["project"]}>
                        <img className={styles["image"]} src={sh.src} />
                        <div className={styles["text-container"]}>
                            <Heading.H3 id="project-heading">Project: Visual Storytelling</Heading.H3>
                            <p>
                                SmartHOTEL gave me the opportunity to grow by allowing me to unleash all my knowledge on
                                there current designs and ways of communicating. This allowed me to enhance the user
                                experience, give the design a more modern feel and make everything more lively.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
