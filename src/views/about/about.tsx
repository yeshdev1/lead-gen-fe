import { mission } from "@/constants/textConstants";
import { Fragment } from "react";
import './about.css';
import StaggeredFadeInContent from "@/components/FadeInComponent/FadeInComponent";

const MissionComponent = () => (
    <Fragment>
        <blockquote className="relative p-8">
            <p className="italic text-white">
                {mission}
            </p>
        </blockquote>
    </Fragment>
)

const Bios = () => (
    <div className="bios">
        <StaggeredFadeInContent
            texts={[
                <div key='yeshwanth'>
                    <h2 className="bioHeader">Goutham Govada</h2>
                    <div className="bioContent">
                        Goutham is an accomplished Quality Assurance Engineer with a master&apos;s degree in Industrial Engineering and a bachelor&apos;s in Mechanical Engineering from Purdue University. He has a diverse background, having worked with companies such as Sanmina Corp, Quanergy, and currently QuantumScape. As our CEO, Goutham brings expertise in talent acquisition, particularly for roles in Mechanical Engineering, Quality Assurance, and Project and Program Management, as well as other specialized positions based on client needs
                    </div>
                </div>,
                <div key='goutham'>
                    <h2 className="bioHeader">Yeshwanth Devabhaktuni</h2>
                    <div className="bioContent">
                    Yeshwanth is a skilled Software Engineer with a bachelor&apos;s degree from the University of Michigan, Ann Arbor, and a master&apos;s in Data Science from DePaul University, where he also published a research paper. He has experience as a Full Stack Software Engineer at Walmart Labs, Outdoorsy Inc., and Jeeves Inc. (A16z funded) and currently serves as a Senior Software Engineer Lead at TikTok. Yeshwanth can assist in talent acquisition for roles in Software Engineering, Machine Learning Engineering, Data Science, AI Engineering, and Data Analysis.
                    </div>
                </div>,
                <div key='nikhil'>
                    <h2 className="bioHeader">Nikhil Anjuri</h2>
                    <div className="bioContent">
                        Nikhil is a talented Software Engineer who has a dual bachelor&apos;s degree in Electrical Engineering and Information Science from Penn State University and also a master&apos;s degree in informatics. He has worked at Mozilla, Ulvetenna and currently works as a software engineer at a stealth startup. He can help screen backend engineers, data analysts, research engineers and mobile developers.
                    </div>
                </div>
            ]}
        />
    </div>
)

const GettingStarted = () => {
    return (
        <Fragment>
            <div className="header">
                <h1 className="inner-section">Mission</h1>
            </div>
            <div className="mission">
                <MissionComponent />
            </div>
            <div className="header">
                <h1 className="inner-section">Our Team</h1>
            </div>
            <Bios />
        </Fragment>
    )
}

export default GettingStarted;