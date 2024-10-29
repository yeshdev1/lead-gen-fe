import StaggeredFadeInContent from "@/components/FadeInComponent/FadeInComponent";
import './howItWorks.css';

interface HowItWorksProps {
    next?: () => void;
    previous?: () => void;
}

const HowItWorks: React.FC<HowItWorksProps> = ({
    next,
    previous
}) => {
    console.log(next)
    console.log(previous);
    return (
        <div>
            <StaggeredFadeInContent
                texts={[
                    <div key="companies" className="block">
                        <h1 className="header-process">For Companies</h1>
                        <ol className="process">
                            <li className="sentence">
                                <span></span>1. <span>Contact one of our talent acquisition specialists in the HIRE TALENT section, specifying the type of candidate you need. We specialize in targeted fields, as detailed in the About section.</span>
                            </li>
                            <li className="sentence">
                                <span></span>2. <span>We’ll arrange initial interviews with candidates tailored to your requirements, assessing their interest in your product and company.</span>
                            </li>
                            <li className="sentence">
                                <span></span>3. <span>Each candidate is comprehensively vetted and rated (1-5) on key attributes like communication, technical skills, and project complexity, ensuring the best fit for your role.</span>
                            </li>
                            <li className="sentence">
                                <span></span>4. <span> We recommend top candidates based on metrics that matter to you, with AI-transcribed interviews and optional recordings. We also provide borderline candidates for consideration, ensuring no potential talent is missed.</span>
                            </li>
                        </ol>
                    </div>,
                    <div key="recruiters" className="block">
                        <h1 className="header-process">For Recruiters</h1>
                        <ol className="process">
                            <li className="sentence">
                                <span></span>1. <span>Contact one of our talent acquisition specialists in the HIRE TALENT section with details on your candidate needs. We specialize in specific fields as outlined in the About section.</span>
                            </li>
                            <li className="sentence">
                                <span></span>2. <span>We’ll collaborate with you to understand your ideal candidate profile, offering tailored recommendations for potential clients and companies.</span>
                            </li>
                            <li className="sentence">
                                <span></span>3. <span> Using your input, we identify key attributes in candidates, focusing on communication, technical skills, and project experience, to help you present them with confidence for successful interviews.</span>
                            </li>
                        </ol>
                    </div>
                ]}
                textAlign={'left'}
                maxWidth="900px"
            />
        </div>
    )
}

export default HowItWorks;