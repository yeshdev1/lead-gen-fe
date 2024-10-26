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
                    <h2 className="bioHeader">Yeshwanth Devababhaktuni</h2>
                    <div className="bioContent">
                        Goutham is a talented Quality assurance engineer and has a master's degree in industrial engineer and a bachelor's degree in mechanical engineer from 
                            form Purdue University. He has worked for a variety of companies including Sanmina corp, Quanergy and currently at QuantumScape. He is currently our CEO and will 
                            help with and procure talent in his area of expertise which includes mechanical engineers, quality assurance engineers, program and project managers and any other 
                            specific position requiements you may have.
                    </div>
                </div>,
                <div key='goutham'>
                    <h2 className="bioHeader">Goutham Govada</h2>
                    <div className="bioContent">
                        Goutham is a talented Quality assurance engineer and has a master's degree in industrial engineer and a bachelor's degree in mechanical engineer from 
                        form Purdue University. He has worked for a variety of companies including Sanmina corp, Quanergy and currently at QuantumScape. He is currently our CEO and will 
                        help with and procure talent in his area of expertise which includes mechanical engineers, quality assurance engineers, program and project managers and any other 
                        specific position requiements you may have.
                    </div>
                </div>,
                <div key='nikhil'>
                    <h2 className="bioHeader">Nikhil Anjuri</h2>
                    <div className="bioContent">
                        Goutham is a talented Quality assurance engineer and has a master's degree in industrial engineer and a bachelor's degree in mechanical engineer from 
                            form Purdue University. He has worked for a variety of companies including Sanmina corp, Quanergy and currently at QuantumScape. He is currently our CEO and will 
                            help with and procure talent in his area of expertise which includes mechanical engineers, quality assurance engineers, program and project managers and any other 
                            specific position requiements you may have.
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